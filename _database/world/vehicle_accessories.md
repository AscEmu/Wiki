---
title: vehicle_accessories
type: worlddb
category: V
layout: single_markdown
---

# vehicle_accessories
This table defines the vehicle accessoires. 

## Structure

Field                                                                                             | Type          | Default          | Comment
------------------------------------------------------------------------------------------------- | ------------- | ---------------- | -------
[entry](#entry)                                                                                   | mediumint(8)  | 0                |
[accessory_entry](#accessory_entry)                                                               | mediumint(8)  | 0                |
[seat_id](#seat_id)                                                                               | tinyint(4)    | 0                |
[minion](#minion)                                                                                 | tinyint(3)    | 0                |
[description](#description)                                                                       | text          | NOT NULL         |
[summontype](#summontype)                                                                         | tinyint(3)    | 0                |
[summontimer](#summontimer)                                                                       | INT(10)       | 0                |

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### accessory_entry

The accessoir ID...

### seat_id

The seat ID...

### minion

...

### description

...

### summontype

How the accessory despawns (CreatureSummonDespawnType).

<pre>
1 = timed or dead despawn
2 = timed or corpse despawn
3 = timed despawn
4 = timed despawn out of combat
5 = corpse despawn
6 = corpse timed despawn (default)
7 = dead despawn
8 = manual despawn
</pre>

### summontimer

The timer in milliseconds of the timed despawn types, default 30000.
