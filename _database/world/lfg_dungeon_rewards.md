---
title: lfg_dungeon_rewards
type: worlddb
category: L
layout: single_markdown
---

# lfg_dungeon_rewards
This table contains the rewards for lfg dungeons. 

## Structure

Field                                                                                     | Type       | Default | Comment
----------------------------------------------------------------------------------------- | ---------- | ------- | -------
[dungeon_id](#dungeon_id)   | int(10)    | 0       |        
[max_level](#max_level)     | tinyint(3) | 0       |        
[quest_id_1](#quest_id_1)   | int(10)    | 0       |        
[money_var_1](#money_var_1) | int(10)    | 0       |        
[xp_var_1](#xp_var_1)       | int(10)    | 0       |        
[quest_id_2](#quest_id_2)   | int(10)    | 0       |        
[money_var_2](#money_var_2) | int(10)    | 0       |        
[xp_var_2](#xp_var_2)       | int(10)    | 0       |        

### dungeon_id

The dungeon entry ID from dbc

### max_level

Max level at which this reward is rewarded

### quest_id_1

Quest id with rewards for first dungeon this day

### money_var_1

Money multiplier for completing the dungeon first time in a day with less players than max

### xp_var_1

Experience multiplier for completing the dungeon first time in a day with less players than max

### quest_id_2

Quest id with rewards for the second dungeon this day

### money_var_2

Money multiplier for completing the second dungeon in a day with less players than max

### xp_var_2

Experience multiplier for completing the second dungeon in a day with less players than max