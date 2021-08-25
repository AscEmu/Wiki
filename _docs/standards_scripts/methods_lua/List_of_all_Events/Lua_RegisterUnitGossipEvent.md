---
title: Lua_RegisterDummySpell
type: list_of_all_events
layout: single_markdown
position: 2
---

# Lua RegisterUnitGossipEvent

## Description

You use registers to register functions to the server.      
With RegisterUnitGossipEvent you can register a gossip event.    

## Values

Event                            | Event ID   | Remark
---------------------------------| ---------- | ---------- 
GOSSIP_EVENT_ON_TALK             | 1          | When a player talks to the npc this function is activated
GOSSIP_EVENT_ON_SELECT_OPTION    | 2          | When a player selects an intid in a menu this function is activated
GOSSIP_EVENT_ON_END              | 3          | When a gossip is ended this function is activated

## Usage/Example

```
--[[ Beginning of the menu.
Here we create a menu.
When a player talks to the npc this menu will be created. ]]--

function OnGossip(pUnit, event, pPlayer)
    if(pPlayer:IsInCombat() == true) then
    pUnit:SendChatMessageToPlayer(12, 0, "You can't use this while in combat!!", pPlayer)
    elseif(pPlayer:IsFriendly(pUnit) == true) then
    pUnit:GossipCreateMenu(100, pPlayer, 0)
    pUnit:GossipMenuAddItem(1, "t1", 1, 0)
    pUnit:GossipMenuAddItem(2, "t2", 2, 0)
    pUnit:GossipMenuAddItem(3, "t3", 3, 0)
    pUnit:GossipMenuAddItem(4, "t4", 4, 0)
    pUnit:GossipMenuAddItem(5, "t5", 5, 0)
    pUnit:GossipSendMenu(pPlayer)
    end
end

--[[ Beginning of menu END END ]]--
 
--[[ Beginning of menu Select ..
When the user selects one of the above in the menu..
t1, t2, t3 etc.. We check it here:
Please note I did not cover all intids only 3. ]]--

function OnSelect(pUnit, event, pPlayer, id, intid, code)
        pPlayer:GossipComplete() -- since we want it to close ALWAYS we put it before the ifs
    if(intid == 1) then
        pUnit:SendChatMessageToPlayer(12, 0, "You clicked t1!", pPlayer)
        pPlayer:PlayerSendChatMessage(1, 0, "I clicked t1!")
    elseif(intid == 2) then
        pUnit:SendChatMessageToPlayer(12, 0, "You clicked t2!", pPlayer)
        pPlayer:PlayerSendChatMessage(1, 0, "I clicked t2!")
    elseif(intid == 3) then
        pUnit:SendChatMessageToPlayer(12, 0, "You clicked t3!", pPlayer)
        pPlayer:PlayerSendChatMessage(1, 0, "I clicked t3!")
    end
end
```

***Please note with caution:***         
The following code will reset your talents when the gossip is ended!     

```
function GossipOnEnd(pUnit, event)
     pPlayer:GossipMiscAction(9, pUnit)
     pPlayer:SendBroadcastMessage("Your talents have been reset.")
end
```

And now to register the events:     

```
RegisterUnitGossipEvent(NPC-ID, 1, "OnGossip")    -- will register the first function
RegisterUnitGossipEvent(NPC-ID, 2, "OnSelect")    -- will register the second function
RegisterUnitGossipEvent(NPC-ID, 3, "GossipOnEnd") -- will register the second function
```

You must change ***NPC-ID*** with the id of your npc that you will want to register this script on.
