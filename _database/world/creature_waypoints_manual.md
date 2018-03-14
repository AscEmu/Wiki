---
title: creature_waypoints_manual
type: worlddb
category: C
layout: single_markdown
---

# creature_waypoints_manual
This table contains waypoints_groups for event_creatures to move on.

## Structure

Field                                                                                                                 | Type       | Default | Comment
--------------------------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[group_id](#group_id)                             | int(10)    | 0       |        
[waypoint_id](#waypoint_id)                       | int(10)    | 0       |        
[position_x](#position_x_z)                       | float(0)   | 0.00    |        
[position_y](#position_x_z)                       | float(0)   | 0.00    |        
[position_z](#position_x_z)                       | float(0)   | 0.00    |        
[wait_time](#waittime)                            | int(10)    | 0       |        
[flags](#flags)                                   | int(10)    | 0       |        
[forward_emote_oneshot](#forward_emote_oneshot)   | tinyint(3) | 0       |        
[forward_emote_id](#forward_emote_id)             | int(10)    | 0       |        
[backward_emote_oneshot](#backward_emote_oneshot) | tinyint(3) | 0       |        
[backward_emote_id](#backward_emote_id)           | int(10)    | 0       |        
[forward_skin_id](#forward_skin_id)               | int(10)    | 0       |        
[backward_skin_id](#backward_skin_id)             | int(10))   | 0       |        

### group_id

This is a unique ID lonking waypoint_group [Event_creature_spawns#waypoint_group](/Wiki/database/world/event_creature_spawns/#waypoint_group "Event creature spawns").

### waypoint_id

This is the Waypoint ID

### position(x-z)

Position x, y, z where creature move to.

### wait_time

How long the mob waits at the Waypoint, in milliseconds.

_Note : a waittime under 5ms might slow your server down._

### flags

Declares how the creature moves.

<pre>
  0 = Walk
256 = Run
768 = Fly
</pre>

### forward_emote_onshot

1 = emote is played once

### forward_emote_id

See [Creature_spawns#emote_state](/Wiki/database/world/creature_spawns/#emote_state "Creature spawns")

### backward_emote_oneshot

1 = emote is played once

### backward_emote_id

See [Creature_spawns#emote_state](/Wiki/database/world/creature_spawns/#emote_state "Creature spawns")

### forward_skin_id

...

### backward_skin_id

...