---
title: Lua_GetClosestEnemy
type: unit_methods
layout: single_markdown
position: 5
---

# Lua GetClosestEnemy

## Description

Will get the closest unit that is considered 'hostile' (so 'unfriendly').

## Syntax

```
pEnemy = pUnit:GetClosestEnemy()
```

## Usage/Example

```
function OnEnterWorld(event, pPlayer)
  if( pPlayer:GetClosestEnemy() ~=nil ) then
    -- Do stuff here if enemy found
  else 
    -- Do stuff here if no enemy
  end
end
RegisterServerHook(4, "OnEnterWorld")
```