---
title: player_xp_for_level
type: worlddb
category: P
layout: single_markdown
---

# player_xp_for_level
This table defines the needed xp for player levelup.

## Structure

Field                               | Type        | Default | Comment
----------------------------------- | ----------- | ------- | -------
[player_lvl](#player_lvl)           | tinyint(3)  |         | key
[build](#build)                     | smallint(6) | 12340   | key
[next_lvl_req_xp](#next_lvl_req_xp) | int(11)     |         |        

### player_lvl

The (current) playerlevel.

### build

Build number to determine if the data is for our current compiled version.

### next_lvl_req_xp

The needed xp for the next level.