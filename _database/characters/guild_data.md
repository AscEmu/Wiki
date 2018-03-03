---
title: guild_data
type: characterdb
category: G
layout: single_markdown
---

# guild_data
This table contains the statistics and data for guilds.

## Structure

Field                                                                   | Type         | Default | Comment
----------------------------------------------------------------------- | ------------ | ------- | -------
[guildid](#guildid)                                                     | int(30)      |         |        
[playerid](#playerid)                                                   | int(30)      |         |        
[guildRank](#guildRank)                                                 | int(30)      |         |        
[publicNote](#publicNote)                                               | varchar(300) |         |        
[officerNote](#officerNote)                                             | varchar(300) |         |        
[lastWithdrawReset](#lastWithdrawReset)                                 | int(30)      | 0       |        
[withdrawlsSinceLastReset](#withdrawlsSinceLastReset)                   | int(30)      | 0       |        
[lastItemWithdrawReset0](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset0](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        
[lastItemWithdrawReset1](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset1](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        
[lastItemWithdrawReset2](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset2](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        
[lastItemWithdrawReset3](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset3](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        
[lastItemWithdrawReset4](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset4](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        
[lastItemWithdrawReset5](#lastItemWithdrawReset.280-5.29)               | int(30)      | 0       |        
[itemWithdrawlsSinceLastReset5](#itemWithdrawlsSinceLastReset.280-5.29) | int(30)      | 0       |        

### guildid

The id of the guild from guilds table.

### playerid

The character guid of the guild member from characters table.

### guildRank

The guild rank of the guild member from guild_ranks table.

### publicNote

The public note about a guild member.

### officerNote

The officers note about a guild member.

### lastWithdrawReset

The date/time to controle the "goldLimitPerDay" restriction. For more information, take a look at guild_ranks definitions.

### withdrawlsSinceLastReset

The copper/gold the guild member take away from the guild bank. (goldLimitPerDay restriction).

### lastItemWithdrawReset(0-5)

The date/time to controle the "itemStacksperDay" restriction. For more information, take a look at guild_ranks definitions.

### itemWithdrawlsSinceLastReset(0-5)

The itemcount the guild member take away from the guild bank. (itemStacksperDay restriction).