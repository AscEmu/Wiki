---
title: playerreputations
type: characterdb
category: P
layout: single_markdown
---

# playerreputations
This table contains the character reputations.

## Structure

Field                         | Type    | Default | Comment
----------------------------- | ------- | ------- | -------
[guid](#guid)                 | int(10) |         |        
[faction](#faction)           | int(10) |         |        
[flag](#flag)                 | int(10) | 0       |        
[basestanding](#basestanding) | int(11) | 0       |        
[standing](#standing)         | int(11) | 0       |        

### guid

The character guid from characters table.

### faction

The faction of the character.

### flag

The flag.

### basestanding

The basestanding...

### standing

    0 = Hated
    1 = Hostile
    2 = Unfriendly
    3 = Neutral
    4 = Friendly
    5 = Honored
    6 = Reverded
    7 = Exalted