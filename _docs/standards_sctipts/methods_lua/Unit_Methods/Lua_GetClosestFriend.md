---
title: Lua_GetClosestFriend
type: unit_methods
layout: single_markdown
position: 6
---

# Lua GetClosestFriend

## Description

Will get the closest unit that is considered 'friendly'.

## Syntax

```
pFriend = pUnit:GetClosestFriend()
```

## Usage/Example

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