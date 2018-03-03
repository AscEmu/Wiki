---
title: worldmap_info
type: worlddb
category: W
layout: single_markdown
---

# worldmap_info
This table contains the types and settings for the different maps.

## Structure

Field                                                                                               | Type         | Default | Comment
--------------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                             | int(10)      | 0       |        
[screenid](#screenid)                       | int(10)      | 0       |        
[type](#type)                               | int(10)      | 0       |        
[maxplayers](#maxplayers)                   | int(10)      | 0       |        
[minlevel](#minlevel)                       | int(10)      | 1       |        
[minlevel_heroic](#minlevel_heroic)         | int(10)      | 0       |        
[repopx](#repop.28x_-_z.29)                 | float(0)     | 0       |        
[repopy](#repop.28x_-_z.29)                 | float(0)     | 0       |        
[repopz](#repop.28x_-_z.29)                 | float(0)     | 0       |        
[repopentry](#repopentry)                   | int(10)      | 0       |        
[area_name](#area_name)                     | varchar(100) | 0       |        
[flags](#flags)                             | int(10)      | 0       |        
[cooldown](#cooldown)                       | int(10)      | 0       |        
[lvl_mod_a](#lvl_mod_a)                     | int(10)      | 0       |        
[required_quest_A](#required_quest_A)       | int(10)      | 0       |        
[required_quest_H](#required_quest_H)       | int(10)      | 0       |        
[required_item](#required_item)             | int(10)      | 0       |        
[heroic_keyid_1](#heroic_keyid_1)           | int(30)      | 0       |        
[heroic_keyid_2](#heroic_keyid_2)           | int(30)      | 0       |        
[viewingDistance](#viewingDistance)         | float(0)     | 80      |        
[required_checkpoint](#required_checkpoint) | int(30)      | 0       |        

### entry

The map ID of the entrance.

### screenid

The ID of the Screen ID (.dbc)

### type

Defines the map type:

<pre>
0 = Open world area
1 = Raid
2 = Dungeon
3 = PvP Zone
4 = Multimode with (heroic) 
</pre>

### maxplayers

Maximum of players on this map.

<pre>
0 = Unlimited.
</pre>

### minlevel

Min player level to enter this map (Default: 1)

### minlevel_heroic

Min player heroic level to enter this map.

### repop(x - z)

x, y, z where entrance to this map is (graveyards use this)

### repopentry

map ID where entrance to this map is (graveyards use this)

### area_name

...

### flags

<pre>
1   = Enable (If its 1 you can enter the instance else[This instance is unvalidable])
2   = Welcome (if its 2 you get an message on enter[Welcome to Utgarde Keep, Instancelocks are scheduled to reset at (TIME))
4   = Multimode(This is if you want the instance to support Heroic mode)[if its not support and you enter while heroic is on the player you cant enter and get a message with This instance is not for heroic or something]) This is only needed for dungeons, not for raids!
8   = Outland (You require TBC expansion to enter this zone)
16  = Northend (You require WOtlk expansion to enter this zone)
32  = Map has normal 10man raid difficulty
64  = Map has normal 25man raid difficulty
128 = Map has heroic 10man raid difficulty
256 = Map has heroic 25man raid difficulty
</pre>

You can combine these flags via addition ( 1+8 = 9)

### cooldown

...

### lvl_mod_a

Min level of creatures. If you enter the map the creature will change theyr level automatically.

### required_quest_A

Required quest entry ID from [quests](http://www.ascemu.org/wiki/index.php?title=Quests&action=edit&redlink=1 "Quests (page does not exist)") table for alliance.

### required_quest_H

Required quest entry ID from [quests](http://www.ascemu.org/wiki/index.php?title=Quests&action=edit&redlink=1 "Quests (page does not exist)") table for horde.

### required_item

Required item entry ID from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table.

### heroic_keyid_1

Required item entry ID from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table.

### heroic_keyid_2

Required item entry ID from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table.

### viewingDistance

The distance gameobjects and creatures would be visible for the player. Note that this refers to only things you have walked near previously during this specific time in the zone and no other time.

### required_checkpoint

...