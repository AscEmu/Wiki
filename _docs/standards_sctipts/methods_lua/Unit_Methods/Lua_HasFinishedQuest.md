---
title: Lua_HasFinishedQuest
type: unit_methods
layout: single_markdown
position: 150
---

# Lua HasFinishedQuest

## Description

Used when checking if players have finished a quest, returns true or false. Is a bool (if?) command, so must be used with an "if" statement.

## Usage/Example

```
function NPC_Quest_Check(Unit, Event)
  if player:HasFinishedQuest(#) then
    Unit:SendChatMessage(14, 0, "Message")
end
end
```

Make sure that when you register this command with an if statement that you end them both, all if statements require an "end".
