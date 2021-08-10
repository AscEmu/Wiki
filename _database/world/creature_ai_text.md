---
title: creature_ai_text
type: worlddb
category: C
layout: single_markdown
---

# creature_ai_text
This table is ONLY for automated npc say texts. Random say text is not supported. Use npc_script_text for individual texts!!!
This table contains the creature monstersay. 

## Structure

Field                                                                                | Type     | Default | Comment
------------------------------------------------------------------------------------ | -------- | ------- | -------
[entry](#entry)             | int(10)  | 0       |        
[event](#event)             | int(10)  | 0       |        
[chance](#chance)           | float    | 0       |        
[text0](##text_0_4)         | longtext |         |        
[text1](##text_0_4)         | longtext |         |        
[text2](##text_0_4)         | longtext |         |        
[text3](##text_0_4)         | longtext |         |        
[text4](##text_0_4)         | longtext |         |        

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### event

<pre>
0 = MONSTER_SAY_EVENT_ENTER_COMBAT
1 = MONSTER_SAY_EVENT_RANDOM_WAYPOINT
2 = MONSTER_SAY_EVENT_CALL_HELP
3 = MONSTER_SAY_EVENT_ON_COMBAT_STOP
4 = MONSTER_SAY_EVENT_ON_DAMAGE_TAKEN
5 = MONSTER_SAY_EVENT_ON_DIED
</pre>

### chance

The percent the monster will say some text on entering event.

<pre>
0 = never
100 = random one of the defined text.
</pre>

### text_0_4

The text the monster say.