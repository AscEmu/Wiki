---
title: areatriggers
type: worlddb
category: A
layout: single_markdown
---

# areatriggers
Triggers, like instance doors, quest scripts, other things. Trigger's position is in DBC, it can't be modified, informations here are just addition for those in DBC. 

## Structure

Field                                                                                              | Type         | Default | Comment         
-------------------------------------------------------------------------------------------------- | ------------ | ------- | ----------------
[entry](#entry)                                                                                    | smallint(5)  |         |                 
[type](#type)                                                                                      | tinyint(3)   | 0       |                 
[map](#map)                                                                                        | smallint(5)  | 0       |                 
[screen](#screen)                                                                                  | smallint(5)  | 0       | Not used by core
[name](#name)                                                                                      | varchar(100) | Unknown | Not used by core
[maxcount](#maxcount)                                                                              | tinyint(3)   | 0       |                 
[position_x](#positions)                                                                           | float(0)     | 0       |                 
[position_y](#positions)                                                                           | float(0)     | 0       |                 
[position_z](#positions)                                                                           | float(0)     | 0       |                 
[orientation](#positions)                                                                          | float(0)     | 0       |                 
[required_honor_rank](#required_honor_rank)                                                        | tinyint(3)   | 0       |                 
[required_level](#required_level)                                                                  | tinyint(3)   | 0       |                 

### entry

The Entry ID of the area trigger (must be in AreaTrigger.dbc).

### type

The type of area trigger it is (Enum defined by AscEmu).

<pre>
0 = Null - not used
1 = Instance (When a player enter in a trigger of that type he'll be teleported at the position set in the fields below. The core also check if the player has the prerequisites.)
2 = Quest - not used
3 = Inn (When a player enter in a trigger of that type he'll enter in rest state.) 
4 = Teleport (Same as type 1 (Instance) but without the requirements check.) 
5 = Spell - not used
6 = Battleground - not used
</pre>

### map

The ID of the Map the trigger teleports you to. (Only used when type = 1 OR type = 4)

### screen

The loading screen that shows while you are teleporting.

### name

A name used by database's developers to identify an area trigger.

### positions

X, Y, Z and O coordinates is position, where you get teleported. (Only used when type = 1 OR type = 4)

### required_honor_rank

The required honor rank to activate the trigger.

### required_level

The required level to activate the trigger. (Only used when type = 1)