---
title: reputation_instance_onkill
type: worlddb
category: R
layout: single_markdown
---

# reputation_instance_onkill
This table contains... 

## Structure

Field                                                                                                                    | Type          | Default | Comment
------------------------------------------------------------------------------------------------------------------------ | ------------- | ------- | -------
[mapid](#mapid)                                     | smallint(5)   |         |        
[mob_rep_reward](#mob_rep_reward)                   | mediumint(10) | 0       |        
[mob_rep_limit](#mob_rep_limit)                     | mediumint(10) | 0       |        
[boss_rep_reward](#boss_rep_reward)                 | smallint(5)   | 0       |        
[boss_rep_limit](#boss_rep_limit)                   | mediumint(10) | 0       |        
[faction_change_alliance](#faction_change_alliance) | smallint(5)   |         |        
[faction_change_horde](#faction_change_horde)       | smallint(5)   |         |        

### mapid

The (instance) map entry ID.

### mob_rep_reward

The reward faction value for killing a mob.

### mob_rep_limit

The maximum reward value for the faction ID.

### boss_rep_reward

The reward faction value for killing a boss.

### boss_rep_limit

The maximum reward value for the faction ID.

### faction_change_alliance

The faction ID for alliance players.

### faction_change_horde

The faction ID for horde players.