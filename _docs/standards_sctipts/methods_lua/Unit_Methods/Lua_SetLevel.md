---
title: Lua_SetLevel
type: standards_lua
layout: single_markdown
position: 83
---

# Lua SetLevel

## Description

Sets the players level to the # indicated.

## Usage/Example

```
function SetPlayerLevel(player)
  if(player:GetPlayerLevel()==79) then
    player:SetLevel(player:GetPlayerLevel()+1)
  end
end
```
