---
title: item_quest_association
type: worlddb
category: I
layout: single_markdown
---

# item_quest_association
This table contains the association for items to quests (or something similar... no documentation).

## Structure

Field                                                                                      | Type    | Default | Comment
------------------------------------------------------------------------------------------ | ------- | ------- | -------
[item](#item)             | int(11) | 0       |        
[quest](#quest)           | int(11) | 0       |        
[item_count](#item_count) | int(11) | 0       |        

### item

The item ID from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table.

### quest

The linked quest ID from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### item_count

The required count of items.