---
title: creature_properties
type: worlddb
category: C
layout: single_markdown
---

# creature_properties
This table contains the properties and configuration data used by creatures.

## Structure

Field                                               | Type          | Default | Comment
--------------------------------------------------- | ------------- | ------- | -------
[entry](#entry)                                     | int(30)       | 0       | key
[build](#build)                                     | smallint(6)   | 12340   | key
[killcredit1](#killcredit_1)                        | int(10)       | 0       |
[killcredit2](#killcredit_2)                        | int(10)       | 0       |
[male_displayid](#displayids_male_female)           | int(10)       | 0       |
[female_displayid](#displayids_male_female)         | int(10)       | 0       |
[male_displayid2](#displayids_male_female)          | int(10)       | 0       |
[female_displayid2](#displayids_male_female)        | int(10)       | 0       |
[name](#name)                                       | varchar(100)  |         |
[subname](#subname)                                 | varchar(100)  |         |
[icon_name](#icon_name)                             | varchar(100)  |         |
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
[resistance1](#resistance1)                         | smallint(5)   | 0       | Holy resistance.
[resistance2](#resistance2)                         | smallint(5)   | 0       | Fire resistance.
[resistance3](#resistance3)                         | smallint(5)   | 0       | Nature resistance.
[resistance4](#resistance4)                         | smallint(5)   | 0       | Frost resistance.
[resistance5](#resistance5)                         | smallint(5)   | 0       | Shadow resistance.
[resistance6](#resistance6)                         | smallint(5)   | 0       | Arcane resistance.
[combat_reach](#combat_reach)                       | float(0)      | 1       |
[bounding_radius](#bounding_radius)                 | float(0)      | 1       |
[auras](#auras)                                     | longtext(0)   |         |
[boss](#boss)                                       | int(11)       | 0       |
[money](#money)                                     | int(30)       | 0       |
[isTriggerNpc](#istriggernpc)                       | smallint(5)   | 0       |
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
[modImmunities](#modimmunities)                     | int(30)       | 0       |
[isTrainingDummy](#istrainingdummy)                 | int(10)       | 0       |
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

The unique entry ID of the creature.

### build

Build number to determine if the data is for our current compiled version.

### killcredit_1

Creature entry ID that receives kill credit when this creature is killed.

### killcredit_2

Creature entry ID that receives additional kill credit when this creature is killed.

### displayids_male_female

Display/model IDs used by the creature.

The available display IDs are:

- **male_displayid**    - primary male display ID.
- **female_displayid**  - primary female display ID.
- **male_displayid2**   - secondary male display ID.
- **female_displayid2** - secondary female display ID.

If multiple display IDs are configured, one of the available IDs can be selected when the creature is spawned.

### name

The name of the creature displayed in-game.

### subname

The subname/title of the creature. Displayed in-game below the name, in <>'s.

### icon_name

Defines the interaction icon displayed when the player hovers over the creature.

Common values include:

<pre>
Repair          - Shows a Anvil icon identifying this npc as a Repair NPC.
Speak           - Shows a Chat Bubble icon if this NPC has Quest/Gossip options.
Taxi            - Shows a Boot wings icon identifying this NPC as a "Taxi".
Trainer         - Shows a Book icon, identifying this NPC as a "Trainer".
vehichleCursor  - Indicator that this is a Player Controlled Vehicle.
Gunner          - Indicator of a Turret NPC/Player Controlled.
Directions      - Used for Guards and Teleporter NPC's.
Buy             - Shows a Brown Bag icon usually if the NPC only sells things.
Attack          - Shows a Sword icon indicating you can attack this target.
Point           - Used for Guards and Teleporter NPC's.
Pickup          - Shows a Hand Grasping icon of if this NPC can be picked up for quest/items.
LootAll         - Shows a Multiple Brown Bag icon (Same as holding Shift before looting a creature).
PVP             - Unused or unknown.
Quest           - Unused or unknown.
</pre>

For client versions above 4.x.x:

<pre>
Transmogrify - added in patch 4.3.0
SkinAlliance - added in patch 4.0.3
Reforge - added in patch 4.0.1
Voidstorage - added in patch 4.0.1
openhand
openhandglow
Interact
Inspect
GatherHerbs
EngineerSkin
Driver
Cast
</pre>

### type_flags

Flags that define additional properties of the creature.

<pre>
1        = Makes the creature tamable. The creature must have type "Beast" and a family set.
2        = This creature can be seen also when player is dead.
4        = Creature is a world boss.
128      = Player can interact with the creature while it is dead.
256      = Makes the creature herb-lootable.
512      = Makes the creature mine-lootable.
1024     = Death event is not shown in the combat log.
2048     = Creature can fight while mounted if it has a mount.
4096     = Creature can heal players.
32768    = Engineer can loot this creature.
65536    = Creature is an exotic pet.
524288   = Creature reacts to projectiles.
67108864 = Counts for party members.
</pre>

### type

The creature type.

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

The creature family.

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

Modifier applied to the creature's base attack values.

### range_attack_mod

Modifier applied to the creature's ranged attack values.

### leader

Indicates whether the creature is a leader.

<pre>
0 = Non-Leader
1 = Leader
</pre>

### minlevel

The minimum level of the creature when it is spawned in-game.

### maxlevel

The maximum level of the creature when it is spawned in-game. Must be higher than minlevel!

### faction

Faction ID of the creature, based on **FactionTemplate.dbc**.

Common faction IDs:

<pre>
7    = Neutral
14   = Hostile
35   = Friendly
1802 = Alliance
1801 = Horde
</pre>

### minhealth

The minimum health value of the creature.

### maxhealth

The maximum health value of the creature.

### mana

The maximum mana value of the creature.

### scale

The creature's model scale.

A value of `1` represents the normal scale.

### npcflags

Flags defining the NPC's available interactions.

Most interaction flags require the **UNIT_NPC_FLAG_GOSSIP** flag to be present.

For example, a creature that is a quest giver, vendor, and repair NPC can use:

**1 + 2 + 128 + 4096 = 4227**

Pure flags:

 Pure Flags                      | Decimal    | Binary (32 Bit)                          | Remarks
-------------------------------- | ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------
UNIT_NPC_FLAG_NONE               | 0          | 0000 0000 0000 0000 0000 0000 0000 0000  | No NPC flags.
UNIT_NPC_FLAG_GOSSIP             | 1          | 0000 0000 0000 0000 0000 0000 0000 0001  | If NPC has more gossip options, add this flag to bring up a menu.
UNIT_NPC_FLAG_QUESTGIVER         | 2          | 0000 0000 0000 0000 0000 0000 0000 0010  | Any NPC giving or taking quests needs to have this flag.
UNIT_NPC_FLAG_UNK1               | 4          | 0000 0000 0000 0000 0000 0000 0000 0100  | Unknown.
UNIT_NPC_FLAG_UNK2               | 8          | 0000 0000 0000 0000 0000 0000 0000 1000  | Unknown.
UNIT_NPC_FLAG_TRAINER            | 16         | 0000 0000 0000 0000 0000 0000 0001 0000  | Allows the NPC to have a trainer list to teach spells, all trainers must have this flag.
UNIT_NPC_FLAG_TRAINER_CLASS      | 32         | 0000 0000 0000 0000 0000 0000 0010 0000  | Class trainer.
UNIT_NPC_FLAG_TRAINER_PROF       | 64         | 0000 0000 0000 0000 0000 0000 0100 0000  | Profession trainer.
UNIT_NPC_FLAG_VENDOR             | 128        | 0000 0000 0000 0000 0000 0000 1000 0000  | Any NPC selling items needs to have this flag.
UNIT_NPC_FLAG_VENDOR_AMMO        | 256        | 0000 0000 0000 0000 0000 0001 0000 0000  | Ammunition vendor.
UNIT_NPC_FLAG_VENDOR_FOOD        | 512        | 0000 0000 0000 0000 0000 0010 0000 0000  | Food vendor.
UNIT_NPC_FLAG_VENDOR_POISON      | 1024       | 0000 0000 0000 0000 0000 0100 0000 0000  | Poison vendor.
UNIT_NPC_FLAG_VENDOR_REAGENT     | 2048       | 0000 0000 0000 0000 0000 1000 0000 0000  | Reagent vendor.
UNIT_NPC_FLAG_ARMORER            | 4096       | 0000 0000 0000 0000 0001 0000 0000 0000  | NPC with this flag can repair items.
UNIT_NPC_FLAG_TAXIVENDOR         | 8192       | 0000 0000 0000 0000 0010 0000 0000 0000  | Any NPC serving as fly master has this.
UNIT_NPC_FLAG_SPIRITHEALER       | 16384      | 0000 0000 0000 0000 0100 0000 0000 0000  | Makes the NPC invisible to alive characters and has the resurrect function.
UNIT_NPC_FLAG_SPIRITGUIDE        | 32768      | 0000 0000 0000 0000 1000 0000 0000 0000  | NPC Spirit healer.
UNIT_NPC_FLAG_INNKEEPER          | 65536      | 0000 0000 0000 0001 0000 0000 0000 0000  | NPC with this flag can set hearthstone locations.
UNIT_NPC_FLAG_BANKER             | 131072     | 0000 0000 0000 0010 0000 0000 0000 0000  | NPC with this flag can show the bank.
UNIT_NPC_FLAG_ARENACHARTER       | 262144     | 0000 0000 0000 0100 0000 0000 0000 0000  | NPC supplier of the arena charter, the same supplier of the guild charter.
UNIT_NPC_FLAG_TABARDVENDOR       | 524288     | 0000 0000 0000 1000 0000 0000 0000 0000  | Allows the designing of guild tabards.
UNIT_NPC_FLAG_BATTLEFIELDPERSON  | 1048576    | 0000 0000 0001 0000 0000 0000 0000 0000  | NPC with this flag port players to battlegrounds. Like battlemasters, arena organzier etc.
UNIT_NPC_FLAG_AUCTIONEER         | 2097152    | 0000 0000 0010 0000 0000 0000 0000 0000  | Allows NPC to display auction list.
UNIT_NPC_FLAG_STABLE             | 4194304    | 0000 0000 0100 0000 0000 0000 0000 0000  | Has the option to stable pets for hunters.
UNIT_NPC_FLAG_GUILD_BANKER       | 8388608    | 0000 0000 1000 0000 0000 0000 0000 0000  | Cause client to send 997 opcode.
UNIT_NPC_FLAG_SPELLCLICK         | 16777216   | 0000 0001 0000 0000 0000 0000 0000 0000  | Cause client to send 1015 opcode. Needs data on npc_spellclick_spells table.
UNIT_NPC_FLAG_MAILBOX            | 67108864   | 0000 0100 0000 0000 0000 0000 0000 0000  | NPC will act like a mailbox, opens mailbox with right-click.
Guard                            | 268435456  | 0001 0000 0000 0000 0000 0000 0000 0000  | Cityguards, must be scripted.

### attacktime

Delay between the creature's melee attacks, in milliseconds.

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

Minimum melee damage dealt by the creature.

### maxdamage

Maximum melee damage dealt by the creature.

### can_ranged

Indicates whether the creature can perform ranged attacks.

### rangedattacktime

Delay between ranged attacks, in milliseconds.

### rangedmindamage

Minimum ranged damage dealt by the creature.

### rangedmaxdamage

Maximum ranged damage dealt by the creature.

### respawntime

Time before the creature respawns after being removed, in milliseconds.

### armor

Total armor value of the creature.

### resistance1

Holy resistance.

### resistance2

Fire resistance.

### resistance3

Nature resistance.

### resistance4

Frost resistance.

### resistance5

Shadow resistance.

### resistance6

Arcane resistance.

### combat_reach

The distance from which the creature can reach and attack its target.

### bounding_radius

The creature's bounding radius used for distance and collision calculations.

### auras

Spell IDs of auras applied to the creature.

Multiple spell IDs are separated by commas.

Example:

<pre>
1234,5678,9012
</pre>

### boss

Indicates whether the creature is a boss.

<pre>
0 = Normal
1 = Boss
</pre>

### money

Amount of money dropped by the creature, specified in copper.

Examples:

<pre>
1000   = 10s
100000 = 1g
111111 = 11g 11s 11c
</pre>

### isTriggerNpc

Defines the creature's

<pre>
0  = INVIS_FLAG_NORMAL              - Used by players
1  = INVIS_FLAG_ELEMENTAL_SPIRIT    - Used by Shaman totem quests
2  = INVIS_FLAG_UNKNOWN_2           - Used by spell ID 24306
3  = INVIS_FLAG_TRAP                - Used by gameobjects only
4  = INVIS_FLAG_QUEST_4             - Used by many quest creatures
5  = INVIS_FLAG_DUNGEON_SET_NPC     - Used by dungeon set 2 NPCs
6  = INVIS_FLAG_DRUNK               - Visible only while drunk
7  = INVIS_FLAG_QUEST_7             - Used by many quest creatures
8  = INVIS_FLAG_QUEST_8             - Used by many quest creatures
9  = INVIS_FLAG_QUEST_9             - Used by many quest creatures
10 = INVIS_FLAG_QUEST_10            - Used by many quest creatures
11 = INVIS_FLAG_UNKNOWN_11          - Used by spell ID 49962
12 = INVIS_FLAG_UNUSED_12           - Unused
13 = INVIS_FLAG_UNUSED_13           - Unused
14 = INVIS_FLAG_UNUSED_14           - Unused
15 = INVIS_FLAG_NEVER_VISIBLE       - Used by triggers or placeholder NPCs
</pre>

### walk_speed

The movement speed of the creature while walking.

### run_speed

The movement speed of the creature while running.

### fly_speed

The movement speed of the creature while flying.

### extra_a9_flags

Additional flags.

**NOTE:** Currently unused.

### spells_1_8

The spells that are available to the creature. These are the spells that used when the creature is a Totem, or Pet, Vehicle or when possessed (mind control) too.

### spell_flags

The flags for the spells in Spell1-4.

<pre>
1 = RANDOM_CAST
2 = OUT_OF_COMBAT
3 = COOLDOWN_HALF (Sets cooldown to 1.5)
</pre>

### modImmunities

Flags defining immunities to various crowd-control effects and spell mechanics.

<pre>
1      = Charm (Mind Control, enslave demon)
2      = Confuse (Blind, etc.)
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
16384  = Spell Haste (Curse of Tongues) (aura)
32768  = Interrupt Cast
65536  = Mod Healing % (Mortal Strike) (aura)
131072 = Total Stats % (Vindication) (aura)
</pre>

### isTrainingDummy

Indicates whether the creature is a training dummy.

Training dummies cannot be killed and cannot move.

### guardtype

Defines the type of guard represented by the creature.

Most city guards, bruisers, and peacekeepers use `2`.

### summonguard

Creature entry ID of the guard summoned by this creature.

The exact usage is unknown.

### spelldataid

Spell data ID associated with the creature.

### vehicleid

Vehicle data ID associated with the creature.

This corresponds to the vehicle data entry.

### rooted

Indicates whether the creature is rooted.

<pre>
0 = Unrooted
1 = Rooted
</pre>

### questitems_1_6

Quest item IDs that can be looted from the creature.

Up to six quest items can be configured.

### waypointid

Waypoint path ID used by the creature.

The path is defined in [creature_waypoints](/Wiki/database/world/creature_waypoints/ "Creature waypoints").
