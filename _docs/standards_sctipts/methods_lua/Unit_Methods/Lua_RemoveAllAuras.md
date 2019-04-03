---
title: Lua_RemoveAllAuras
type: standards_lua
layout: single_markdown
position: 133
---

# Lua RemoveAllAuras

## Description

RemoveAllAuras will Remove all positive and all negative auras of the player/npc.

## Usage/Example

```
function remove(player, event)
  player:RemoveAllAuras()
end
```