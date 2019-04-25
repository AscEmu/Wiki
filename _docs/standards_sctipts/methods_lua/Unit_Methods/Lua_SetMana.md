---
title: Lua_SetLevel
type: standards_lua
layout: single_markdown
position: 84
---

# Lua SetLevel

## Description

Sets the targeted unit's mana to a number. (This is not shown in the unit's mana bar)

## Usage/Example

```
local function SetMana(pUnit)
  local Mana = pUnit:GetMana();
  if(Mana>=1000) then
    pUnit:SendChatMessage(12, 0, "I have more than 1000 mana now!");
    pUnit:SetMana(999);
  end
end
```
