---
title: creature_formations
type: worlddb
category: C
layout: single_markdown
---

# creature_formations
Contains information on creature formations. Ex. making an NPC follow a leader in a pack. 

## Structure

Field                                                                                             | Type     | Default | Comment
------------------------------------------------------------------------------------------------- | -------- | ------- | -------
[spawn_id](#spawn_id)                                                                             | int(10)  | 0       |        
[target_spawn_id](#target_spawn_id)                                                               | int(10)  | 0       |        
[follow_angle](#follow_angle)                                                                     | float(0) | 0       |        
[follow_dist](#follow_dist)                                                                       | float(0) | 0       |        

### spawn_id

The unique ID from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns"). This is the ID that will be following the "leader".

### target_spawn_id

The ID from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns"), this is the "leader" that is being followed.

### follow_angle

The angle between the two creatures.

### follow_dist

The distance between the two creatures.