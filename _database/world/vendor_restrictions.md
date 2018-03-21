---
title: vendor_restrictions
type: worlddb
category: V
layout: single_markdown
---

# vendor_restrictions
This table defines the vendor restrictions. 

## Structure

Field                                                                                                   | Type    | Default | Comment
------------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                           | int(10) |         |        
[racemask](#racemask)                     | int(11) |  -1     |        
[classmask](#classmask)                   | int(11) |  -1     |        
[reqrepfaction](#reqrepfaction)           | int(10) | 0       |        
[reqrepfactionvalue](#reqrepfactionvalue) | int(10) | 0       |        
[canbuyattextid](#canbuyattextid)         | int(10) | 0       |        
[cannotbuyattextid](#cannotbuyattextid)   | int(10) | 0       |        
[flags](#flags)                           | int(10) | 0       |        

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### racemask

The race ID...

### classmask

The class ID...

### reqrepfaction

The rquired faction...

### reqrepfactionvalue

The rquired faction value linked to reqrepfaction...

### canbuyattextid

The TextID shown if vendor can sell things to player from [npc_gossip_textid](/Wiki/database/world/npc_gossip_textid/ "Npc gossip textid") table.

### cannotbuyattextid

The TextID shown if vendor can not sell things to player from [npc_gossip_textid](/Wiki/database/world/npc_gossip_textid/ "Npc gossip textid") table.

### flags

<pre>
0 = check for all values
1 = classic mount vendor
</pre>