---
title: Lua_SetMaxHealth
type: standards_lua
layout: single_markdown
position: 85
---

# Lua SetMaxHealth

## Description

Sets the units maximum health to the number specified.

## Usage/Example

```
function SetMaxHealth(pUnit)
  local Health = pUnit:GetHealth()
  pUnit:SendChatMessage(12, 0, "My max health has been changed!")
  pUnit:SetMaxHealth(Health)
end
```
