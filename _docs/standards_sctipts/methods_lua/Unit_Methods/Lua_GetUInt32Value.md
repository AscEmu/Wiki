---
title: Lua_GetUInt32Value
type: unit_methods
layout: single_markdown
position: 62
---

# Lua GetUInt32Value

## Description

Returns the UInt32Value for a unit.

## Usage/Example

```
UNIT_FIELD_FLAGS_2 = 0x0006 + 0x0035
 
function ChangeFlags(unit)
local Flags = unit:GetUInt32Value(UNIT_FIELD_FLAGS_2)
  if(Flags == 2) then
    unit:SetUInt32Value(UNIT_FIELD_FLAGS_2, 0)
  end
end
```
