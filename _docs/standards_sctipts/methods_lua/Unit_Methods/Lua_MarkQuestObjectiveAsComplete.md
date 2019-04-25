---
title: Lua_MarkQuestObjectiveAsComplete
type: standards_lua
layout: single_markdown
position: 149
---

# Lua MarkQuestObjectiveAsComplete

## Description

When is known the moment that a bugged quest is completed, this function will mark it with this state (completed) and then can be delivered to the quest receiver.

```
pPlayer:MarkQuestObjectiveAsComplete(questid, objective)
```

questid: is the id number of the quest.                
objective: is a numeric value started from zero, depending of the objectives.                       

Read the quest first and determine what is required, if only one issue is asked, should be enough to call the function this way:

```
MarkQuestObjectiveAsComplete(123, 0) -- this is just an example, does not necessarily apply to quest id 123
```

## Usage/Example

As an example, the quest id number 8889 known as Deactivating the Spire requires the player to deactivate three power sources, here this function is used intensively to fix the quest:

```
GAMEOBJECT_EVENT_ON_USE = 4

RegisterGameObjectEvent(180916, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource1")
RegisterGameObjectEvent(180919, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource2")
RegisterGameObjectEvent(180920, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource3")

function DuskwitherSpirePowerSource1(stone,event)
  player:MarkQuestObjectiveAsComplete(8889, 0)
end

function DuskwitherSpirePowerSource2(stone,event)
   player:MarkQuestObjectiveAsComplete(8889, 1)
end

function DuskwitherSpirePowerSource3(stone,event)
   player:MarkQuestObjectiveAsComplete(8889, 2)
end
```
