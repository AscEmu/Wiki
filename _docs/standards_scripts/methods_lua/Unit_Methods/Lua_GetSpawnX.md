---
title: Lua_GetSpawnX
type: unit_methods
layout: single_markdown
position: 56
---

# Lua GetSpawnX

## Description

Returns the X coordinate where the unit originally spawned.

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
