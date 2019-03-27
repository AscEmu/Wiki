---
title: Lua_GetManaPct
type: standards_lua
layout: single_markdown
position: 35
---

# Lua GetManaPct

## Description

Used to find the percent of mana the target has at the time it is called. Will return a numeric value and can be used on units and players.

## Usage

```
Unit:GetManaPct()
player:GetManaPct()
```

## Usage/Example

```
function NPCScript(Unit)
  if Unit:GetManaPct() >= 50 then
    Unit:CastSpellOnTarget(5)
  end
end
```
