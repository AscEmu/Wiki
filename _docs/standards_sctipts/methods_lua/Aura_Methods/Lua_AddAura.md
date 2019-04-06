---
title: Lua_AddAura
type: standards_lua
layout: single_markdown
position: 5
---

# Lua AddAura

## Description

This method adds the specified aura to the unit given for the duration given (in miliseconds).

## Syntax

```
:AddAura(SPELL_ID, DURATION)
```

## Usage/Example

```
function BadGuy_OnCombat(pUnit)
  for _, v in ipairs(pUnit:GetAITargets())
    if v and not v:IsDead() then
      v:AddAura(28531, 60000)
    end
  end
end
```

Using 0 or less as the duration argument will make the aura have no time limit. Using -1 as time limit will make the aura stay after relog while using 0 or less than -1 wont.
