---
title: Lua_GetTauntedBy
type: unit_methods
layout: single_markdown
position: 60
---

# Lua GetTauntedBy

## Description

If the unit is taunted by a spell cast by a player or opposing unit, this command will select that player or unit.

## Syntax

```
Unit:GetTauntedBy()
```

## Usage/Example

```
function NPC_Script(Unit, Event)
local target = Unit:GetTantedBy()
  if plr ~= nil then
    Unit:CastSpellOnTarget(5, target)
end
end
```
