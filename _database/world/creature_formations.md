---
title: creature_formations
type: worlddb
category: C
layout: single_markdown
---

# creature_formations
This table contains the formations of creature spawns: a leader and the members that follow it in a fixed distance and angle and assist it in combat.

## Structure

Field                              | Type               | Default | Comment
---------------------------------- | ------------------ | ------- | -------
[leaderGUID](#leaderGUID)          | int unsigned       | 0       |
[memberGUID](#memberGUID)          | int unsigned       | 0       | key
[dist](#dist)                      | float unsigned     |         |
[angle](#angle)                    | float unsigned     |         |
[groupAI](#groupAI)                | int unsigned       |         |
[point_1](#point_1)                | smallint unsigned  | 0       |
[point_2](#point_2)                | smallint unsigned  | 0       |

### leaderGUID

The spawn id of the leader from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns"). The leader has a row of its own where leaderGUID equals memberGUID.

### memberGUID

The spawn id of the member from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns").

### dist

The distance the member keeps to the leader. Ignored for the leader row.

### angle

The angle in degrees at which the member follows the leader, 0 = behind it. Ignored for the leader row.

### groupAI

Bit mask of the group behaviour.

<pre>
0   = no group behaviour
1   = the members assist when the leader aggroes
2   = the leader assists when a member aggroes
3   = every member assists when any member is attacked
512 = the member follows the leader while it walks its waypoints
</pre>

### point_1

Waypoint id of the leader path at which the formation forms up, 0 = unused.

### point_2

Second waypoint id of the leader path at which the formation forms up, 0 = unused.
