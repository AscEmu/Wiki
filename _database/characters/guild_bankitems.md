---
title: guild_bankitems
type: characterdb
category: G
layout: single_markdown
---

# guild_bankitems
This table contains all bankitems for the guilds.

## Structure

Field                 | Type    | Default | Comment
--------------------- | ------- | ------- | -------
[guildId](#guildId)   | int(30) |         |        
[tabId](#tabId)       | int(30) |         |        
[slotId](#slotId)     | int(30) |         |        
[itemGuid](#itemGuid) | int(30) |         |        

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

### slotId

Maximum 98.

### itemGuid

...