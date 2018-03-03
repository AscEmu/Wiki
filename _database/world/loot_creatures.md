---
title: loot_creatures
type: worlddb
category: L
layout: single_markdown
---

# loot_creatures
This table contains the loots for creatures. 

## Structure

Field                                                                                                    | Type     | Default | Comment
-------------------------------------------------------------------------------------------------------- | -------- | ------- | -------
[entryid](#entryid)                             | int(10)  | 0       |        
[itemid](#itemid)                               | int(11)  | 0       |        
[normal10percentchance](#normal10percentchance) | float(5) | 0.00    |        
[normal25percentchance](#normal25percentchance) | float(5) | 0.00    |        
[heroic10percentchance](#heroic10percentchance) | float(5) | 0.00    |        
[heroic25percentchance](#heroic25percentchance) | float(5) | 0.00    |        
[mincount](#mincount)                           | int(10)  | 0       |        
[maxcount](#maxcount)                           | int(10)  | 0       |        

### entryid

The Entry ID of the creature from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)").

### itemid

The Entry ID of the Item that will drop, from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)").

### normal10percentchance

The percent chance (0 - 100) that the Item will drop outside instances, in normal dungeons, normal 10 mode raids, old 25 and 40 man raids.

### normal25percentchance

The percent chance (0 - 100) that the Item will drop in heroic dungeons and in Normal 25-mode raids.

### heroic10percentchance

The percent chance (0 - 100) that the Item will drop in Heroic 10-mode.

### heroic25percentchance

The percent chance (0 - 100) that the Item will drop in Heroic 25-mode.

### mincount

The minimum amount of the Item that will drop.

### maxcount

The maximum amount of the Item that will drop.