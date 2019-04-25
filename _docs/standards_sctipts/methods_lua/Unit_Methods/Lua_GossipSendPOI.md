---
title: Lua_GossipSendPOI
type: standards_lua
layout: single_markdown
position: 72
---

# Lua GossipSendPOI

## Description

Adds a red flag mark on the player's map depending on the co-ordinates specified.

## Usage/Example

```
function NPCGossip_Select(pUnit, _, pPlayer, id, pIntid)
  if (pIntid == 1) then
    pUnit:GossipSendPOI(-8916.87, 622.87, 7, 6, 0, "Stormwind Bank")
  end
end
```