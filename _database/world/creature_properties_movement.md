---
title: creature_properties_movement
type: worlddb
category: C
layout: single_markdown
---

# creature_properties_movement
This table contains creature movement properties

## Structure

Field                                                                                                      | Type       | Default | Comment
---------------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[CreatureId](#CreatureId)                           | int(10)    | 0       |        
[Ground](#Ground)                     | tinyint(10)    | 0       |        
[Swim](#Swim)                     | tinyint(10)    | 0       |        
[Flight](#Flight)                     | tinyint(10)    | 0       |        
[Rooted](#Rooted)                     | tinyint(10)    | 0       |        
[Chase](#Chase)                     | tinyint(10)    | 0       |        
[Random](#Random)                     | tinyint(10)    | 0       |        
[InteractionPauseTimer](#InteractionPauseTimer)                     | int(10)    | 0       |        

### CreatureId

This is a unique ID from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns").

### Ground

<pre>
  0 = None
  1 = Run
  2 = Hover
</pre>


### Swim

Boolean can swim (1), can not swim (0).

### Flight

<pre>
  0 = None
  1 = DisableGravity
  2 = CanFly
</pre>

### Rooted

Boolean is rooted (1), is not rooted (0).

### Chase

<pre>
  0 = Run
  1 = CanWalk
  2 = AlwaysWalk
</pre>

### Random

<pre>
  0 = Walk
  1 = CanRun
  2 = AlwaysRun
</pre>

### InteractionPauseTimer

Not used/loaded now...

