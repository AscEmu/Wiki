---
title: creature_initial_equip
type: worlddb
category: C
layout: single_markdown
---

# creature_initial_equip
Contains standard itemslot items for creatures

## Structure

Field                                                                                              | Type         | Default | Comment
-------------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[creature_entry](#creature_entry) | mediumint(8) |         |        
[itemslot_1](#itemslot_1)         | mediumint(8) | 0       |        
[itemslot_2](#itemslot_2)         | mediumint(8) | 0       |        
[itemslot_3](#itemslot_3)         | mediumint(8) | 0       |        

### creature_entry

The unique entry from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)")

### itemslot_1

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the mainhandslot

### itemslot_2

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the offhand slot

### itemslot_3

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the ranged slot