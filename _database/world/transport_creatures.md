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
[position_x](#position.28x-o.29)    | float   |         |        
[position_y](#position.28x-o.29)    | float   |         |        
[position_z](#position.28x-o.29)    | float   |         |        
[orientation](#position.28x-o.29)   | float   |         |        

### transport_entry

The transport entry ID from [transport_data](http://www.ascemu.org/wiki/index.php?title=Transport_data "Transport data") table.

### creature_entry

The creature entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table.

### position(x-o)

The data for exact position and orientation.