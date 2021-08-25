---
title: Lua_GetName
type: unit_methods
layout: single_markdown
position: 41
---

# Lua GetName

## Description

Returns the name of a unit or gameobject.

## Usage/Example

```
function Someone_OnEnterCombat(pUnit, Event)
  msg = string.format("My name is %s and i will kill you!", pUnit:GetName())
  pUnit:SendChatMessage(11,0,msg)
end

RegisterEvent(XX, 0, "Someone_OnEnterCombat")
```
