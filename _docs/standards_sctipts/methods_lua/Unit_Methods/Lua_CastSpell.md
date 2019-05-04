---
title: Lua_CastSpell
type: unit_methods
layout: single_markdown
position: 115
---

# Lua CastSpell

## Description

Remember that the spell should be instant.

## Syntax

```
Unit:CastSpell(spell_id_here)
```

## Usage/Example

```
function (Unit, event)
  if Unit:GetHealthPct() < 2 then
  Unit:CastSpell(14561) -- example
  end
end
```
