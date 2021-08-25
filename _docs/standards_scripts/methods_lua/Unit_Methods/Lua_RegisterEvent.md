---
title: Lua_RegisterEvent
type: unit_methods
layout: single_markdown
position: 132
---

# Lua RegisterEvent

## Description

This command basically tells the server to register the next function you want to use. Each function in your script must be referenced by this command, or else the scripted unit will not use that function.

[You need to have unit events registered](/Wiki/docs/standards_scripts/methods_lua/List_of_all_Events) to the creature before you can use this function. To make a "dummy" register, if you are using gossip only for example, you can use this:
{: .info }

```
-- Register Dummy Event
RegisterUnitEvent(Entry, 18, function() return; end)
```

## Syntax

The FunctionName variable must match the name of the next function you want to call. (Do not use quotes if you are using a tabled function).                     
The Time variable is a delay timer, value is counted in milliseconds. So, if you want to register the next function in 3 seconds, you would enter 3000 in it's place.                              
The Counter is how many times you want the script to register that function. Set to anything higher than zero to register the function that many times, use zero to register it an infinite amount of times until the next function finishes completely. Zero is used mainly when using a command to check a specific value, such as "getHealthPct()".                   

```
pUnit:RegisterEvent(string FunctionName, int Time, int Counter)
```

## Usage/Example

- Example NPC onCombat

```
function NPC_OnCombat(pUnit, Event, pVictim)
  pUnit:RegisterEvent(NPC_Spell, 3000, 1)
end
 
function NPC_Spell(pUnit, Event)
  pUnit:CastSpell(5)
end
```

- Example Gossip NPC

```
local NPC_ID = 112199   -- Example ID !
local QUEST_ID = 112198   -- Example ID !
 
function NPC_OnQuestAccept(pPlayer, QuestId)
  pPlayer:GetSelection():SendChatMessage(12, 0, "So long ...")
  pPlayer:GetSelection():RegisterEvent(NPC_NextFunction, 1000, 1)  -- Fills the Dummy Event with the functions name 
end
 
function NPC_NextFunction(pGossipNPC, Event)
  pGossipNPC:SendChatMessage(12, 0, "... and thanks for all the fish!")
end
 
-- Register Quest OnQuestAccept
RegisterQuestEvent(QUEST_ID, 1, "NPC_OnQuestAccept")
-- Register NPC event with Dummy function
RegisterUnitEvent(NPC_ID, 18, function() return; end)
```

- Extra arguments

Sometimes you may want to pass more arguments than just Unit and event. This can be done with:

```
pUnit:RegisterEvent(function() <Name>(arguments); end, Time, Counter)
```

```
function NPC_OnCombat(pUnit, Event, pVictim)
  local NPC_Name = pUnit:GetName()
  pUnit:RegisterEvent(function() PrintArguments(pUnit, NPC_Name, pVictim:GetLevel()); end, 3000, 1)
end
 
function PrintArguments(pUnit, NPCname, Victimlevel)
  pUnit:SendChatMessage(12, 0, "My name: "..NPCname..". My target's level: "..Victimlevel)
end
```