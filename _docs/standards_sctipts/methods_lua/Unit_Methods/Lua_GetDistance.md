---
title: Lua_GetDistance
type: unit_methods
layout: single_markdown
position: 15
---

# Lua GetDistance

## Description

Gets the distance in yards between the scripted unit and it's current target and returns in a numerical value.

## Usage/Example

This example uses commands not included in this page. Please see the corresponding page for usage and definition.

```
function Unit_Distance(Unit, Event)
local target = Unit:GetMainTank()
local distance = Unit:GetDistance(target)
  if distance <= 3 then
    Unit:CastSpellOnTarget(5, target)
end
end
```