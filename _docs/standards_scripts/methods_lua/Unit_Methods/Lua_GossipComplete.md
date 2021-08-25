---
title: Lua_GossipSendMenu
type: unit_methods
layout: single_markdown
position: 70
---

# Lua GossipSendMenu

## Description

This method sends the gossip menu to the target after it is created. In almost all cases, the target is the player, so you should always register "player" as the target. You must register a gossip menu using GossipCreateMenu in order to be able to send it.
If the menu does not have any menu items, no menu will be there, only the text you register when creating the menu, in which case you could leave :GossipSendMenu() out and use autosend with GossipCreateMenu.

## Syntax

```
object pUnit:GossipSendMenu(object pPlayer)
```

pUnit, Sender of the menu, usually NPC, gameobject or item. Can also be player. pPlayer, player to send the menu to.

## Usage/Example

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(0, "Example", 1, 0)
  pUnit:GossipSendMenu(pPlayer)
end
 
RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
```
