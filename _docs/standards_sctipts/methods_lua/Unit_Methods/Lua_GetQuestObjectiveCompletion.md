---
title: Lua_GetQuestObjectiveCompletion
type: standards_lua
layout: single_markdown
position: 151
---

# Lua GetQuestObjectiveCompletion

## Usage/Example

```
function Creature_OnDeath(pUnit, event, pKiller)
  if (player:GetQuestObjectiveCompletion(1337, 0) == 0) then
    player:AdvanceQuestObjective(1337, 0)
  end
end
```
