---
title: Lua_GetCoinage
type: standards_lua
layout: single_markdown
position: 8
---

# Lua GetCoinage

## Description

Returns the amount of copper a player has.

## Gold/Silver/Copper Examples

----------------------------- | ---------- 
1 Copper                      | 1
1 Silver                      | 100
1 Gold                        | 10000

----------------------------- | ---------- 
10 Gold 53 Silver 14 Copper   | 105314

## Usage/Examples

```
function DealCost(player)
    if (intid == 1) and (player:GetCoinage() >= 5000000) then -- its in copper, and this is 500g
        player:DealGoldCost(5000000) -- takes the gold in copper
    -- then do whatever you want in here.
    elseif (player:GetCoinage() < 5000000) then
        player:SendAreaTriggerMessage("you do not have enough gold!")
    end
end
```