---
title: Lua_GetInstanceID
type: standards_lua
layout: single_markdown
position: 30
---

# Lua GetInstanceID

## Description

Used to find the instance ID number of the instance the unit is in, if the unit is in an instance. Else returns false.

## Usage/Example

```
function OnSpawn(pUnit)
  INSTANCES[pUnit:GetInstanceID()]["MyMob"] = pUnit:GetGUID() -- Store our GUID inside this instances' table.
end
```