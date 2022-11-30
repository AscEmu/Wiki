---
title: creature_spawns
type: worlddb
category: C
layout: single_markdown
---

# creature_spawns
This table contains spells that creatures use instead of advanced scripting.

## Structure

Field                                                           | Type          | Default | Comment 
--------------------------------------------------------------- | ------------- | ------- | --------
[id](#id)                                                       | int(11)       |         | key, auto
[min_build](#min_build)                                         | smallint(6)   | 12340   | key
[max_build](#max_build)                                         | smallint(6)   | 12340   |
[entry](#entry)                                                 | mediumint(10) |         | 
[map](#map)                                                     | smallint(5)   |         |         
[position_x](#positions)                                        | float(0)      |         |         
[position_y](#positions)                                        | float(0)      |         |         
[position_z](#positions)                                        | float(0)      |         |         
[orientation](#positions)                                       | float(0)      |         |         
[movetype](#movetype)                                           | tinyint(3)    | 0       |         
[displayid](#displayid)                                         | mediumint(10) | 0       |         
[faction](#faction)                                             | mediumint(10) | 14      |         
[flags](#flags)                                                 | int(10)       | 0       |         
[bytes0](#bytes0)                                               | int(10)       | 0       |         
[bytes1](#bytes1)                                               | int(10)       | 0       |         
[bytes2](#bytes2)                                               | int(10)       | 0       |         
[emote_state](#emote_state)                                     | smallint(5)   | 0       |         
[npc_respawn_link](#npc_respawn_link)                           | int(10)       | 0       |         
[channel_spell](#channel_spell)                                 | int(10)       | 0       |         
[channel_target_sqlid](#channel_target_sqlid)                   | int(10)       | 0       |         
[channel_target_sqlid_creature](#channel_target_sqlid_creature) | int(10)       | 0       |         
[standstate](#standstate)                                       | tinyint(3)    | 0       |         
[death_state](#death_state)                                     | tinyint(3)    | 0       |         
[mountdisplayid](#mountdisplayid)                               | int(10)       | 0       |         
[slot1item](#slot1item)                                         | int(10)       | 0       |         
[slot2item](#slot2item)                                         | int(10)       | 0       |         
[slot3item](#slot3item)                                         | int(10)       | 0       |         
[CanFly](#CanFly)                                               | smallint(3)   | 0       |         
[phase](#phase)                                                 | int(10)       | 0       |         
[event_entry](#event_entry)                                     | int(6)        | 0       |     
[wander_distance](#wander_distance)                             | int(6)        | 0       |     
[waypoint_group](#waypoint_group)                               | int(6)        | 0       |        

### id

Spawn ID of the creature (unique, auto)

### min_build

Build number this spawn was introduced.

### max_build

Max Build number this spawn is valid for.

### entry

Entry ID of the creature from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### map

Map ID of the spawned creature.

### positions

Coordinates of the spawned creature. (Home position).

### movetype

 Pure Flags                  |   Decimal |  Description                                                  
----------------------------- | -------- | --------------------------------------------------------------
 MOVEMENTTYPE_NONE            |  0       | No WP movement                                                
 MOVEMENTTYPE_RANDOMWP        |  1       |   Walks random through waypoints (WP4, WP2, WP3, WP1)         
 MOVEMENTTYPE_CIRCLEWP        |  2       |  Walks in cirlce (WP1, WP2, WP3, WP1, WP2...)                 
 MOVEMENTTYPE_WANTEDWP        |  3       |  Coreside WP, walking only if script calls "Walk to WPx")     
 MOVEMENTTYPE_DONTMOVEWP      |  4       |  Coreside, if a creature has WPs, don't move it automatically.
 MOVEMENTTYPE_QUEST           |  10      |  If quest started, follow WPs                                 
 MOVEMENTTYPE_FORWARDTHENSTOP |  11      |                                                               

### displayid

The ID for the display/skin of the creature. 

### faction

The ID of the faction of the creature. Should match the faction ID in the creature's creature_proto. 

### flags

The flags of the creature.

Note that most of these also require the "Gossip" [1] flag to work.

So if you want a NPC that is a quest giver, a vendor and can repair you just add the specific flags together: 1 + 2 + 128 + 4096 = 4227. 

 Pure Flags                     |   Decimal  |  Binary (32 Bit)                         | Remarks                                                                                      
-------------------------------- | --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------
 UNIT_NPC_FLAG_NONE              |  0        |  0000 0000 0000 0000 0000 0000 0000 0000
 UNIT_NPC_FLAG_GOSSIP            |  1        |  0000 0000 0000 0000 0000 0000 0000 0001 |  (If NPC has more gossip options, add this flag to bring up a menu.)                         
 UNIT_NPC_FLAG_QUESTGIVER        |  2        |  0000 0000 0000 0000 0000 0000 0000 0010 |  (Any NPC giving or taking quests needs to have this flag.)                                  
 UNIT_NPC_FLAG_UNKNOWN1          |  4        |  0000 0000 0000 0000 0000 0000 0000 0100
 UNIT_NPC_FLAG_UNKOWN2           |  8        |  0000 0000 0000 0000 0000 0000 0000 1000
 UNIT_NPC_FLAG_TRAINER           |  16       |  0000 0000 0000 0000 0000 0000 0001 0000 |  (Allows the NPC to have a trainer list to teach spells, all trainers must have this flag)   
 UNIT_NPC_FLAG_TRAINER_CLASS     |  32       |  0000 0000 0000 0000 0000 0000 0010 0000
 UNIT_NPC_FLAG_TRAINER_PROF      |  64       |  0000 0000 0000 0000 0000 0000 0100 0000
 UNIT_NPC_FLAG_VENDOR            |  128      |  0000 0000 0000 0000 0000 0000 1000 0000 |  (Any NPC selling items needs to have this flag)                                             
 UNIT_NPC_FLAG_VENDOR_AMMO       |  256      |  0000 0000 0000 0000 0000 0001 0000 0000
 UNIT_NPC_FLAG_VENDOR_FOOD       |  512      |  0000 0000 0000 0000 0000 0010 0000 0000
 UNIT_NPC_FLAG_VENDOR_POISON     |  1024     |  0000 0000 0000 0000 0000 0100 0000 0000
 UNIT_NPC_FLAG_VENDOR_REAGENT    |  2048     |  0000 0000 0000 0000 0000 1000 0000 0000
 UNIT_NPC_FLAG_ARMORER           |  4096     |  0000 0000 0000 0000 0001 0000 0000 0000 |  (NPC with this flag can repair items.)                                                      
 UNIT_NPC_FLAG_TAXIVENDOR        |  8192     |  0000 0000 0000 0000 0010 0000 0000 0000 |  (Any NPC serving as fly master has this.)                                                   
 UNIT_NPC_FLAG_SPIRITHEALER      |  16384    |  0000 0000 0000 0000 0100 0000 0000 0000 |  (Makes the NPC invisible to alive characters and has the resurrect function.)               
 UNIT_NPC_FLAG_SPIRITGUIDE       |  32768    |  0000 0000 0000 0000 1000 0000 0000 0000
 UNIT_NPC_FLAG_INNKEEPER         |  65536    |  0000 0000 0000 0001 0000 0000 0000 0000 | (NPC with this flag can set hearthstone locations.)                                          
 UNIT_NPC_FLAG_BANKER            |  131072   |  0000 0000 0000 0010 0000 0000 0000 0000 |  (NPC with this flag can show the bank)                                                      
 UNIT_NPC_FLAG_ARENACHARTER      |  262144   |  0000 0000 0000 0100 0000 0000 0000 0000
 UNIT_NPC_FLAG_TABARDVENDOR      |  524288   |  0000 0000 0000 1000 0000 0000 0000 0000 |  (Allows the designing of guild tabards.)                                                    
 UNIT_NPC_FLAG_BATTLEFIELDPERSON |  1048576  |  0000 0000 0001 0000 0000 0000 0000 0000 |  (NPC with this flag port players to battlegrounds. Like battlemasters, arena organzier etc.)
 UNIT_NPC_FLAG_AUCTIONEER        |  2097152  |  0000 0000 0010 0000 0000 0000 0000 0000 |  (Allows NPC to display auction list.)                                                       
 UNIT_NPC_FLAG_STABLE            |  4194304  |  0000 0000 0100 0000 0000 0000 0000 0000 |  (Has the option to stable pets for hunters.)                                                
 UNIT_NPC_FLAG_GUILD_BANK        |  8388608  |  0000 0000 1000 0000 0000 0000 0000 0000
 UNIT_NPC_FLAG_SPELLCLICK        |  16777216 |  0000 0001 0000 0000 0000 0000 0000 0000 |  (Needs data on npc_spellclick_spells table)                                                 
 UNIT_NPC_FLAG_PLAYER_VEHICLE    |  33554432 |  0000 0010 0000 0000 0000 0000 0000 0000 |  (Needs data on npc_spellclick_spells table)                                                 
 UNIT_NPC_FLAG_MAILBOX           |  67108864 |  0000 0100 0000 0000 0000 0000 0000 0000 |  (Needs data on npc_spellclick_spells table)                                                 

### bytes0

See creature_spawns bytes.

### bytes1

Stand state

<pre>
0 = Nothing
1 = Sit on ground
3 = Sleep
4 = Sit on low chair
5 = Sit on normal chair
6 = Sit on high chair
7 = Dead
8 = Kneel
131072 = stealth mode
</pre>

### bytes2

...

### emote_state

Emote ID of the creature.

<pre>
0   - ONESHOT_NONE
1   - ONESHOT_TALK(DNR)
2   - ONESHOT_BOW
3   - ONESHOT_WAVE(DNR)
4   - ONESHOT_CHEER(DNR)
5   - ONESHOT_EXCLAMATION(DNR)
6   - ONESHOT_QUESTION
7   - ONESHOT_EAT
10  - STATE_DANCE
11  - ONESHOT_LAUGH
12  - STATE_SLEEP
13  - STATE_SIT     USE bytes1 1 INSTEAD
14  - ONESHOT_RUDE(DNR)
15  - ONESHOT_ROAR(DNR)
16  - ONESHOT_KNEEL
17  - ONESHOT_KISS
18  - ONESHOT_CRY
19  - ONESHOT_CHICKEN
20  - ONESHOT_BEG
21  - ONESHOT_APPLAUD
22  - ONESHOT_SHOUT(DNR)
23  - ONESHOT_FLEX
24  - ONESHOT_SHY(DNR)
25  - ONESHOT_POINT(DNR)
26  - STATE_STAND
27  - STATE_READYUNARMED
28  - STATE_WORK_SHEATHED
29  - STATE_POINT(DNR)
30  - STATE_NONE
33  - ONESHOT_WOUND
34  - ONESHOT_WOUNDCRITICAL
35  - ONESHOT_ATTACKUNARMED
36  - ONESHOT_ATTACK1H
37  - ONESHOT_ATTACK2HTIGHT
38  - ONESHOT_ATTACK2HLOOSE
39  - ONESHOT_PARRYUNARMED
43  - ONESHOT_PARRYSHIELD
44  - ONESHOT_READYUNARMED
45  - ONESHOT_READY1H
48  - ONESHOT_READYBOW
50  - ONESHOT_SPELLPRECAST
51  - ONESHOT_SPELLCAST
53  - ONESHOT_BATTLEROAR
54  - ONESHOT_SPECIALATTACK1H
60  - ONESHOT_KICK
61  - ONESHOT_ATTACKTHROWN
64  - STATE_STUN
65  - STATE_DEAD
66  - ONESHOT_SALUTE
68  - STATE_KNEEL
69  - STATE_USESTANDING
70  - ONESHOT_WAVE_NOSHEATHE
71  - ONESHOT_CHEER_NOSHEATHE
92  - ONESHOT_EAT_NOSHEATHE
93  - STATE_STUN_NOSHEATHE
94  - ONESHOT_DANCE
113 - ONESHOT_SALUTE_NOSHEATH
133 - STATE_USESTANDING_NOSHEATHE
153 - ONESHOT_LAUGH_NOSHEATHE
173 - STATE_WORK
193 - STATE_SPELLPRECAST
213 - ONESHOT_READYRIFLE
214 - STATE_READYRIFLE
233 - STATE_WORK_MINING
234 - STATE_WORK_CHOPWOOD
253 - STATE_APPLAUD
254 - ONESHOT_LIFTOFF
273 - ONESHOT_YES(DNR)
274 - ONESHOT_NO(DNR)
275 - ONESHOT_TRAIN(DNR)
293 - ONESHOT_LAND
313 - STATE_AT_EASE
333 - STATE_READY1H
353 - STATE_SPELLKNEELSTART
373 - STAND_STATE_SUBMERGED
374 - ONESHOT_SUBMERGE
375 - STATE_READY2H
376 - STATE_READYBOW
377 - ONESHOT_MOUNTSPECIAL
378 - STATE_TALK
379 - STATE_FISHING
380 - ONESHOT_FISHING
381 - ONESHOT_LOOT
382 - STATE_WHIRLWIND
383 - STATE_DROWNED
384 - STATE_HOLD_BOW
385 - STATE_HOLD_RIFLE
386 - STATE_HOLD_THROWN
387 - ONESHOT_DROWN
388 - ONESHOT_STOMP
389 - ONESHOT_ATTACKOFF
390 - ONESHOT_ATTACKOFFPIERCE
391 - STATE_ROAR
392 - STATE_LAUGH
393 - ONESHOT_CREATURE_SPECIAL
394 - ONESHOT_JUMPLANDRUN
395 - ONESHOT_JUMPEND
396 - ONESHOT_TALK_NOSHEATHE
397 - ONESHOT_POINT_NOSHEATHE
398 - STATE_CANNIBALIZE
399 - ONESHOT_JUMPSTART
400 - STATE_DANCESPECIAL
401 - ONESHOT_DANCESPECIAL
402 - ONESHOT_CUSTOMSPELL01
403 - ONESHOT_CUSTOMSPELL02
404 - ONESHOT_CUSTOMSPELL03
405 - ONESHOT_CUSTOMSPELL04
406 - ONESHOT_CUSTOMSPELL05
407 - ONESHOT_CUSTOMSPELL06
408 - ONESHOT_CUSTOMSPELL07
409 - ONESHOT_CUSTOMSPELL08
410 - ONESHOT_CUSTOMSPELL09
411 - ONESHOT_CUSTOMSPELL10
412 - STATE_EXCLAIM
413 - STATE_DANCE_CUSTOM
415 - STATE_SIT_CHAIR_MED
416 - STATE_CUSTOM_SPELL_01
417 - STATE_CUSTOM_SPELL_02
418 - STATE_EAT
419 - STATE_CUSTOM_SPELL_04
420 - STATE_CUSTOM_SPELL_03
421 - STATE_CUSTOM_SPELL_05
422 - STATE_SPELLEFFECT_HOLD
423 - STATE_EAT_NO_SHEATHE
424 - STATE_MOUNT
425 - STATE_READY2HL
426 - STATE_SIT_CHAIR_HIGH
427 - STATE_FALL
428 - STATE_LOOT
429 - STATE_SUBMERGED
430 - ONESHOT_COWER(DNR)
431 - STATE_COWER
432 - ONESHOT_USESTANDING
433 - STATE_STEALTH_STAND
434 - ONESHOT_OMNICAST_GHOUL (W/SOUND)
435 - ONESHOT_ATTACKBOW
436 - ONESHOT_ATTACKRIFLE
437 - STATE_SWIM_IDLE
438 - STATE_ATTACK_UNARMED
439 - ONESHOT_SPELLCAST (W/SOUND)
440 - ONESHOT_DODGE
441 - ONESHOT_PARRY1H
442 - ONESHOT_PARRY2H
443 - ONESHOT_PARRY2HL
444 - STATE_FLYFALL
445 - ONESHOT_FLYDEATH
446 - STATE_FLY_FALL
447 - ONESHOT_FLY_SIT_GROUND_DOWN
448 - ONESHOT_FLY_SIT_GROUND_UP
449 - ONESHOT_EMERGE
450 - ONESHOT_DRAGONSPIT
451 - STATE_SPECIALUNARMED
452 - ONESHOT_FLYGRAB
453 - STATE_FLYGRABCLOSED
454 - ONESHOT_FLYGRABTHROWN
455 - STATE_FLY_SIT_GROUND
456 - STATE_WALKBACKWARDS
457 - ONESHOT_FLYTALK
458 - ONESHOT_FLYATTACK1H
459 - STATE_CUSTOMSPELL08
460 - ONESHOT_FLY_DRAGONSPIT
461 - STATE_SIT_CHAIR_LOW
462 - ONE_SHOT_STUN
463 - ONESHOT_SPELLCAST_OMNI
465 - STATE_READYTHROWN
466 - ONESHOT_WORK_CHOPWOOD
467 - ONESHOT_WORK_MINING
468 - STATE_SPELL_CHANNEL_OMNI
469 - STATE_SPELL_CHANNEL_DIRECTED
470 - STAND_STATE_NONE
471 - STATE_READYJOUST
473 - STATE_STRANGULATE
474 - STATE_READYSPELLOMNI
475 - STATE_HOLD_JOUST
476 - ONESHOT_CRY (JAINA PROUDMOORE ONLY)
</pre>

### npc_respawn_link

...

### channel_spell

ID of a Spell that the creature will channel. 

### channel_target_sqlid

...

### channel_target_sqlit_creature

...

### standstate

<pre>
0 = Stand
1 = Sitting on the ground
2 = Sitting on chair
3 = Sleep
4 = Sit (Low)
5 = Sit (Medium)
6 = Sit (Elevated High)
7 = Lying Dead
8 = Kneel
</pre>

### death_state

<pre>
0 = alive (Creature acts normal)
1 = just died (Creature appears dead, but is acting like alive - can speak with you, you can make gossip with this NPC)
2 = corpse (This creature is dead and acts as dead body)
</pre>

### mountdisplayid

The Display ID of a mount to be used to make the creature appear mounted. The value here overrides the value for the creature's unit field UNIT_FIELD_MOUNTDISPLAYID. 

### slot1item

Entry ID of an item to be equipped in the Right Hand (Main Hand). 

### slot2item

Entry ID of an item to be equipped in the Left Hand (Off-Hand). 

### slot3item

Entry ID of a ranged item to be equipped. 

### CanFly

<pre>
0 = Flying disabled
1 = Flying enabled
</pre>

### phase

The phase of the creature.

### event_entry

entry from table event_properties

### wander_distance

the distance the creature will move from initiated spawn point (only applied on random movement)

### waypoint_group

entry from table creature_waypoints_manual <- weird naming
