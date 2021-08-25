---
title: Lua_GetMaxHealth
type: unit_methods
layout: single_markdown
position: 37
---

# Lua GetMaxHealth

## Description

Returns the scripted Unit or target's maximum amount of health in numeric form.

## Usage/Example

This example includes methods not included in this page. Please see their corresponding pages for the correct usage and definition.

```
function Creature_HealthCheck(Unit)
  local HPPercent = Unit:GetHealthPct()
  local MaxHP = Unit:GetMaxHealth()
  if HPPercent < 100 then
    Unit:SetHealth(MaxHP)
    Unit:SetMaxHealth(MaxHP)
  end
end
```