---
title: Lua_GetItemCount
type: standards_lua
layout: single_markdown
position: 31
---

# Lua GetItemCount

## Description

Returns the number of items in a player's inventory to the NPC script. You can also use HasItem() if you are just looking for one non-stackable item. HasItem is a bool (if) command, must be used with an "if" statement. Examples and description here:

## Syntax

```
GetItemCount(ItemID)
```

## Usage/Example

Used with HasItem:

```
function NPC_Count(Unit, Event)
  if player:HasItem(ItemID) then
    player:GetItemCount(ItemID)
end
end
```

Or, used without HasItem:

```
function NPC_Count(Unit, Event)
  if (player:GetItemCount(ItemID)) == 5 then
    Unit:SendChatMessage(14, 0, "Example")
end
end
```