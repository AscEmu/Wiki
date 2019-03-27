---
title: Lua_GetNextTarget
type: standards_lua
layout: single_markdown
position: 42
---

# Lua GetNextTarget

## Description

It returns the target set by: SetNextTarget(target), where 'target' is a unit. This is where you can set the variable to the variable: SetNextTarget(target), and then retrieving that variable: GetNextTarget. 

## Usage/Example

```
function GetTargetForSpell(Unit)
  local target = Unit:GetRandomPlayer(0)
  Unit:SetNextTarget(target)
  Unit:RegisterEvent("CastNextSpell", 3000, 0)
end
 
function CastSpell(Unit)
  Unit:CastSpell(12345, Unit:GetNextTarget()) -- [[would use the same target from the GetTargetForSpell function, as long as that function wasn't run again.]]
end
```
