---
title: Lua_IsCreature
type: unit_methods
layout: single_markdown
position: 110
---

# Lua IsCreature

## Description

Returns whether or not the selected target is a creature or a player. True if it is, false if it isn't.

## Syntax

```
IsCreature() -- No parameters
```

## Usage/Example

Returns whether or not the selected target is a creature or a player. True if it is, false if it isn't.

```
function Unit_OnCombat(pUnit, event)
if not pUnit:IsCreature() then
  <actions here>
end
end
```

In that example, it checks if the target is NOT a creature, and if it isn't, it performs the actions specified at <actions here>.
