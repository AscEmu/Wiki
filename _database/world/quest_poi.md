---
title: quest_poi
type: worlddb
category: Q
layout: single_markdown
---

# quest_poi
This table managed the quest points.

## Structure

Field                                                                       | Type        | Default | Comment
--------------------------------------------------------------------------- | ----------- | ------- | -------
[questId](#questId)     | smallint(5) |         |        
[poiId](#poiId)         | tibyint(3)  |         |        
[objIndex](#objIndex)   | tinyint(2)  | 0       |        
[mapId](#mapId)         | smallint(3) | 0       |        
[mapAreaId](#mapAreaId) | smallint(3) | 0       |        
[floorId](#floorId)     | tinyint(1)  | 0       |        
[unk3](#unk3)           | tinyint(1)  | 0       |        
[unk4](#unk4)           | tinyint(1)  | 0       |        

### questId

The quest entry ID from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table.

### poiId

The point entry ID from [quest_poi_points](/Wiki/database/world/quest_poi_points/ "Quest poi points") table.

### mapId

The mapId...

### mapAreaId

The Zone ID...

### floorId

The Area ID...

### unk3

...

### unk4

...