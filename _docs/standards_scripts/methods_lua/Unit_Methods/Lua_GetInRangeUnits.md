---
title: Lua_GetInRangeUnits
type: unit_methods
layout: single_markdown
position: 29
---

# Lua GetInRangeUnits

## Description

Returns a table of unit objects, close to pUnit.

## Syntax

```
array = pUnit:GetInRangeUnits()
```

## Usage/Example

```
function ListNearestNPC(pUnit)
  for i,pNPC in pairs(pUnit:GetInRangeUnits()) do
    print(pNPC:GetName())
  end
end
```