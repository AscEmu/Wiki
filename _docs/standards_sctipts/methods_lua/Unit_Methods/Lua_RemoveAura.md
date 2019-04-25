---
title: Lua_RemoveAura
type: standards_lua
layout: single_markdown
position: 134
---

# Lua RemoveAura

## Description

RemoveAura(id) removes a specified positive or negative spell of a unit or a player.

## Usage/Example

This example would first check if the player has Resurrection Sickness and if it's true it would remove it.

```
if plr:HasNegativeAura(15007) == true then
plr:RemoveAura(15007)
```
