---
title: Lua_GetCurrentSpellId
type: unit_methods
layout: single_markdown
position: 12
---

# Lua GetCurrentSpellId

## Description

Used to find the spell ID that the unit is currently casting, if any. Else returns false.

## Usage/Example

```
function NPC_Spell(Unit, Event)
local spell = Unit:GetCurrentSpellID()
  if (spell == true) then
    Unit:SendChatMessage(14, 0, "Example")
end
end
```