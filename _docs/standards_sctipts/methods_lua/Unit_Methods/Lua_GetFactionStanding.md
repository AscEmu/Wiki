---
title: Lua_GetFactionStanding
type: unit_methods
layout: single_markdown
position: 20
---

# Lua GetFactionStanding

## Description

Use when you want to get a general value of reputation rather than a specific one. This could be handy if you can't be arsed to work out how much reputation is equal to Exalted, for example. It returns a string representation of the unit's reputation with the faction specified.

## Return Values

```
"Hated"
"Hostile"
"Unfriendly"
"Neutral"
"Friendly"
"Honored"
"Revered"
"Exalted"
```

## Usage/Example

```
function NPCGossip(pUnit, _, pPlayer)
  if (pPlayer:GetFactionStanding(1066) == "Exalted") then
    pUnit:SendChatMessage(12, 0, "Example message.")
  end
end
```