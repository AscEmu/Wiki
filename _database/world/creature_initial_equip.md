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
[creature_entry](#creature_entry)                                                                  | mediumint(8) |         |        
[build](#build)                                                                                    | int unsigned  | 5875    | key
[itemslot_1](#itemslot_1)                                                                          | mediumint(8) | 0       |        
[itemslot_2](#itemslot_2)                                                                          | mediumint(8) | 0       |        
[itemslot_3](#itemslot_3)                                                                          | mediumint(8) | 0       |        

### creature_entry

The unique entry from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### build

Client build the row is valid from. The server loads, for every entry, the row with the highest build that does not exceed its own build, so a row is only needed where the data differs from the previous build.
### itemslot_1

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the mainhandslot

### itemslot_2

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the offhand slot

### itemslot_3

The item entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties"), for the ranged slot