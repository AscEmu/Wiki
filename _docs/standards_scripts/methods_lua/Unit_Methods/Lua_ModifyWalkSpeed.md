---
title: Lua_ModifyWalkSpeed
type: unit_methods
layout: single_markdown
position: 77
---

# Lua ModifyWalkSpeed

## Description

Modifies the units walk speed.

## Usage/Example

```
function SpeedUp(pUnit)
  pUnit:ModifyWalkSpeed(8) -- Psst: 7 is the default speed!
  pUnit:MoveTo(pUnit:GetX()+10, pUnit:GetY()+10, pUnit:GetZ(), 0)
end
```

## Similar commands

[ModifyFlySpeed(speed)](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyFlySpeed) : Modifies the Unit's fly speed to the specified speed.             
[ModifyRunSpeed(speed)](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyRunSpeed) : Modifies the Unit's run speed to the specified speed.
