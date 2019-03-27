---
title: Lua_GetPlayerLevel
type: standards_lua
layout: single_markdown
position: 44
---

# Lua GetPlayerLevel

## Description

Returns the level of the player that the NPC has targeted.

## Usage/Example

```
function Return_Level(pUnit, Event)
  if pUnit:GetPlayerLevel() >= 70 then
    pUnit:CastSpell(3509)
  end
end
```
