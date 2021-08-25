---
title: Lua_GetO
type: unit_methods
layout: single_markdown
position: 42
---

# Lua GetO

## Description

Returns the oriantation.

## Syntax

```
:GetO() -- No Arguments
```

## Usage/Example

```
function SomeUnit_SomeFunction(Unit) 
  x = Unit:GetX() 
  y = Unit:GetY()
  z = Unit:GetZ()
  o = Unit:GetO()
  print "Positon of the Unit:"
  print x,y,z,o
end
```
