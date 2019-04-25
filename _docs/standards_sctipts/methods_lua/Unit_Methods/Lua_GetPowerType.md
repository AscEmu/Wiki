---
title: Lua_GetPowerType
type: standards_lua
layout: single_markdown
position: 48
---

# Lua GetPowerType

## Description

Returns a numerical value to indicate the type of power.

## Power Types 

(../world/Spell/Definitions/PowerType.h)

```
POWER_TYPE_HEALTH      = -2,
POWER_TYPE_MANA        = 0,
POWER_TYPE_RAGE        = 1,
POWER_TYPE_FOCUS       = 2,
POWER_TYPE_ENERGY      = 3,
POWER_TYPE_HAPPINESS   = 4,

#if VERSION_STRING >= WotLK

POWER_TYPE_RUNES       = 5,
POWER_TYPE_RUNIC_POWER = 6,

#endif
#if VERSION_STRING >= Cata

POWER_TYPE_SOUL_SHARDS = 7,
POWER_TYPE_ECLIPSE     = 8,
POWER_TYPE_HOLY_POWER  = 9,
POWER_TYPE_ALTERNATIVE = 10,

#endif

POWER_TYPE_STEAM       = 61,
POWER_TYPE_PYRITE      = 41,
POWER_TYPE_HEAT        = 101,
POWER_TYPE_OOZE        = 121,
POWER_TYPE_BLOOD       = 141,
POWER_TYPE_WRATH       = 142
```

## Usage/Example

```
PowerTypes = {
[0] = "Mana", 
[1] = "Rage",
[2] = "Focus", 
[3] = "Energy", 
[4] = "Happiness",
[5] = "Runes",
[6] = "Runic Power"
}
 
function ReturnPowerType(pUnit)
print(PowerTypes[pUnit:GetPowerType()])
end
```

This will print the name of the power type in the console. For example: if the power type is 3 then the console will show Energy.
