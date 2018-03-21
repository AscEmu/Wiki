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

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### position

The data for exact position and orientation.