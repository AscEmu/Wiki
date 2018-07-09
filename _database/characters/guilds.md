---
title: guilds
type: characterdb
category: G
layout: single_markdown
---

# guilds
This table defines the main values of the guilds.

## Structure

Field                               | Type         | Default      | Comment
----------------------------------- | ------------ | ------------ | -------
[guildId](#guildId)                 | bigint(20)   |              |        
[guildName](#guildName)             | varchar(32)  | Empty String |        
[leaderGuid](#leaderGuid)           | bigint(20)   | 0            |        
[emblemStyle](#emblemStyle)         | int(10)      | 0            |        
[emblemColor](#emblemColor)         | int(10)      | 0            |        
[borderStyle](#borderStyle)         | int(10)      | 0            |        
[borderColor](#borderColor)         | int(10)      | 0            |        
[backgroundColor](#backgroundColor) | int(10)      | 0            |        
[guildInfo](#guildInfo)             | varchar(300) | Empty String |        
[motd](#motd)                       | varchar(300) | Empty String |        
[createdate](#createdate)           | int(30)      |              |        
[bankBalance](#bankBalance)         | bigint(30)   |              |        
[guildLevel](#guildLevel)           | int(10)      | 1            | Used for Cata only
[guildExperience](#guildExperience) | bigint(20)   | 0            | Used for Cata only
[todayExperience](#todayExperience) | bigint(20)   | 0            | Used for Cata only

### guildId

This is the unique identyfier for the guild.

### guildName

The name of the guild.

### leaderGuid

The character guid of the guild leader from characters table.

### emblemStyle

The style of the guild emblem.

### emblemColor

The color of the guild emblem.

### borderStyle

The border style of the tabard.

### borderColor

The border color of the tabard.

### backgroundColor

The background color of the tabard.

### guildInfo

The message appears in "Guild Information".

### motd

The message appears in "Message of the day".

### createdate

The createdate of the guild.

### bankBalance

The total money, in copper, that is currently in the guild's guild bank.

### guildLevel

The level of the guild (cata only)

### guildExperience

Experience of the guild (cata only)

### todayExperience

Current/todays experience (cata only)
