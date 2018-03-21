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

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### quest

The quest ID to to start from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.