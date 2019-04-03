---
title: Lua_StartTaxi
type: standards_lua
layout: single_markdown
position: 144
---

# Lua StartTaxi

## Description

This is an example of making a FlightPath!

## Usage/Example

```
local GetDisplay = 25833 -- Change this to a flying mount you want
local NPCID = 20142      -- Default NPC ID

local GMIslandtomobs = {
  {1, -8179.878418, -4885.860352, 45.367519},
  {1, -8184.742676, -4879.410156, 37.321690},
  {1, -8124.420410, -4905.508789, 26.663929},
  {1, -8077.549805, -4858.413574, 6.991412},
  {1, -8120.988770, -4837.802246, -8.874550},
  {1, -8151.022461, -4889.305176, -25.731344},
  {1, -8098.487793, -4915.893066, -39.692879},
  {1, -8070.018066, -4834.926270, -63.760189},
  {1, -8105.192871, -4701.104980, -98.612312},
  {1, -8313.958984, -4587.782715, -160.495056},
  {1, -8489.207031, -4687.183105, -193.491455},
  {1, -8525.925781, -4550.406738, -197.221741},
  {1, -8352.893555, -4320.518555, -207.788544}
}

function Flight_Master_OnGossipTalk(pUnit, event, player, pMisc)
  pUnit:GossipCreateMenu(50, player, 0)
  pUnit:GossipMenuAddItem(0, "Take me to your master", 1, 0)
  pUnit:GossipMenuAddItem(0, "Nevermind", 2, 0)
  pUnit:GossipSendMenu(player)
end

function Flight_Master_OnGossipSelect(pUnit, event, player, id, intid, code, pMisc)
  if (intid == 1) then
    pUnit:GossipCreateMenu(50, player, 0)
    pUnit:GossipMenuAddItem(0, "Take me to your master", 3, 0)
    pUnit:GossipSendMenu(player)
  end
 
  if (intid == 2) then
    player:GossipComplete()
  end
 
  if (intid == 3) then
    CustomFlightPath = LuaTaxi:CreateTaxi()
    for i, FP in ipairs(GMIslandtomobs) do
      CustomFlightPath:AddPathNode(FP[1], FP[2], FP[3], FP[4])
    end
      player:StartTaxi(CustomFlightPath, GetDisplay)
    player:GossipComplete()
  end
end
 
RegisterUnitGossipEvent(20142, 1, "Flight_Master_OnGossipTalk")
RegisterUnitGossipEvent(20142, 2, "Flight_Master_OnGossipSelect")
```
