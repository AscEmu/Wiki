---
title: Lua_GossipComplete
type: standards_lua
layout: single_markdown
position: 71
---

# Lua GossipComplete

## Description

Used after a gossip menu is created, and a menu option is selected. This command will close the gossip window, so the player doesn't have to close it in-game.      
If the gossip window is not closed with this method, the menu will freeze. Use the Gossip hello function to return to the main menu.       

## Usage/Example

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(0, "Close menu", 1, 0)
  pUnit:GossipMenuAddItem(0, "Return to main menu", 2, 0)
  pUnit:GossipMenuAddItem(0, "Menu freeze test", 3, 0)
  pUnit:GossipSendMenu(pPlayer)
end
 
function NPC_GossipSelect(pUnit, event, pPlayer, id, intid, code)
  if (intid == 1) then
    pUnit:SendChatMessage(14, 0, "Closed menu")
    pPlayer:GossipComplete()
  elseif (intid == 2) then
    NPC_GossipHello(pUnit, event, pPlayer) -- Return to GossipHello
  end
end
 
RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
RegisterUnitGossipEvent(123, 2, NPC_GossipSelect)
```

To reduce the amount of code, you can use :GossipComplete() outside the IF statement: 

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(0, "Example 1", 1, 0)
  pUnit:GossipMenuAddItem(0, "Example 2", 2, 0)
  pUnit:GossipMenuAddItem(0, "Example 3", 3, 0)
  pUnit:GossipSendMenu(pPlayer)
end
 
function NPC_GossipSelect(pUnit, event, pPlayer, id, intid, code)
  if(intid == 1) then
    pUnit:SendChatMessage(14, 0, "Example 1")
  elseif (intid == 2) then
    pUnit:SendChatMessage(14, 0, "Example 2")
  elseif (intid == 3) then
    pUnit:SendChatMessage(14, 0, "Example 3")
  end
  pPlayer:GossipComplete()
end

RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
RegisterUnitGossipEvent(123, 2, NPC_GossipSelect)
```