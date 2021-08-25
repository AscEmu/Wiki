---
title: Lua_GetSpawnLocation
type: unit_methods
layout: single_markdown
position: 54
---

# Lua GetSpawnLocation

## Description

Returns the Unit's spawn location. This returns 4 values, x, y, z and o. Don't forget you can use a trash variable (_) to omit results you don't want.

This command works for NPC as well as for game objects.

## Return Values

X (Number/Float)        
Y (Number/Float)        
Z (Number/Float)        
O (Number/Float)        

## Usage/Example

```
local spawn_location = {pUnit:GetSpawnLocation()}
local _, _, z = pUnit:GetSpawnLocation()
```
