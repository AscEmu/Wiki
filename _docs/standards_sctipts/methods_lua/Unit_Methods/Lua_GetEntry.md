---
title: Lua_GetEntry
type: standards_lua
layout: single_markdown
position: 18
---

# Lua GetEntry

## Description

Returns the entry ID of the unit. Works for NPC as well as for GO

## Syntax

```
entry = pUnit:GetEntry()
```

## Usage/Example

```
function CheckUnits(pUnit)
  for k, pFriend in pairs(pUnit:GetInRangeFriends()) do
    if(pFriend:GetEntry()==101) and (pFriend ~= nil) then
      pFriend:SendChatMessage(12, 0, "You found me!")
    end
  end
end
```

Checks to see if any unit with the entry 101 is nearby, if there is the unit will say "You found me!".