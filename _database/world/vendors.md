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
[entry](#entry)                                                                   | int(10)    | 0       |                      
[build](#build)                                                                   | int unsigned  | 5875    | key
[item](#item)                                                                     | int(10)    | 0       |                      
[amount](#amount)                                                                 | int(10)    | 0       | This is min_amount...
[max_amount](#max_amount)                                                         | int(10)    | 0       |                      
[inctime](#inctime)                                                               | bigint(20) | 0       |                      
[extended_cost](#extended_cost)                                                   | int(11)    | 0       |                      
[comment](#comment)                                                               | varchar(100)  |         | 

### entry

The entry ID of the vendor from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### build

Client build the row is valid from. The server loads, for every entry, the row with the highest build that does not exceed its own build, so a row is only needed where the data differs from the previous build. The list of a vendor is taken as a whole: all rows of the entry share the build of the highest matching row.
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

### comment

Free text for the row, not read by the server.
