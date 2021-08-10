---
title: npc_gossip_text
type: worlddb
category: N
layout: single_markdown
---

# npc_gossip_text
This table is ONLY for gossip text!!!
This table contains the npc texts

## Structure

Field                                                                                      | Type | Default | Comment
------------------------------------------------------------------------------------------ | ---- | ------- | -------
[entry](#entry)                         |      |         |        
[prob0-7](#prob0-7)                     |      |         |        
[text0_0-7_0](#text0_0-7_0)             |      |         |        
[text0_1-7_1](#text0_1-7_1)             |      |         |        
[lang0-7](#lang0-7)                     |      |         |        
[EmoteDelay0_0-7_0](#EmoteDelay0_0-7_0) |      |         |        
[Emote0_0-7_0](#Emote0_0-7_0)           |      |         |        
[EmoteDelay0_1-7_1](#EmoteDelay0_1-7_1) |      |         |        
[Emote0_1-7_1](#Emote0_1-7_1)           |      |         |        
[EmoteDelay0_2-7_2](#EmoteDelay0_2-7_2) |      |         |        
[Emote0_2-7_2](#Emote0_2-7_2)           |      |         |        

### entry

The entry ID of the creature text.

### prob0-7

The probability (percent) this text is shown in the gossip.

### text0_0-7_0

Text for male npcs (depends on fields **male/female_displayid(2)** in [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.)

### text0_1-7_1

Text for female npcs (depends on fields **male/female_displayid(2)** in [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.)

### lang0-7

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

### EmoteDelay0_0-7_0

Delay for doing the emote in ms.

### Emote0_0-7_0

Emote ID for male npcs.

### EmoteDelay0_1-7_1

Delay for doing the emote in ms.

### Emote0_1-7_1

Emote ID for female npcs.

### EmoteDelay0_2-7_2

Delay for doing the emote in ms.

### Emote0_2-7_2

... dont know what this is...