---
title: Lua_GetGender
type: unit_methods
layout: single_markdown
position: 22
---

# Lua GetGender

## Description

Returns a numerical representation of the Unit's gender. Once returned, that numerical representation can be used to determine the options of functions following that command, and even the whole script if this command is defined correctly. The strings returned are as follows:

--------------- | ----------
Returned Value  | Value meaning
0               | Male
1               | Female

## Usage/Example

```
function Gender(pUnit, Event)
  local Target = pUnit:GetMainTank()
  local Gender = Target:GetGender()
  if (Gender == 1) then
    pUnit:CastSpellOnTarget(5, Target)
  end
end
```