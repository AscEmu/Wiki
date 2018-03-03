---
title: playersummonspells
type: characterdb
category: P
layout: single_markdown
---

# playersummonspells
This table contains the relation between players and pets and the spell to teleport.

## Structure

Field                   | Type       | Default | Comment
----------------------- | ---------- | ------- | -------
[ownerguid](#ownerguid) | bigint(20) | 0       |        
[entryid](#entryid)     | int(4)     | 0       |        
[spellid](#spellid)     | int(4)     | 0       |        

### ownerguid

The character guid of the pet owner from characters table.

### entryid

The creature entry ID from creature_properties table.

### spellid

The spell ID for the teleport.