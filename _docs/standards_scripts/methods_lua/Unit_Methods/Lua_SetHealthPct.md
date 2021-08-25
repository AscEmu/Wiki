---
title: Lua_SetHealthPct
type: unit_methods
layout: single_markdown
position: 82
---

# Lua SetHealthPct

## Description

Sets the units Health to a given percentage.

## Usage/Example

```
function SetHealth (pUnit, Event)
  if pUnit:GetHealthPct() < 50 then
    pUnit:SetHealthPct(51)
  end
end
```
