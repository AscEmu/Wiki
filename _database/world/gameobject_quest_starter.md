---
title: gameobject_quest_starter
type: worlddb
category: G
layout: single_markdown
---

# gameobject_quest_starter
This table contains the gameobjects which starts a quest.

## Structure

Field                                                                              | Type    | Default | Comment
---------------------------------------------------------------------------------- | ------- | ------- | -------
[id](#id)       | int(11) | 0       |        
[quest](#quest) | int(11) | 0       |        

### id

The entry ID of the gameobject from [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)") table.

### quest

The quest ID to to start from [quests](http://www.ascemu.org/wiki/index.php?title=Quests&action=edit&redlink=1 "Quests (page does not exist)") table.