(function () {
    "use strict";

    var root = document.documentElement;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Glow spot drifts slowly across the grid on its own; transform only, so nothing is repainted.
    var glow = document.getElementById('ae-glow');
    var glowGrid = glow && glow.firstElementChild;
    if (glowGrid && !reduce) {
        var tick = function (t) {
            var x = Math.round(window.innerWidth * (50 + Math.sin(t / 5200) * 32) / 100) - 260;
            var y = Math.round(window.innerHeight * (30 + Math.cos(t / 4100) * 18) / 100) - 260;
            glow.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
            glowGrid.style.transform = 'translate3d(' + (-x) + 'px,' + (-y) + 'px,0)';
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    // Design changes run behind the diagonal wipe (directly without view transitions).
    var wiping = false;
    var wipe = function (apply) {
        if (wiping) return;
        if (!document.startViewTransition || reduce) { apply(); return; }
        wiping = true;
        root.classList.add('ae-xp-wipe');
        var transition = document.startViewTransition(function () {
            apply();
            root.classList.add('ae-xp-wipe-run');
        });
        transition.finished.finally(function () {
            root.classList.remove('ae-xp-wipe', 'ae-xp-wipe-run');
            wiping = false;
        });
    };

    // Expansion palette
    var xpButtons = document.querySelectorAll('button.ae-xp');
    var currentXp = function () { return root.getAttribute('data-xp') || 'classic'; };
    var markXp = function (xp) {
        Array.prototype.forEach.call(xpButtons, function (b) {
            b.setAttribute('aria-pressed', b.getAttribute('data-xp') === xp ? 'true' : 'false');
        });
    };
    markXp(currentXp());
    Array.prototype.forEach.call(xpButtons, function (btn) {
        btn.addEventListener('click', function () {
            var xp = btn.getAttribute('data-xp');
            if (xp === currentXp()) return;
            wipe(function () {
                if (xp === 'classic') root.removeAttribute('data-xp');
                else root.setAttribute('data-xp', xp);
                markXp(xp);
                try { localStorage.setItem('ae-xp', xp); } catch (e) {}
            });
        });
    });

    // Light / dark switch; dark is the default.
    var modeBtn = document.getElementById('ae-mode');
    var isLight = function () { return root.getAttribute('data-mode') === 'light'; };
    var markMode = function () {
        if (!modeBtn) return;
        var light = isLight();
        modeBtn.setAttribute('aria-pressed', light ? 'true' : 'false');
        modeBtn.setAttribute('aria-label', light ? 'Switch to dark design' : 'Switch to light design');
        modeBtn.title = light ? 'Dark design' : 'Light design';
    };
    markMode();
    if (modeBtn) {
        modeBtn.addEventListener('click', function () {
            var light = !isLight();
            wipe(function () {
                if (light) root.setAttribute('data-mode', 'light');
                else root.removeAttribute('data-mode');
                markMode();
                try { localStorage.setItem('ae-mode', light ? 'light' : 'dark'); } catch (e) {}
            });
        });
    }

    // Navigation: mark the current page and open its groups.
    var tree = document.getElementById('wk-tree');
    var clean = function (path) { return decodeURI(path).replace(/\/index\.html$/, '/').replace(/\/+$/, '').toLowerCase(); };
    var here = clean(window.location.pathname);
    if (tree) {
        Array.prototype.forEach.call(tree.querySelectorAll('a[href]'), function (a) {
            if (clean(a.pathname) !== here) return;
            a.setAttribute('aria-current', 'page');
            for (var el = a.parentElement; el && el !== tree; el = el.parentElement)
                if (el.tagName === 'DETAILS') el.open = true;
        });
        var current = tree.querySelector('a[aria-current="page"]');
        if (current && current.scrollIntoView) current.scrollIntoView({ block: 'center' });
    }

    // Navigation filter
    var filter = document.getElementById('wk-filter');
    var empty = document.getElementById('wk-empty');
    if (filter && tree) {
        var groups = tree.querySelectorAll('details');
        var openBefore = null;
        filter.addEventListener('input', function () {
            var term = filter.value.trim().toLowerCase();
            if (term && openBefore === null)
                openBefore = Array.prototype.map.call(groups, function (d) { return d.open; });
            var hits = 0;
            Array.prototype.forEach.call(tree.querySelectorAll('li'), function (li) {
                if (li.querySelector('details')) return;
                var show = !term || li.textContent.toLowerCase().indexOf(term) !== -1;
                li.classList.toggle('wk-hidden', !show);
                if (show) hits++;
            });
            Array.prototype.forEach.call(groups, function (d, i) {
                var visible = d.querySelectorAll('li:not(.wk-hidden) > a').length > 0;
                d.parentElement.classList.toggle('wk-hidden', !!term && !visible);
                if (term) d.open = visible;
                else if (openBefore) d.open = openBefore[i];
            });
            if (!term) openBefore = null;
            if (empty) empty.hidden = hits > 0;
        });
    }

    // Small screens: the navigation slides in.
    var menu = document.getElementById('wk-menu');
    var shade = document.getElementById('wk-shade');
    var setNav = function (open) {
        document.body.classList.toggle('wk-nav-open', open);
        if (menu) menu.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (shade) shade.hidden = !open;
    };
    if (menu) menu.addEventListener('click', function () { setNav(!document.body.classList.contains('wk-nav-open')); });
    if (shade) shade.addEventListener('click', function () { setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

    var content = document.getElementById('wk-content');
    if (!content) return;

    // Wide tables scroll inside their own frame.
    Array.prototype.forEach.call(content.querySelectorAll('table'), function (table) {
        if (table.parentElement.classList.contains('wk-table')) return;
        var wrap = document.createElement('div');
        wrap.className = 'wk-table';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
    });

    // Copy button on code blocks
    Array.prototype.forEach.call(content.querySelectorAll('div.highlight, figure.highlight'), function (block) {
        if (block.parentElement.closest('.highlight')) return;
        var pre = block.querySelector('pre');
        if (!pre || !navigator.clipboard) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'wk-copy';
        btn.textContent = 'Copy';
        btn.addEventListener('click', function () {
            var code = pre.querySelector('code') || pre;
            navigator.clipboard.writeText(code.innerText).then(function () {
                btn.textContent = 'Copied';
                setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
            });
        });
        block.appendChild(btn);
    });

    // Anchors on headings and the table of contents on the right
    var heads = content.querySelectorAll('h2[id], h3[id]');
    Array.prototype.forEach.call(content.querySelectorAll('h2[id], h3[id], h4[id]'), function (h) {
        var a = document.createElement('a');
        a.className = 'wk-anchor';
        a.href = '#' + h.id;
        a.textContent = '#';
        a.setAttribute('aria-label', 'Link to this section');
        h.appendChild(a);
    });
    var toc = document.getElementById('wk-toc');
    var layout = document.getElementById('wk-layout');
    if (!toc || heads.length < 3) {
        if (layout) layout.classList.add('no-toc');
        return;
    }
    var list = toc.querySelector('ul');
    var links = [];
    Array.prototype.forEach.call(heads, function (h) {
        var li = document.createElement('li');
        li.className = 'lvl-' + h.tagName.charAt(1);
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent.replace(/#$/, '').trim();
        li.appendChild(a);
        list.appendChild(li);
        links.push(a);
    });
    toc.hidden = false;

    if ('IntersectionObserver' in window) {
        var visible = {};
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
            var active = null;
            for (var i = 0; i < heads.length; i++)
                if (visible[heads[i].id]) { active = heads[i].id; break; }
            if (!active) return;
            links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + active); });
        }, { rootMargin: '0px 0px -70% 0px' });
        Array.prototype.forEach.call(heads, function (h) { observer.observe(h); });
    }
})();
