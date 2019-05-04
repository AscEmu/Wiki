---
title: Lua_GetGroupPlayers
type: unit_methods
layout: single_markdown
position: 147
---

# Lua GetGroupPlayers

## Description

Returns the userdata of all current group members of a player. This function will send a list of group members of a player to the target.

## Usage/Example

```
function ListGroupMembers(plr, target)
  for k, v in pairs(plr:GetGroupPlayers()) do
    target:SendBroadcastMessage(k.." - "..v)
  end
end
```
