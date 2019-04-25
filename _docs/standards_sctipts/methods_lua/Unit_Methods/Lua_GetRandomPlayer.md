---
title: Lua_GetRandomPlayer
type: standards_lua
layout: single_markdown
position: 51
---

# Lua GetRandomPlayer

## Description

This command returns a random player specified by these numbers:

(../scripts/LuaEngine/LUAEngine.h)

```
RANDOM_ANY           = 0
RANDOM_IN_SHORTRANGE = 1
RANDOM_IN_MIDRANGE   = 2
RANDOM_IN_LONGRANGE  = 3
RANDOM_WITH_MANA     = 4
RANDOM_WITH_RAGE     = 5
RANDOM_WITH_ENERGY   = 6
RANDOM_NOT_MAINTANK  = 7
```

You can also use () without a number, it will return the same as RANDOM_ANY.

## Usage/Example

This command can be used to select a player as a target, like so:

```
function Boss_Spell(Unit, Event)
local target = Unit:GetRandomPlayer(4)
 if (target ~= nil) then
   Unit:FullCastSpellOnTarget(5, target)
end
end
```
