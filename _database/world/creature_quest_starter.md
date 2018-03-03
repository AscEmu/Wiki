---
title: creature_quest_starter
type: worlddb
category: C
layout: single_markdown
---

# creature_quest_starter
This table contains the creatures which start quests

## Structure

Field                                                                            | Type    | Default | Comment
-------------------------------------------------------------------------------- | ------- | ------- | -------
[id](#id)       | int(11) | 0       |        
[quest](#quest) | int(11) | 0       |        

### id

The Entry ID of the mob that starts the quest, from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") and [creature_proto](http://www.ascemu.org/wiki/index.php?title=Creature_proto&action=edit&redlink=1 "Creature proto (page does not exist)").

### quest

The Entry ID for the quest to be started, from [quests](http://www.ascemu.org/wiki/index.php?title=Quests&action=edit&redlink=1 "Quests (page does not exist)").