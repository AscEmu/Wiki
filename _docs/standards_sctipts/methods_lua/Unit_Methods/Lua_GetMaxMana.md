---
title: Lua_GetMaxMana
type: standards_lua
layout: single_markdown
position: 38
---

# Lua GetMaxMana

## Description

Returns the Unit's maximum amount of mana.

## Usage/Example

```
function NPC_Spawn(pUnit)
   if (pUnit:GetMana() < pUnit:GetMaxMana()) then
      pUnit:SetMana(pUnit:GetMaxMana())
   end
end
```
