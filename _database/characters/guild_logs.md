---
title: guild_logs
type: characterdb
category: G
layout: single_markdown
---

# guild_logs
This table contains the logs for guilds.

## Structure

Field                      | Type       | Default | Comment
-------------------------- | ---------- | ------- | -------
[guildId](#guildId)        | int(10)    |         | key1
[logGuid](#logGuid)        | int(10)    |         | key2
[eventType](#eventType)    | tinyint(3) |         |        
[playerGuid1](#playerGuid) | int(10)    |         |        
[playerGuid2](#playerGuid) | int(20)    |         |        
[newRank](#newRank)        | tinyint(3) |         |        
[timestamp](#timestamp)    | int(10)    |         |        


### guildId

This is the guild ID from guilds table.

### logGuid

The log identyfier (unique).

### eventType

    1 = invite member
    2 = join guild
    3 = promotion
    4 = demotion
    5 = removal
    6 = left guild

### playerGuid

Used for eventTypes.

### newRank

Log the new rank based on the eventType.
    
### timestamp

The Timestamp of the log entry.