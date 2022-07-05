---
title: gameobject_spawns_extra
type: worlddb
category: G
layout: single_markdown
---

# gameobject_spawns_extra

This table contains the parent rotation for the spawned gameobject.

## Structure

Field                                   | Type          | Default | Comment 
--------------------------------------- | ------------- | ------- | --------
[id](#id)                               | int(11)       |         | key, auto
[min_build](#min_build)                 | smallint(6)   | 12340   | key
[max_build](#max_build)                 | smallint(6)   | 12340   |
[parent_rotation0](#parent_rotation0-3) | float(0)      | 0       |                
[parent_rotation1](#parent_rotation0-3) | float(0)      | 0       |  
[parent_rotation2](#parent_rotation0-3) | float(0)      | 0       |              
[parent_rotation3](#parent_rotation0-3) | float(0)      | 0       |

### id

spawnID to a matching gameobject_spawns entry.

### min_build

Build number this spawn was introduced.

### max_build

Max Build number this spawn is valid for.

### parent_rotation0-3

......
