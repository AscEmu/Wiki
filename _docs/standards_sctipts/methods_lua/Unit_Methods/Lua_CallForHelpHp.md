---
title: Lua_CallForHelpHp
type: unit_methods
layout: single_markdown
position: 73
---

# Lua CallForHelpHp

## Description

Will make the unit call for help when it reaches the amount of hp given.            
The unit will flee in fear for help.

## Syntax

```
int CallForHelpHp = pUnit:CallForHelpHp(value)
```

## Usage/Example

When the unit enters combat the CallForHelpHp value is set to 10% or lower. So if the unit reaches 10% or less of it's hp it will attempt to flee.

```
function OnEnterCombat(pUnit, event, pAttacker)
pUnit:CallForHelpHp(pUnit:GetHealthPct <= 10)
end
```
