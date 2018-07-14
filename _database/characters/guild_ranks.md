---
title: guild_ranks
type: characterdb
category: G
layout: single_markdown
---

# guild_ranks
This table defines the ranks for each guild.

## Structure

Field                                           | Type         | Default      | Comment
----------------------------------------------- | ------------ | ------------ | -------
[guildId](#guildId)                             | int(6)       | 0            | key1
[rankId](#rankId)                               | int(1)       |              | key2
[rankName](#rankName)                           | varchar(255) | Empty String |        
[rankRights](#rankRights)                       | int(3)       | 0            |        
[goldLimitPerDay](#goldLimitPerDay)             | int(30)      | 0            |        
[bankTabFlags0](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay0](#itemStacksPerDay0-5)       | int(30)      | 0            |        
[bankTabFlags1](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay1](#itemStacksPerDay0-5)       | int(30)      | 0            |        
[bankTabFlags2](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay2](#itemStacksPerDay0-5)       | int(30)      | 0            |        
[bankTabFlags3](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay3](#itemStacksPerDay0-5)       | int(30)      | 0            |        
[bankTabFlags4](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay4](#itemStacksPerDay0-5)       | int(30)      | 0            |        
[bankTabFlags5](#bankTabFlags0-5)               | int(30)      | 0            |        
[itemStacksPerDay5](#itemStacksPerDay)          | int(30)      | 0            |        

### guildId

This is the guild ID from guilds table.

### rankId

The rank ID (max 10).

### rankName

The name of the rank.

### rankRights

    1      = guild chat listen
    2      = guild chat write
    4      = offchat listen
    8      = offchat write
    16     = can invite new members
    32     = can remove old members
    64     = 
    128    = can promote guild
    256    = can demote
    4096   = can set motd
    8192   = can set note
    16384  = can view offnote
    32768  = can set offnote
    65536  = can set guild info
    262144 = can use bank repair
    524288 = can withdraw bank money
    913919 = All rights

Simply count the single right values together to combine the rights.

### goldLimitPerDay

Controles the how much money the player can get (in copper) per day.

### bankTabFlags0-5

Defines if the user with this rank can access the tab.

Bankrights:

    1 = can view tab
    2 = can deposit items
    4 = can change tab text

### itemStacksPerDay0-5

Defines how many items the player can get at the tab per day.