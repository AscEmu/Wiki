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
[position_x](#position_x_z)             | float(0)      | 0       |
[position_y](#position_x_z)             | float(0)      | 0       |
[position_z](#position_x_z)             | float(0)      | 0       |
[facing](#facing)                       | float(0)      | 0       |
[orientation1](#orientation_1-4)        | float(0)      | 0       |
[orientation2](#orientation_1-4)        | float(0)      | 0       |
[orientation3](#orientation_1-4)        | float(0)      | 0       |
[orientation4](#orientation_1-4)        | float(0)      | 0       |
[state](#state)                         | int(10)       | 0       |
[flags](#flags)                         | int(10)       | 0       |
[faction](#faction)                     | int(10)       | 0       |
[scale](#scale)                         | float(0)      | 1       |
[respawnNpcLink](#respawnNpcLink)       | int(11)       | 0       |
[phase](#phase)                         | int(10)       | 0       |
[overrides](#overrides)                 | int(10)       | 0       |
[event_entry](#event_entry)             | int(6)        | 0       |

### id

Automatically assigned by MySQL. Do not modify.

### min_build

The build number in which this spawn was introduced.

### max_build

The maximum build number for which this spawn is valid.

### entry

The entry ID of the gameobject from the [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### map

The map ID where the gameobject is spawned.

### position_x_z

The position of the gameobject on the map.

### facing

The facing direction of the gameobject.

### orientation_1-4

The quaternion orientation of the gameobject. This avoids the need to calculate the orientation from the gameobject's position and rotation.

### state

<pre>
0 = opened
1 = closed
2 = alternative opened
</pre>

### flags

Value | Bit   | Named                  | Description                        
----- | ----- | ---------------------- | -----------------------------------
1     | 0x001 | GO_FLAG_NONSELECTABLE  | Not selectable while animation
2     | 0x002 | GO_FLAG_LOCKED         | Locked, requires a key to open
4     | 0x004 | GO_FLAG_UNTARGETABLE   | Not targetable
8     | 0x008 | GO_FLAG_TRANSPORT      | Used for transports such as ships
16    | 0x010 | GO_FLAG_NOT_SELECTABLE | Not selectable
32    | 0x020 | GO_FLAG_NEVER_DESPAWN  | Never despawns, mostly used for doors
64    | 0x040 | GO_FLAG_TRIGGERED      | Controlled by a spell
512   | 0x200 | GO_FLAG_DAMAGED        | Gameobject is damaged
1024  | 0x400 | GO_FLAG_DESTROYED      | Gameobject is destroyed

You can combine multiple flags.

### faction

The faction assigned to the gameobject.

### scale

The custom scale of the gameobject. This value is saved when using **.go mod scale X**.

By default, this field uses the **Scale** value from the corresponding row in the [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### respwnNpcLink

Links the gameobject to an NPC respawn.

### phase

The phase in which the gameobject is visible.

### overrides

<pre>
1  = 0x01  Makes the gameobject permanently visible after it has been seen at least once.
2  = 0x02  When you enter its map, the gameobject gets pushed to you no matter how far it is (but only for players).
4  = 0x04  Marks the map as containing an object of this type. - **not used.**
8  = 0x08  When this gameobject moves and sends updates about it's position, do so in the second range - WorldMap::ChangeObjectLocation, +/- 6 units wide instead of +/- 1.
16 = 0x10  Lets the core determine the flags sent in A9, e.g. 252 instead of 352 for Deeprun Tram. - **not used.**
32 = 0x20  Lets the core use the full field instead of an uint8 in GAMEOBJECT_BYTES_1 when explicitly configured in the database. - **not used.**
64 = 0x40  Allows the core to skip calculating these fields and use the values specified in the spawn.
</pre>

### event_entry

The entry from the **event_properties** table.
