---
title: corpses
type: characterdb
category: C
layout: single_markdown
---

# corpses
This table contains the corpses of the dead characters.

## Structure

Field                                | Type       | Default | Comment
------------------------------------ | ---------- | ------- | -------
[guid](#guid)                        | bigint(20) | 0       |        
[positionX](#position)               | float      | 0       |        
[positionY](#position)               | float      | 0       |        
[positionZ](#position)               | float      | 0       |        
[orientation](#position)             | float      | 0       |        
[zoneId](#zone-map-instance)         | int(11)    | 0       |        
[mapId](#zone-map-instance)          | int(11)    | 0       |        
[instanceId](#zone-map-instance)     | int(11)    | 0       |        
[data](#data)                        | longtext   |         |        

### guid

This is the same like row "acct" in accounts table (LogonDB).

### position

The position of the corpses (x, y, z, and orientation).

### zone-map-instance

The zone, map and instance ID.

### data

All the important data to visualize the character (Hair, face, color, clothe, etc)