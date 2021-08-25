---
title: Lua_GetInRangePlayersCount
type: unit_methods
layout: single_markdown
position: 28
---

# Lua GetInRangePlayersCount

## Description

Returns the number of players in the unit's range. Does not count dead players. Does not select the players as a target like GetInRangePlayers does.

## Usage/Example

```
function Boss(Unit, Event)
local count = Unit:GetInRangePlayersCount()
 if count < 5 then
   Unit:CastSpell(5)
end
end
```