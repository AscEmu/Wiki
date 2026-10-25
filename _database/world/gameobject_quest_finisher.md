---
title: gameobject_quest_finisher
type: worlddb
category: G
layout: single_markdown
---

# gameobject_quest_finisher
This table contains the gameobjects which finish a quest.

## Structure

Field                                                                               | Type          | Default | Comment
----------------------------------------------------------------------------------- | ------------- | ------- | -------
[id](#id)                                                                           | int(11)       | 0       |        
[quest](#quest)                                                                     | int(11)       | 0       |        
[min_build](#min_build)                                                             | int           | 12340   | key
[max_build](#max_build)                                                             | int           | 12340   | 

### id

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### quest

The quest ID to finish from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### min_build

First client build the row is valid for. A row is used when the build of the server lies between min_build and max_build.

### max_build

Last client build the row is valid for.
