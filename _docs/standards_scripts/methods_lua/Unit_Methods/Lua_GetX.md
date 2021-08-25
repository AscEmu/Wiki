---
title: Lua_GetX
type: unit_methods
layout: single_markdown
position: 64
---

# Lua GetX

## Description

Returns the X-Value of the Unit.

## Syntax

```
GetX() -- No Arguments
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
