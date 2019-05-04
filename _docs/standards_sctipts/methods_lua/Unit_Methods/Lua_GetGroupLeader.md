---
title: Lua_GetGroupLeader
type: unit_methods
layout: single_markdown
position: 146
---

# Lua GetGroupLeader

## Description

Returns a object of the player's group leader.

## Syntax

```
pLeader = pPlayer:GetGroupLeader()
```

## Usage/Example

```
function NPC_GossipHello(pUnit, event, pPlayer)
 
if (pPlayer:IsInGroup()) then
  pUnit:GossipCreateMenu(100, pPlayer, 0)
    if (pPlayer:GetName() == pPlayer:GetGroupLeader():GetName()) then 
      pUnit:GossipMenuAddItem(0, "My companions are all accounted for, Muradin. Let's go!", 5, 0)
    else
      pUnit:GossipMenuAddItem(0, "I'm not the raid leader...", 6,  0)
    end
  pUnit:GossipSendMenu(pPlayer)
end
 
end
 
RegisterUnitGossipEvent(50006, 1, NPC_GossipHello)
```
