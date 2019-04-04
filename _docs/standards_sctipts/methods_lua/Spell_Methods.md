---
title: Spell Methods
type: standards_lua
layout: single_markdown
position: 5
---

[Moooo](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Mooo)

# Get (Return) Methods

------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------
GetCaster()                                                                                                                                                              | Returns the caster of the spell. Can return a Unit, Item or GameObject.
GetEntry()                                                                                                                                                               | Returns the entry ID of the spell.
GetSpellType()                                                                                                                                                           | Returns the type of the spell:
GetSpellState()                                                                                                                                                          | Returns the state of the spell:
GetTarget()                                                                                                                                                              | Returns the target of the spell if the spell has a trigger effect. Can return a Unit, Item or GameObject.
GetPossibleEnemy([range])                                                                                                                                                | Returns the GUID of a possible unit enemy of the spell. Range is optional.
GetPossibleFriend([range])                                                                                                                                               | Same as above but for a friendly target.
GetObjectType()                                                                                                                                                          | Returns "Spell".
GetVar(var [,subindex])                                                                                                                                                  | See @SetVar, but returns the value on success or nil on failure.
GetCastedItemId()                                                                                                                                                        | Returns what item ID cast the spell.


# Modify/Set Methods

------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------
SetVar(var [,subindex], value)                                                                                                                                           | var is a string referring to a parameter of Spell. subindex is optional; used when the variable you are setting has sub indexes. value is what you want to set it to. Returns true on success, false on failure.


# Is/Has (Boolean) Methods

------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------
IsDuelSpell()                                                                                                                                                            | Returns true if the spell was cast in a duel.
CanCast()                                                                                                                                                                | Returns true if the spell is castable.
IsStealthSpell()                                                                                                                                                         | Returns true if the spell grants some kind of stealth.
IsInvisibilitySpell()                                                                                                                                                    | Like IsStealthSpell but for invisibility.
HasPower()                                                                                                                                                               | Returns true if the caster has enough power to cast the spell.
IsAspect()                                                                                                                                                               | Returns true if the spell is a hunter Aspect spell.
IsSeal()                                                                                                                                                                 | Returns true if the spell is a paladin Seal spell.


# Uncategorized Methods

------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------
Cancel()                                                                                                                                                                 | Cancels the spell.
Cast(check)                                                                                                                                                              | Casts the spell. Set check to true if you want to check if the spell is castable, or false to force cast.
Finish()                                                                                                                                                                 | Finishes the spell, used post-casting.
ResetVar(var)                                                                                                                                                            | Resets the specified var to the DBC original. Returns true on success, false on failure.
ResetAllVars()                                                                                                                                                           | Resets all of Spell's vars to the DBC originals. Returns true on success, false on failure.
