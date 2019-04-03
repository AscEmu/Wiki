---
title: Lua_IsGm
type: standards_lua
layout: single_markdown
position: 95
---

# Lua IsGm

## Description

A Boolean: determines if the player is GM or not.

## Usage/Example

```
function playercheck()
  for _,v in pairs(GetPlayersInWorld()) do
    if(v:IsGm()==true) then
      v:SendBroadcastMessage("Hey it's a GM!")
    end
  end
end
```
