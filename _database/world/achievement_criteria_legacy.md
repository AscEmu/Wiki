---
title: achievement_criteria_legacy
type: worlddb
category: A
layout: single_markdown
---

# achievement_criteria_legacy
This table contains the achievement criteria of the builds before 5.4. With 5.4 the criteria got new ids and became parts of criteria trees. A character that was saved by a server for an older build is converted once at the start of the server, the converter uses this table to map the old progress to the new criteria.

## Structure

Field                             | Type              | Default | Comment
--------------------------------- | ----------------- | ------- | -------
[criteria_id](#criteria_id)       | int unsigned      | 0       | key
[achievement_id](#achievement_id) | int unsigned      | 0       |
[type](#type)                     | smallint unsigned | 0       |
[asset](#asset)                   | int               | 0       |

### criteria_id

The old criteria id as stored in [character_achievement_progress](/Wiki/database/characters/character_achievement_progress/ "Character achievement progress").

### achievement_id

The achievement the criteria belongs to.

### type

The criteria type (e.g. 5 = reach level, 8 = complete achievement, 11 = complete quests in zone).

### asset

The object of the type, e.g. the creature, the quest, the zone or the achievement. 0 for types without one.

The old client data is used first when the server has it, the table is only read when it is missing. Progress of an old criteria without a matching new criteria is dropped and counted in the log of the converter.