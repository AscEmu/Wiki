---
title: Lua_GetTeam
type: standards_lua
layout: single_markdown
position: 61
---

# Lua GetTeam

## Syntax

```
int Team = pPlayer:GetTeam()
```

## Description

Will return a numerical value 0 or 1. 

0 = Alliance      
1 = Horde      

## Usage/Example

```
function OnEnterCombat(pUnit, event, pAttacker)
  if(pAttacker:GetTeam() == 0) then
    pUnit:SendChatMessageToPlayer(14, 0, "Damn you Alliance!", pAttacker)
  else
    pUnit:SendChatMessageToPlayer(14, 0, "Damn you Horde!", pAttacker)
  end
end
```
