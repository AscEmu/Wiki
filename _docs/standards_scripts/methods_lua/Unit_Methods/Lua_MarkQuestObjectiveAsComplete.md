---
title: Lua_MarkQuestObjectiveAsComplete
type: unit_methods
layout: single_markdown
position: 149
---

# Lua MarkQuestObjectiveAsComplete

## Description

When the completion condition for a bugged quest is known, this method can be used to mark a specific quest objective as complete. The quest can then be turned in to the quest receiver.

```lua
pPlayer:MarkQuestObjectiveAsComplete(questid, objective)
```

- **questid**: The ID of the quest.
- **objective**: The numeric index of the objective, starting from zero.

Check the quest first to determine which objectives are required. If the quest has only one objective, it is enough to call the method as follows:

```lua
MarkQuestObjectiveAsComplete(123, 0) -- Example only; this does not necessarily apply to quest 123.
```

## Usage/Example

For example, quest 8889, *Deactivating the Spire*, requires the player to deactivate three power sources. This method can be used to complete each objective when the corresponding power source is used:

```lua
GAMEOBJECT_EVENT_ON_USE = 4

RegisterGameObjectEvent(180916, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource1")
RegisterGameObjectEvent(180919, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource2")
RegisterGameObjectEvent(180920, GAMEOBJECT_EVENT_ON_USE, "DuskwitherSpirePowerSource3")

function DuskwitherSpirePowerSource1(stone, event)
    player:MarkQuestObjectiveAsComplete(8889, 0)
end

function DuskwitherSpirePowerSource2(stone, event)
    player:MarkQuestObjectiveAsComplete(8889, 1)
end

function DuskwitherSpirePowerSource3(stone, event)
    player:MarkQuestObjectiveAsComplete(8889, 2)
end
```
