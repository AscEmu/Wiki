---
title: gameobject_quest_finisher
type: worlddb
category: G
layout: single_markdown
---

# gameobject_quest_finisher
This table contains the gameobjects which finish a quest.

## Structure

Field                                                                               | Type    | Default | Comment
----------------------------------------------------------------------------------- | ------- | ------- | -------
[id](#id)       | int(11) | 0       |        
[quest](#quest) | int(11) | 0       |        

### id

The entry ID of the gameobject from [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)") table.

### quest

The quest ID to finish from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.