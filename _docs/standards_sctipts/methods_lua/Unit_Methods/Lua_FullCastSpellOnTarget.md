---
title: Lua_FullCastSpellOnTarget
type: standards_lua
layout: single_markdown
position: 123
---

# Lua FullCastSpellOnTarget

## Description

Makes the unit cast a spell with cast time on a target using the spell ID given.

## Syntax

```
FullCastSpellOnTarget(Spell_IDs, Target) -- Spell_IDs are located in your spells.dbc. You can also get your Spell_IDs from wowhead!
```

## Usage/Example

```
function testillidan_OnCombat(Unit, Event)
  Unit:RegisterEvent("testillidan_OverwhelmingStench", 10000, 0)
end
 
function testillidan_OverwhelmingStench(pUnit, Event) 
  pUnit:FullCastSpellOnTarget(6942, pUnit:GetMainTank())
end
 
RegisterUnitEvent(44444, 1, "testillidan_OnCombat")
```
