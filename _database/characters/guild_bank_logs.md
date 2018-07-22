---
title: guild_bank_logs
type: characterdb
category: G
layout: single_markdown
---

# guild_bank_logs
This table contains all logs for the guildbanks.

## Structure

Field                             | Type        | Default | Comment
--------------------------------- | ----------- | ------- | -------
[guildId](#guildId)               | int(10)     | 0       | key1
[logGuid](#logGuid)               | int(10)     | 0       | key2
[tabId](#tabId)                   | tinyint(3)  | 0       | key3
[eventType](#eventType)           | tinyint(3)  | 0       |        
[playerGuid](#playerGuid)         | int(10)     | 0       |        
[itemOrMoney](#itemOrMoney)       | int(10)     | 0       |        
[itemStackCount](#itemStackCount) | smallint(5) | 0       |        
[destTabId](#destTabId)           | tinyint(3)  | 0       |        
[timestamp](#timestamp)           | int(10)     | 0       |        

### guildId

This is the guild ID from guilds table.

### logGuid
The id of the log for the guild.

### tabId

    1 = Tab 1
    2 = Tab 2
    3 = Tab 3
    4 = Tab 4
    5 = Tab 5
    6 = money

The ID of the tab the item is placed.

### eventType

    1 = deposit item
    2 = withdraw item
    3 = unused!
    4 = deposit money
    5 = withdraw money
    6 = repair

### playerGuid

The play guid from characters table.

### itemOrMoney

The item entry from items table or the money value (eventType 4 - 5).

### itemStackCount

The number of stacked items.

### destTabId
the destination tab for the item in this log.

### timestamp

The timestamp of the log entry.