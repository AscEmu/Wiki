---
title: Aura Methods
type: aura_methods
layout: single_markdown
position: 6
---

# Introduction

These are methods specific to auras. You can get an aura through the **Unit method** [GetAuraObjectById(spell id)](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAuraObjectById) and use it similarly to a **Unit** or **Player**. For example:

```lua
function OnCombat(Unit, event)
    Unit:CastSpell(1337)
    local aura = Unit:GetAuraObjectById(1337)
    local spell_id = aura:GetSpellId()
    -- spell id would be 1337
    tostring(aura:GetCaster()) == tostring(Unit) -- would return true
    -- Just put aura in front of the method, the same way you would Player or Unit
end
```

# Function List

Method                                                                                                       | Description
------------------------------------------------------------------------------------------------------------ | ----------
GetObjectType()                                                                                              | Returns **Aura** if the aura is not nil.
GetSpellId()                                                                                                 | Returns the aura's spell ID.
GetCaster()                                                                                                  | Returns the object that cast the aura. Can be a Unit, GameObject, or Item.
GetTarget()                                                                                                  | Returns the target of the aura, the object currently affected by it.
GetDuration()                                                                                                | Returns the duration in milliseconds.
SetDuration(duration)                                                                                        | Returns nothing. Sets the duration of the aura. The aura is removed after the duration expires.
GetTimeLeft()                                                                                                | Returns the amount of time remaining until the aura expires in milliseconds.
Remove()                                                                                                     | Returns nothing. Removes the aura and all of its events.
SetVar(var [,subindex], value)                                                                               | Returns true on success and false on failure. Sets a variable to the specified value. **var** is a string referring to a parameter of the Spell. **subindex** is optional and is used when the variable has subindexes.
GetVar(var [,subindex])                                                                                      | Returns the value on success or nil on failure.
GetAuraSlot()                                                                                                | Returns the slot that the aura is in. See Unit.h for slot meanings.
SetAuraSlot(slot)                                                                                            | Returns nothing. Sets the aura's slot. See Unit.h for slot meanings.

### The following 2 methods are called from a Player or Unit, not an aura, and deal with or return an aura object.

Method                                                                                                       | Description
------------------------------------------------------------------------------------------------------------ | ----------
[GetAuraObjectById(spell id)](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetAuraObjectById)   | Returns an aura object for the specified spell ID.
AddAuraObject(aura)                                                                                          |

### The following methods do not return aura objects and are called from a Player or Unit, not an aura object.

Method                                                                                                       | Description
------------------------------------------------------------------------------------------------------------ | ----------
[RemoveAura(SpellID)](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_RemoveAura)                  | Returns nothing. Removes the aura with the specified spell ID if the Unit has it.
[RemoveAllAuras()](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_RemoveAllAuras)                 | Returns nothing. Removes all positive and negative auras from the Unit or target.
[HasAura(spellID)](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_HasAura)                        | Returns true if the target or Unit has the specified spell aura.
RemoveAurasByMechanic(string, 1 or 0)                                                                        | Returns nothing. Removes auras with the specified mechanic. Set the second parameter to **1** to remove only hostile auras or **0** to remove all auras with the specified mechanic.
RemoveAurasType(type)                                                                                        | Returns nothing. Removes all auras with the specified type, similar to RemoveAurasByMechanic.
[AddAura(spellid, duration, temp)](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_AddAura)        | Returns nothing. Adds an aura with the specified spell ID and duration. The **temp** parameter determines whether the aura is temporary.
RemoveNegativeAuras()                                                                                        | Returns nothing. Removes every negative aura from the Unit.
HasAuraWithMechanic(number)                                                                                  | Returns true if the Unit or Player has an aura with the specified mechanic.
[HasNegativeAura()](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_HasNegativeAura)               | Returns true if the Player has any negative aura.
[HasPositiveAura()](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_HasPositiveAura)               | Returns true if the Player has any positive aura.
GetAuraStackCount(spell id)                                                                                  | Returns the number of stacks the aura has.
