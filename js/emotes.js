(function () {
    "use strict";

    const EMOTE_PATH = "/Wiki/images/emotes/";

    const EMOTES = {
        classic: "classic.webp",
        tbc: "tbc.webp",
        wotlk: "wotlk.png",
        cata: "cata.png",
        mop: "mop.png",
        wod: "wod.webp",
        legion: "legion.png",
        bfa: "bfa.webp",
        shadowlands: "shadowlands.png",
        dragonflight: "dragonflight.png",
        warwithin: "warwithin.png",
        midnight: "midnight.png",
        forever: "forever.webp",
    };

    const EMOTE_REGEX = /:([a-z0-9_+-]+):/g;

    function replaceEmotes(root) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    const parent = node.parentElement;

                    if (!parent || !node.nodeValue.includes(":")) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    // Do not process code, scripts, styles or other special elements.
                    if (parent.closest(
                        "pre, code, script, style, textarea, input, button, " +
                        "select, option, .wiki-emote, .no-emotes"
                    )) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];

        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(function (node) {
            const text = node.nodeValue;
            const fragment = document.createDocumentFragment();

            let lastIndex = 0;
            let match;
            let replaced = false;

            EMOTE_REGEX.lastIndex = 0;

            while ((match = EMOTE_REGEX.exec(text)) !== null) {
                const name = match[1].toLowerCase();
                const filename = EMOTES[name];

                if (!filename) {
                    continue;
                }

                if (match.index > lastIndex) {
                    fragment.appendChild(
                        document.createTextNode(
                            text.substring(lastIndex, match.index)
                        )
                    );
                }

                const image = document.createElement("img");

                image.className = "wiki-emote";
                image.src = EMOTE_PATH + filename;
                image.alt = ":" + name + ":";
                image.title = ":" + name + ":";
                image.width = 24;
                image.height = 24;
                image.loading = "lazy";

                fragment.appendChild(image);

                lastIndex = EMOTE_REGEX.lastIndex;
                replaced = true;
            }

            if (!replaced) {
                return;
            }

            if (lastIndex < text.length) {
                fragment.appendChild(
                    document.createTextNode(text.substring(lastIndex))
                );
            }

            node.parentNode.replaceChild(fragment, node);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const content = document.getElementById("content");

        if (content) {
            replaceEmotes(content);
        }
    });

})();