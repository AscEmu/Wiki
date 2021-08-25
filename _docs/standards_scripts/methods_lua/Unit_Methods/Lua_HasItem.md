---
title: Lua_HasItem
type: unit_methods
layout: single_markdown
position: 100
---

# Lua HasItem

## Description

This is used to see if a character has a specific item.

## Syntax

```
bool = pPlayer:HasItem(int Itemid)
```

## Usage/Example

In the example we will check if the user has a [Hearthstone]

```
function Gossip(pUnit, event, pPlayer)
  if(pPlayer:IsInCombat() == true) then -- checks if the player is in combat
    pUnit:SendChatMessageToPlayer(12, 0, "You can't use this while in combat!!", pPlayer)
  else
    pUnit:GossipCreateMenu(100, pPlayer, 0)
    pUnit:GossipMenuAddItem(7, "Do I have a hearthstone?", 1, 0)
    pUnit:GossipSendMenu(pPlayer)
  end
end -- ends the function
 
function OnSelect(pUnit, event, pPlayer, id, intid, code)
  if(intid == 1) then -- checks if user used option 1
    if(pPlayer:HasItem(6948)) then -- checks if user has a hearthstone
      pUnit:SendChatMessageToPlayer(12, 0, "You have a hearthstone", pPlayer)
    else
      pUnit:SendChatMessageToPlayer(12, 0, "You don't have a hearthstone", pPlayer)
    end
  end
end 
```
