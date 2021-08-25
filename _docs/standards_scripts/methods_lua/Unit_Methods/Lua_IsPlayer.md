---
title: Lua_IsPlayer
type: unit_methods
layout: single_markdown
position: 108
---

# Lua IsPlayer

## Description

Returns true if the unit is a player, false if the unit is not.

## Syntax

```
:IsPlayer() -- No Arguments
```

## Usage/Example

```
function SomeUnit_OnEnterCombat(pUnit, Event) 
  if not pUnit:IsPlayer() then 
    pUnit:SendChatMessage(11, 0, "Yiieeeeeee! Me run!") 
  end 
end
```
