---
title: item_randomprop
type: worlddb
category: I
layout: single_markdown
---

# item_randomprop
This table contains the random property definitions (the "of the Bear" suffixes with fixed enchantments). The clients up to 8.x carry them in **ItemRandomProperties.dbc**; a client whose data does not have them any more (12.x) gets the store filled from this table, so the groups of [item_randomprop_groups](/Wiki/database/world/item_randomprop_groups/ "Item randomprop groups") resolve.

## Structure

Field                              | Type               | Default | Comment
---------------------------------- | ------------------ | ------- | -------
[entry](#entry)                    | smallint unsigned  |         | key
[name](#name)                      | varchar(64)        |         |
[enchant1](#enchant)               | mediumint unsigned | 0       |
[enchant2](#enchant)               | mediumint unsigned | 0       |
[enchant3](#enchant)               | mediumint unsigned | 0       |

### entry

The random property id referenced by [item_randomprop_groups](/Wiki/database/world/item_randomprop_groups/ "Item randomprop groups").

### name

The name suffix shown behind the item name.

### enchant

The enchantment ids (SpellItemEnchantment) applied to the item. Unused slots are 0.
