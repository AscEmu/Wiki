---
title: trainer_defs
type: worlddb
category: T
layout: single_markdown
---

# trainer_defs
This table defines which spells would be trained by trainers. 

## Structure

Field                                                                                                            | Type    | Default | Comment
---------------------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                                           | int(11) | 0       |        
[required_skill](#required_skill)                         | int(11) | 0       |        
[required_skillvalue](#required_skillvalue)               | int(11) | 0       |        
[req_class](#req_class)                                   | int(11) | 0       |        
[RequiredRace](#RequiredRace)                             | int(11) | 0       |        
[RequiredReputation](#RequiredReputation)                 | int(11) | 0       |        
[RequiredReputationValue](#RequiredReputationValue)       | int(11) | 0       |        
[trainer_type](#trainer_type)                             | int(11) | 0       |        
[trainer_ui_window_message](#trainer_ui_window_message)   | text    | 0       |        
[can_train_gossip_textid](#can_train_gossip_textid)       | int(11) | 0       |        
[cannot_train_gossip_textid](#cannot_train_gossip_textid) | int(11) | 0       |        

### entry

The creature entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table.

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

The TextID shown if trainer can train this spell from [npc_gossip_textid](http://www.ascemu.org/wiki/index.php?title=Npc_gossip_textid "Npc gossip textid") table.

### cannot_train_gossip_textid

The TextID shown if trainer can not train this spell from [npc_gossip_textid](http://www.ascemu.org/wiki/index.php?title=Npc_gossip_textid "Npc gossip textid") table.