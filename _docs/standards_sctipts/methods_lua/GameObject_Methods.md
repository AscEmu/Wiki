---
title: GameObject Methods
type: standards_lua
layout: single_markdown
position: 2
---

## Get (Return) Methods

------------------------------------------------------------------------------------------------------------ | ---------- 
[GetEntry()](/Wiki/docs/standards_sctipts/methods_lua/GameObject_Methods/Lua_GetEntry)                       | Returns the entry ID
GetHP()                                                                                                      | Returns the actual HP
GetMaxHP()                                                                                                   | Returns the maximum HP
[GetName()](/Wiki/docs/standards_sctipts/methods_lua/GameObject_Methods/Lua_GetName)                         | Get the name
GetObjectType()                                                                                              | Returns 'GameObject'
[GetSpawnLocation()](/Wiki/docs/standards_sctipts/methods_lua/GameObject_Methods/Lua_GetSpawnLocation)       | Get the Location of a spawned unit

## Uncategorized Methods

------------------------------------------------------------------------------------------------------------ | ---------- 
Activate()                                                                                                   | Activates/Deactivate a go, f.ex. opens a door
Damage(damage, guid, spellid)                                                                                | Damages the GO if it's a destructible building, guid is the damaging Unit's GUID, spellid is the damaging spell.
Rebuild()                                                                                                    | Rebuilds the GO, if it's a destructible building. Restores it's hp to max, and restores it's displayid to normal.
[RemoveFromWorld()](/Wiki/docs/standards_sctipts/methods_lua/GameObject_Methods/Lua_RemoveFromWorld)         | Removes the Game Object from the world.
