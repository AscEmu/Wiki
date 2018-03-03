---
title: playercooldowns
type: characterdb
category: P
layout: single_markdown
---

# playercooldowns
This table contains the cooldowns for the characters.

## Structure

Field                                         | Type    | Default | Comment
--------------------------------------------- | ------- | ------- | -------
[player_guid](#player_guid)                   | int(30) |         |        
[cooldown_type](#cooldown_type)               | int(30) |         |        
[cooldown_misc](#cooldown_misc)               | int(30) |         |        
[cooldown_expire_time](#cooldown_expire_time) | int(30) |         |        
[cooldown_spellid](#cooldown_spellid)         | int(30) |         |        
[cooldown_itemid](#cooldown_itemid)           | int(30) |         |        

### player_guid

The character guid from characters table.

### cooldown_type

    0 = Spell (single)
    1 = Item
    2 = Spell (category)

### cooldown_misc

This field depends on the cooldown_type.

    cooldown_type = 0 (filled with a spell ID)
    cooldown_type = 1 (filled with a item guid)
    cooldown_type = 0 (filled with a spellcategory ID)

### cooldown_expire_time

The time the cooldown expired in unix epoch format.

### cooldown_spellid

The spell that cast it?

### cooldown_itemid

The item that cast it?