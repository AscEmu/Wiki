---
title: Lua
type: standards_lua
layout: single_markdown
position: 1
---

# Information About ALE (AscEmu LuaEngine)

Lua is a powerful, fast, lightweight, embeddable scripting language.   
Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics.   
Lua is dynamically typed, runs by interpreting bytecode for a register-based virtual machine, and has automatic memory management with incremental garbage collection, making it ideal for configuration, scripting, and rapid prototyping.   

Because Lua can easily be embedded into applications, it is frequently used in games, such as World of Warcraft, Far Cry, Baldur's Gate, Garry's Mod and Warhammer titles.

## API Documentation

Information About the typical function names:

### [Basic Lua](/Wiki/docs/standards_scripts/methods_lua/Basic_Lua)

### [Register Events and Server Hooks](/Wiki/docs/standards_scripts/methods_lua/List_of_all_Events)

### GameObject Methods

GET | Description | Usage
------------------------------------------------------------------------------------------------------------|----------|-----------
[GetEntry()](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetEntry)                       | Returns the entry ID | 
GetHP()                                                                                                      | Returns the actual HP | 
GetMaxHP()                                                                                                   | Returns the maximum HP | 
[GetName()](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetName)                         | Get the name | 
GetObjectType()                                                                                              | Returns 'GameObject' | 
[GetSpawnLocation()](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnLocation)       | Get the Location of a spawned unit | 

UNCATEGORIZED | Description | Usage
------------------------------------------------------------------------------------------------------------|----------|-----------
Activate()                                                                                                   | Activates/Deactivate a go, f.ex. opens a door | 
Damage(damage, guid, spellid)                                                                                | Damages the GO if it's a destructible building, guid is the damaging Unit's GUID, spellid is the damaging spell. | 
Rebuild()                                                                                                    | Rebuilds the GO, if it's a destructible building. Restores it's hp to max, and restores it's displayid to normal. | 
[RemoveFromWorld()](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RemoveFromWorld)         | Removes the Game Object from the world. | 


### [Unit Methods](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods)

### [Spell Methods](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods)

### [Aura Methods](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods)

### [Global Methods](/Wiki/docs/standards_scripts/methods_lua/Global_Methods)

## Key Terminology
You may find some of these terms within the Wiki pages.

##### **Unit:** A Creature or Player.

##### **Creature:** A Mob/ile Unit. Also known as an NPC - [Non-player character](https://en.wikipedia.org/wiki/Non-player_character)

##### **Gossip:** Menus that allow you to interact with the Player.

##### **Phase:** A unique instance of the Game World.

##### **Method:** Also commonly known as a **Function** or **Command**. This is the correct word for it - Method adopts a more Object-Orientated view on Lua, which is what we want.

##### **Function:** A block of code in Lua.

##### **Command:** Usually assumed to be any Lua Method, it is incorrect terminology. It is not a command.

##### **Statement:** A piece of code that performs a single action.

##### **Expression:** A statement that evaluates true or false.
