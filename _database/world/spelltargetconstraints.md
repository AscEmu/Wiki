---
title: spelltargetconstraints
type: worlddb
category: S
layout: single_markdown
---

# spelltargetconstraints
This table defines which spells contraints which target. 

## Structure

Field                                                                                      | Type    | Default | Comment
------------------------------------------------------------------------------------------ | ------- | ------- | -------
[SpellID](#SpellID)       | int(10) | 0       |        
[TargetType](#TargetType) | int(10) | 0       |        
[TargetID](#TargetID)     | int(10) | 0       |        

### SpellID

The spell ID.

### TargetType

<pre>
0 = Creature
1 = Gameobject
</pre>

### TargetID

If TargetType = 0 it is the entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table, otherwhise it is the entry ID from [gameobject_names](http://www.ascemu.org/wiki/index.php?title=Gameobject_names&action=edit&redlink=1 "Gameobject names (page does not exist)")