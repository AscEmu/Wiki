---
title: gameobject_spawns_overrides
type: worlddb
category: G
layout: single_markdown
---

# gameobject_spawns_overrides
This table contains data which differ from the gameobject_properties table to overwrite them on spawn.

## Structure

Field                                   | Type          | Default | Comment 
--------------------------------------- | ------------- | ------- | --------
[id](#id)                               | int(11)       |         | key, auto
[min_build](#min_build)                 | smallint(6)   | 12340   | key
[max_build](#max_build)                 | smallint(6)   | 12340   |
[scale](#scale)                         | float(0)       | 0       |                
[faction](#faction)                     | int(10)       | 0       |  
[flags](#flags)                         | int(10)       | 0       |              

### id

spawnID to a matching gameobject_spawns entry.

### min_build

Build number this spawn was introduced.

### max_build

Max Build number this spawn is valid for.

### scale

The customized scale. It would be saved after .go mod scale X.

### faction

The faction. It would be saved after .go mod faction X.

### flags

Value | Bit   | Named                  | Description                        
----- | ----- | ---------------------- | -----------------------------------
1     | 0x001 | GO_FLAG_NONSELECTABLE  | Not selectable while animation     
2     | 0x002 | GO_FLAG_LOCKED         | Locked, needs a key to open        
4     | 0x004 | GO_FLAG_UNTARGETABLE   | not targetable                     
8     | 0x008 | GO_FLAG_TRANSPORT      | Used for transporters (ship....)?  
16    | 0x010 | GO_FLAG_NOT_SELECTABLE | Not selectable                     
32    | 0x020 | GO_FLAG_NEVER_DESPAWN  | Never despawn (mostly for doors...)
64    | 0x040 | GO_FLAG_TRIGGERED      | controled by an spell?             
512   | 0x200 | GO_FLAG_DAMAGED        | Gameobject is damaged              
1024  | 0x400 | GO_FLAG_DESTROYED      | Gameobject is destroyed            

You can combine these flags.
