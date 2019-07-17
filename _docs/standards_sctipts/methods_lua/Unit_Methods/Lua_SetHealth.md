---
title: Lua_SetHealth
type: unit_methods
layout: single_markdown
position: 81
---

# Lua SetHealth

## Description

Sets the units health to the number specified.

## Usage/Example

```
function SetHealth(pUnit)
  local Health = pUnit:GetHealth()
  if(Health>=1000) then
    pUnit:SendChatMessage(12, 0, "I have more less than 1000 health now!")
    pUnit:SetHealth(999)
  end
end
```
