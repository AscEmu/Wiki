---
title: npc_script_text
type: worlddb
category: N
layout: single_markdown
---

# npc_script_text
This table is ONLY for scripted npcs (in the core scripts!).
This table contains the npc say text for special scripts. 

## Structure

Field                                                                                       | Type         | Default | Comment   
------------------------------------------------------------------------------------------- | ------------ | ------- | ----------
[entry](#entry)                                                                             | int(10)      |         | auto num  
[text](#text)                                                                               | longtext     |         |           
[creature_entry](#creature_entry)                                                           | mediumint(8) | 0       | (not used)
[id](#id)                                                                                   | tinyint(3)   | 0       | (not used)
[type](#type)                                                                               | tinyint(3)   | 0       |           
[language](#language)                                                                       | int(10)      | 0       |           
[probability](#probability)                                                                 | float        | 0       | (not used)
[emote](#emote)                                                                             | mediumint(8) | 0       |           
[duration](#duration)                                                                       | mediumint(8) | 0       |           
[sound](#sound)                                                                             | mediumint(8) | 0       |           
[broadcast_id](#broadcast_id)                                                               | mediumint(6) | 0       | (not used)

### entry

The unique entry ID for this text.

### text

The text the creature will say.

### creature_entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### id

The id of this Text (creature_entry + id = unique) not used at the moment.

### type

The SAY type.

Value    | Name                                 | Description
-------- | ------------------------------------ | ----------------------------
12       | CHAT_MSG_MONSTER_SAY                 | Creature says
13       | CHAT_MSG_MONSTER_PARTY               |
14       | CHAT_MSG_MONSTER_YELL                | Creature yells
15       | CHAT_MSG_MONSTER_WHISPER             | Creature Whisper
16       | CHAT_MSG_MONSTER_EMOTE               | Creature gestures wildly
41       | CHAT_MSG_RAID_WARNING_WIDESCREEN     | Boss Emote
42       | CHAT_MSG_RAID_BOSS_EMOTE             | Boss Whisper

### language

The language...

<pre>
0  = Universal (The current default language will be used.)
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
37 = Gnomish Binary
38 = Goblin Binary
</pre>

### probability

The chance in percent.

### emote

The emote id on say this text.

### duration

The duration when the emote is shown in ms.

### sound

The sound to send to players by saying.

### broadcast_id

Link to the broadcast text id.