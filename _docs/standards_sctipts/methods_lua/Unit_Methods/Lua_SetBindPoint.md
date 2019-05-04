---
title: Lua_SetBindPoint
type: unit_methods
layout: single_markdown
position: 79
---

# Lua SetBindPoint

## Description

Changes the players Bind Point (Hearthstone point) to the location indicated.

## Usage/Example

```
function PlayerHearth(unit, event, player)
  unit:GossipCreateMenu(100, player, 0)
  unit:GossipMenuAddItem(0, "I would like to make this place my home", 1, 0)
  unit:GossipSendMenu(player)
end
 
function SubPlayerHearth(unit, event, player, id, intid, code)
  if(intid == 1) then
    player:SetBindPoint(player:GetX(), player:GetY(), player:GetZ(), player:GetZoneId(), player:GetMapId())
  end
end
 
RegisterUnitGossipEvent(X, 1, "PlayerHearth")
RegisterUnitGossipEvent(X, 2, "SubPlayerHearth")
```
