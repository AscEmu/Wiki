---
title: Lua_IsInCombat
type: standards_lua
layout: single_markdown
position: 111
---

# Lua IsInCombat

## Description

You can check if the user is in combat or not.             
If the target is in combat it will return 'true', else 'false'.       

## Syntax

```
bool = pPlayer:IsInCombat()
```

## Usage/Example

You can for example disallow a player to gossip with an npc while in combat.

```
function OnGossip(pUnit, event, pPlayer)
  if(pPlayer:IsInCombat() == true) then -- checks if the player is in combat
    pUnit:SendChatMessageToPlayer(12, 0, "You can't use this while in combat!!", pPlayer)
  else
    pUnit:GossipCreateMenu(100, pPlayer, 0)
    pUnit:GossipMenuAddItem(7, "So I wasn't in combat ....", 1, 0)
    pUnit:GossipMenuAddItem(7, "Option 2....", 2, 0)
    pUnit:GossipSendMenu(pPlayer)
  end -- end the if
end -- end the function
 
-- The user can also get in combat while in the gossip so we check again ...
 
function OnSelect(pUnit, event, pPlayer, id, intid, code)
  pPlayer:GossipComplete() -- ends the gossip -- We want to close the gossip on both so we put it here ...
  if(pPlayer:IsInCombat() == true) then -- checks if the player is in combat
    pUnit:SendChatMessageToPlayer(12, 0, "You can't use this while in combat!!", pPlayer)
  elseif(intid == 1) then
    pUnit:SendChatMessageToPlayer(12, 0, "Nope, and you still aren't!", pPlayer)
  end -- end the if
end -- end the function
```
