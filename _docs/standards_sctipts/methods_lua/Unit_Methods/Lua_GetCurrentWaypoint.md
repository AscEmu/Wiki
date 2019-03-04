---
title: Lua_GetCurrentWaypoint
type: standards_lua
layout: single_markdown
position: 13
---

# Lua GetCurrentWaypoint

## Syntax

```
target = pUnit:GetCurrentWaypoint()
```

## Description

Will indicate where the current waypoint is for the selected unit and then return this waypoint.
A waypoint should always be returned unless the target unit doesn't exist.

## Example

```
function OnEnterWorld(event, pPlayer)
  if(pPlayer:GetCurrentWaypoint() and pPlayer:IsGm() == true) then
    pPlayer:PlayerSendChatMessage(12, 0, "My waypoint got returned!")
  elseif(pPlayer:GetCurrentWaypoint() ~= nil then
    pPlayer:PlayerSendChatMessage(12, 0, "My waypoint didn't get returned!")
  end
end

RegisterServerHook(4, "OnEnterWorld")
```

If you use "~=nil"

```
if(pPlayer:GetCurrentWaypoint() ~=nil) then
end
```

It will check if the waypoint is not found. If the waypoint couldn't be found then stuff after this 'if' happens.