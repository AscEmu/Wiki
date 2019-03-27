---
title: Lua_GetSelection
type: standards_lua
layout: single_markdown
position: 52
---

# Lua GetSelection

## Description

Returns the selected unit by the player.

## Usage/Example

This command can be used to select a player as a target, like so:

```
function ExampleFunction(pPlayer)
  if(pPlayer:GetSelection()~=nil and pPlayer:GetSelection():IsPlayer()==false) then
    pPlayer:GetSelection():SendChatMessage(12, 0, "Hey!")
  end
end
```
