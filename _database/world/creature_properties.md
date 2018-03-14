---
title: creature_properties
type: worlddb
category: C
layout: single_markdown
---

# creature_properties
This table contains creature properties information.

## Structure

Field                                                                                                             | Type          | Default | Comment
----------------------------------------------------------------------------------------------------------------- | ------------- | ------- | -------
[entry](#entry)                                     | int(30)       | 0       |        
[killcredit1](#killcredit_1_2)                      | int(10)       | 0       |        
[killcredit2](#killcredit_1_2)                      | int(10)       | 0       |        
[male_displayid](#displayids_male_female)           | int(10)       | 0       |        
[female_displayid](#displayids_male_female)         | int(10)       | 0       |        
[male_displayid2](#displayids_male_female)          | int(10)       | 0       |        
[female_displayid2](#displayids_male_female)        | int(10)       | 0       |        
[name](#name)                                       | varchar(100)  |         |        
[subname](#subname)                                 | varchar(100)  |         |        
[info_str](#info_str)                               | varchar(500)  |         |        
[type_flags](#type_flags)                           | int(10)       | 0       |        
[type](#type)                                       | int(10)       | 0       |        
[family](#family)                                   | int(10)       | 0       |        
[rank](#rank)                                       | int(10)       | 0       |        
[encounter](#encounter)                             | int(10)       | 0       |        
[base_attack_mod](#base_attack_mod)                 | float(0)      | 1       |        
[range_attack_mod](#range_attack_mod)               | float(0)      | 1       |        
[leader](#leader)                                   | tinyint(3)    | 0       |        
[minlevel](#minlevel)                               | int(30)       |         |        
[maxlevel](#maxlevel)                               | int(30)       |         |        
[faction](#faction)                                 | int(30)       | 0       |        
[minhealth](#minhealth)                             | int(30)       |         |        
[maxhealth](#maxhealth)                             | int(30)       | 0       |        
[mana](#mana)                                       | int(30)       | 0       |        
[scale](#scale)                                     | float(0)      | 0       |        
[npcflags](#npcflags)                               | int(30)       | 0       |        
[attacktime](#attacktime)                           | int(30)       | 0       |        
[attack_school](#attack_school)                     | tinyint(1)    | 0       |        
[mindamage](#mindamage)                             | float(0)      | 0       |        
[maxdamage](#maxdamage)                             | float(0)      | 0       |        
[can_ranged](#can_ranged)                           | int(11)       | 0       |        
[rangedattacktime](#rangedattacktime)               | int(30)       | 0       |        
[rangedmindamage](#rangedmindamage)                 | float(0)      | 0       |        
[rangedmaxdamage](#rangedmaxdamage)                 | float(0)      | 0       |        
[respawntime](#respawntime)                         | int(30)       | 0       |        
[armor](#armor)                                     | mediumint(10) | 0       |        
[resistance1](#resistance1)                         | smallint(5)   | 0       | Holy   
[resistance2](#resistance2)                         | smallint(5)   | 0       | Fire   
[resistance3](#resistance3)                         | smallint(5)   | 0       | Nature 
[resistance4](#resistance4)                         | smallint(5)   | 0       | Frost  
[resistance5](#resistance5)                         | smallint(5)   | 0       | Shadow 
[resistance6](#resistance6)                         | smallint(5)   | 0       | Arcane 
[combat_reach](#combat_reach)                       | float(0)      | 1       |        
[bounding_radius](#bounding_radius)                 | float(0)      | 1       |        
[auras](#auras)                                     | longtext(0)   |         |        
[boss](#boss)                                       | int(11)       | 0       |        
[money](#money)                                     | int(30)       | 0       |        
[invisibility_type](#invisibility_type)             | int(30)       | 0       |        
[walk_speed](#walk_speed)                           | float(0)      | 2.5     |        
[run_speed](#run_speed)                             | float(0)      | 8       |        
[fly_speed](#fly_speed)                             | float(0)      | 14      |        
[extra_a9_flags](#extra_a9_flags)                   | int(30)       | 0       |        
[spell1](#spells_1_8)                               | int(10)       | 0       |        
[spell2](#spells_1_8)                               | int(10)       | 0       |        
[spell3](#spells_1_8)                               | int(10)       | 0       |        
[spell4](#spells_1_8)                               | int(10)       | 0       |        
[spell5](#spells_1_8)                               | int(10)       | 0       |        
[spell6](#spells_1_8)                               | int(10)       | 0       |        
[spell7](#spells_1_8)                               | int(10)       | 0       |        
[spell8](#spells_1_8)                               | int(10)       | 0       |        
[spell_flags](#spell_flags)                         | int(30)       | 0       |        
[modImmunities](#modImmunities)                     | int(30)       | 0       |        
[isTrainingDummy](#isTrainingDummy)                 | int(10)       | 0       |        
[guardtype](#guardtype)                             | int(10)       | 0       |        
[summonguard](#summonguard)                         | int(10)       | 0       |        
[spelldataid](#spelldataid)                         | int(10)       | 0       |        
[vehicleid](#vehicleid)                             | int(10)       | 0       |        
[rooted](#rooted)                                   | int(10)       | 0       |        
[questitem1](#questitems_1_6)                       | int(11)       | 0       |        
[questitem2](#questitems_1_6)                       | int(11)       | 0       |        
[questitem3](#questitems_1_6)                       | int(11)       | 0       |        
[questitem4](#questitems_1_6)                       | int(11)       | 0       |        
[questitem5](#questitems_1_6)                       | int(11)       | 0       |        
[questitem6](#questitems_1_6)                       | int(11)       | 0       |        
[waypointid](#waypointid)                           | int(10)       | 0       |        

### entry

The entry ID of the creature.

### killcredit_1_2

...

### displayids_male_female

The Display/Model ID of the creature. If more than 1 filled, randomly picks between them on creature spawn.

### name

The name of the creature.

### subname

The subname/title of the creature. Displayed in-game below the name, in <>'s.

### info_str

The MouseFlags (when you hover over the npc). 

<pre>
PVP
Quest
Repair
Point
Speak
Summon 1 -- ??
Summmon 2 -- ??
taxi
Trainer
vehichleCursor
Gunner
Directions
Buy
Attack
alarm bot 1 -- ??
The "scream" -- ??
LootAll
</pre>

### type_flags

<pre>
1     = Makes the mob tamable. Must be type "Beast" [1] and "family" set.
2     = This creature can be seen also when player is dead.
4     = Creature is a world boss
128   = Player can interact with creature while it is dead.
256   = Makes mob herb-able.
512   = Makes mob mine-able.
1024 = Death event will not show up in combat log.
2048  = Creature will fight mounted if has mount.
4096  = Creature can heal players?
32768 = Engineer can loot this npc.
65536 = Exotic pet
524288 = Reacts on projectile?
67108864 = Counts for party members?
</pre>

### type

The type of creature.

<pre>
0  = None
1  = Beast
2  = Dragonkin
3  = Demon
4  = Elemental
5  = Giant
6  = Undead
7  = Humanoid
8  = Critter
9  = Mechanical
10 = Not specified
11 = Totem
12 = Non-combat Pet
13 = Gas Cloud
</pre>

### family

The family of the creature.

<pre>
0  = No family
1  = Wolf
2  = Cat
3  = Spider
4  = Bear
5  = Boar
6  = Crocolisk
7  = Carrion Bird
8  = Crab
9  = Gorilla
10 = UNUSED
11 = Raptor
12 = Tallstrider
13 = UNUSED
14 = UNUSED
15 = Felhunter
16 = Voidwalker
17 = Succubus
18 = UNUSED
19 = Doomguard
20 = Scorpid
21 = Turtle
22 = UNUSED
23 = Imp
24 = Bat
25 = Hyena
26 = Bird of Prey
27 = Wind Serpent
28 = Remote Control
29 = Felguard
30 = Dragonhawk
31 = Ravager
32 = Warp Stalker
33 = Sporebat
34 = Nether Ray
35 = Serpent
36 = UNUSED
37 = Moth
38 = Chimaera
39 = Devilsaur
40 = Ghoul
41 = Silithid
42 = Worm
43 = Rhino
44 = Wasp
45 = Core Hound
46 = Spirit Beast
</pre>

### rank

The rank of the creature.

<pre>
0 = Normal
1 = Elite
2 = Rare-Elite
3 = Boss
4 = Rare
</pre>

### encounter

This row shows if a creature is an encounter. Currently it is used as boolean.

<pre>
0 = false
1 = true
</pre>

### base_attack_mod

### range_attack_mod

### leader

<pre>
0 = Non-Leader
1 = Leader
</pre>

### minlevel

The minimum level of the creature when it is spawned in-game.

### maxlevel

The maximum level of the creature when it is spawned in-game. Must be higher than minlevel!

### faction

The faction ID of the creature, from FactionTemplate.DBC.

<pre>
7    = Neutral
14   = Hostile
35   = Friendly
1802 = Alliance
1801 = Horde
</pre>

### minhealth

The minimum health of the creature.

### maxhealth

The maximum health of the creature.

### mana

The maximum mana of the creature.

### scale

The scale/size of the creature.

<pre>
1 = Normal
2 = 1 x 2
</pre>

### npcflags

The flags of the creature.

Note that most of these also require the "Gossip" [1] flag to work.

So if you want a NPC that is a quest giver, a vendor and can repair you just add the specific flags together: 1 + 2 + 128 + 4096 = 4227. 

 Pure Flags                     |   Decimal   |  Binary (32 Bit)                         | Remarks                                                                                      
-------------------------------- | ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------
 UNIT_NPC_FLAG_NONE              |  0         |  0000 0000 0000 0000 0000 0000 0000 0000
 UNIT_NPC_FLAG_GOSSIP            |  1         |  0000 0000 0000 0000 0000 0000 0000 0001 |  (If NPC has more gossip options, add this flag to bring up a menu.)                         
 UNIT_NPC_FLAG_QUESTGIVER        |  2         |  0000 0000 0000 0000 0000 0000 0000 0010 |  (Any NPC giving or taking quests needs to have this flag.)                                  
 UNIT_NPC_FLAG_UNKNOWN1          |  4         |  0000 0000 0000 0000 0000 0000 0000 0100
 UNIT_NPC_FLAG_UNKOWN2           |  8         |  0000 0000 0000 0000 0000 0000 0000 1000
 UNIT_NPC_FLAG_TRAINER           |  16        |  0000 0000 0000 0000 0000 0000 0001 0000 |  (Allows the NPC to have a trainer list to teach spells, all trainers must have this flag)   
 UNIT_NPC_FLAG_TRAINER_CLASS     |  32        |  0000 0000 0000 0000 0000 0000 0010 0000
 UNIT_NPC_FLAG_TRAINER_PROF      |  64        |  0000 0000 0000 0000 0000 0000 0100 0000
 UNIT_NPC_FLAG_VENDOR            |  128       |  0000 0000 0000 0000 0000 0000 1000 0000 |  (Any NPC selling items needs to have this flag)                                             
 UNIT_NPC_FLAG_VENDOR_AMMO       |  256       |  0000 0000 0000 0000 0000 0001 0000 0000
 UNIT_NPC_FLAG_VENDOR_FOOD       |  512       |  0000 0000 0000 0000 0000 0010 0000 0000
 UNIT_NPC_FLAG_VENDOR_POISON     |  1024      |  0000 0000 0000 0000 0000 0100 0000 0000
 UNIT_NPC_FLAG_VENDOR_REAGENT    |  2048      |  0000 0000 0000 0000 0000 1000 0000 0000
 UNIT_NPC_FLAG_ARMORER           |  4096      |  0000 0000 0000 0000 0001 0000 0000 0000 |  (NPC with this flag can repair items.)                                                      
 UNIT_NPC_FLAG_TAXIVENDOR        |  8192      |  0000 0000 0000 0000 0010 0000 0000 0000 |  (Any NPC serving as fly master has this.)                                                   
 UNIT_NPC_FLAG_SPIRITHEALER      |  16384     |  0000 0000 0000 0000 0100 0000 0000 0000 |  (Makes the NPC invisible to alive characters and has the resurrect function.)               
 UNIT_NPC_FLAG_SPIRITGUIDE       |  32768     |  0000 0000 0000 0000 1000 0000 0000 0000
 UNIT_NPC_FLAG_INNKEEPER         |  65536     |  0000 0000 0000 0001 0000 0000 0000 0000 | (NPC with this flag can set hearthstone locations.)                                          
 UNIT_NPC_FLAG_BANKER            |  131072    |  0000 0000 0000 0010 0000 0000 0000 0000 |  (NPC with this flag can show the bank)                                                      
 UNIT_NPC_FLAG_ARENACHARTER      |  262144    |  0000 0000 0000 0100 0000 0000 0000 0000
 UNIT_NPC_FLAG_TABARDVENDOR      |  524288    |  0000 0000 0000 1000 0000 0000 0000 0000 |  (Allows the designing of guild tabards.)                                                    
 UNIT_NPC_FLAG_BATTLEFIELDPERSON |  1048576   |  0000 0000 0001 0000 0000 0000 0000 0000 |  (NPC with this flag port players to battlegrounds. Like battlemasters, arena organzier etc.)
 UNIT_NPC_FLAG_AUCTIONEER        |  2097152   |  0000 0000 0010 0000 0000 0000 0000 0000 |  (Allows NPC to display auction list.)                                                       
 UNIT_NPC_FLAG_STABLE            |  4194304   |  0000 0000 0100 0000 0000 0000 0000 0000 |  (Has the option to stable pets for hunters.)                                                
 UNIT_NPC_FLAG_GUILD_BANK        |  8388608   |  0000 0000 1000 0000 0000 0000 0000 0000
 UNIT_NPC_FLAG_SPELLCLICK        |  16777216  |  0000 0001 0000 0000 0000 0000 0000 0000 |  (Needs data on npc_spellclick_spells table)                                                 
 Mailbox                         |  67108864  |  0000 0100 0000 0000 0000 0000 0000 0000 |  (NPC will act like a mailbox, opens mailbox with right-click)                               
 Guard                           |  268435456 |  0001 0000 0000 0000 0000 0000 0000 0000 |  (Cityguards, must be scripted)                                                              

### attacktime

The delay between attacks, in milliseconds.

### attack_school

The type of damage that is dealt by the creature. Determines damage reduction via armor or resistances. 

<pre>
0 = SCHOOL_NORMAL
1 = SCHOOL_HOLY
2 = SCHOOL_FIRE
3 = SCHOOL_NATURE
4 = SCHOOL_FROST
5 = SCHOOL_SHADOW
6 = SCHOOL_ARCANE
</pre>

### mindamage

The minimum damage dealt by the creature.

### maxdamage

The maximum damage dealt by the creature. 

### can_ranged

...

### rangedattacktime

The delay between ranged attacks, in milliseconds. 

### rangedmindamage

The minimum ranged damage dealt by the creature. 

### rangedmaxdamage

The maximum damage dealt by the creature. 

### respawntime

The time before the creature respawns, in milliseconds. 

### armor

The total armor of the creature. 

### restistance1

The Holy resistance of the creature. 

### restistance2

The Fire resistance of the creature. 

### restistance3

The Nature resistance of the creature. 

### restistance4

The Frost resistance of the creature. 

### restistance5

The Shadow resistance of the creature. 

### restistance6

The Arcane resistance of the creature. 

### combat_reach

The distance of where the creature can hit it's target. 

### bounding_radius

The amount of yards before the creature will reset. 

### auras

The Spell IDs of auras that are present on the creature. IDs separated with a comma (,). 

### boss

<pre>
0 = Normal
1 = Boss
</pre>

### money

The money dropped by the creature in copper (1000 = 10s, 100000 = 1g, 111111 = 11g 11s 11c) 

### invisibility_type

<pre>
0 = INVIS_FLAG_NORMAL
1 = INVIS_FLAG_SPIRIT1
2 = INVIS_FLAG_SPIRIT2
3 = INVIS_FLAG_TRAP
4 = INVIS_FLAG_QUEST
5 = INVIS_FLAG_GHOST
6 = INVIS_FLAG_UNKNOWN6
7 = INVIS_FLAG_UNKNOWN7
8 = INVIS_FLAG_SHADOWMOON
9 = INVIS_FLAG_NETHERSTORM
10 = INVIS_FLAG_BASHIR
11 = INVIS_FLAG_UNKNOWN8
12 = INVIS_FLAG_TOTAL
</pre>

### walk_speed

The speed of the creature when it is walking. 

### run_speed

The speed of the creature when it is running.

### fly_speed

The speed of the creature when it is flying.

### extra_a9_flags

NOTE currently not used!

### spells_1_8

The spells that are available to the creature. These are the spells that used when the creature is a Totem, or Pet, Vehicle or when possessed (mind control) too. 

### spell_flags

The flags for the spells in Spell1-4 

<pre>
1 = RANDOM_CAST
2 = OUT_OF_COMBAT
3 = COOLDOWN_HALF (Sets cooldown to 1.5)
</pre>

### modImmunities

<pre>
1      = Charm (Mind Control, enslave demon)
2      = Confuse (Blind etc)
4      = Fear
8      = Root
16     = Silence
32     = Stun
64     = Sheep
128    = Banish
256    = Sap
512    = Frozen
1024   = Ensnared
2048   = Sleep
4096   = Taunt (aura)
8192   = Decrease Speed (Hamstring) (aura)
16384  = Spell Haste (Curse of Tongues) (aura
32768  = Interrupt Cast
65536  = Mod Healing % (Mortal Strike) (aura)
131072 = Total Stats % (Vindication) (aura)
</pre>

### isTrainingDummy

Whether or not the creature is a "Training Dummy". Training dummy's are not killable and cannot move. 

### guardtype

The type of guard the creature is. Most city guards, bruisers and peace keepers has '2' here. 

### summonguard

The guard that is summoned. Unknown (?) 

### spelldataid

...

### vehicleid

Vehicle data for this creature. Index of Vehicle.dbc 

### rooted

<pre>
1 = rooted
0 = unrooted
</pre>

### questitems_1_6

ID of the Questitem which can be looted from npc. (untested)

### waypointid

The waypoint ID from [creature_waypoints](/Wiki/database/world/creature_waypoints/ "Creature waypoints")