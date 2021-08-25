---
title: Lua_GossipCreateMenu
type: unit_methods
layout: single_markdown
position: 67
---

# Lua GossipCreateMenu

## Description

Used when creating new Gossip menus for Gossip enabled NPCs. In order to give gossip menus and options to an NPC, a menu must first be created, hence this command.                
The TextID is used to create the text the NPC will say when a player talks to them. The text will appear at the very top of the gossip window, with the menu options will appear right below it.                 
A Gossip NPC MUST have the Gossip NPC flag. Currently, the Gossip flag for an NPC is 1.        

## Syntax

```
object pUnit:GossipCreateMenu(int text_id, object pPlayer, int AutoSend)
```

pUnit, menu sender object. Usually NPC, gameobject or item, also player is accepted.            
text_id, Entry from npc_text table. Use locales_npc_text for languages other than english.            
pPlayer, player object, who the menu is created for.            
AutoSend, defines if the menu is autosended. If AutoSend is not 0, then the menu is autosended and no GossipSendMenu() is needed.            

## Usage/Example

```
local function NPC_GossipHello(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipSendMenu(pPlayer)
end

RegisterUnitGossipEvent(123, 1, NPC_GossipHello)
```
