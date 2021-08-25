---
title: Lua_GetPower
type: unit_methods
layout: single_markdown
position: 46
---

# Lua GetPower

## Description

Returns the Unit's power based upon the argument passed. If no argument is passed (The argument is omitted) or set to -1, then the default power is returned.

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

The following script, once run, would set the player's power it's maximum using the Arcane Intellect visual (Thanks to use of :Energize()).

```
function Restore(pUnit, _, pPlayer)
  local power = pPlayer:GetPower()
  if (power <= pPlayer:GetMaxPower()) then
    pUnit:Energize(pPlayer, 23030, pPlayer:GetMaxPower(), pPlayer:GetPowerType())
  end
end
```
