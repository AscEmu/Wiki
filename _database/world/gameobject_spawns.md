---
title: gameobject_spawns
type: worlddb
category: G
layout: single_markdown
---

# gameobject_spawns
This table contains the position and custom data for the spawned gameobject.

## Structure

Field                                   | Type          | Default | Comment 
--------------------------------------- | ------------- | ------- | --------
[id](#id)                               | int(11)       |         | key, auto
[min_build](#min_build)                 | smallint(6)   | 12340   | key
[max_build](#max_build)                 | smallint(6)   | 12340   |
[entry](#entry)                         | int(10)       | 0       |         
[map](#map)                             | int(3)        | 0       |         
[phase](#phase)                         | int(10)       | 0       |  
[position_x](#position_x_z)             | float(0)      | 0       |         
[position_y](#position_x_z)             | float(0)      | 0       |         
[position_z](#position_x_z)             | float(0)      | 0       |         
[orientation](#orientation)             | float(0)      | 0       |         
[rotation0](#rotation0-3)               | float(0)      | 0       |         
[rotation1](#rotation0-3)               | float(0)      | 0       |         
[rotation2](#rotation0-3)               | float(0)      | 0       |         
[rotation3](#rotation0-3)               | float(0)      | 0       |   
[spawntimesecs](#spawntimesecs)         | int(10)       | 0       |      
[state](#state)                         | int(10)       | 0       |         
[event_entry](#event_entry)             | int(6)        | 0       |   

### id

Autofilled by MySQL, do not touch.

### min_build

Build number this spawn was introduced.

### max_build

Max Build number this spawn is valid for.


### entry

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### map

The map ID where the gameobject is set.

### phase

This field describes in which phase the gameobject is.

### position_x_z

The position on the map where the gameobject is set.

### orientation

orientation....

### rotation0-3

Thats quiet interesting, it saves triangling of the gameobject.

### spawntimesecs

respawntime of the gameobject after being used

### state

<pre>
0 = opened
1 = closed
2 = alternative opened
</pre>

### event_entry

entry from table event_properties
