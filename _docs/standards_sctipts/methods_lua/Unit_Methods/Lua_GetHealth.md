---
title: Lua_GetHealth
type: unit_methods
layout: single_markdown
position: 25
---

# Lua GetHealth

## Description

Returns a numerical value that is equal to the Unit's health.

## Usage/Example

```
function Get_HP(pUnit)
    local hp = pUnit:GetHealth()
    if (hp >= 0) then
        pUnit:SendChatMessage(12, 0, "I have more than 0 HP!")
    end
end
```