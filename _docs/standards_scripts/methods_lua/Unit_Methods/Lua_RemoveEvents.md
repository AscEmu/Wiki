---
title: Lua_RemoveEvents
type: unit_methods
layout: single_markdown
position: 135
---

# Lua RemoveEvents

## Description

RemoveEvents() Is used to remove events from a Unit.

It is commonly used when a boss dies or leaves combat.

## Usage/Example

```
function Boss_Dead(unit, event)
Unit:SendChatMessage(14, 0, "Now I can no longer use any events from before this!")
Unit:RemoveEvents()
end

-- Putting RemoveEvents() in the middle of a function, unless your knowing what you're doing, you'll bug your script. Use it with caution.
```
