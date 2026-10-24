---
title: item_randomsuffix
type: worlddb
category: I
layout: single_markdown
---

# item_randomsuffix
This table contains the random suffix definitions (the "of the Monkey" suffixes whose stats scale with the item level). The clients up to 8.x carry them in **ItemRandomSuffix.dbc**; a client whose data does not have them any more (12.x) gets the store filled from this table, so the groups of [item_randomsuffix_groups](/Wiki/database/world/item_randomsuffix_groups/ "Item randomsuffix groups") resolve.

## Structure

Field                              | Type               | Default | Comment
---------------------------------- | ------------------ | ------- | -------
[entry](#entry)                    | smallint unsigned  |         | key
[name](#name)                      | varchar(64)        |         |
[enchant1](#enchant)               | mediumint unsigned | 0       |
[enchant2](#enchant)               | mediumint unsigned | 0       |
[enchant3](#enchant)               | mediumint unsigned | 0       |
[enchant4](#enchant)               | mediumint unsigned | 0       |
[enchant5](#enchant)               | mediumint unsigned | 0       |
[allocation1](#allocation)         | smallint unsigned  | 0       |
[allocation2](#allocation)         | smallint unsigned  | 0       |
[allocation3](#allocation)         | smallint unsigned  | 0       |
[allocation4](#allocation)         | smallint unsigned  | 0       |
[allocation5](#allocation)         | smallint unsigned  | 0       |

### entry

The random suffix id referenced by [item_randomsuffix_groups](/Wiki/database/world/item_randomsuffix_groups/ "Item randomsuffix groups").

### name

The name suffix shown behind the item name.

### enchant

The enchantment ids (SpellItemEnchantment) applied to the item. Unused slots are 0.

### allocation

The share of the item budget each enchantment gets, in 1/10000. The amount of the enchantment is the random property points of the item level times the allocation.
