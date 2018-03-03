---
title: guild_logs
type: characterdb
category: G
layout: single_markdown
---

# guild_logs
This table contains the logs for guilds.

## Structure

Field                     | Type    | Default | Comment
------------------------- | ------- | ------- | -------
[log_id](#log_id)         | int(30) |         |        
[guildId](#guildId)       | int(30) |         |        
[timestamp](#timestamp)   | int(30) |         |        
[event_type](#event_type) | int(30) |         |        
[misc1](#misc_values)     | int(30) |         |        
[misc2](#misc_values)     | int(30) |         |        
[misc3](#misc_values)     | int(30) |         |        

### log_id

The log identyfier (unique).

### guildId

This is the guild ID from guilds table.

### timestamp

The Timestamp of the log entry.

### event_type

    1 = invite member
    2 = join guild
    3 = promotion
    4 = demotion
    5 = removal
    6 = left guild

### misc values

**event_type = 1** 

    misc1 =
    misc2 =

**event_type = 2** 

    misc1 = join date

**event_type = 3** 

    misc1 =
    misc2 =
    misc3 =

**event_type = 4** 

    misc1 =
    misc2 =
    misc3 =

**event_type = 5** 

    misc1 =
    misc2 =

**event_type = 6** 

    misc1 = leave date