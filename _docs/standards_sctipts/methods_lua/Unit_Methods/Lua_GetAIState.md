---
title: Lua_GetAIState
type: standards_lua
layout: single_markdown
position: 3
---

# Syntax

```
int State = pPlayer:GetAIState()
```

Similar to: '[SetAIState()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_SetAIState)'


# Return Values

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

# Description

Will get the unit's AI-State and return the value.

# Example

This example will get the player's AI-State when he/she enters the world and simply reset it. 
Same as in '[SetAIState()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_SetAIState)'.

```
function OnEnterWorld(event, pPlayer)
	local AI = pPlayer:GetAIState()
	if(AI == 1 or AI == 2 or AI == 3 or AI == 4 or AI == 5) then
		pPlayer:SetAIState(0)
	elseif(AI == 6 or AI == 7 or AI == 8 or AI == 9 or  AI == 10 or AI == 11) then
		pPlayer:SetAIState(0)
	end
end
 
RegisterServerHook(4, "OnEnterWorld")
```