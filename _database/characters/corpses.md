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
[positionX](#position.28X_-_o.29)    | float      | 0       |        
[positionY](#position.28X_-_o.29)    | float      | 0       |        
[positionZ](#position.28X_-_o.29)    | float      | 0       |        
[orientation](#position.28X_-_o.29)  | float      | 0       |        
[zoneId](#zone.2Fmap.2Finstance)     | int(11)    | 0       |        
[mapId](#zone.2Fmap.2Finstance)      | int(11)    | 0       |        
[instanceId](#zone.2Fmap.2Finstance) | int(11)    | 0       |        
[data](#data)                        | longtext   |         |        

### guid

This is the same like row "acct" in accounts table (LogonDB).

### position(X - o)

The position of the corpses (x, y, z, and orientation).

### zone/map/instance

The zone, map and instance ID.

### data

All the important data to visualize the character (Hair, face, color, clothe, etc)