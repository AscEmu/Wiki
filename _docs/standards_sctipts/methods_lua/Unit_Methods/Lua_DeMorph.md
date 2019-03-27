---
title: Lua_DeMorph
type: standards_lua
layout: single_markdown
position: 74
---

# Lua DeMorph

## Description

This function resets your display ID back to your default display.

## Usage/Example

```
function On_Gossip(unit, event, plr)
  unit:GossipCreateMenu(50, plr, 0)
  unit:GossipMenuAddItem(0, "Demorph!", 1, 0)
  unit:GossipSendMenu(plr)
end
 
function Gossip_Submenus(unit, event, plr, id, intid, code)
  if(intid == 1) then
    plr:DeMorph()
    plr:SendBroadcastMessage("You have now been demorphed!")
    plr:GossipComplete()
  end
end
 
RegisterUnitGossipEvent(NPCID, 1, "On_Gossip")
RegisterUnitGossipEvent(NPCID, 2, "Gossip_Submenus")
```
