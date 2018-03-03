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
[spawnid](#spawnid)                           | int(10)    | 0       |        
[waypointid](#waypointid)                     | int(10)    | 0       |        
[position_x](#position.28x-z.29)              | float(0)   | 0.00    |        
[position_y](#position.28x-z.29)              | float(0)   | 0.00    |        
[position_z](#position.28x-z.29)              | float(0)   | 0.00    |        
[waittime](#waittime)                         | int(10)    | 0       |        
[flags](#flags)                               | int(10)    | 0       |        
[forwardemoteoneshot](#forwardemoteoneshot)   | tinyint(3) | 0       |        
[forwardemoteid](#forwardemoteid)             | int(10)    | 0       |        
[backwardemoteoneshot](#backwardemoteoneshot) | tinyint(3) | 0       |        
[backwardemoteid](#backwardemoteid)           | int(10)    | 0       |        
[forwardskinid](#forwardskinid)               | int(10)    | 0       |        
[backwardskinid](#backwardskinid)             | int(10))   | 0       |        

### spawnid

This is a unique ID from [creature_spawns](http://www.ascemu.org/wiki/index.php?title=Creature_spawns "Creature spawns").

### waypointid

This is the Waypoint ID

### position(x-z)

Position x, y, z where creature move to.

### waittime

How long the mob waits at the Waypoint, in milliseconds.

_Note : a waittime under 5ms might slow your server down._

### flags

Declares how the creature moves.

<pre>
  0 = Walk
256 = Run
768 = Fly
</pre>

### forwardemoteonshot

1 = emote is played once

### forwardemoteid

See [Creature_spawns#emote_state](http://www.ascemu.org/wiki/index.php?title=Creature_spawns#emote_state "Creature spawns")

### backwardemoteshot

1 = emote is played once

### backwardemoteid

See [Creature_spawns#emote_state](http://www.ascemu.org/wiki/index.php?title=Creature_spawns#emote_state "Creature spawns")

### forwardskinid

...

### backwardskinid

...