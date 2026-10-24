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
--------------------------------------- | ------------- | ------- | -------
[id](#id)                               | int unsigned  |         | key
[min_build](#min_build)                 | int           | 12340   | key
[max_build](#max_build)                 | int           | 12340   |
[entry](#entry)                         | int unsigned  | 0       |
[map](#map)                             | int unsigned  | 0       |
[phase](#phase)                         | int unsigned  | 1       |
[position_x](#position_x_z)             | float         | 0       |
[position_y](#position_x_z)             | float         | 0       |
[position_z](#position_x_z)             | float         | 0       |
[orientation](#orientation)             | float         | 0       |
[rotation0](#rotation_0-3)              | float         | 0       |
[rotation1](#rotation_0-3)              | float         | 0       |
[rotation2](#rotation_0-3)              | float         | 0       |
[rotation3](#rotation_0-3)              | float         | 0       |
[spawntimesecs](#spawntimesecs)         | int           | 0       |
[state](#state)                         | int unsigned  | 0       |
[event_entry](#event_entry)             | int           | 0       |

### id

The unique id of the spawn. Together with min_build it is the key of the row.

### min_build

First client build the row is valid for. A row is used when the build of the server lies between min_build and max_build. A spawn that exists unchanged in several builds keeps one row whose max_build is raised; a moved spawn gets a new row.

### max_build

Last client build the row is valid for.

### entry

The entry ID of the gameobject from the [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### map

The map ID where the gameobject is spawned.

### phase

The phase mask in which the gameobject is visible, 1 = the default phase.

### position_x_z

The position of the gameobject on the map.

### orientation

The facing of the gameobject in radians.

### rotation_0-3

The rotation of the gameobject as a quaternion (x, y, z, w). The client needs it for doors, chests and other objects that are not upright; 0 in all four lets the server derive it from the orientation.

### spawntimesecs

The respawn time in seconds after the object was used or destroyed, 0 = the default of the gameobject type.

### state

<pre>
0 = open
1 = closed
2 = alternative open
3 = destroyed
</pre>

### event_entry

The entry from the [gameevent_properties](/Wiki/database/world/gameevent_properties/ "Gameevent properties") table, 0 = always spawned. The object is only spawned while the event runs.
