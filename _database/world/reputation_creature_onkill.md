---
title: reputation_creature_onkill
type: worlddb
category: R
layout: single_markdown
---

# reputation_creature_onkill
This table contains... 

## Structure

Field                                                                                                                    | Type    | Default | Comment
------------------------------------------------------------------------------------------------------------------------ | ------- | ------- | -------
[creature_id](#creature_id)                         | int(30) |         |        
[faction_change_alliance](#faction_change_alliance) | int(30) |         |        
[faction_change_horde](#faction_change_horde)       | int(30) |         |        
[change_value](#change_value)                       | int(30) |         |        
[rep_limit](#rep_limit)                             | int(30) |         |        

### creature_id

The entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)")

### faction_change_alliance

The reputatio ID for alliance players.

### faction_change_horde

The reputatio ID for horde players.

### change_value

The value the player get by killing this creature (positiv and negativ).

### rep_limit

The maximum reward value for the faction ID.