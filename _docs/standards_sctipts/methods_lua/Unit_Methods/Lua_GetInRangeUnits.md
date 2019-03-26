---
title: Lua_GetInRangeUnits
type: standards_lua
layout: single_markdown
position: 29
---

# Lua GetInRangeUnits

## Syntax

```
array = pUnit:GetInRangeUnits()
```

## Description

Returns a table of unit objects, close to pUnit.

## Usage/Example

```
function ListNearestNPC(pUnit)
  for i,pNPC in pairs(pUnit:GetInRangeUnits()) do
    print(pNPC:GetName())
  end
end
```