---
title: spell_teleport_coords
type: worlddb
category: S
layout: single_markdown
---

# spell_teleport_coords
This table contains the target coordinates of the teleport-spells. 

## Structure

Field                                                                                              | Type      | Default | Comment            
-------------------------------------------------------------------------------------------------- | --------- | ------- | -------------------
[id](#id)                                                                                          | int(10)   | 0       | (Teleport Spell ID)
[name](#name)                                                                                      | char(255) | 0       |                    
[mapId](#mapId)                                                                                    | int(10)   | 0       |                    
[position_x](#positions)                                                                           | float(0)  | 0       |                    
[position_y](#positions)                                                                           | float(0)  | 0       |                    
[position_z](#positions)                                                                           | float(0)  | 0       |                    
[orientation](#positions)                                                                          | float(0)  | 0       |                    

### id

The unique ID of the Teleport.

### name

The name of the Teleport.

### mapId

The mapId for the Teleport.

### positions

The position (x & y), the height (z) and the orientation for arriving.