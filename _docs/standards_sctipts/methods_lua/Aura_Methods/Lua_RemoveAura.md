---
title: Lua_RemoveAura
type: standards_lua
layout: single_markdown
position: 2
---

# Lua RemoveAura

## Description

RemoveAura(id) removes a specified positive or negative spell of a unit or a player.

## Usage/Example

```
if plr:HasNegativeAura(15007) == true then
plr:RemoveAura(15007)
```

This example would first check if the player has Resurrection Sickness and if it's true it would remove it.
