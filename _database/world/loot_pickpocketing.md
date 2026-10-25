---
title: loot_pickpocketing
type: worlddb
category: L
layout: single_markdown
---

# loot_pickpocketing
This table contains the pickpocketing loot of creatures.

## Structure

Field                              | Type             | Default | Comment
---------------------------------- | ---------------- | ------- | -------
[entryid](#entryid)                | int unsigned     |         | key
[build](#build)                    | int unsigned     | 0       | key
[difficulty](#difficulty)          | tinyint unsigned | 0       | key
[itemid](#itemid)                  | int unsigned     | 0       | key
[groupid](#groupid)                | int unsigned     | 0       | key
[chance](#chance)                  | float            | 0       |
[groupindex](#groupindex)          | tinyint unsigned | 0       |
[mincount](#mincount)              | int unsigned     | 1       |
[maxcount](#maxcount)              | int unsigned     | 1       |
[is_currency](#is_currency)        | tinyint unsigned | 0       |

A row is either an item (`itemid` set, `groupid` 0) or a link to a group of [loot_groups](/Wiki/database/world/loot_groups/ "Loot groups") (`groupid` set, `itemid` 0). The rows of an entry form one loot set per build and difficulty.

### entryid

The entry ID of the creature from the [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### build

Client build the loot set is valid from. The server loads, for every entry, the rows with the highest build that does not exceed its own build. A set is only stored where the loot differs from the previous build.

### difficulty

The client difficulty id the set applies to, 0 = every difficulty. From 10.x on the dumps carry a set per difficulty.

### itemid

The entry ID of the item that drops, from [item_properties](/Wiki/database/world/item_properties/ "Item properties"). 0 for a group link.

:cata: and later versions, when [is_currency](#is_currency) is enabled, this value contains a currency ID from **CurrencyTypes** instead of an item entry.

### groupid

The group of [loot_groups](/Wiki/database/world/loot_groups/ "Loot groups") that is rolled instead of an item. 0 for an item row.

### chance

The percent chance (0 - 100) of the row. For a row with its own roll ([groupindex](#groupindex) 0) it is the drop chance. Inside an exclusive group it is the share of the row; rows with chance 0 split the rest of the group equally. A group link rolls its group with this chance for every roll.

### groupindex

0 = the row rolls on its own. Every other value forms an exclusive group with the rows of the same index: exactly one of them drops.
A group link always rolls on its own; its groupindex names the exclusive group inside the linked group that is rolled, 0 rolls the whole group.

### mincount

The minimum amount of the item.

### maxcount

The maximum amount of the item. For a group link it is the number of rolls of the group.

### is_currency

1 = [itemid](#itemid) is a currency, 0 = an item.
