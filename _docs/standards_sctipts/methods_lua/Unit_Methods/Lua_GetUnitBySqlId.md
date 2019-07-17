---
title: Lua_GetUnitBySqlId
type: unit_methods
layout: single_markdown
position: 63
---

# Lua GetUnitBySqlId

## Description

Targets a unit by using the SQL ID, or spawn ID of the unit being targeted. You can use ".npc info" in game to find the SQL ID, or you an search your database for the unit using the table "creature_waypoints".

## Usage/Example

This example uses commands not included in this page. Please see the corresponding page for usage and definition.

```
function Unit_Spell(Unit, Event)
local target = Unit:GetUnitBySqlId(6167789) -- Example, not for practical use
  Unit:FullCastSpellOnTarget(25840, target)
end
```
