---
title: Lua_GetStanding
type: unit_methods
layout: single_markdown
position: 59
---

# Lua GetStanding

## Description

Use when you want to find the amount of reputation a player has with the faction you specify. This is a player only command.

## Usage/Example

```
function NPCGossip(pUnit, Event, player)
  if (player:GetStanding(1066) >= 10000) then
    pUnit:SendChatMessage(12, 0, "Example")
end
end
```
