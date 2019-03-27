---
title: Lua_GetX
type: standards_lua
layout: single_markdown
position: 64
---

# Lua GetX

## Syntax

```
GetX() - No Arguments
```

## Description

Returns the X-Value of the Unit.

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
