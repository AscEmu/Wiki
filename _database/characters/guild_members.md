---
title: guild_members
type: characterdb
category: G
layout: single_markdown
---

# guild_members
This table contains the statistics and data for guilds.

## Structure

Field                          | Type        | Default      | Comment
------------------------------ | ----------- | ------------ | -------
[guildId](#guildId)            | int(10)     |              | key1
[playerid](#playerid)          | int(30)     |              | key2
[guildRank](#guildRank)        | tinyint(3)  |              |        
[publicNote](#publicNote)      | varchar(31) | empty string |        
[officerNote](#officerNote)    | varchar(31) | empty string |        


### guildId

The id of the guild from guilds table.

### playerid

The character guid of the guild member from characters table.

### guildRank

The guild rank of the guild member from guild_ranks table.

### publicNote

The public note about a guild member.

### officerNote

The officers note about a guild member.