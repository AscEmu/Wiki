---
title: playerpetspells
type: characterdb
category: P
layout: single_markdown
---

# playerpetspells
This table contains the playerpetspells.

## Structure

Field                   | Type       | Default | Comment
----------------------- | ---------- | ------- | -------
[ownerguid](#ownerguid) | bigint(20) |         |        
[petnumber](#petnumber) | int(4)     | 0       |        
[spellid](#spellid)     | int(4)     | 0       |        
[flags](#flags)         | int(4)     | 0       |        

### ownerguid

The character guid of the pet from characters table.

### petnumber

The number of the pet from playerpets table.

### spellid

The spell ID.

### flags

The flags:

    1 = renameable
    2 = abandoned