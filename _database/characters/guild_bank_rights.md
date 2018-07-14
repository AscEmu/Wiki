---
title: guild_bank_rights
type: characterdb
category: G
layout: single_markdown
---

# guild_bank_rights
This table contains all bank right.

## Structure

Field                     | Type         | Default | Comment
------------------------- | ------------ | ------- | -------
[guildId](#guildId)       | int(10)      | 0       | key1
[tabId](#tabId)           | tinyint(3)   | 0       | key2
[rankId](#rankId)         | tinyint(3)   | 0       | key3
[bankRight](#bankRight)   | tinyint(3)   | 0       | 
[slotPerDay](#slotPerDay) | int(10)      | 0       | 

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

### rankId

The corresponding rankId.

### bankRight

The rank value for this tab.

### slotPerDay

Allowed slotsPerDay.