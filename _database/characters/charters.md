---
title: charters
type: characterdb
category: C
layout: single_markdown
---

# charters
This table contains the guild charters.

## Structure

Field                       | Type        | Default                 | Comment
--------------------------- | ----------- | ----------------------- | -------
[charterId](#charterId)     | int(30)     |                         |        
[charterType](#charterType) | int(30)     | 0                       |        
[leaderGuid](#leaderGuid)   | int(20)     | 0                       |        
[guildName](#guildName)     | varchar(32) | Empty String            |        
[itemGuid](#itemGuid)       | varchar(32) |                         |        
[signer(1-9)](#signers)     | int(10)     | 0                       |        

### charterId

The guid of the leader from characters table.

### charterType

    0 = A normal guild (default)
    1 = Arena 2 vs 2
    2 = Arena 3 vs 3
    3 = Arena 5 vs 5

### leaderGuid

The ID of the guild (filled by the core).

### guildName

The name of the guild.

### itemGuid

??

### signers

The guid of the signers from characters table.