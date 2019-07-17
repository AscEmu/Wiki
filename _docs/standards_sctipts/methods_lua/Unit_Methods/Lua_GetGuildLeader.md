---
title: Lua_GetGuildLeader
type: unit_methods
layout: single_markdown
position: 148
---

# Lua GetGuildLeader

## Usage/Example

```
function npc_OnGossip(pUnit, event, player)
  if player:GetGuildLeader() == player:GetName() then
  -- do something
  else
  -- do whatever if the player is NOT guild leader of a guild
  end
end
```
