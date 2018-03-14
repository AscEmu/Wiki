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

The ID of the "boss" from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties").

### trash

Id's of the trashmobs leading to the boss. List as many trashmob ids there are for the boss.

Example:
1,2,3,4,5

### trash_respawn_override

respawn time for trash mobs in milliseconds.