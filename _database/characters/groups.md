---
title: groups
type: characterdb
category: G
layout: single_markdown
---

# groups
This table contains the information about the different groups.

## Structure

Field                                 | Type       | Default              | Comment
------------------------------------- | ---------- | -------------------- | -------
[group_id](#group_id)                 | int(30)    | NOT NULL             |        
[group_type](#group_type)             | tinyint(2) | NOT NULL             |        
[subgroup_count](#subgroup_count)     | tinyint(2) | NOT NULL             |        
[loot_method](#loot_method)           | tinyint(2) | NOT NULL             |        
[loot_threshold](#loot_threshold)     | tinyint(2) | NOT NULL             |        
[difficulty](#difficulty)             | int(30)    | NOT NULL DEFAULT '0' |        
[raiddifficulty](#raiddifficulty)     | int(30)    | NOT NULL DEFAULT '0' |        
[assistant_leader](#assistant_leader) | int(30)    | NOT NULL DEFAULT '0' |        
[main_tank](#main_tank)               | int(30)    | NOT NULL DEFAULT '0' |        
[main_assist](#main_assist)           | int(30)    | NOT NULL DEFAULT '0' |        
[group1member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group1member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group1member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group1member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group1member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group2member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group2member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group2member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group2member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group2member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group3member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group3member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group3member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group3member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group3member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group4member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group4member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group4member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group4member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group4member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group5member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group5member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group5member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group5member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group5member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group6member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group6member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group6member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group6member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group6member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group7member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group7member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group7member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group7member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group7member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group8member1](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group8member2](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group8member3](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group8member4](#groupXmemberX)       | int(50)    | NOT NULL             |        
[group8member5](#groupXmemberX)       | int(50)    | NOT NULL             |        
[timestamp](#timestamp)               | int(30)    | NOT NULL             |        
[instanceids](#instanceids)           | text       | NOT NULL             |        

### group_id

The unique group ID.

### group_type

    0 = party
    1 = battleground
    2 = raid
    3 = battleground/raid
    8 = Looking for dungeon

### subgroup_count

The number of subgroups.

### loot_method

    0 = Free for all
    1 = Round robin
    2 = Master loot
    3 = Group loot
    4 = Need before greed

### loot_threshold

...

### difficulty

    0 = Normal
    1 = Heroic

### raiddifficulty

    0 = Normal 10 man
    1 = Normal 25 man
    2 = Heroic 10 man
    4 = Heroic 25 man

### assistant_leader

The characters guid for the assitant leader of the group from characters table.

### main_tank

The character guid of the main tank from characters table.

### main_assist

The character guid main assitant from characters table.

### groupXmemberX

The characters guid of the subgroup members from characters table.

### timestamp

Creation Date/Time of the group.

### instanceids

mapID & mode is equal to the unique instance id.