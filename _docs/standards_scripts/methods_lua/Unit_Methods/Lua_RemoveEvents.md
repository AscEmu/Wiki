---
title: Lua_RemoveEvents
type: unit_methods
layout: single_markdown
position: 135
---

# Lua RemoveEvents

## Description

RemoveEvents() - is used to remove events from a Unit.

It is commonly used when a boss dies or leaves combat.

## Usage/Example

```lua
function Boss_Dead(unit, event)
    Unit:SendChatMessage(14, 0, "Now I can no longer use any events from before this!")
    Unit:RemoveEvents()
end

-- Using RemoveEvents() in the middle of a function, unless you know what you're doing, can break your script. Use it with caution.
```
