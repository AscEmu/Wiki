---
title: Lua_RemoveItem
type: standards_lua
layout: single_markdown
position: 136
---

# Lua RemoveItem

## Description

Used to remove the a certain item from the user/player.

## Usage/Example

Converts a stack of 5 of an item into 1 of an item using player:AddItem(itemid, amount) and player:RemoveItem(itemid, amount)

```
function On_Gossip(unit, event, player)
unit:GossipCreateMenu(100, player, 0)
unit:GossipMenuAddItem(2,"5 items -----> 1 item", 1, 0)
unit:GossipSendMenu(player)
end

function Gossip_Submenus(unit, event, player, id, intid, code)
	if (intid == 1) then
		player:AddItem(itemid, 1) 
		player:RemoveItem(itemid, 5)
	end
end

RegisterUnitGossipEvent(unitid, 1, "On_Gossip")
RegisterUnitGossipEvent(unitid, 2, "Gossip_Submenus")
```
