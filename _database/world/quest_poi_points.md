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
[questId](#questId)          | smallint(5) |         |        
[poiId](#poiId)              | tinyint(3)  | 0       |        
[x](#position) | int(11)     | 0           |        
[y](#position) | int(11)     | 0           |        

### questId

The quest entry ID from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### poiId

The point entry ID used in [quest_poi](/Wiki/database/world/quest_poi/ "Quest poi") table.

### position

The x and y position of the point.