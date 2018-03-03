---
title: instances
type: characterdb
category: I
layout: single_markdown
---

# instances
This table contains information about current dungeon status.

## Structure

Field                                 | Type       | Default | Comment
------------------------------------- | ---------- | ------- | -------
[id](#id)                             | int(30)    |         |        
[mapid](#mapid)                       | int(30)    |         |        
[creation](#creation)                 | int(30)    |         |        
[expiration](#expiration)             | int(30)    |         |        
[killed_npc_guids](#killed_npc_guids) | text       |         |        
[difficulty](#difficulty)             | int(30)    |         |        
[creator_group](#creator_group)       | int(30)    |         |        
[creator_guid](#creator_guid)         | int(30)    |         |        
[persistent](#persistent)             | tinyint(4) | 0       |        

### id

The id of the created instance of the instance for the group.

### mapid

The map ID of the instance.

### creation

The Date/Time of creation.

### expiration

Time till the expiration of the instance.

### killed_npc_guids

The guids of the killed npcs from creature_spawns) table.

### difficulty

    0 = Normal
    1 = Heroic

### creator_group

The character guid from characters table.

### creator_guid

Some int value...

### persistent

    0 = false (the instance is not in use)
    1 = true (the instance is in use)