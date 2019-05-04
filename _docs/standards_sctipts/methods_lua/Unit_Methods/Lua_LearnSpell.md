---
title: Lua_LearnSpell
type: unit_methods
layout: single_markdown
position: 126
---

# Lua LearnSpell

## Description

LearnSpell(id) learns a player a spell, so the player get it in the spellbook.

## Usage/Example

This script would learn a player the spell 5487.

```
function learn_spell(player, event)
  player:LearnSpell(5487)
end
```
