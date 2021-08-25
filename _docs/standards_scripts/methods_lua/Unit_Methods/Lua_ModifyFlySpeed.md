---
title: Lua_ModifyFlySpeed
type: unit_methods
layout: single_markdown
position: 75
---

# Lua ModifyFlySpeed

## Description

Modifies the units flight speed.

## Usage/Example

```
function SpeedUp(unit)
  unit:ModifyFlySpeed(15)
  unit:MoveTo(unit:GetX()+10, unit:GetY()+10, unit:GetZ()+20, 0)
end
```
