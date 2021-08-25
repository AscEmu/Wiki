---
title: Lua_GossipMiscAction
type: unit_methods
layout: single_markdown
position: 73
---

# Lua GossipMiscAction

## Description

Does an action based upon the arguments passed.

```
MISC_ACTION_INVENTORY_LIST            = 1   -- (ID, pPointer)
MISC_ACTION_TRAINING_MENU             = 2   -- (ID, pPointer)
MISC_ACTION_HEARTHSTONE_BIND          = 3   -- (ID, pPointer)
MISC_ACTION_BANK_WINDOW               = 4   -- (ID, pPointer)
MISC_ACTION_BATTLEGROUND_WINDOW       = 5   -- (ID, pPointer, pBattlegroundID)
MISC_ACTION_AUCTION_WINDOW            = 6   -- (ID, pPointer)
MISC_ACTION_TABARD_DESIGN             = 7   -- (ID, pPointer)
MISC_ACTION_SPIRIT_HEALER             = 8   -- (ID, pPointer)
MISC_ACTION_PLAYER_TALENT_RESET       = 9   -- (ID)
MISC_ACTION_PET_TALENT_RESET          = 10  -- (ID)
```

## Usage/Example

```
function NPCGossip_Select(pUnit, event, pPlayer, id, pIntid)
  if (pIntid == 1) then
    pPlayer:GossipMiscAction(9, pUnit)
    pPlayer:SendBroadcastMessage("Your talents have been reset.")
    pPlayer:GossipComplete()
  end
end
```