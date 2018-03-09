---
title: vendors
type: worlddb
category: V
layout: single_markdown
---

# vendors
This table defines the selling items for vendors. 

## Structure

Field                                                                             | Type       | Default | Comment              
--------------------------------------------------------------------------------- | ---------- | ------- | ---------------------
[entry](#entry)                 | int(10)    | 0       |                      
[item](#item)                   | int(10)    | 0       |                      
[amount](#amount)               | int(10)    | 0       | This is min_amount...
[max_amount](#max_amount)       | int(10)    | 0       |                      
[inctime](#inctime)             | bigint(20) | 0       |                      
[extended_cost](#extended_cost) | int(11)    | 0       |                      

### entry

The entry ID of the vendor from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)")

### item

The entry ID of the selling item from [item_properties](/Wiki/database/world/item_properties/ "Item properties")

### amount

The minimum amount of the selling item.

### max_amount

The maximum amount of the selling item.

### inctime

...

### extended_cost

Overrides the extended_cost in [item_properties](/Wiki/database/world/item_properties/ "Item properties") for the selling item.