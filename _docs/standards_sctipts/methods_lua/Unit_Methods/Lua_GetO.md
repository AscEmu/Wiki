---
title: Lua_GetO
type: standards_lua
layout: single_markdown
position: 42
---

# Lua GetO

## Syntax

```
:GetO() - No Arguments
```

## Description

Returns the oriantation.

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
