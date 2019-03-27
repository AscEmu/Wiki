---
title: Lua_ModifyRunSpeed
type: standards_lua
layout: single_markdown
position: 76
---

# Lua ModifyRunSpeed

## Description

Modifies the units run speed.

## Usage/Example

```
function SpeedUp(pUnit)
  pUnit:SetMovementType(1)
  pUnit:ModifyRunSpeed(8)
  pUnit:MoveTo(pUnit:GetX()+10, pUnit:GetY()+10, pUnit:GetZ(), 0)
end
```
