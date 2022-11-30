---
title: creature_difficulty
type: worlddb
category: C
layout: single_markdown
---

# creature_difficulty
This table includes the linked difficulty entry IDs to basic creatures.

## Structure

Field                                                                                     | Type    | Default | Comment
----------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                                                                           | int(30) | 0       |        
[difficulty_1](#difficulty)                                                               | int(30) | 0       |        
[difficulty_2](#difficulty)                                                               | int(30) | 0       |        
[difficulty_3](#difficulty)                                                               | int(30) | 0       |        

### entry

The basic entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") to link difficulty information.

### difficulty

The linked difficulty entry from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties").

**difficulty column for dungeons:**

- difficulty_1 = The linked [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") entry for heroic dungeons

**difficulty column for raids:**

- difficulty_1 = The linked [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") entry for normal 25 men
- difficulty_2 = The linked [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") entry for heroic 10 men
- difficulty_3 = The linked [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") entry for heroic 25 men
