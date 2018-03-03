---
title: characters
type: characterdb
category: C
layout: single_markdown
---

# characters
This table contains the information for the characters.

## Structure

Field                                           | Type         | Default                       | Comment                           
----------------------------------------------- | ------------ | ----------------------------- | ----------------------------------
[guid](#guid)                                   | int(6)       | unsigned NOT NULL DEFAULT '0' |                                   
[acct](#acct)                                   | int(20)      | unsigned NOT NULL DEFAULT '0' |                                   
[name](#name)                                   | varchar(21)  | NOT NULL DEFAULT              |                                    
[race](#race)                                   | smallint(3)  | NOT NULL                      |                                   
[class](#class)                                 | smallint(3)  | NOT NULL                      |                                   
[gender](#gender)                               | tinyint(1)   | NOT NULL                      |                                   
[custom_faction](#custom_faction)               | int(30)      | NOT NULL DEFAULT '0'          |                                   
[level](#level)                                 | int(3)       | NOT NULL                      |                                   
[xp](#xp)                                       | int(30)      | NOT NULL                      |                                   
[active_cheats](#active_cheats)                 | int(10)      | unsigned NOT NULL DEFAULT '0' |                                   
[exploration_data](#exploration_data)           | longtext     | NOT NULL                      |                                   
[watched_faction_index](#watched_faction_index) | bigint(40)   | NOT NULL                      |                                   
[selected_pvp_title](#selected_pvp_title)       | int(30)      | NOT NULL                      |                                   
[available_pvp_titles](#available_pvp_titles)   | bigint(10)   | unsigned NOT NULL DEFAULT '0' |                                   
[available_pvp_titles1](#available_pvp_titles1) | bigint(10)   | NOT NULL                      |                                   
[available_pvp_titles2](#available_pvp_titles2) | bigint(10)   | unsigned NOT NULL DEFAULT '0' |                                   
[gold](#gold)                                   | int(30)      | NOT NULL                      |                                   
[ammo_id](#ammo_id)                             | int(30)      | NOT NULL                      |                                   
[available_prof_points](#available_prof_points) | int(30)      | NOT NULL                      |                                   
[current_hp](#current_hp)                       | int(30)      | NOT NULL                      |                                   
[current_power](#current_power)                 | int(30)      | NOT NULL                      |                                   
[pvprank](#pvprank)                             | int(30)      | NOT NULL                      |                                   
[bytes](#bytes)                                 | int(30)      | NOT NULL                      |                                   
[bytes2](#bytes2)                               | int(30)      | NOT NULL                      |                                   
[player_flags](#player_flags)                   | int(30)      | NOT NULL                      |                                   
[player_bytes](#player_bytes)                   | int(30)      | NOT NULL                      |                                   
[positionX](#positionX-Z)                       | float        | NOT NULL DEFAULT '0'          |                                   
[positionY](#positionX-Z)                       | float        | NOT NULL DEFAULT '0'          |                                   
[positionZ](#positionX-Z)                       | float        | NOT NULL DEFAULT '0'          |                                   
[orientation](#orientation)                     | float        | NOT NULL DEFAULT '0'          |                                   
[mapId](#mapId)                                 | int(8)       | unsigned NOT NULL DEFAULT '0' |                                   
[zoneId](#zoneId)                               | int(8)       | unsigned NOT NULL DEFAULT '0' |                                   
[taximask](#taximask)                           | longtext     | NOT NULL                      |                                   
[banned](#banned)                               | int(40)      | unsigned NOT NULL DEFAULT '0' |                                   
[banReason](#banReason)                         | varchar(255) | NOT NULL                      |                                   
[timestamp](#timestamp)                         | int(30)      | DEFAULT NULL                  |                                   
[online](#online)                               | int(11)      | DEFAULT NULL                  |                                   
[bindpositionX](#bindpositionX)                 | float        | NOT NULL DEFAULT '0'          |                                   
[bindpositionY](#bindpositionY)                 | float        | NOT NULL DEFAULT '0'          |                                   
[bindpositionZ](#bindpositionZ)                 | float        | NOT NULL DEFAULT '0'          |                                   
[bindmapId](#bindmapId)                         | int(8)       | unsigned NOT NULL DEFAULT '0' |                                   
[bindzoneId](#bindzoneId)                       | int(8)       | unsigned NOT NULL DEFAULT '0' |                                   
[isResting](#isResting)                         | int(3)       | NOT NULL DEFAULT '0'          |                                   
[restState](#restState)                         | int(5)       | NOT NULL DEFAULT '0'          |                                   
[restTime](#restTime)                           | int(5)       | NOT NULL DEFAULT '0'          |                                   
[playedtime](#playedtime)                       | text         | NOT NULL                      |                                   
[deathstate](#deathstate)                       | int(5)       | NOT NULL DEFAULT '0'          |                                   
[TalentResetTimes](#TalentResetTimes)           | int(5)       | NOT NULL DEFAULT '0'          |                                   
[first_login](#first_login)                     | tinyint(1)   | NOT NULL DEFAULT '0'          |                                   
[login_flags](#login_flags)                     | tinyint(1)   | NOT NULL DEFAULT '0'          |                                   
[arenaPoints](#arenaPoints)                     | int(10)      | NOT NULL                      |                                   
[totalstableslots](#totalstableslots)           | int(10)      | unsigned NOT NULL DEFAULT '0' |                                   
[instance_id](#instance_id)                     | int(10)      | NOT NULL                      |                                   
[entrypointmap](#entrypointmap)                 | int(10)      | NOT NULL                      |                                   
[entrypointx](#entrypointx-o)                   | float        | NOT NULL                      |                                   
[entrypointy](#entrypointx-o)                   | float        | NOT NULL                      |                                   
[entrypointz](#entrypointx-o)                   | float        | NOT NULL                      |                                   
[entrypointo](#entrypointx-o)                   | float        | NOT NULL                      |                                   
[entrypointinstance](#entrypointinstance)       | int(10)      | NOT NULL                      |                                   
[taxi_path](#taxi_path)                         | int(10)      | NOT NULL                      |                                   
[taxi_lastnode](#taxi_lastnode)                 | int(10)      | NOT NULL                      |                                   
[taxi_mountid](#taxi_mountid)                   | int(10)      | NOT NULL                      |                                   
[transporter](#transporter)                     | int(10)      | NOT NULL                      |                                   
[transporter_xdiff](#transporter_x-odiff)       | float        | NOT NULL                      |                                   
[transporter_ydiff](#transporter_x-odiff)       | float        | NOT NULL                      |                                   
[transporter_zdiff](#transporter_x-odiff)       | float        | NOT NULL                      |                                   
[transporter_odiff](#transporter_x-odiff)       | float        | NOT NULL                      |                                   
[actions1](#actions1)                           | longtext     | NOT NULL                      |                                   
[actions2](#actions2)                           | longtext     | NOT NULL                      |                                   
[auras](#auras)                                 | longtext     | NOT NULL                      |                                   
[finished_quests](#finished_quests)             | longtext     | NOT NULL                      |                                   
[finisheddailies](#finisheddailies)             | longtext     | NOT NULL                      |                                   
[honorRolloverTime](#honorRolloverTime)         | int(30)      | NOT NULL DEFAULT '0'          |                                   
[killsToday](#killsToday)                       | int(10)      | NOT NULL DEFAULT '0'          |                                   
[killsYesterday](#killsYesterday)               | int(10)      | NOT NULL DEFAULT '0'          |                                   
[killsLifeTime](#killsLifeTime)                 | int(10)      | NOT NULL DEFAULT '0'          |                                   
[honorToday](#honorToday)                       | int(10)      | NOT NULL DEFAULT '0'          |                                   
[honorYesterday](#honorYesterday)               | int(10)      | NOT NULL DEFAULT '0'          |                                   
[honorPoints](#honorPoints)                     | int(10)      | NOT NULL DEFAULT '0'          |                                   
[drunkValue](#drunkValue)                       | int(30)      | NOT NULL DEFAULT '0'          |                                   
[glyphs1](#glyphs1)                             | longtext     | NOT NULL                      |                                   
[talents1](#talents1)                           | longtext     | NOT NULL                      |                                   
[glyphs2](#glyphs2)                             | longtext     | NOT NULL                      |                                   
[talents2](#talents2)                           | longtext     | NOT NULL                      |                                   
[numspecs](#numspecs)                           | int(10)      | NOT NULL DEFAULT '1'          |                                   
[currentspec](#currentspec)                     | int(10)      | NOT NULL DEFAULT '0'          |                                   
[talentpoints](#talentpoints)                   | longtext     | NOT NULL                      |                                   
[phase](#phase)                                 | int(10)      | unsigned NOT NULL DEFAULT '1' |                                   
[CanGainXp](#CanGainXp)                         | int(10)      | unsigned NOT NULL DEFAULT '1' |                                   
[data](#data)                                   | longtext     | NULL                          |                                   
[resettalents](#resettalents)                   | int(10)      | unsigned DEFAULT '0' NOT NULL |                                   
[rbg_daily](#rbg_daily)                         | tinyint(1)   | unsigned DEFAULT '0' NOT NULL | Boolean (already won a daily rbg?)
[dungeon_difficulty](#dungeon_difficulty)       | smallint(1)  | NOT NULL DEFAULT '0'          |                                   
[raid_difficulty](#raid_difficulty)             | smallint(1)  | NOT NULL DEFAULT '0'          |                                   

### guid

The unique ID of the character.

### acct

The account ID the character belongs to from accounts table.

### name

The name of the character.

### race

The race of the character:

    1  = Human
    2  = Orc
    3  = Dwarf
    4  = Night Elf
    5  = Undead
    6  = Tauren
    7  = Gnome
    8  = Troll
    10 = Blood Elf
    11 = Draenei

### class

The class of the character:

    1  = Warrior
    2  = Paladin
    3  = Hunter
    4  = Rogue
    5  = Priest
    6  = Death Knight
    7  = Shaman
    8  = Mage
    9  = Warlock
    11 = Druid

### gender

The gender of the character:

    0 = Male
    1 = Female

### custom_faction

The custom faction (flags). These values allow to customize the character in character screen.

    0       = None (default)
    1       = Customize (allows to change name, gender and the look of the character)
    <strike>65536   = Factionchange (allows to change the faction)
    1048576 = Racechange (allows to change the race)</strike>


### level

The current level of the character.

### xp

The current experience of the character.

### active_cheats

The active cheats of the character:

    0   = None
    1   = CooldownCheat
    2   = CastTimeCheat
    4   = GodModeCheat
    8   = PowerCheat
    16  = FlyCheat
    32  = AuraStackCheat
    64  = ItemStackCheat
    128 = TriggerpassCheat

### exploration_data

This field is filled with a lot of "0,0,0,0,...". If a character explore a new area, the area get filled in.

### watched_faction_index

### selected_pvp_title

The ID of the chosen pvp title.

### available_pvp_titles

### available_pvp_titles1

### available_pvp_titles2

### gold

The current "gold in copper of the character.

### ammo_id

### available_prof_points

### current_hp

The current health points.

### current_power

The current power of the character.

### pvprank

### bytes

### bytes2

### player_flags

### player_bytes

### positionX-Z

The position on the current map.

### orientation

The orientation on the current map. (Value = PI)

### mapId

The map ID of the current map.

### zoneId

The current zone ID.

### taximask

The current taximask.

### banned

This is a boolean:

    0 = Not banned
    1 = Banned

### banReason

The ban reason as cleartext.

### timestamp

### online

    0 = Character is offline
    1 = Character in online

### bindpositionX

### bindpositionY

### bindpositionZ

### bindmapId

### bindzoneId

### isResting

### restState

### restTime

### playedtime

Time the character played (online) in seconds.

### deathstate

### TalentResetTimes

### first_login

### login_flags

    1 = Rename character
    2 = Reset spells (unused)
    4 = Reset talents (unused)
    8 = customize char
    16 = unused
    32 = unused
    64 = Faction change (unused)
    128 = Race change (unused)

### arenaPoints

### totalstableslots

### instance_id

### entrypointmap

### entrypointx-o

Entrypoint position for the instance the player is currently in.

### entrypointinstance

### taxi_path

### taxi_lastnode

### taxi_mountid

### transporter

Entry of the transporter the player is on from transport_data

### transporter_x-odiff

The relative position to the transporter the player is currently on.

### actions1

String value to save spec 1 values.

You will see something like: 1586, 0, 0, 1, 64, 0,....

Three numbers build the information for the actionbar.

The first value is the spell or macro ID

The second number is the type:

    0 = Spell
    1 = UNK (Click?)
    2 = UNK
    4 = UNK
    8 = UNK
    16 = UNK
    32 = UNK  (Equipment Set?)
    64 = Macro
    128 = Item

The third number is misc (unknown).

### actions2

### auras

### finished_quests

### finisheddailies

### honorRolloverTime

### killsToday

The kill count of this day.

### killsYesterday

The kill count of yesterday.

### killsLifeTime

All kills counted since creation of the character.

### honorToday

The honor count of this day.

### honorYesterday

The honor count of yesterday.

### honorPoints

All honor points counted since creation of the character.

### drunkValue

### glyphs1

The major glyphs of the character.

### talents1

The active talents of the character.

### glyphs2

The minor glyphs of the character.

### talents2

The non-active talents of the character.

### numspecs

The number of available specializations.

### currentspec

The current used specialization type.

    0 = Single
    1 = Dual

### talentpoints

The talentpoints the character can set.

### phase

### CanGainXp

### data

Not used at the moment...

### resettalents

### rbg_daily

Boolean

    0 = Not won a daily RBG
    1 = Already won a daily RBG

### dungeon_difficulty

    0 = normal
    1 = heroic

### raid_difficulty

    0 = normal 10 men
    1 = normal 25 men
    3 = heroic 10 men
    4 = heroic 25 men