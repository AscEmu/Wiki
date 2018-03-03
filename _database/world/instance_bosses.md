---
title: instance_bosses
type: worlddb
category: I
layout: single_markdown
---

# instance_bosses
This table contains the instance bosses and the relation to the trashmobs.

## Structure

Field                                                                                                       | Type    | Default | Comment
----------------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[mapid](#mapid)                                   | int(11) | 0       |        
[creatureid](#creatureid)                         | int(11) | 0       |        
[trash](#trash)                                   | text(0) |         |        
[trash_respawn_override](#trash_respawn_override) | int(11) | 0       |        

### mapid

The ID of the map, use gps to get it.

### creatureid

The ID of the "boss" from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)").

### trash

Id's of the trashmobs leading to the boss. List as many trashmob ids there are for the boss.

Example:
1,2,3,4,5

### trash_respawn_override

respawn time for trash mobs in milliseconds.