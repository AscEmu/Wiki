---
title: Lua_CastSpellOnTarget
type: unit_methods
layout: single_markdown
position: 116
---

# Lua CastSpellOnTarget

## Description

Remember that the spell should be instant.

## Syntax

```
Unit:CastSpellOnTarget(the id of the spell,the target)
```

## Usage/Example

```
function (Unit, event)
  if Unit:GetHealthPct() < 50 then
  Unit:CastSpellOnTarget(14561,Unit:GetRandomPlayer(0)) -- example
  end
end
```
