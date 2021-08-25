---
title: Lua_GetPlayer
type: global_methods
layout: single_markdown
position: 11
---

# Lua GetPlayer

## Description

## Syntax

```
pPlayer = GetPlayer(string[case sensitiv] Playername)
```

------------- | ----------
Player        | Object.         
false         | if player not exist.

## Usage/Example

```
function TimedEvent()
  local pPlayer = GetPlayer("Syke")
  if (pPlayer) then
    pPlayer:SendBroadcastMessage("Hello, Syke!")
  end
end
 
RegisterTimedEvent("TimedEvent", 30000, 1)   -- time in ms
```
