---
title: item_randomprop_groups
type: worlddb
category: I
layout: single_markdown
---

# item_randomprop_groups
This table defines the relation between random property groups and random property enchants.

## Structure

Field                                                                                                        | Type        | Default | Comment
------------------------------------------------------------------------------------------------------------ | ----------- | ------- | -------
[entry_id](#entry_id)                                                                                        | smallint(4) | 0       |        
[randomprops_entryid](#randomprops_entryid)                                                                  | smallint(4) | 0       |        
[chance](#chance)                                                                                            | float(0)    | 0       |        

### entry_id

This is the numerical identifier of the random property group.

This identifier is referenced in the `randomprop` field in the [item_properties](/Wiki/database/world/item_properties/ "Item properties") table.

### randomprops_entryid

This is the numerical identifier of the individual random enchants that items in the group can gain on drop.

This identifier is the index of ItemRandomProperties.dbc.

### chance

This is the chance items in the group have to gain the random enchant referenced by randomprop_entryid (in percent ?)