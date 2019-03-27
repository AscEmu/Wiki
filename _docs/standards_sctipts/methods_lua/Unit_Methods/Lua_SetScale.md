---
title: Lua_SetScale
type: standards_lua
layout: single_markdown
position: 91
---

# Lua SetScale

## Description

Sets the scale of the unit/target. Ranges from 0.1 upwards.

## Usage/Example

```
function ScaleChange (pUnit, Event)
pUnit:SetScale(3)
pUnit:SendChatMessage(12, 0, "My scale has now changed to 3!")
end
```
