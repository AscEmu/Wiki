---
title: gameobject_properties
type: worlddb
category: G
layout: single_markdown
---

# gameobject_properties
This table contains gameobject information.

## Structure

Field                                                                                             | Type         | Default | Comment
------------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                   | int(10)      | 0       |        
[type](#type)                     | tinyint(3)   | 0       |        
[display_id](#display_id)         | mediumint(8) | 0       |        
[name](#name)                     | varchar(100) |         |        
[category_name](#category_name)   | varchar(100) |         |        
[cast_bar_text](#cast_bar_text)   | varchar(100) |         |        
[UnkStr](#UnkStr)                 | varchar(100) |         |        
[parameter_0](#parameters)        | int(10)      | 0       |        
[parameter_1](#parameters)        | int(10)      | 0       |        
[parameter_2](#parameters)        | int(10)      | 0       |        
[parameter_3](#parameters)        | int(10)      | 0       |        
[parameter_4](#parameters)        | int(10)      | 0       |        
[parameter_5](#parameters)        | int(10)      | 0       |        
[parameter_6](#parameters)        | int(10)      | 0       |        
[parameter_7](#parameters)        | int(10)      | 0       |        
[parameter_8](#parameters)        | int(10)      | 0       |        
[parameter_9](#parameters)        | int(10)      | 0       |        
[parameter_10](#parameters)       | int(10)      | 0       |        
[parameter_11](#parameters)       | int(10)      | 0       |        
[parameter_12](#parameters)       | int(10)      | 0       |        
[parameter_13](#parameters)       | int(10)      | 0       |        
[parameter_14](#parameters)       | int(10)      | 0       |        
[parameter_15](#parameters)       | int(10)      | 0       |        
[parameter_16](#parameters)       | int(10)      | 0       |        
[parameter_17](#parameters)       | int(10)      | 0       |        
[parameter_18](#parameters)       | int(10)      | 0       |        
[parameter_19](#parameters)       | int(10)      | 0       |        
[parameter_20](#parameters)       | int(10)      | 0       |        
[parameter_21](#parameters)       | int(10)      | 0       |        
[parameter_22](#parameters)       | int(10)      | 0       |        
[parameter_23](#parameters)       | int(10)      | 0       |        
[size](#size)                     | float(0)     | 1       |        
[QuestItem1](#QuestItem_1_6)      | int(11)      | 0       |        
[QuestItem2](#QuestItem_1_6)      | int(11)      | 0       |        
[QuestItem3](#QuestItem_1_6)      | int(11)      | 0       |        
[QuestItem4](#QuestItem_1_6)      | int(11)      | 0       |        
[QuestItem5](#QuestItem_1_6)      | int(11)      | 0       |        
[QuestItem6](#QuestItem_1_6)      | int(11)      | 0       |        

## entry

The entry ID of the gameobject.

## type

NOTE! These types needs more values in [sound & unknown](#spellfocus_-_sound_-_unknown)

<pre>
Type0 = Door
Type1 = Button
Type2 = QuestGiver
Type3 = Chest
Type4 = Binder
Type5 = Generic
Type6 = Trap
Type7 = Chair
Type8 = Spell Focus
Type9 = Text
Type10 = Goober
Type11 = Transport (f.e. elevators)
Type12 = Area Damage
Type13 = Camera 
Type14 = Map Object 
Type15 = Mo Transport (Like boats between Ratchet to Bootybay)
Type16 = Duel Arbiter
Type17 = Fishing Node 
Type18 = Ritual
Type19 = Mailbox 
Type20 = Auction House
Type21 = Guard Post
Type22 = Spell Caster (Portals)
Type23 = Meeting Stone
Type24 = Flag Stand 
Type25 = Fishing Hole
Type26 = Flag Drop
Type27 = Mini game 
Type28 = Lotery Kiosk
Type29 = Capture Point
Type30 = Aura Generator
Type31 = Dungeon Difficulty
Type32 = Barber Chair
Type33 = Destructible Building
Type34 = Guild Bank 
Type35 = Trap Door
</pre>

## display_id

The Display ID of the gameobject itself.

## name

The name of the GO.

## category_name

Used category names (Icons)

<pre>
Attack
Infused Moonstone
Inspect
Interact
LootAll
Mine
Point
PVP
</pre>

## cast_bar_text

If there is a "Cast Bar" on the Object (Chests, etc.) whatever is here will show.

## UnkStr

...

## parameters

### Type 0 - Door

<pre>
parameter_0: startOpen
parameter_1: LockId from Lock.dbc
parameter_2: Possibly the time delay before the door auto-closes
parameter_3: noDamageImmune
parameter_4: A reference to an object holding the Text to display on open door
parameter_5: A reference to an object holding the Text to display on close door
</pre>

### Type 1 - Button

<pre>
parameter_0: startOpen
parameter_1: LockId from Lock.dbc
parameter_2: Possibly the time delay before the door auto-closes
parameter_3: EntryId of a GOTrapEntry linked to this button
parameter_4: noDamageImmune
parameter_5: large
parameter_6: A reference to an object holding the Text to display upon pressing the button
parameter_7: A reference to an object holding the Text to display upon unpressing the button
parameter_8: losOK
</pre>

### Type 2 Quest Giver

<pre>
parameter_1: questList
parameter_2: PageId from PageTextMaterial.dbc
parameter_3: gossipID
parameter_4: customAnim (Constrained to values 1-4)
parameter_5: noDamageImmune
parameter_6: Reference to Text object containing the text to display upon interacting with this GO
parameter_7: losOK
parameter_8: Allow mounted players to interact with this object (?)
parameter_9: large
</pre>

### Type 3 - Chest

<pre>
parameter_0: lock_id (Lock.dbc)
parameter_1: The Id of an object that hold the chest's loot information.
parameter_2: The time it takes until the chest restocks its loot.
parameter_3: consumable
parameter_4: The minimum number of times in a row this chest can be looted (for mining, herbalism, etc.)
parameter_5: The maximum number of times in a row this chest can be looted (for mining, herbalism, etc.)
parameter_6: Possibly the Id of an event to trigger on looting this chest (?)
parameter_7: The Id of a GOTrapEntry that is associated with this chest.
parameter_8: The Id of the quest this chest is associated with.
parameter_9: The minimum level a character can be in order to open this chest.
parameter_10: losOK
parameter_11: leaveLoot - Possibly, don't trigger a restock event unless the chest is looted completely (?)
parameter_12: Possibly, wether this chest can be looted during combat (?)
parameter_13: log loot - Possibly wether or not to log the looting of this chest (?)
parameter_14: The Id of a text object to display upon opening this chest.
parameter_15: Wether or not to apply the group looting rules to the looting of this chest.
parameter_16: floating tooltip
</pre>

### Type 4 - Binder

There are no Fields associated with this object.

### Type 5 - Generic (Road Signs)

(Like duskwood - north).

<pre>
parameter_0: Show the floating tooltip for this object (?)
parameter_1: Wether or nor to show a highlight around this object (?)
parameter_2: serverOnly
parameter_3: large
parameter_4: Wether or not this object floats on water (?)
parameter_5: The Id of the quest required to be active in order to activate this object.
</pre>

### Type 6 - Trap

There are no Fields associated with this object.

### Type 7 - Chair

There are no Fields associated with this object.

### Type 8 - Spell Focus

<pre>
parameter_0: The type of SpellFocus this is.
parameter_1: Caster must be within this distance of the object in order to cast the associated spell
parameter_2: GOEntry Id of the Trap-type GO linked to this SpellFocus.
parameter_3: serverOnly
parameter_4: Id of the quest this object is associated with.
</pre>

### Type 9 - Books & Text

<pre>
parameter_0: The Id of a PageText object that is associated with this object.
parameter_1: The LanguageId from Languages.dbc
parameter_2: The PageTextMaterialId from PageTextMaterial.dbc
parameter_3: Whether or not to allow interaction with this object while mounted.
</pre>

### Type 10 - Goober

Used for quests, starts events

<pre>
parameter_1: The Id of the quest required to be active in order to interact with this goober.
parameter_2: The Id of an Event associated with this goober (?)
parameter_3: The time delay before this goober auto-closes after being opened (?)
parameter_4: customAnim
parameter_5: consumable
parameter_6: Time between allowed interactions with this goober (?)
parameter_7: The Id of a PageText object associated with this goober.
parameter_8: The LanguageId from Languages.dbc
parameter_9: The PageTextMaterialId from PageTextMaterial.dbc
parameter_10: The SpellId from Spells.dbc associated with this goober.
parameter_11: noDamageImmune
parameter_12: The Id of a GOTrapEntry associated with this goober.
parameter_13: large
parameter_14: The Id of a text object to be displayed when opening this goober (?)
parameter_15: The Id of a text object to be displayed when closing this goober (?)
parameter_16: losOK
parameter_17: Whether or not to allow interaction with this goober while mounted (?)
</pre>

### Type 11 - Transport

Transport(elevators and such)

<pre>
parameter_0: when to pause (ms)
parameter_1: startOpen
parameter_2: autoClose
</pre>

### Type 12 - Area Damage

Gameobjects that does damage?

<pre>
parameter_1: The radius within which the damage is applied (?)
parameter_2: The minimum damage done.
parameter_3: The maximum damage done.
parameter_4: The type of damage done.
parameter_5: The duration of the damaging effect (?)
parameter_6: The Id of a text object to be displayed when the AreaDamage starts. (?)
parameter_7: The Id of a text object to be displayed when the AreaDamage ends. (?)
</pre>

### Type 13 - Camera

Gameobjects that when you use them you get into a a intro screen

<pre>
parameter_1: CinematicCameraId from CinematicCamera.dbc
parameter_2: The Id of an Event associated with this camera (?)
parameter_3: The Id of a text object associated with this camera (?)
</pre>

### Type 14 - Map Object

This object has no associated Fields.

### Type 15 - Mo Transport (Link)

Transport

<pre>
parameter_0: The TaxiPathId from TaxiPaths.dbc
parameter_1: The speed this object moves at.
parameter_2: The rate this object accelerates at.
parameter_3: The Id of an Event to call when this object is activated (?)
parameter_4: The Id of an Event to call when this object is deactivated (?)
parameter_5: transportPhysics
parameter_6: The Id of a Map this object is associated with (?)
</pre>

### Type 16 - Duel Arbiter

This object has no associated Fields.

### Type 17 - Fishing Node

This object has no associated Fields.

### Type 18 - Ritual

Summoning Ritual

<pre>
parameter_0: Number of people needed to active the spell
parameter_1: SpellId from Spells.dbc
parameter_2: SpellId from Spell.dbc
parameter_3: ritualPersistent
parameter_4: SpellId from Spells.dbc
parameter_5: casterTargetSpellTargets
parameter_6: Whether or not the Casters of this SummoningRitual are in the same Group (?)
</pre>

### Type 19 - Mailbox

This object has no associated Fields.

### Type 20 - Auction House

<pre>
parameter_0: The AuctionHouseId from AuctionHouse.dbc
</pre>

### Type 21 - Guard Post

Guard Post (Not used anywhere, probably meant to be some "alarm" object that spawns creatures when you click it)

<pre>
parameter_0: The Id of the creature associated with this guard post.
parameter_1: The number of creatures with Id = CreatureId in this guard post.
</pre>

### Type 22 - Spell Cast

Gameobjects that contain spell and usually created by player spell(lightwell, portals and such)

<pre>
parameter_0: The SpellId from Spells.dbc
parameter_1: The number of times this can cast the Spell with Id = SpellId.
parameter_2: Whether you must be in the same group as the caster to recieve the Spell effect.
</pre>

### Type 23 - Meeting Stone

Meeting Stone

<pre>
parameter_0: The minimum level a character must be to activate this object.
parameter_1: The maximum level a character can be to activate this object.
parameter_2: The AreaId from AreaTable.dbc
</pre>

### Type 24 - Flag Stand

Battleground Flag

<pre>
parameter_0: LockId from Lock.dbc
parameter_1: SpellId from Spell.dbc
parameter_2: Activation radius (?)
parameter_3: SpellId from Spells.dbc
parameter_4: SpellId from Spells.dbc
parameter_5: noDamageImmune
parameter_6: Id of a text object that is shown when the object is activated (?)
parameter_7: losOK
</pre>

### Type 25 - Fishing Hole

Fishing holes

<pre>
parameter_0: The activation radius (?)
parameter_1: Id of an object that stores the object's loot.
parameter_2: Minimum number of consecutive times this object can be "fished".
parameter_3: Maximum number of consecutive times this object can be "fished".
parameter_4: LockId from Lock.dbc
</pre>

### Type 26 - Flag Drop

Battleground flag(when dropped)

<pre>
parameter_0: LockId from Lock.dbc
parameter_1: Id for an Event that is triggered upon activating this object (?)
parameter_2: SpellId from Spells.dbc
parameter_3: noDamageImmune
parameter_4: Id for a text object that is displayed when activating this object (?)
</pre>

### Type 27 - Minigame

Minigame

<pre>
parameter_0: gameType
</pre>

### Type 28 - Lottery Kiosk

Lottery Kiosk (Probably meant to be another minigame).
There are no Fields associated with this object.

### Type 29 - Capture Point

Capture Flags(those that you need to hold, like in arathi basin, halaa,terrokar and more)

<pre>
parameter_0: The activation radius (?)
parameter_1: Unknown, possibly a server-side dummy spell-effect. Not a SpellId from Spells.dbc
parameter_2: worldState1
parameter_3: worldstate2
parameter_4: winEventID1
parameter_5: winEventID2
parameter_6: contestedEventID1
parameter_7: contestedEventID2
parameter_8: progressEventID1
parameter_9: progressEventID2
parameter_10: neutralEventID1
parameter_11: neutralEventID2
parameter_12: neutralPercent
parameter_13: worldstate3
parameter_14: minSuperiority
parameter_15: maxSuperiority
parameter_16: minTime
parameter_17: maxTime
parameter_18: large
parameter_19: highlight
</pre>

### Type 30 - Aura Generator

Gameobject that have aura to nearby players.

<pre>
parameter_0: startOpen
parameter_1: Area of effect (?)
parameter_2: SpellId from Spells.dbc
parameter_3: conditionID1
parameter_4: SpellId from Spells.dbc
parameter_5: conditionID2
parameter_6: serverOnly
</pre>

### Type 31 Dungeon Difficulty

Instance Portals

<pre>
parameter_0: MapId from Maps.dbc
parameter_1: Whether or not the dungeon is Heroic (?)
</pre>

### Type 32 - Barber Chair

There are no Fields associated with this object.

### Type 33 - Destructible Building

Siege Gameobjects probably.

<pre>
parameter_0: initiale num hits
parameter_1: credit proxy creature
parameter_2: state1 name
parameter_3: intact event
parameter_4: damaged_display_id
parameter_5: damaged_num_hits
parameter_9: damaged_event
parameter_10: destroyed_display_id
parameter_14: destroyed_event
parameter_16: debuilding_time_secs
parameter_18: destructible_data
parameter_19: rebuilding_event
parameter_22: damage_event
</pre>

### Type 34 - Guild Bank

There are no Fields associated with this object.

### Type 35 - Trap Door

...

## size

The main Size of the gameobject.

## QuestItem_1_6

The item entry ID from [item_properties](/Wiki/database/world/item_properties/ "Item properties") table.