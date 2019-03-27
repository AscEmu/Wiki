---
title: Lua_GossipMenuAddItem
type: standards_lua
layout: single_markdown
position: 68
---

# Lua GossipMenuAddItem

## Description

After making a new gossip menu with GossipCreateMenu, you can add items, or options, to that menu for the players to use. These options will show up in the gossip window, a window that opens after right clicking an NPC.
To show the menu to the player, you need to use :GossipSendMenu() in the end of the menu.       

## Syntax

```
object pUnit:GossipMenuAddItem(int Icon, char Name, int Intid, int (bool) Code[, char Popup, uint32 Gold])
```

pUnit, Usually NPC, gameobject or item, also player is accepted. Should be the same as in :GossipCreateMenu(). Icon, icon before the option name in the gossip window.                    
Name, option name/label. Shows up in the gossip window.                    
Intid, a key value for gossip select hook. Used for linking a script to the option.                    
Code, defines whether the player needs to fill a code box before doing anything. If 0, then no codebox, if 1, then show codebox. The player inserted code is sended to gossip select hook.                    
Popup, defines whther a popup is shown to the player or not and what the popup says. Use blank "" for no popup. Optional.                    
Gold, the amount of copper required to access the menu. The player will be notified if the requirement is not matched. The amount needed is notified when the option is clicked. The copper is NOT removed, this needs to be done in gossip select hook. Optional.                    

## Usage/Example

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(0, "Example", 1, 0)
  pUnit:GossipMenuAddItem(9, "Sword icon and ask for code", 2, 1)
  pUnit:GossipMenuAddItem(3, "Gold requirement, no popup", 3, 0, "", 100)
  pUnit:GossipMenuAddItem(4, "Ask for code, 99 copper and send a popup saying \"hello\"", 4, 1, "Hello", 99)
  pUnit:GossipSendMenu(pPlayer)
end
 
RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
```

## Attaching scripts

After adding a menu and adding the options, you can use "if" statements to register commands to that option using the intid you assign to each option.               
Note! If a player is the sender of the initial menu, no buttons work, thus you can not run any scripts. (You can not register gossip selection for player)            
You can only send the menu to the player from a player.           

## Usage/Example

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(0, "Example", 1, 0)
  pUnit:GossipMenuAddItem(9, "Sword icon and ask for code", 2, 1)
  pUnit:GossipMenuAddItem(3, "Gold requirement, no popup", 3, 0, "", 100)
  pUnit:GossipMenuAddItem(4, "Require 99 copper and send a popup saying \"hello\"", 4, 1, "Hello", 99)
  pUnit:GossipSendMenu(pPlayer)
end
 
local function NPC_GossipSelect(pUnit, event, pPlayer, id, intid, code)
  if (intid == 1) then
    -- "Example" option
    pUnit:SendChatMessage(14, 0, "Example message")
  elseif (intid == 2) then
    -- This will make the NPC say what you wrote to the code box after clicking "Sword icon and ask for code"
    pUnit:SendChatMessage(14, 0, code)
  else
    -- any other option
    pUnit:SendChatMessage(14, 0, "You clicked an option with intid: "..intid)
  end
  pPlayer:GossipComplete()
end
 
RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
RegisterUnitGossipEvent(123, 2, NPC_GossipSelect)
```

## Icons

There are a few icons you can use with gossip menu items, defined by the number before the text used to label the item. Here are a some icons that work, but this list is only a few of them:        

```
0 = Chat bubble
1 = Bag
2 = Fly
3 = Book
4 = Cog/Gear
5 = Cog/Gear
6 = Bag with coin
7 = Chat bubble with "..."
8 = Tabard
9 = Two swords Crossing
10 = Yellow dot
```

![icons gossip menu items](/Wiki/images/standards/example/gossip_icons.jpg "icons gossip menu items")
