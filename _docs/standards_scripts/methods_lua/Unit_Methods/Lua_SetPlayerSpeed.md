---
title: Lua_SetPlayerSpeed
type: unit_methods
layout: single_markdown
position: 89
---

# Lua SetPlayerSpeed

## Description

With this you can change the player's base speed. The modified speed is lost upon logout.

## Syntax

```
pPlayer:SetPlayerSpeed(value)
```

## Usage/Example

Please note that if you set the speed value too high your wow might crash!

```
function SetPlayerSpeed(pUnit, event, pPlayer) -- please note these values!
  pPlayer:GossipComplete() -- ends the gossip
  if(pPlayer:IsGm() == true) then 
    pPlayer:SetPlayerSpeed(25) -- sets the speed to a 25!
  else
    pUnit:SendChatMessageToPlayer(12, 0, "You are not a gm!", pPlayer)
  end
end
```
