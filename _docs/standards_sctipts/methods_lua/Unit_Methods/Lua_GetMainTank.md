---
title: Lua_GetMainTank
type: standards_lua
layout: single_markdown
position: 33
---

# Lua GetMainTank

This returns whatever player has the most aggro/threat. It can be used to determine if an event will take place, or to select a unit to cast spells on, etc.

## Usage/Example:

A returned value

```
function Example(pUnit, event)
  if pUnit:GetMainTank() == Ardwin then
  <actions here>
  end
end
```

In that example, if the Main Tank was Ardwin, it would do the actions specified where <actions here> is.

Selecting a target

```
function Example(pUnit, event)
pUnit:FullCastSpellOnTarget(40860, pUnit:GetMainTank())
end
```

In that example, the action FullCastSpellOnTarget, casts a complete spell on the the specified in the parameters which is GetMainTank().
