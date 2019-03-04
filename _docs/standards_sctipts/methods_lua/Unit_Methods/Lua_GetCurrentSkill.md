---
title: Lua_GetCurrentSkill
type: standards_lua
layout: single_markdown
position: 10
---

# Lua GetCurrentSkill

## Syntax

```
int Skillvalue = pPlayer:GetCurrentSkill( int Skillid )
```

## Description

With :GetCurrentSkill(id) you can find the level of a user's skill. A skill such as: One Handed Swords, Defense, Axes.

## Example

This example shows you how to check and display the user's Defense. Note: I use this for a Gossip NPC!

```
function OnGossip(pUnit, event, pPlayer)
  pUnit:GossipCreateMenu(100, pPlayer, 0)
  pUnit:GossipMenuAddItem(7, "What is my defense level?", 1, 0)
  pUnit:GossipSendMenu(pPlayer)
end

function OnSelect(pUnit, event, pPlayer, id, intid, code)
  if(intid == 1) then
    pPlayer:GossipComplete() -- ends the gossip
    local GetDefense = pPlayer:GetCurrentSkill(95) -- Defense Skill ID = 95
    pUnit:SendChatMessageToPlayer(12, 0, 'Your defense skill level is ' ..GetDefense, pPlayer)
  end
end
```