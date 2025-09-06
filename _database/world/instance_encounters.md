---
title: instance_encounters
type: worlddb
category: I
layout: single_markdown
---

# instance_encounters
This table contains the instance encounters.

## Structure

Field                                                          | Type         | Default | Comment
-------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                                                | unsigned int |         |
[creditType](#creditType)                                      | tiny int     | 0       |
[creditEntry](#creditEntry)                                    | unsigned int | 0       |
[lastEncounterDungeon](#lastEncounterDungeon)                  | u smallint   | 0       |
[comment](#comment)                                            | varchar(255) | ''      |
[mapid](#mapid)                                                | int          |         |        


### entry

The entry of the creature from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### creditType

0 = kill creature

1 = cast spell

### creditEntry

0 = sets extra_a9_flags (boss) on this entry

1 = nothing is happening here beside a spell check

### mapid

The ID of the map, use gps to get it.

