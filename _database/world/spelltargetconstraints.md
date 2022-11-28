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
[SpellID](#SpellID)                                                                        | int(10) | 0       |        
[TargetType](#TargetType)                                                                  | int(10) | 0       |        
[TargetID](#TargetID)                                                                      | int(10) | 0       |        

### SpellID

The spell ID.

### TargetType

<pre>
0 = Creature
1 = Gameobject
</pre>

### TargetID

If TargetType = 0 it is the entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table, otherwhise it is the entry ID from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties")