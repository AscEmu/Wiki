---
title: Lua_IsFriendly
type: standards_lua
layout: single_markdown
position: 109
---

# Lua IsFriendly

## Description

You can check if the user is friendly to someone or something or not.         
If the target is friendly it will return 'true', else 'false'. 

## Syntax

```
bool = pPlayer:IsFriendly(pUnit)
```

## Usage/Example

In this example will create an anti-cheat check for a gossip menu.                 
We simply check if the user is friendly to the npc that he/she wishes to talk to.             
There are a couple of cheat methods that can override these settings, so checking if the user is friendly or not can override the cheat!                    

```
function OnGossip(pUnit, event, pPlayer)
  if(pPlayer:IsFriendly(pUnit) == true) then  -- if the player is friendly ...
    pUnit:GossipCreateMenu(100, pPlayer, 0)
    pUnit:GossipMenuAddItem(7, "Am I friendly to you?", 1, 0)
    pUnit:GossipSendMenu(pPlayer)
  else -- if the player is not friendly ...
    pUnit:SendChatMessageToPlayer(12, 0, "You are not my friend!", pPlayer) 
  end
end
 
function OnSelect(pUnit, event, pPlayer, id, intid, code)
  if(intid == 1) then
    if(pPlayer:IsFriendly(pUnit) == true) then
      pUnit:SendChatMessageToPlayer(12, 0, "You are my friend!", pPlayer)  
    else -- if the player is not friendly  
      pUnit:SendChatMessageToPlayer(12, 0, "You are not my friend!", pPlayer) 
    end
  end
end
```
