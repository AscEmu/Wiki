---
title: guild_bank_tabs
type: characterdb
category: G
layout: single_markdown
---

# guild_bank_tabs
This table contains all created tabs for the guildbanks.

## Structure

Field               | Type         | Default | Comment
------------------- | ------------ | ------- | -------
[guildId](#guildId) | int(30)      |         | key1
[tabId](#tabId)     | int(30)      |         | key2
[tabName](#tabName) | varchar(200) |         |        
[tabIcon](#tabIcon) | varchar(200) |         |        
[tabInfo](#tabInfo) | varchar(200) |         |        

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

### tabName

The name of the tab.

### tabIcon

The ID of the tab.

### tabInfo

The info of the tab...