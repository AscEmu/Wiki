---
title: gameobject_quest_item_binding
type: worlddb
category: G
layout: single_markdown
---

# gameobject_quest_item_binding

## Structure

Field                                                                                             | Type    | Default | Comment
------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                                                                                   | int(11) | 0       |        
[quest](#quest)                                                                                   | int(11) | 0       |        
[item](#item)                                                                                     | int(11) | 0       |        
[item_count](#item_count)                                                                         | int(11) | 0       |        

### entry

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### quest

The entry ID of the quest from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### item

The entry ID of the item in the REqItemID-fields from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### item_count

This is simmilar to ReqItemCount-fields in [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.