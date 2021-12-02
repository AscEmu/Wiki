---
title: creature_quest_starter
type: worlddb
category: C
layout: single_markdown
---

# creature_quest_starter
This table contains the creatures which start quests

## Structure

Field                                                                             | Type                 | Default | Comment
--------------------------------------------------------------------------------- | -------------------- | ------- | -------
[id](#id)                                                                         | int(10)              | 0       |
[quest](#quest)                                                                   | int(10)              | 0       |
[min_build](#min_build)                                                           | int(10)              | 12340   |
[max_build](#max_build)                                                           | int(10)              | 12340   |

### id

The Entry ID of the mob that starts the quest, from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties").

### quest

The Entry ID for the quest to be started, from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties").

### min_build

Build number this override is valid.

### max_build

Max Build number this override is valid for.
