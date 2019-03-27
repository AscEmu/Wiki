---
title: Lua_SetGender
type: standards_lua
layout: single_markdown
position: 81
---

# Lua SetGender

## Description

You can set the gender.

---- | ------
0    | Male
1    | Female

## Syntax

```
pPlayer:SetGender(int Gender)
```

## Usage/Example

```
-- Player must relog in order to make changes!! 
-- The player might be logged out automatically.
 
function ChangeGender(pPlayer)
  if(pPlayer:GetGender() == "0") then
    pPlayer:SetGender(1)
  elseif(pPlayer:GetGender() == "1") then
    pPlayer:SetGender(0)
  end
end
```

You can also check for a specific class in combination.

```
-- [[ Player must relog in order to make changes!! 
The player might be logged out automatically.]]--
 
function ChangeGender(pPlayer)
  if(pPlayer:GetGender() == "0" and pPlayer:GetPlayerClass() == "Warrior") then -- checks also if the user is a warrior
    pPlayer:SetGender(1)
  elseif(pPlayer:GetGender() == "1" and pPlayer:GetPlayerClass() == "Priest") then -- checks also if the user is a priest
    pPlayer:SetGender(0)
  end
end
```
