---
title: achievement_criteria_requirement
type: worlddb
category: A
layout: single_markdown
---

# achievement_criteria_requirement
This table contains requirements of achievement criteria that the client data does not carry (WotLK and Cata). A criteria only counts an event when all of its rows hold. The client data of 5.x and later brings its own conditions, the table has no rows for these builds.

## Structure

Field                       | Type             | Default | Comment
--------------------------- | ---------------- | ------- | -------
[criteria_id](#criteria_id) | int unsigned     | 0       | key
[min_build](#min_build)     | int unsigned     | 0       | key
[max_build](#max_build)     | int unsigned     | 0       |
[requirement](#requirement) | tinyint unsigned | 0       | key
[param1](#param1)           | int unsigned     | 0       |
[param2](#param2)           | int unsigned     | 0       |

### criteria_id

The criteria id from the client data (Achievement_Criteria). Rows of criteria the client data of the server does not know are skipped.

### min_build

The lowest client build the row is used for.

### max_build

The highest client build the row is used for.

### requirement

What the row asks for:

Requirement | Meaning                                                                     | param1                               | param2
----------- | --------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------
1           | the target is the creature                                                  | creature entry                       | 0
2           | the target is a player of the class and race                                | class, 0 for any                     | race, 0 for any
3           | the target is a player with at most this health                             | health percent                       | 0
4           | the target is a dead player who did not release the corpse                  | 1 own team, 0 the enemy              | 0
5           | the target has the aura with the effect                                     | spell                                | effect index
6           | the target has at least this level                                          | level                                | 0
7           | the target has the gender                                                   | 0 male, 1 female                     | 0
8           | the target is a player of the team                                          | 0 Alliance, 1 Horde                  | 0
10          | the player has the aura with the effect                                     | spell                                | effect index
11          | the player is in the zone or area                                           | zone or area                         | 0
12          | the player is on the map                                                    | map                                  | 0
13          | the player has the class and race                                           | class, 0 for any                     | race, 0 for any
14          | the player is at least this drunk                                           | 0 sober, 1 tipsy, 2 drunk, 3 smashed | 0
15          | the player knows the title                                                  | CharTitles id                        | 0
20          | the map has at least this difficulty, a raid of the other size never counts | difficulty                           | 0
21          | at most this many players are on the map, game masters not counted          | players                              | 0
30          | the value of the event compares to param1                                   | value                                | 0 equal, 1 higher, 2 lower, 3 at least, 4 at most
31          | the item of the event has at least this level and quality                   | item level                           | quality
32          | the item of the event has exactly this quality                              | quality                              | 0
40          | a game event of the holiday runs                                            | holiday id                           | 0
41          | the game event runs                                                         | gameevent_properties entry           | 0
42          | the n-th anniversary of the game                                            | n                                    | 0
43          | the losing team has a score in the range                                    | lowest score                         | highest score
50          | a criteria script decides                                                   | 0                                    | 0
51          | the criteria script of the instance decides                                 | 0                                    | 0

Requirements 42 and 43 are not evaluated yet. Their criteria never progress and the server reports them at the start. Requirements 50 and 51 need a criteria script, a criteria without one never progresses.

### param1

See [requirement](#requirement).

### param2

See [requirement](#requirement).