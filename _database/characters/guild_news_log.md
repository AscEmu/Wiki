---
title: guild_news_log
type: characterdb
category: G
layout: single_markdown
---

# guild_news_log
This table holds all news for the guild (cata only).

## Structure

Field                     | Type       | Default  | Comment
------------------------- | ---------- | -------- | -------
[guildId](#guildId)       | int(10)    | 0        | key1
[logGuid](#logGuid)       | int(10)    |          | key2
[eventType](#eventType)   | tinyint(3) |          |        
[playerGuid](#playerGuid) | int(10)    | 0        |        
[flags](#flags)           | int(10)    | 0        |        
[value](#value)           | int(10)    | 0        |        
[timeStamp](#timeStamp)   | int(10)    | 0        |        


### guildId

This is the guild ID from guilds table.

### logGuid

The id of the log for the guild.

### eventType


### playerGuid

Related player guid for this event.

### flags


### value


### timeStamp

timestamp of the log