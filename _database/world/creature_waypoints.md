---
title: creature_waypoints
type: worlddb
category: C
layout: single_markdown
---

# creature_waypoints
This table contains waypoints for creatures to move on.

## Structure

Field                                                                                                      | Type       | Default | Comment
---------------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[id](#id)                           | int(10)    | 0       |        
[point](#point)                     | int(10)    | 0       |        
[position_x](#position_x_z)                   | float(0)   | 0.00    |        
[position_y](#position_x_z)                   | float(0)   | 0.00    |        
[position_z](#position_x_z)                   | float(0)   | 0.00    |        
[orientation](#orientation)                   | float(0)   | 0.00    |        
[delay](#delay)                         | int(10)    | 0       |        
[move_type](#move_type)                               | int(10)    | 0       |        
[action](#action)   | tinyint(3) | 0       |        
[action_chance](#action_chance)             | int(10)    | 0       |        
[wpguid](#wpguid) | tinyint(3) | 0       |        

### id

This is a unique ID from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns").

### point

This is the Waypoint ID

### position_x_z

Position x, y, z where creature move to.

### orientation

The orientation at this point

### delay

How long the mob waits at the Waypoint, in milliseconds.

_Note : a waittime under 5ms might slow your server down._

### move_type

Declares how the creature moves at this point.

<pre>
  0 = Walk
  1 = Run
  2 = Land
  3 = Take Off
</pre>

### action

The action on this waypoint

### action_chance

The chance the action will happen in percent.

### wpguid

...