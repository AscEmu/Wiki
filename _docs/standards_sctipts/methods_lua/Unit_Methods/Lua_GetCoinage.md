---
title: Lua_GetCoinage
type: unit_methods
layout: single_markdown
position: 8
---

# Lua GetCoinage

## Description

Returns the amount of copper a player has.

## Gold/Silver/Copper Example

--------------------- | ----------
100 Copper            | 1 Silver
1000 Copper (1k)      | 10 Silver
10000 Copper (10k)    | 1 Gold
100000 Copper (100k)  | 10 Gold
1000000 Copper (1M)   | 100 Gold

10 Gold 53 Silver 14 Copper = 105314

## Usage/Example

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