---
title: graveyards
type: worlddb
category: G
layout: single_markdown
---

# graveyards
This table contains the graveyard positions per client build. The positions of a graveyard change with the terrain of a build, a wrong height lets ghosts fall through the map.

## Structure

Field                                                                                    | Type         | Default | Comment                    
---------------------------------------------------------------------------------------- | ------------ | ------- | ---------------------------
[id](#id)                                                                                | int unsigned |         | key, the safe loc id of the client
[build](#build)                                                                          | int unsigned  | 5875    | key
[position_x](#position)                                                                  | float(0)     | 0       |                            
[position_y](#position)                                                                  | float(0)     | 0       |                            
[position_z](#position)                                                                  | float(0)     | 0       |                            
[orientation](#position)                                                                 | float(0)     | 0       |                            
[zoneid](#zoneid)                                                                        | tinyint(1)   |         | not used in core.          
[adjacentzoneid](#adjacentzoneid)                                                        | tinyint(1)   |         | unused                     
[mapid](#mapid)                                                                          | smallint(3)  |         |                            
[faction](#faction)                                                                      | enum(0)      |         |                            
[name](#name)                                                                            | varchar(255) |         | not used in core.          

### id

The WorldSafeLocs id of the client. Together with the build it is the key of the row.

### build

Client build the row is valid from. The server loads, for every entry, the row with the highest build that does not exceed its own build, so a row is only needed where the data differs from the previous build.
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