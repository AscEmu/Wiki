---
title: Lua_GetCurrentSpell
type: unit_methods
layout: single_markdown
position: 11
---

# Lua GetCurrentSpell

## Description

Returns the spell ID of the spell being cast by the target (or unit if no target is defined), if one is being cast at time of registration. Useful if your mob is susceptible to silence or interrupt effects.

## Usage/Example

This example would be used to make the unit cast a spell on itself (with cast time), and if interrupted at least 10 milliseconds after being cast, registers the function again so it begins to cast the spell a second time.          
This example would repeat casting if it was silenced each time, otherwise it would register your next event ("Next_Event").

```
function OnCombat(Unit, Event)
 Unit:FullCastSpell(300) -- Example, not a working spell
 Unit:RegisterEvent("Spell_Check", 10, 1)
end

function Spell_Check(Unit, Event)
 local spell = Unit:GetCurrentSpell()
 if spell == 300 then
   Unit:RegisterEvent("Next_Event", 1000, 1)
 else
   Unit:RegisterEvent("OnCombat", 1000, 1)
 end
end
```