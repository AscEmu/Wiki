---
title: questlog
type: characterdb
category: Q
layout: single_markdown
---

# questlog
This table contains the questlog of the characters.

## Structure

Field                                     | Type       | Default | Comment
----------------------------------------- | ---------- | ------- | -------
[player_guid](#player_guid)               | bigint(20) | 0       |        
[quest_id](#quest_id)                     | bigint(20) | 0       |        
[slot](#slot)                             | int(20)    | 0       |        
[expirytime](#expirytime)                 | int(20)    | 0       |        
[explored_area1](#explored_area.281-4.29) | bigint(20) | 0       |        
[explored_area2](#explored_area.281-4.29) | bigint(20) | 0       |        
[explored_area3](#explored_area.281-4.29) | bigint(20) | 0       |        
[explored_area4](#explored_area.281-4.29) | bigint(20) | 0       |        
[mob_kill1](#mob_kill.281-4.29)           | bigint(20) | 0       |        
[mob_kill2](#mob_kill.281-4.29)           | bigint(20) | 0       |        
[mob_kill3](#mob_kill.281-4.29)           | bigint(20) | 0       |        
[mob_kill4](#mob_kill.281-4.29)           | bigint(20) | 0       |        
[completed](#completed)                   | int(10)    | 0       |        

### player_guid

The character guid from characters table.

### quest_id

The quest entry ID from quests table.

### slot

The maximum of open questlogs is 25.

### expirytime

The expirytime in seconds.

### explored_area(1-4)

The explored areas, referr to "ExploreTrigger(1-4)" in quests table.
(Didn't know if it is a simple boolean value or the area ID)

### mob_kill(1-4)

The killed mobcount, referr to "ReqKillMobOrGOId(1-4)" in quests table.

### completed

    0 = Not completed
    1 = Completed