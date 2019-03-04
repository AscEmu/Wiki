---
title: Lua_GetClosestFriend
type: standards_lua
layout: single_markdown
position: 6
---

# Lua GetClosestFriend

## Syntax

```
pFriend = pUnit:GetClosestFriend()
```

## Description

Will get the closest unit that is considered 'friendly'.

## Example

```
function OnEnterWorld(event, pPlayer)
  if( pPlayer:GetClosestFriend() ~=nil ) then
    -- Do stuff here if there is a friend
  else
    -- Do stuff here if no friend
  end
end
RegisterServerHook(4, "OnEnterWorld")
```