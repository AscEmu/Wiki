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

The Entry ID of the mob that starts the quest, from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties").

### quest

The Entry ID for the quest to be started, from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties").