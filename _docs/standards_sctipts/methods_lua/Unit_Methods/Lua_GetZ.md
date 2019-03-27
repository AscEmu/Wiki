---
title: Lua_GetZ
type: standards_lua
layout: single_markdown
position: 66
---

# Lua GetZ

## Syntax

```
GetZ() - No Arguments
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
