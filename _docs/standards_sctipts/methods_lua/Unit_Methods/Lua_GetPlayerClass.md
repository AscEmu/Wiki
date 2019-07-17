---
title: Lua_GetPlayerClass
type: unit_methods
layout: single_markdown
position: 43
---

# Lua GetPlayerClass

## Description

Returns a string value which describes the targeted player's class. Once returned, that string can be used to determine the options of functions following that command, and even the whole script if this command is defined correctly. The strings returned are as follows:

```
"Warrior"
"Paladin"
"Hunter"
"Rogue"
"Priest"
"Death Knight"
"Shaman"
"Mage"
"Warlock"
"Druid"
```

## Usage/Example

```
function Class(pUnit, Event)
  local Target = pUnit:GetMainTank()
  local Class = Target:GetPlayerClass()
  if (Class == "Death Knight") then
    pUnit:CastSpellOnTarget(5, Target)
  end
end
```
