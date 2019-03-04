---
title: Lua_GetDisplay
type: standards_lua
layout: single_markdown
position: 14
---

# Lua GetDisplay

## Description

Returns the Display ID of a unit.

## Usage/Examples

```
function CheckDisplayId(Unit)
  if(Unit:GetDisplay()==10990) then
    Unit:SendChatMessage(12, 0, "I'm a Panda!")
  end
end
```