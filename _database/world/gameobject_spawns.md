---
title: gameobject_spawns
type: worlddb
category: G
layout: single_markdown
---

# gameobject_spawns
This table contains the position and custom data for the spawned gameobject.

## Structure

Field                                                                                               | Type     | Default | Comment 
--------------------------------------------------------------------------------------------------- | -------- | ------- | --------
[id](#id)                               | int(11)  |         | Auto Num
[entry](#entry)                         | int(10)  | 0       |         
[map](#map)                             | int(3)   | 0       |         
[position_x](#position_x_z)             | float(0) | 0       |         
[position_y](#position_x_z)             | float(0) | 0       |         
[position_z](#position_x_z)             | float(0) | 0       |         
[facing](#facing)                       | float(0) | 0       |         
[orientation1](#orientation_1-4)        | float(0) | 0       |         
[orientation2](#orientation_1-4)        | float(0) | 0       |         
[orientation3](#orientation_1-4)        | float(0) | 0       |         
[orientation4](#orientation_1-4)        | float(0) | 0       |         
[state](#state)                         | int(10)  | 0       |         
[flags](#flags)                         | int(10)  | 0       |         
[faction](#faction)                     | int(10)  | 0       |         
[scale](#scale)                         | float(0) | 1       |         
[respawnNpcLink](#respawnNpcLink)       | int(11)  | 0       |         
[phase](#phase)                         | int(10)  | 0       |         
[overrides](#overrides)                 | int(10)  | 0       |         

### id

Autofilled by MySQL, do not touch.

### entry

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### map

The map ID where the gameobject is set.

### position_x_z

The position on the map where the gameobject is set.

### facing

Facing = orientation....

### orientation_1-4

Thats quiet interesting, it saves triangling of the gameobject.

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
2     | 0x002 | GO_FLAG_LOCKED         | Locked, needs a key to open        
4     | 0x004 | GO_FLAG_UNTARGETABLE   | not targetable                     
8     | 0x008 | GO_FLAG_TRANSPORT      | Used for transporters (ship....)?  
16    | 0x010 | GO_FLAG_NOT_SELECTABLE | Not selectable                     
32    | 0x020 | GO_FLAG_NEVER_DESPAWN  | Never despawn (mostly for doors...)
64    | 0x040 | GO_FLAG_TRIGGERED      | controled by an spell?             
512   | 0x200 | GO_FLAG_DAMAGED        | Gameobject is damaged              
1024  | 0x400 | GO_FLAG_DESTROYED      | Gameobject is destroyed            

You can combine these flags.

### faction

The faction...

### scale

The customized scale. It would be saved after .go mod scale X. This field is set Default to the value from row `Scale` from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### respwnNpcLink

...

### phase

This field describes in which phase the gameobject is.

### overrides

<pre>
1  = 0x01  Makes the gameobject forever visible on the map after you saw it at least once.
2  = 0x02  When you enter its map, the gameobject gets pushed to you no matter how far it is (but only for players).
<strike>4  = 0x04  he Map will get marked that it contains an object like this.</strike>
8  = 0x08  When this gameobject moves and sends updates about it's position, do so in the second range - MapMgr::ChangeObjectLocation, +/- 6 units wide instead of +/- 1.
<strike>16 = 0x10  Let the core decide about the flags sent in the A9 - example: 252 instead of 352 for Deeprun Tram.</strike>
<strike>32 = 0x20  Let the core use the full field instead an uint8 in GAMEOBJECT_BYTES_1, if the database creator knows what to do with it.</strike>
64 = 0x40  Makes it possible for the core to skip calculating these fields and use whatever was specified in the spawn.
</pre>