---
title: Lua_GossipAddQuests
type: standards_lua
layout: single_markdown
position: 69
---

# Lua GossipAddQuests

## Description

This function is used to show quests in the npc's gossip menu if any quests are available.                 
The function must be placed between [GossipCreateMenu()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GossipCreateMenu) and  [GossipSendMenu(pPlayer)()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GossipSendMenu) functions.

## Syntax

```
object pUnit:GossipAddQuests(object pPlayer)
```

pUnit, menu sender object. Usually NPC but can be item or player too.          
pPlayer, target object. Player who is viewing the menu.

## Usage/Example

```
local npc_id = 1234   -- dummy id
 
local function NPC_GossipHello(pUnit, event, pPlayer)
	pUnit:GossipCreateMenu(2345, pPlayer, 0)   -- 2345 = dummy gossip entry
	pUnit:GossipAddQuests(pPlayer)
	pUnit:GossipSendMenu(pPlayer)
end
 
RegisterUnitGossipEvent(npc_id, 1, NPC_GossipHello)   -- GOSSIP_EVENT_ON_TALK
```
