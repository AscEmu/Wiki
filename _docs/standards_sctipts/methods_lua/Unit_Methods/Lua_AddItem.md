---
title: Lua_AddItem
type: unit_methods
layout: single_markdown
position: 114
---

# Lua AddItem

## Description

Adds an item to the player.

## Usage/Example

```
function On_Gossip (pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(1234, pPlayer, 0)
  pUnit:GossipMenuAddItem(2, "Worn Shortsword", 1, 0)
  pUnit:GossipSendMenu(pPlayer)
end

function On_Select(unit, event, player, id, intid, code)
  if (intid == 1) then
    player:AddItem(25, 1)
  end 
end
```

The method also returns the item added or nil whether an item was added or not.          
You can use it when you want to know if a player has full inventory for example:        

```
function On_Gossip (pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(1234, pPlayer, 0)
  pUnit:GossipMenuAddItem(2, "Is my inventory full?", 1, 0)
  pUnit:GossipSendMenu(pPlayer)
end

function On_Select(pUnit, event, pPlayer, id, intid, code)
  if (intid == 1) then
    if(pPlayer:AddItem(25, 1)) then
      pPlayer:RemoveItem(25, 1) -- remove the added item, since we only want to check if the player has full inventory
      pPlayer:SendAreaTriggerMessage("You have space in your inventory!")
    else
      pPlayer:SendAreaTriggerMessage("You have a full inventory!")
    end 
  end
end
```
