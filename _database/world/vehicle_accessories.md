---
title: vehicle_accessories
type: worlddb
category: V
layout: single_markdown
---

# vehicle_accessories
This table defines the vehicle accessoires. 

## Structure

Field                                                                                             | Type    | Default | Comment
------------------------------------------------------------------------------------------------- | ------------- | ---------------- | -------
[entry](entry)                                                                                    | mediumint(8)  | 0                |
[accessory_entry](accessory_entry)                                                                | mediumint(8)  | 0                |
[seat_id](#seat_id)                                                                               | tinyint(4)    | 0                |
[minion](minion)                                                                                  | tinyint(3)    | 0                |
[description](description)                                                                        | text          | NOT NULL         |
[summontype](#summontype)                                                                         | tinyint(3)    | 0                |
[summontimer](summontimer)                                                                        | INT(10)       | 0                |

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

...

### summontimer

...
