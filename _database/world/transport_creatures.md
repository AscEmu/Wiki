---
title: transport_creatures
type: worlddb
category: T
layout: single_markdown
---

# transport_creatures
This includes all the transport information for the creatures. 

## Structure

Field                                                                                             | Type    | Default | Comment
------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[transport_entry](#transport_entry) | int(10) |         |        
[creature_entry](#creature_entry)   | int(10) |         |        
[position_x](#position)             | float   |         |        
[position_y](#position)             | float   |         |        
[position_z](#position)             | float   |         |        
[orientation](#position)            | float   |         |        

### transport_entry

The transport entry ID from [transport_data](/Wiki/database/world/transport_data/ "Transport data") table.

### creature_entry

The creature entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table.

### position

The data for exact position and orientation.