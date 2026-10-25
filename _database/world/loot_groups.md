---
title: loot_groups
type: worlddb
category: L
layout: single_markdown
---

# loot_groups
This table contains the loot groups the loot tables link to. A group is a reusable list of items that several creatures, gameobjects or items share, for example the world drops of a level range or the disenchant results of an item quality.

## Structure

Field                              | Type             | Default | Comment
---------------------------------- | ---------------- | ------- | -------
[groupid](#groupid)                | int unsigned     |         | key
[build](#build)                    | int unsigned     | 0       | key
[itemid](#itemid)                  | int unsigned     | 0       | key
[group_link](#group_link)          | int unsigned     | 0       | key
[chance](#chance)                  | float            | 0       |
[groupindex](#groupindex)          | tinyint unsigned | 0       |
[mincount](#mincount)              | int unsigned     | 1       |
[maxcount](#maxcount)              | int unsigned     | 1       |

### groupid

The id of the group. The loot tables ([loot_creatures](/Wiki/database/world/loot_creatures/ "Loot creatures"), [loot_gameobjects](/Wiki/database/world/loot_gameobjects/ "Loot gameobjects"), [loot_items](/Wiki/database/world/loot_items/ "Loot items"), [loot_fishing](/Wiki/database/world/loot_fishing/ "Loot fishing"), [loot_pickpocketing](/Wiki/database/world/loot_pickpocketing/ "Loot pickpocketing"), [loot_skinning](/Wiki/database/world/loot_skinning/ "Loot skinning")) reference it in their `groupid` column. The disenchant groups use 900000 + the disenchant id of the item.

### build

Client build the group is valid from. The server loads, for every group, the rows with the highest build that does not exceed its own build.

### itemid

The entry ID of the item from [item_properties](/Wiki/database/world/item_properties/ "Item properties"). 0 for a link to another group.

### group_link

A nested group that is rolled in place of an item, 0 for an item row. Groups nest up to five levels deep.

### chance

The percent chance of the row. With [groupindex](#groupindex) 0 the row rolls on its own, inside an exclusive group the value is the share of the row and rows with chance 0 split the rest equally.

### groupindex

0 = own roll, every other value forms an exclusive group with the rows of the same index: one of them drops.
A nested group link always rolls on its own; its groupindex names the exclusive group inside the linked group that is rolled, 0 rolls the whole group.

### mincount

The minimum amount of the item.

### maxcount

The maximum amount of the item, for a nested group the number of its rolls.
