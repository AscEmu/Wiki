---
title: Lua_GetMana
type: standards_lua
layout: single_markdown
position: 34
---

# Lua GetMana

## Description

This method is used to find the mana in an absolute value of the unit when the method is called. Will return a numeric value and can be used on both units and players.

## Usage

```
Unit:GetMana()
```

or

```
Player:GetMana()
```

## Usage/Example

Note: This example uses methods not included in this page. Please see the corresponding page for usage and definition.

```
function Restore_Mana(pUnit)
  local Mana = pUnit:GetMana()
  local MaxMana = pUnit:GetMaxMana()
  if Mana <= 2500 then
    Unit:SetMana(MaxMana)
  end
end
```
