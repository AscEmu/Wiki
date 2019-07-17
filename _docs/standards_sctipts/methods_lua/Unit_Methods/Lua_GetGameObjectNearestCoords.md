---
title: Lua_GetGameObjectNearestCoords
type: unit_methods
layout: single_markdown
position: 21
---

# Lua GetGameObjectNearestCoords

## Description

Returns the gameobject with given ID that is nearest the given coordinates.

## Syntax

```
pObject = pUnit:GetGameObjectNearestCoords(x, y, z, id) 
```

## Usage/Example

This example opens (or closes) a door.

```
function Door_Manager(pUnit, Event)
  local x = pUnit:GetX()
  local y = pUnit:GetY()
  local z = pUnit:GetZ()
  local door = pUnit:GetGameObjectNearestCoords(x,y,z,123456)
  if (door ~= nil) then
    door:Activate()
  end
end
```