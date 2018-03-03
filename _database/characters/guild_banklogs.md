---
title: guild_banklogs
type: characterdb
category: G
layout: single_markdown
---

# guild_banklogs
This table contains all logs for the guildbanks.

## Structure

Field                       | Type    | Default | Comment
--------------------------- | ------- | ------- | -------
[guildId](#guildId)         | int(30) |         |        
[tabId](#tabId)             | int(30) |         |        
[action](#action)           | int(5)  |         |        
[player_guid](#player_guid) | int(30) |         |        
[item_entry](#item_entry)   | int(30) |         |        
[stack_count](#stack_count) | int(30) |         |        
[timestamp](#timestamp)     | int(30) |         |        

### guildId

This is the guild ID from guilds table.

### tabId

    1 = Tab 1
    2 = Tab 2
    3 = Tab 3
    4 = Tab 4
    5 = Tab 5
    6 = money

The ID of the tab the item is placed.

### action

    1 = deposit item
    2 = withdraw item
    3 = unused!
    4 = deposit money
    5 = withdraw money
    6 = repair

### player_guid

The play guif from characters table.

### item_entry

The item entry ID from items table.

### stack_count

The number of stacked items.

### timestamp

The timestamp of the log entry.