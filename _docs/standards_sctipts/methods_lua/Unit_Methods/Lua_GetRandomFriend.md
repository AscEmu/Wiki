---
title: Lua_GetRandomFriend
type: unit_methods
layout: single_markdown
position: 50
---

# Lua GetRandomFriend

## Description

Selects a nearby unit that is friendly to the scripted unit's faction. Has been reported to not work in some cases.

## Usage/Example

This example uses commands not included in this page. Please see the corresponding page for usage and definition.

```
function Unit_Spell(Unit, Event)
local friend = Unit:GetRandomFriend()
  Unit:FullCastSpellOnTarget(25840, friend)
end
```
