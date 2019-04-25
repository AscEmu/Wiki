---
title: Lua_DealDamage
type: standards_lua
layout: single_markdown
position: 119
---

# Lua DealDamage

## Description

Deals the designed amount of damage with the spell chosen to the target specified. This will show up in the combat log.           
Please note that DealDamage ignores cast times.       

## Usage/Example

```
function NPC_Combat(pUnit, Event)
  local Target = pUnit:GetRandomPlayer(0)
  if (Target:IsAlive()) then
    pUnit:DealDamage(Target, 100000, 5)
  end
end
```
