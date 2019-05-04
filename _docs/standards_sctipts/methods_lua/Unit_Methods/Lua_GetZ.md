---
title: Lua_GetZ
type: unit_methods
layout: single_markdown
position: 66
---

# Lua GetZ

## Description

Returns the X-Value of the Unit.

## Syntax

```
GetZ() -- No Arguments
```

## Usage/Example

```
function SomeUnit_SomeFunction(pUnit, Event) 
  x = pUnit:GetX() 
  y = pUnit:GetY()
  z = pUnit:GetZ()
  print "Positon of the Unit:"
  print x,y,z
end
```
