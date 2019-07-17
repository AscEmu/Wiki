---
title: Lua_HasAura
type: aura_methods
layout: single_markdown
position: 4
---

# Lua HasAura

## Description

HasAura(id) returns a true if a player or a unit has a specified Aura otherwise it returns false.

## Usage/Example

```
if player:HasAura(1126) == true then -- 1126 = Mark of the Wild
  player:SendBroadcastMessage("You already have Mark of the Wild")
else
  player:FullCastSpellOnTarget(1126, player)
end
end
```

This script will check if the player has Mark of the Wild. If he hasn't it will buff the player.
