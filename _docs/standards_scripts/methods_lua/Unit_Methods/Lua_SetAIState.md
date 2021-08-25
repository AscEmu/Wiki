---
title: Lua_SetAIState
type: unit_methods
layout: single_markdown
position: 78
---

# Lua SetAIState

## Description

Sets the unit's AI-State.

## Syntax

```
pUnit:SetAIState(int State)
```

Similar to: '[GetAIState()](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAIState)'

---------- | ---------- 
Value      | Description
0          | STATE_IDLE
1          | STATE_ATTACKING
2          | STATE_CASTING
3          | STATE_FLEEING
4          | STATE_FOLLOWING
5          | STATE_EVADE
6          | STATE_MOVEWP
7          | STATE_FEAR
8          | STATE_WANDER
9          | STATE_STOPPED
10         | STATE_SCRIPTMOVE
11         | STATE_SCRIPTIDLE

## Usage/Example

This example will reset the player's AI-State when he/she enters the world.

```
function OnEnterWorld(event, pPlayer)
  local AI = pPlayer:GetAIState()
  if(AI == 1 or AI == 2 or AI == 3 or AI == 4 or AI == 5 or AI == 6 or AI == 7 or AI == 8 or AI == 9 or  AI == 10 or AI == 11) then
    pPlayer:SetAIState(0)
  end
end
RegisterServerHook(4, "OnEnterWorld")
```