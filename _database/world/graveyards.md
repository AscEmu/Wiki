---
title: graveyards
type: worlddb
category: G
layout: single_markdown
---

# graveyards
This table contains the graveyard positions. Unfortunately, it seems this table would be deleted in further development!

## Structure

Field                                                                                    | Type         | Default | Comment                    
---------------------------------------------------------------------------------------- | ------------ | ------- | ---------------------------
[id](#id)                           | smallint(4)  |         | Auto Num. Not used in core.
[position_x](#position)             | float(0)     | 0       |                            
[position_y](#position)             | float(0)     | 0       |                            
[position_z](#position)             | float(0)     | 0       |                            
[orientation](#position)            | float(0)     | 0       |                            
[zoneid](#zoneid)                   | tinyint(1)   |         | not used in core.          
[adjacentzoneid](#adjacentzoneid)   | tinyint(1)   |         | unused                     
[mapid](#mapid)                     | smallint(3)  |         |                            
[faction](#faction)                 | enum(0)      |         |                            
[name](#name)                       | varchar(255) |         | not used in core.          

### id

Unique value for ordering not used by core!

### position

The position on map and the orientation.

### zoneid

Not used by core!

### adjacentzoneid

Not used by core!

### mapid

The map ID of the graveyard.

### faction

Factions can be combined... don't know why...

<pre>
0 = Alliance
1 = Horde
3 = Both
</pre>

### name

Not used by core. Just for MySQL development!