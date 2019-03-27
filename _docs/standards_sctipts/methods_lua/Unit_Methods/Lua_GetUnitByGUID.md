---
title: Lua_GetUnitByGUID
type: standards_lua
layout: single_markdown
position: 63
---

# Lua GetUnitByGUID

## Description

Targets you need to specify in parenthesis, Globally Unique Identifier, each player can be found using either the ".npc info", ".gobject info" or ".playerinfo" going to the database column in these tables:

Objects: gameobject_spawns              
NPCs / Units: creature_spawns              
Players: characters              

Useful if you need to target a friendly unit, and GetRandomFriend() isn't working for you. GUID is also known as the SQL ID.

## Usage/Example

```
function Target_Unit(Unit, Event)
local target = Unit:GetUnitByGUID(5412)
  if target ~= nil then
    Unit:FullCastSpellOnTarget(300, target)
end
end
```
