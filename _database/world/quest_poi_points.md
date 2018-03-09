---
title: quest_poi_points
type: worlddb
category: Q
layout: single_markdown
---

# quest_poi_points
This table contains the quest points.

## Structure

Field                                                                                | Type        | Default | Comment
------------------------------------------------------------------------------------ | ----------- | ------- | -------
[questId](#questId)       | smallint(5) |         |        
[poiId](#poiId)           | tinyint(3)  | 0       |        
[x](#position.28x_-_y.29) | int(11)     | 0       |        
[y](#position.28x_-_y.29) | int(11)     | 0       |        

### questId

The quest entry ID from [quests](http://www.ascemu.org/wiki/index.php?title=Quests&action=edit&redlink=1 "Quests (page does not exist)") table.

### poiId

The point entry ID used in [quest_poi](/Wiki/database/world/quest_poi/ "Quest poi") table.

### position(x - y)

The x and y position of the point.