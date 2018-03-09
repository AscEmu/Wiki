---
title: loot_gameobjects
type: worlddb
category: L
layout: single_markdown
---

# loot_gameobjects
This table contains the loots for gameobjects. 

## Structure

Field                                                                                                      | Type     | Default | Comment          
---------------------------------------------------------------------------------------------------------- | -------- | ------- | -----------------
[entryid](#entryid)                             | int(10)  | 0       |                  
[itemid](#itemid)                               | int(11)  | 0       |                  
[normal10percentchance](#normal10percentchance) | float(5) | 0.00    | Floating? Really?
[normal25percentchance](#normal25percentchance) | float(5) | 0.00    |                  
[heroic10percentchance](#heroic10percentchance) | float(5) | 0.00    |                  
[heroic25percentchance](#heroic25percentchance) | float(5) | 0.00    |                  
[mincount](#mincount)                           | int(10)  | 0       |                  
[maxcount](#maxcount)                           | int(10)  | 0       |                  

### entryid

The Entry ID of the loot. This referres to [gameobject_properties](http://www.ascemu.org/wiki/index.php?title=Gameobject_properties "Gameobject properties") table parameter_1 (Only for type 3 and 25)

### itemid

The Entry ID of the Item that will drop, from [item_properties](/Wiki/database/world/item_properties/ "Item properties").

### normal10percentchance

The percent chance (1 - 100) that the Item will drop outside instances, in normal dungeons, normal 10 mode raids, old 25 and 40 man raids.

### normal25percentchance

The percent chance (1 - 100) that the Item will drop in heroic dungeons and in Normal 25-mode raids.

### heroic10percentchance

The percent chance (1 - 100) that the Item will drop in Heroic 10-mode.

### heroic25percentchance

The percent chance (1 - 100) that the Item will drop in Heroic 25-mode.

### mincount

The minimum amount of the Item that will drop.

### maxcount

The maximum amount of the Item that will drop.