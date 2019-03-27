---
title: Lua_SetUInt32Value
type: standards_lua
layout: single_markdown
position: 92
---

# Lua SetUInt32Value

## Description
         
46: UNIT_FIELD_FLAGS -- in wow ver: 3.3.5a.           

Here are some of the Unit field flags flags. These are the same flags as in the field flags in the creature_spawns table.

## Usage/Example

```
local UNIT_FLAG_NOT_SELECTABLE = 26

function FireVisual_OnSpawn(pUnit, event)
  pUnit:SetUInt32Value(46, UNIT_FLAG_NOT_SELECTABLE)
end
```

## Unit field flags

List of UNIT_FIELD_FLAGS

```
enum UnitFieldFlags : uint32_t // UNIT_FIELD_FLAGS #46 - these are client flags
{
    //                                            Hex  Bit       Decimal  Comments
    UNIT_FLAG_NONE                       = 0x00000000, //              0 
    UNIT_FLAG_SERVER_CONTROLLED          = 0x00000001, // 1            1
    UNIT_FLAG_NOT_ATTACKABLE_2           = 0x00000002, // 2            2  client won't let you attack them
    UNIT_FLAG_LOCK_PLAYER                = 0x00000004, // 3            4  ? does nothing to client (probably wrong) - only taxi code checks this
    UNIT_FLAG_PVP_ATTACKABLE             = 0x00000008, // 4            8  makes players and NPCs attackable / not attackable
    UNIT_FLAG_UNKNOWN_5                  = 0x00000010, // 5           16  ? some NPCs have this
    UNIT_FLAG_NO_REAGANT_COST            = 0x00000020, // 6           32  no reagant cost
    UNIT_FLAG_PLUS_MOB                   = 0x00000040, // 7           64  ? some NPCs have this (Rare/Elite/Boss?)
    UNIT_FLAG_IGNORE_CREATURE_COMBAT     = 0x00000080, // 8          128  unit will not enter combat with creatures
    UNIT_FLAG_IGNORE_PLAYER_COMBAT       = 0x00000100, // 9          256  unit will not enter combat with players
    UNIT_FLAG_UNKNOWN_10                 = 0x00000200, // 10         512  ? some NPCs have this
    UNIT_FLAG_LOOTING                    = 0x00000400, // 11        1024
    UNIT_FLAG_SELF_RES                   = 0x00000800, // 12        2048  ? some NPCs have this
    UNIT_FLAG_PVP                        = 0x00001000, // 13        4096  sets PvP flag
    UNIT_FLAG_SILENCED                   = 0x00002000, // 14        8192
    UNIT_FLAG_DEAD                       = 0x00004000, // 15       16384  used for special "dead" NPCs like Withered Corpses
    UNIT_FLAG_UNKNOWN_16                 = 0x00008000, // 16       32768  ? some NPCs have this
    UNIT_FLAG_ALIVE                      = 0x00010000, // 17       65536  ?
    UNIT_FLAG_PACIFIED                   = 0x00020000, // 18      131072
    UNIT_FLAG_STUNNED                    = 0x00040000, // 19      262144
    UNIT_FLAG_COMBAT                     = 0x00080000, // 20      524288  sets combat flag
    UNIT_FLAG_MOUNTED_TAXI               = 0x00100000, // 21     1048576  mounted on a taxi
    UNIT_FLAG_DISARMED                   = 0x00200000, // 22     2097152
    UNIT_FLAG_CONFUSED                   = 0x00400000, // 23     4194304
    UNIT_FLAG_FLEEING                    = 0x00800000, // 24     8388608  fear
    UNIT_FLAG_PLAYER_CONTROLLED_CREATURE = 0x01000000, // 25    16777216
    UNIT_FLAG_NOT_SELECTABLE             = 0x02000000, // 26    33554432  cannot select the unit
    UNIT_FLAG_SKINNABLE                  = 0x04000000, // 27    67108864
    UNIT_FLAG_MOUNT                      = 0x08000000, // 28   134217728  ? was MAKE_CHAR_UNTOUCHABLE (probably wrong), nothing ever set it
    UNIT_FLAG_UNKNOWN_29                 = 0x10000000, // 29   268435456
    UNIT_FLAG_FEIGN_DEATH                = 0x20000000, // 30   536870912
    UNIT_FLAG_UNKNOWN_31                 = 0x40000000, // 31  1073741824  ? was WEAPON_OFF and being used for disarm
    UNIT_FLAG_UNKNOWN_32                 = 0x80000000  // 32  2147483648
};
```
