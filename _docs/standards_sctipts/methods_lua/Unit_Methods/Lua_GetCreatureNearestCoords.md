---
title: Lua_GetCreatureNearestCoords
type: standards_lua
layout: single_markdown
position: 9
---

# Lua GetCreatureNearestCoords

## Usage/Example

This example shows a healing ward targeting a creature and then casting a healing spell on it:

```
function Healing_Ward(Unit, Event)
	local x = Unit:GetX()
	local y = Unit:GetY()
	local z = Unit:GetZ()
	local target = Unit:GetCreatureNearestCoords(x,y,z,CreatureID)
if (target ~= nil) then
Unit:FullCastSpellOnTarget(1058, target)
end
end
```