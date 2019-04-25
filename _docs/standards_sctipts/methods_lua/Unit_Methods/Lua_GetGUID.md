---
title: Lua_GetGUID
type: standards_lua
layout: single_markdown
position: 24
---

# Lua GetGUID

## Description

Returns the GUID for the selected target and returns a UInt64 value. If target is empty it returns the GUID of the player.

## Syntax

```
pUnit:GetGUID([target])
```

## Usage/Example

This example wouldn't normally be used in a Lua script, this only provides as it is, an example.

```
function Get_GUID(pUnit, Event)
   local target = pUnit:GetMainTank
   return(pUnit:GetGUID(target))
end
```