---
title: Lua_GetClosestPlayer
type: unit_methods
layout: single_markdown
position: 7
---

# Lua GetClosestPlayer

## Description

Used when you want the unit to target the closest player in range. Target must be a player and is a unit-only command. It is recommended to add nil checks after registering this command.

## Syntax

```
pPlayer = pUnit:GetClosestPlayer()
```

## Usage/Example

```
function OnEnterWorld(event, pPlayer)
  if(pPlayer:GetClosestPlayer() ~=nil ) then
    -- Do stuff here if another player was found
  end
end
RegisterServerHook(4, "OnEnterWorld")
```