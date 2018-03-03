---
title: item_randomsuffix_groups
type: worlddb
category: I
layout: single_markdown
---

# item_randomsuffix_groups
This table defines the relation between random suffix groups and random suffix enchants. 

## Structure

Field                                                                                            | Type        | Default | Comment
------------------------------------------------------------------------------------------------ | ----------- | ------- | -------
[entry_id](#entry_id)         | smallint(3) |         |        
[randomsuffix](#randomsuffix) | tinyint(2)  |         |        
[chance](#chance)             | float(0)    |         |        

### entry_id

This is the numerical identifier of the random suffix group.

This identifier is referenced in the `randomsuffix` field in the [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table.

### randomsuffix

This is the numerical identifier of the individual random enchants that items in the group can gain on drop.

This identifier is the index of ItemRandomSuffix.dbc.

### chance

This is the chance items in the group have to gain the random enchant referenced by randomsuffix_entryid. (in percent?)