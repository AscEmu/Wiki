---
title: Aura Methods
type: standards_lua
layout: single_markdown
position: 6
---

# Introduction

These are commands specific to auras. You can get an aura through ***Unit methods*** [GetAuraObjectById(spell id)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetAuraObjectById), and use that similar to how you would use ***Unit*** or ***Player***. For instance.

```
function OnCombat(Unit, event)
  Unit:CastSpell(1337)
  local aura = Unit:GetAuraObjectById(1337)
  local spell_id = aura:GetSpellId()
  -- spell id would be 1337
  tostring( aura:GetCaster() ) == tostring( Unit ) --would return true
  -- Just stick aura, in front of the command the same way you would Player or Unit
end
```

# Function List

------------------------------------------------------------------------------------------------------------ | ---------- 
GetObjectType()                                                                                              | Will return Aura if the aura is not nil. 
GetSpellId()                                                                                                 | Returns the aura's spell id.
GetCaster()                                                                                                  | Returns the object that casted the aura. Can be a Unit, Game Object, or Item. 
GetTarget()                                                                                                  | Returns the target of the aura; the person who is currently affected by it. 
GetDuration()                                                                                                | Returns the duration in miliseconds.
SetDuration(duration)                                                                                        | Sets the duration of the aura. The aura will be removed after the duration has passed. 
GetTimeLeft()                                                                                                | Returns the amount of time left until the aura expires in miliseconds.
SetNegative([amount])                                                                                        | Sets the aura specified as negative, amount is optional; the number of "points" to take away. (Some spells need more "points" to be removed to make it negative, generally unneeded though)
SetPositive([amount])                                                                                        | Sets the aura specified as positive, amount is optional; the number of points to add. 
Remove()                                                                                                     | Removes the aura & all of its events (duration, etc.,).
SetVar(var [,subindex], value)                                                                               | var is a string referring to a parameter of Spell. subindex is optional; used when the variable you are setting has sub indexes. value is what you want to set it to. Returns true on success, false on failure.
GetVar(var [,subindex])                                                                                      | See above, but returns the value on success or nil on failure.
GetAuraSlot()                                                                                                | Returns the slot that the aura is in. See Unit.h for meanings. 
SetAuraSlot(slot)                                                                                            | Sets the aura's slot. See Unit.h for meanings. 


The following 3 functions will be called from a Player or Unit, not an aura, and they deal with or return an aura object.
{: .info }

------------------------------------------------------------------------------------------------------------ | ---------- 
GetAuraObject(slot)                                                                                          | Returns the aura object at that slot.
GetAuraObjectById(spell id)                                                                                  | Returns an aura object for the spell id.
AddAuraObject(aura)                                                                                          | aura is not a spell id. It is an aura object.

The following do not return aura objects, and are still called from a Player or Unit, not an "aura" object. 
{: .info }

------------------------------------------------------------------------------------------------------------ | ---------- 
RemoveAura(SpellID)                                                                                          | If the unit has the aura with the spell given, will remove it.
RemoveAllAuras()                                                                                             | Removes all auras, positive or negative, from the unit or target.
HasAura(spellID)                                                                                             | Checks if the target or unit has the spell aura specified.
RemoveAurasByMechanic(string, 1 or 0)                                                                        | Removes auras with the mechanic specified in string form, set to 1 for only the hostile auras, set to 0 to remove all auras with given mechanic type.
RemoveAurasType(type)                                                                                        | Removes all auras with the given type, similar to RemoveAurasByMechanic.
AddAura(spellid, duration, temp)                                                                             | Adds aura with spell id, duration, and if it is temporary or not (true/false). See core for more info.
RemoveNegativeAuras()                                                                                        | Removes every negative aura from the unit.
GetAura(slot)                                                                                                | Returns the spell id of the aura at the slot. 
HasAuraWithMechanic(number)                                                                                  | Returns true if the unit/player has the aura with said mechanic. 
HasNegativeAura()                                                                                            | Returns true if the player has any negative aura. 
HasPositiveAura()                                                                                            | Returns true if the player has any positive aura. 
GetAuraStackCount(spell id)                                                                                  | Returns the number of stacks the aura has. 
