---
title: gameobject_staticspawns
type: worlddb
category: G
layout: single_markdown
---

# gameobject_staticspawns
This table contains the position and custom data for the staticspawned gameobject. Static means, the gameobject is visible on the whole world (or maybe only on the whole map).

## Structure

Field                                                                                                     | Type     | Default | Comment       
--------------------------------------------------------------------------------------------------------- | -------- | ------- | --------------
[id](#id)                               | int(11)  |         | AUTO_INCREMENT
[entry](#entry)                         | int(10)  | 0       |               
[map](#map)                             | int(3)   | 0       |               
[position_x](#position_x_z)             | float(0) | 0       |               
[position_y](#position_x_z)             | float(0) | 0       |               
[position_z](#position_x_z)             | float(0) | 0       |               
[facing](#facing)                       | float(0) | 0       |               
[orientation1](#orientation_1_4)        | float(0) | 0       |               
[orientation2](#orientation_1_4)        | float(0) | 0       |               
[orientation3](#orientation_1_4)        | float(0) | 0       |               
[orientation4](#orientation_1_4)        | float(0) | 0       |               
[state](#state)                         | int(10)  | 0       |               
[flags](#flags)                         | int(10)  | 0       |               
[faction](#faction)                     | int(10)  | 0       |               
[scale](#scale)                         | float(0) | 1       |               
[respawnNpcLink](#respawnNpcLink)       | int(11)  | 0       |               
[phase](#phase)                         | int(10)  | 1       |               
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

### orientation_1_4

Thats quiet interesting, it saves triangling of the gameobject.

### state

<pre>
0 = opened
1 = closed
2 = alternative opened
</pre>

### flags

<pre>
1    = 0x1  not selectable
2    = 0x2  locked (needs a key to open)
4    = 0x4  not targetable

<strike>8    = 0x8  &nbsp;???</strike>

<strike>16   = 0x10 unclickable</strike> (only temp include in some instance scripts, not implemented yet)

<strike>32   = 0x20 &nbsp;???</strike>

<strike>64   = 0x40 &nbsp;???</strike>

<strike>128  = 0x???&nbsp;???</strike>

<strike>256  = 0x100&nbsp;???</strike>
512  = 0x200 damaged
1024 = 0x400 destroyed
</pre>

### faction

The faction...

### scale

The customized scale. It would be saved after .go mod scale X. This field is set Default to the value from row `Scale` from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### respawnNpcLink

Not used by core!

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