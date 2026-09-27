---
title: loot_creatures
type: worlddb
category: L
layout: single_markdown
---

# loot_creatures
This table contains the loot items and currencies that can be dropped by creatures.

## Structure

Field                                                                                                    | Type             | Default | Comment          
-------------------------------------------------------------------------------------------------------- | ---------------- | ------- | -------
[entryid](#entryid)                                                                                      | int unsigned     | 0       |
[itemid](#itemid)                                                                                        | int              | 0       |
[normal10percentchance](#normal10percentchance)                                                          | float            | 0.00    |
[normal25percentchance](#normal25percentchance)                                                          | float            | 0.00    |
[heroic10percentchance](#heroic10percentchance)                                                          | float            | 0.00    |
[heroic25percentchance](#heroic25percentchance)                                                          | float            | 0.00    |
[mincount](#mincount)                                                                                    | int unsigned     | 1       |
[maxcount](#maxcount)                                                                                    | int unsigned     | 1       |
[comment](#comment)                                                                                      | varchar(100)     | ''      |
[is_currency](#is_currency)                                                                              | tinyint unsigned | 0       |

### entryid

The Entry ID of the creature from the [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### itemid

The Entry ID of the item that can be dropped, from [item_properties](/Wiki/database/world/item_properties/ "Item properties").

**For Cata** and later versions, when [is_currency](#is_currency) is enabled, this value contains a currency ID from **CurrencyTypes.dbc** instead of an **item_properties** entry ID.

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

The maximum amount of the Item or currency that can be dropped.

### comment

An optional comment describing the loot entry.

### is_currency

Determines whether **itemid** contains an item ID or a currency ID.

When set to **0**, **itemid** refers to an entry from [item_properties](/Wiki/database/world/item_properties/ "Item properties").

When set to a non-zero value, **itemid** refers to a currency ID from **CurrencyTypes.dbc**.

This field is available for Cata and later versions and is always the last column in the loot table.
