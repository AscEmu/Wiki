---
title: Lua_GetSpawnZ
type: standards_lua
layout: single_markdown
position: 58
---

# Lua GetSpawnZ

## Description

Returns the Z coordinate where the unit originally spawned.

## Usage/Example

This example uses commands not described on this page. Please see their corresponding pages for more information on how to use them.

```
function Boss(Unit, Event)
local X = Unit:GetSpawnX()
local Y = Unit:GetSpawnY()
local Z = Unit:GetSpawnZ()
local O = Unit:GetSpawnO()
 Unit:MoveTo(X,Y,Z,O)
end
```
