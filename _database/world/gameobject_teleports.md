---
title: gameobject_teleports
type: worlddb
category: G
layout: single_markdown
---

# gameobject_teleports
This table contains the the teleport gameobjects. The player would be teleported on use this (door or a portal)

NOTE1: To use this function, the gameobject in [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)") needs the value 10 in row Type and the value 1 in Sound2.

NOTE2: Pay Attention: This feature is disable by default... need to be activated in the source code.

## Structure

Field                                                                                                        | Type       | Default | Comment
------------------------------------------------------------------------------------------------------------ | ---------- | ------- | -------
[entry](#entry)                               | int(10)    |         |        
[mapid](#mapid)                               | int(10)    |         |        
[x_pos](#x_z_pos)                             | float(0)   |         |        
[y_pos](#x_z_pos)                             | float(0)   |         |        
[z_pos](#x_z_pos)                             | float(0)   |         |        
[orientation](#orientation)                   | float(0)   |         |        
[required_level](#required_level)             | int(10)    |         |        
[required_class](#required_class)             | tinyint(2) |         |        
[required_achievement](#required_achievement) | int(5)     |         |        

### entry

The entry ID of the gameobject from [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)") table.

### mapid

The target map ID for teleport.

### x_z_pos

The target x, y, z position for teleport.

### orientation

The orientation on arriving.

### required_level

The required player level to get teleported.

### required_class

The required player class.

### required_achievement

The required achievement mask.