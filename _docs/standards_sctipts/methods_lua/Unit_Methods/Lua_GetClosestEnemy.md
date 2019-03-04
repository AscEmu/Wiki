---
title: Lua_GetClosestEnemy
type: standards_lua
layout: single_markdown
position: 5
---

# Lua GetClosestEnemy

## Syntax

```
pEnemy = pUnit:GetClosestEnemy()
```

## Description

Will get the closest unit that is considered 'hostile' (so 'unfriendly').

## Example

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