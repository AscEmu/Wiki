---
title: gameobject_quest_pickup_binding
type: worlddb
category: G
layout: single_markdown
---

# gameobject_quest_pickup_binding
This table includes... yeahr what is this about? :-)

## Structure

Field                                                                                                       | Type    | Default | Comment
----------------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                   | int(11) | 0       |        
[quest](#quest)                   | int(11) | 0       |        
[required_count](#required_count) | int(11) | 0       |        

### entry

The entry ID of the gameobject from [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)") table.

### quest

The entry ID of the quest from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### required_count

This is simmilar to ReqItemCount-fields in [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.