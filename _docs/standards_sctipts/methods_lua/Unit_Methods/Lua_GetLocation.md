---
title: Lua_GetLocation
type: standards_lua
layout: single_markdown
position: 32
---

# Lua GetLocation

## How to use

Declare four variables to hold the coordinates, and assign them to the values returned from this function.

```
function foo(Unit, Event)
  local x,y,z,o = Unit:GetLocation()
  print("The unit's location is "..x..", "..y)
end
```