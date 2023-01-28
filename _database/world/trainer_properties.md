---
title: trainer_properties
type: worlddb
category: T
layout: single_markdown
---

# trainer_properties
This table defines which creature can train. (Link from creature entry to spell templates) 

## Structure

Field                                                                                                            | Type    | Default | Comment
---------------------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                                                                                                  | int(11) | 0       |        
[build](#build)                                                                                                  | int(11) | 0       |        
[required_skill](#required_skill)                                                                                | int(11) | 0       |        
[required_skillvalue](#required_skillvalue)                                                                      | int(11) | 0       |        
[req_class](#req_class)                                                                                          | int(11) | 0       |        
[RequiredRace](#RequiredRace)                                                                                    | int(11) | 0       |        
[RequiredReputation](#RequiredReputation)                                                                        | int(11) | 0       |        
[RequiredReputationValue](#RequiredReputationValue)                                                              | int(11) | 0       |        
[trainer_type](#trainer_type)                                                                                    | int(11) | 0       |        
[trainer_ui_window_message](#trainer_ui_window_message)                                                          | text    | 0       |        
[can_train_gossip_textid](#can_train_gossip_textid)                                                              | int(11) | 0       |        
[spellset_id](#spellset_id)                                                                                      | int     | 0       |        
[can_train_max_level](#can_train_max_level)                                                                      | int     | 0       |        
[can_train_min_skill_value](#can_train_min_skill_value)                                                          | int     | 0       |        
[can_train_max_skill_value](#can_train_max_skill_value)                                                          | int     | 0       |        
[comment](#comment)                                                                                              | varchar | ''      |        

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### entry
new field

### required_skill

The required skill ID.

### required_skillvalue

The tequired value of skill linked to required_skill.

### req_class

Required class.  

### RequiredRace

Required race.

### RequiredReputation

ID of faction that certain standing with it is required

### RequiredReputationValue

Amount of reputation required to train

<pre>
42000 - Exalted
</pre>

### trainer_type

...

### trainer_ui_window_message

The message Text for the trainer window.

### can_train_gossip_textid

The TextID shown if trainer can train this spell from [npc_gossip_textid](/Wiki/database/world/npc_gossip_textid/ "Npc gossip textid") table.

### cannot_train_gossip_textid

The TextID shown if trainer can not train this spell from [npc_gossip_textid](/Wiki/database/world/npc_gossip_textid/ "Npc gossip textid") table.

### spellset_id
ID to the spellset defined in [trainer_properties_spells](/Wiki/database/world/trainer_properties_spellset/) table.

### can_train_max_level
Defines which level of spell can be trained. 0 = all levels in the spellset. [trainer_properties_spells](/Wiki/database/world/trainer_properties_spells/ "reqlevel")

### can_train_min_skill_value
Defines which skill value of spell can be trained. 0 = no minimum skill values in the spellset. [trainer_properties_spells](/Wiki/database/world/trainer_properties_spells/ "reqskillvalue")

### can_train_max_skill_value
Defines which skill value of spell can be trained. 0 = no maximum skill values in the spellset. [trainer_properties_spells](/Wiki/database/world/trainer_properties_spells/ "reqskillvalue")

### comment
Internal comment for database devs.

### under development
This table is not in production.
