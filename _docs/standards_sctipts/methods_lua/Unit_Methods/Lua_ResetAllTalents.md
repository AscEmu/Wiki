---
title: Lua_ResetAllTalents
type: unit_methods
layout: single_markdown
position: 137
---

# Lua ResetAllTalents

## Usage/Example

```
ResetAllTalents(); -- no other function
 
-- example
function Resetter_OnTalk(Unit, event, player)
  Unit:GossipCreateMenu(50, player, 0)
  Unit:GossipMenuAddItem(0, "Remove talents", 1, 0)
  Unit:GossipSendMenu(player)
end
 
function Resetter_OnSelect(unit, event, player, id, intid, code)
  if (intid == 1) then
  unit:SendChatMessage(12, 0, "Removing players talents")
  player:ResetAllTalents() 
  Unit:GossipComplete(player)
end
end
 
RegisterUnitGossipEvent(40002, 1, "Resetter_OnTalk")
RegisterUnitGossipEvent(40002, 2, "Resetter_OnSelect")
```
