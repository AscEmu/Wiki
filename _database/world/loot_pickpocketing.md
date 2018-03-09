---
title: loot_pickpocketing
type: worlddb
category: L
layout: single_markdown
---

# loot_pickpocketing
This table contains the loots for pick pocket creatures. 

## Structure

Field                                                                                                        | Type     | Default | Comment          
------------------------------------------------------------------------------------------------------------ | -------- | ------- | -----------------
[entryid](#entryid)                             | int(10)  | 0       |                  
[itemid](#itemid)                               | int(11)  | 0       |                  
[normal10percentchance](#normal10percentchance) | float(5) | 0.00    | Floating? Really?
[normal25percentchance](#normal25percentchance) | float(5) | 0.00    |                  
[heroic10percentchance](#heroic10percentchance) | float(5) | 0.00    |                  
[heroic25percentchance](#heroic25percentchance) | float(5) | 0.00    |                  
[mincount](#mincount)                           | int(10)  | 0       |                  
[maxcount](#maxcount)                           | int(10)  | 0       |                  

### entryid

The Entry ID of the zone from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)").

### itemid

The Entry ID of the Item that will drop, from [item_properties](/Wiki/database/world/item_properties/ "Item properties").

### normal10percentchance

The percent chance (1 - 100) you have of getting the item from Normal 10-mode.

### normal25percentchance

The percent chance (1 - 100) you have of getting the item from Normal 25-mode.

### heroic10percentchance

The percent chance (1 - 100) you have of getting the item from Heroic 10-mode.

### heroic25percentchance

The percent change (1 - 100) you have of getting the item from Heroic 25-mode.

### mincount

The minimum amount of the Item that will drop.

### maxcount

The maximum amount of the Item that will drop.