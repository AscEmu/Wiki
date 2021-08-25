---
title: Lua_GetMapId
type: unit_methods
layout: single_markdown
position: 36
---

# Lua GetMapId

## Description

Returns the Unit's map ID.

## Usage/Example

```
function CheckMapId(event, player)
  if(player:GetMapId()==1) then
    player:SendBroadcastMessage("You are in Kalimdor!")
  end
end
 
RegisterServerHook(4, "CheckMapId")
```
