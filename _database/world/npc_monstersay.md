---
title: npc_monstersay
type: worlddb
category: N
layout: single_markdown
---

# npc_monstersay
This table is ONLY for automated npc say texts. Random say text is not supported. Use npc_script_text for individual texts!!!
This table contains the creature monstersay. 

## Structure

Field                                                                                | Type     | Default | Comment
------------------------------------------------------------------------------------ | -------- | ------- | -------
[entry](#entry)             | int(10)  | 0       |        
[event](#event)             | int(10)  | 0       |        
[chance](#chance)           | float    | 0       |        
[language](#language)       | int(10)  | 0       |        
[type](#type)               | int(10)  | 0       |        
[monstername](#monstername) | longtext |         |        
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

### language

<pre>
0  = Universal (Everyone understand)
1  = Orcish
2  = Darnassian
3  = Taurahe
6  = Dwarvish
7  = Common
8  = Demonic
9  = Titan
10 = Thalassian
11 = Draconic
12 = Kalimag
13 = Gnomish
14 = Troll
33 = Gutterspeak
35 = Draenei
36 = Zombie
</pre>

### type

<pre>
...
12 = CHAT_MSG_MONSTER_SAY
13 = CHAT_MSG_MONSTER_PARTY
14 = CHAT_MSG_MONSTER_YELL
15 = CHAT_MSG_MONSTER_WHISPER
...
</pre>

### monstername

Monstername from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table (seems to be optional).

### text_0_4

The text the monster say.