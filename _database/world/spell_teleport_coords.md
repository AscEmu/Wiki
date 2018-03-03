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
[id](#id)                          | int(10)   | 0       | (Teleport Spell ID)
[name](#name)                      | char(255) | 0       |                    
[mapId](#mapId)                    | int(10)   | 0       |                    
[position_x](#positions.28x-o.29)  | float(0)  | 0       |                    
[position_y](#positions.28x-o.29)  | float(0)  | 0       |                    
[position_z](#positions.28x-o.29)  | float(0)  | 0       |                    
[orientation](#positions.28x-o.29) | float(0)  | 0       |                    

### id

The unique ID of the Teleport.

### name

The name of the Teleport.

### mapId

The mapId for the Teleport.

### positions(x-o)

The position (x & y), the height (z) and the orientation for arriving.