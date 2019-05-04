---
title: Lua_SendWorldMessage
type: global_methods
layout: single_markdown
position: 12
---

# Lua SendWorldMessage

## Description

Sends message to all online players.

## Syntax

```
SendWorldMessage(string Message, int Type)
```

------------- | ----------
1             | Area Trigger   (Shows the message in the middle of the screen. Disapears after a while)  
2             | BroadCast      (Shows the message in the chat window and in the world console window.)

## Usage/Example

```
-- Specify npc
local TalkToWorld_ID = 6000051
 
-- Gossip
function TalkToWorld(Unit, event, Player)
  SendWorldMessage("You are not prepared!", 1)
end
 
-- Register
RegisterUnitGossipEvent(TalkToWorld_ID, 1, "TalkToWorld")
```
