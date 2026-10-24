---
title: item_properties_display
type: worlddb
category: I
layout: single_markdown
---

# item_properties_display
This table overrides the display id and the inventory type of an item per client build. The appearance tables of the clients from 6.x on renumbered the ItemDisplayInfo ids, so the display id stored in [item_properties](/Wiki/database/world/item_properties/ "Item properties") shows nothing or the wrong model on a newer client.

## Structure

Field                              | Type             | Default | Comment
---------------------------------- | ---------------- | ------- | -------
[entry](#entry)                    | int unsigned     |         | key
[build](#build)                    | int unsigned     |         | key
[displayid](#displayid)            | int unsigned     | 0       |
[inventorytype](#inventorytype)    | tinyint unsigned | 0       |

### entry

The entry ID of the item from [item_properties](/Wiki/database/world/item_properties/ "Item properties").

### build

Client build the override is valid from. The server loads, for every item, the row with the highest build that does not exceed its own build and replaces the display id and the inventory type of the item properties with it.

### displayid

The ItemDisplayInfo id of the client build (the id ItemAppearance / ItemModifiedAppearance name for the item).

### inventorytype

The inventory type of the item in the client build.
