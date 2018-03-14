---
title: item_properties
type: worlddb
category: I
layout: single_markdown
---

# item_properties
This table contains most of the items information. 

## Structure

Field                                                                                                                   | Type         | Default                          | Comment
----------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------- | -------
[entry](#entry)                                               | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[class](#class)                                               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[subclass](#subclass)                                         | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[field4](#field4)                                             | int(11)      | NOT NULL DEFAULT '-1'            |        
[name1](#name1)                                               | varchar(255) | NOT NULL DEFAULT                 |         
[displayid](#displayid)                                       | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[quality](#quality)                                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[flags](#flags)                                               | int(11)      | unsigned NOT NULL DEFAULT '0'    |        
[flags2](#flags2)                                             | int(11)      | unsigned NOT NULL DEFAULT '0'    |        
[buyprice](#buyprice)                                         | int(10)      | unsigned NOT NULL DEFAULT '0'    |        
[sellprice](#sellprice)                                       | int(10)      | unsigned NOT NULL DEFAULT '0'    |        
[inventorytype](#inventorytype)                               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[allowableclass](#allowableclass)                             | int(11)      | NOT NULL DEFAULT '-1'            |        
[allowablerace](#allowablerace)                               | int(11)      | NOT NULL DEFAULT '-1'            |        
[itemlevel](#itemlevel)                                       | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[requiredlevel](#requiredlevel)                               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[RequiredSkill](#RequiredSkill)                               | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[RequiredSkillRank](#RequiredSkillRank)                       | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[RequiredSpell](#RequiredSpell)                               | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[RequiredPlayerRank1](#RequiredPlayerRank1)                   | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[RequiredPlayerRank2](#RequiredPlayerRank2)                   | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[RequiredFaction](#RequiredFaction)                           | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[RequiredFactionStanding](#RequiredFactionStanding)           | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[Unique](#Unique)                                             | int(11)      | NOT NULL DEFAULT '1'             |        
[maxcount](#maxcount)                                         | int(11)      | NOT NULL DEFAULT '0'             |        
[ContainerSlots](#ContainerSlots)                             | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[itemstatscount](#itemstatscount)                             | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_type1](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value1](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type2](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value2](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type3](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value3](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type4](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value4](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type5](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value5](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type6](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value6](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type7](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value7](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type8](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value8](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type9](#stat_type1-10)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value9](#stat_value1-10)                                | smallint(6)  | NOT NULL DEFAULT '0'             |        
[stat_type10](#stat_type1-10)                                 | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[stat_value10](#stat_value1-10)                               | smallint(6)  | NOT NULL DEFAULT '0'             |        
[ScaledStatsDistributionId](#ScaledStatsDistributionId)       | smallint(6)  | NOT NULL DEFAULT '0'             |        
[ScaledStatsDistributionFlags](#ScaledStatsDistributionFlags) | int(6)       | unsigned NOT NULL DEFAULT '0'    |        
[dmg_min1](#dmg_min_max_1-2)                                  | float        | NOT NULL DEFAULT '0'             |        
[dmg_max1](#dmg_min_max_1-2)                                  | float        | NOT NULL DEFAULT '0'             |        
[dmg_type1](#dmg_type1-2)                                     | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[dmg_min2](#dmg_min_max_1-2)                                  | float        | NOT NULL DEFAULT '0'             |        
[dmg_max2](#dmg_min_max_1-2)                                  | float        | NOT NULL DEFAULT '0'             |        
[dmg_type2](#dmg_type1-2)                                     | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[armor](#armor)                                               | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[holy_res](#holy-arcane_res)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[fire_res](#holy-arcane_res)                                  | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[nature_res](#holy-arcane_res)                                | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[frost_res](#holy-arcane_res)                                 | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[shadow_res](#holy-arcane_res)                                | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[arcane_res](#holy-arcane_res)                                | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[delay](#delay)                                               | smallint(5)  | unsigned NOT NULL DEFAULT '1000' |        
[ammo_type](#ammo_type)                                       | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[range](#range)                                               | float        | NOT NULL DEFAULT '0'             |        
[spellid_1](#spellid_.281-5.29)                               | mediumint(8) | NOT NULL DEFAULT '0'             |        
[spelltrigger_1](#spelltrigger_1-5)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[spellcharges_1](#spellcharges_1-5)                           | smallint(4)  | NOT NULL DEFAULT '0'             |        
[spellcooldown_1](#spellcooldown_1-5)                         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellcategory_1](#spellcategory_1-5)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[spellcategorycooldown_1](#spellcategorycooldown_1-5)         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellid_2](#spellid_.281-5.29)                               | mediumint(8) | NOT NULL DEFAULT '0'             |        
[spelltrigger_2](#spelltrigger_1-5)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[spellcharges_2](#spellcharges_1-5)                           | smallint(4)  | NOT NULL DEFAULT '0'             |        
[spellcooldown_2](#spellcooldown_1-5)                         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellcategory_2](#spellcategory_1-5)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[spellcategorycooldown_2](#spellcategorycooldown_1-5)         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellid_3](#spellid_.281-5.29)                               | mediumint(8) | NOT NULL DEFAULT '0'             |        
[spelltrigger_3](#spelltrigger_1-5)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[spellcharges_3](#spellcharges_1-5)                           | smallint(4)  | NOT NULL DEFAULT '0'             |        
[spellcooldown_3](#spellcooldown_1-5)                         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellcategory_3](#spellcategory_1-5)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[spellcategorycooldown_3](#spellcategorycooldown_1-5)         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellid_4](#spellid_.281-5.29)                               | mediumint(8) | NOT NULL DEFAULT '0'             |        
[spelltrigger_4](#spelltrigger_1-5)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[spellcharges_4](#spellcharges_1-5)                           | smallint(4)  | NOT NULL DEFAULT '0'             |        
[spellcooldown_4](#spellcooldown_1-5)                         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellcategory_4](#spellcategory_1-5)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[spellcategorycooldown_4](#spellcategorycooldown_1-5)         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellid_5](#spellid_.281-5.29)                               | mediumint(8) | NOT NULL DEFAULT '0'             |        
[spelltrigger_5](#spelltrigger_1-5)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[spellcharges_5](#spellcharges_1-5)                           | smallint(4)  | NOT NULL DEFAULT '0'             |        
[spellcooldown_5](#spellcooldown_1-5)                         | int(11)      | NOT NULL DEFAULT '-1'            |        
[spellcategory_5](#spellcategory_1-5)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[spellcategorycooldown_5](#spellcategorycooldown_1-5)         | int(11)      | NOT NULL DEFAULT '-1'            |        
[bonding](#bonding)                                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[description](#description)                                   | varchar(255) | NOT NULL DEFAULT                 |         
[page_id](#page_id)                                           | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[page_language](#page_language)                               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[page_material](#page_material)                               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[quest_id](#quest_id)                                         | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[lock_id](#lock_id)                                           | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[lock_material](#lock_material)                               | tinyint(4)   | NOT NULL DEFAULT '0'             |        
[sheathID](#sheathID)                                         | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |        
[randomprop](#randomprop)                                     | mediumint(8) | NOT NULL DEFAULT '0'             |        
[randomsuffix](#randomsuffix)                                 | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[block](#block)                                               | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[itemset](#itemset)                                           | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[MaxDurability](#MaxDurability)                               | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |        
[ZoneNameID](#ZoneNameID)                                     | mediumint(8) | unsigned NOT NULL DEFAULT '0'    |        
[mapid](#mapid)                                               | smallint(6)  | NOT NULL DEFAULT '0'             |        
[bagfamily](#bagfamily)                                       | mediumint(9) | NOT NULL DEFAULT '0'             |        
[TotemCategory](#TotemCategory)                               | mediumint(9) | NOT NULL DEFAULT '0'             |        
[socket_color_1](#socket_color_1-3)                           | tinyint(4)   | NOT NULL DEFAULT '0'             |        
[unk201_3](#unk201_3)                                         | mediumint(9) | NOT NULL DEFAULT '0'             |        
[socket_color_2](#socket_color_1-3)                           | tinyint(4)   | NOT NULL DEFAULT '0'             |        
[unk201_5](#unk201_5)                                         | mediumint(9) | NOT NULL DEFAULT '0'             |        
[socket_color_3](#socket_color_1-3)                           | tinyint(4)   | NOT NULL DEFAULT '0'             |        
[unk201_7](#unk201_7)                                         | mediumint(9) | NOT NULL DEFAULT '0'             |        
[socket_bonus](#socket_bonus)                                 | mediumint(9) | NOT NULL DEFAULT '0'             |        
[GemProperties](#GemProperties)                               | mediumint(9) | NOT NULL DEFAULT '0'             |        
[ReqDisenchantSkill](#ReqDisenchantSkill)                     | smallint(6)  | NOT NULL DEFAULT '-1'            |        
[ArmorDamageModifier](#ArmorDamageModifier)                   | float        | NOT NULL DEFAULT '0'             |        
[existingduration](#existingduration)                         | int(11)      | NOT NULL DEFAULT '0'             |        
[ItemLimitCategoryId](#ItemLimitCategoryId)                   | smallint(6)  | NOT NULL DEFAULT '0'             |        
[HolidayId](#HolidayId)                                       | int(11)      | unsigned NOT NULL DEFAULT '0'    |        
[food_type](#food_type)                                       | smallint(1)  | unsigned NOT NULL DEFAULT '0'    |        

### entry

The entry ID of the item.

### class

<pre>
0  = Consumables
1  = Bags
2  = Weapons
3  = Gems
4  = Armor
5  = Reagent
6  = Projectiles
7  = Trade goods
8  = GENERIC
9  = Recipes, Patterns, Plans
10 = Marks of honor, badges, etc.
11 = Quiver and ammo pounches
12 = Questitems
13 = Keys
14 = Mount (PERMANENT)
15 = Miscellaneous
16 = Glyphs
</pre>

### subclass

**Class = 0 => Consumables**

<pre>
    0 = Consumable
    1 = Potions
    2 = Elixirs
    3 = Flasks
    4 = Scrolls
    5 = Food & Drinks
    6 = Item Enhancements
    7 = Bandages
    8 = Other
</pre>

**Class = 1 => Bags**

<pre>
    1 = Soul Bag
    2 = Herb Bag
    3 = Enchanting Bag
    4 = Engineering Bag
    5 = Gem Bag
    6 = Mining Bag
    7 = Leatherworking Bag
    8 = Inscription Bag
</pre>

**Class = 2 => Weapons**

<pre>
    0 = Axe (1-handed)
    1 = Axe (2-handed)
    2 = Bow
    3 = Gun
    4 = Mace (1-handed)
    5 = Mace (2-handed)
    6 = Polearm
    7 = Sword (1-handed)
    8 = Sword (2-handed)

<strike>9 = UNKNOWN</strike>
    10 = Staff

<strike>11 = UNKNOWN
    12 = UNKNOWN</strike>
    13 = Fist Weapon
    14 = Misc Weapon
    15 = Dagger
    16 = Thrown

<strike>17 = UNKNOWN Spear (Used only for Argent Tournament Lances)</strike>
    18 = Crossbow
    19 = Wand
    20 = Fishing Pole
</pre>

**Class = 3 => Gems**

<pre>
    0 = Red
    1 = Blue
    2 = Yellow
    3 = Purple
    4 = Green
    5 = Orange
    6 = Meta
    7 = Simple
    8 = Prismatic
</pre>

**Class = 4 => Armor**

<pre>
    0 = Miscellaneous
    1 = Cloth
    2 = Leather
    3 = Mail
    4 = Plate
    5 = UNKNOWN
    6 = Shields
    7 = Librams
    8 = Idols
    9 = Totems
    10 = Sigils
</pre>

**Class = 6 => Projectiles**

<pre>
    2 = Arrows
    3 = Bullets
</pre>

**Class = 7 => Trade goods**

<pre>
    0 = Normal trade goods
    1 = Projectile parts
    2 = Projectile explosives
    3 = Projectile devices
</pre>

**Class = 9 => Recipes, Patterns, Plans**

<pre>
    0 = Recipe Book
    1 = Leatherworking
    2 = Tailoring
    3 = Engineering
    4 = Balacksmithing
    5 = Cooking
    6 = Alchemy
    7 = First Aid
    8 = Enchanting
    9 = Fishing
</pre>

**Class = 11 => Quiver and ammo pounches**

<pre>
    2 = Quiver
    3 = Quiver Ammo Pounch
</pre>

**Class = 15 => Miscellaneous**

<pre>
    0 = Junk

<strike>1 = Reagents
    2 = non-combat pets
    3 = Holiday items
    4 = Other
    5 = Mounts</strike>
</pre>

### field4

Not used...

### name1

The name of the item.

### displayid

The display ID of the item.

### quality

<pre>
 0 = Poor
 1 = Common
 2 = Uncommon
 3 = Rare
 4 = Epic
 5 = Legendary
 6 = Artifact
 7 = Heirloom
</pre>

### flags

<pre>
1          =    ITEM_FLAG_SOULBOUND        = 0x1,      // not used in proto
2          =    ITEM_FLAG_CONJURED         = 0x2,
4          =    ITEM_FLAG_LOOTABLE         = 0x4,
8          =    ITEM_FLAG_WRAPPED          = 0x8,      // not used in proto
16         =    ITEM_FLAG_BROKEN           = 0x10,     // many equipable items and bags
32         =    ITEM_FLAG_INDESTRUCTIBLE   = 0x20,     // can't destruct this item
64         =    ITEM_FLAG_UNKNOWN_07       = 0x40,     // many consumables
128        =    ITEM_FLAG_UNKNOWN_08       = 0x80,     // only 1 wand uses this
256        =    ITEM_FLAG_UNKNOWN_09       = 0x100,    // some wands & relics
512        =    ITEM_FLAG_WRAP_GIFT        = 0x200,
1024       =    ITEM_FLAG_CREATE_ITEM      = 0x400,    // probably worng
2048       =    ITEM_FLAG_FREE_FOR_ALL     = 0x800,    // can be looted ffa
4096       =    ITEM_FLAG_REFUNDABLE       = 0x1000,
8192       =    ITEM_FLAG_SIGNABLE         = 0x2000,   // charts
16384      =    ITEM_FLAG_READABLE         = 0x4000,   // may be worng
32768      =    ITEM_FLAG_UNKNOWN_16       = 0x8000,
65536      =    ITEM_FLAG_EVENT_REQ        = 0x10000,  // may be wrong
131072     =    ITEM_FLAG_UNKNOWN_18       = 0x20000,
262144     =    ITEM_FLAG_PROSPECTABLE     = 0x40000,
524288     =    ITEM_FLAG_UNIQUE_EQUIP     = 0x80000,
1048576    =    ITEM_FLAG_UNKNOWN_21       = 0x100000, // not used in proto
2097152    =    ITEM_FLAG_USEABLE_IN_ARENA = 0x200000, // useable in arenas
4194304    =    ITEM_FLAG_THROWN           = 0x400000,
8388608    =    ITEM_FLAG_SHAPESHIFT_OK    = 0x800000,
16777216   =    ITEM_FLAG_UNKNOWN_25       = 0x1000000,
33554432   =    ITEM_FLAG_UNKNOWN_26       = 0x2000000,
67108864   =    ITEM_FLAG_UNKNOWN_27       = 0x4000000,
134217728  =    ITEM_FLAG_ACCOUNTBOUND     = 0x8000000,
268435456  =    ITEM_FLAG_UNKNOWN_29       = 0x10000000,
536870912  =    ITEM_FLAG_MILLABLE         = 0x20000000,
1073741824 =    ITEM_FLAG_UNKNOWN_31       = 0x40000000,
2147483648 =    ITEM_FLAG_UNKNOWN_32       = 0x80000000
</pre>

### flags2

<pre>
1   = Horde only
2   = Alliance only
4   = Ext. cost requires gold
256 = Need roll disabled
</pre>

### buyprice

The cost (in copper) if a character bought this item from a vendor.

### sellprice

The money (in copper) a character get by selling it to a vendor.

### inventorytype

<pre>
0  = Non-Equip
1  = Head
2  = Neck
3  = Shoulders
4  = Body
5  = Chest
6  = Waist
7  = Legs
8  = Feet
9  = Wrists
10 = Hands
11 = Finger
12 = Trinket
13 = Weapon
14 = Shield
15 = Ranged
16 = Cloak
17 = Two-Hand Weapon
18 = Bag
19 = Tabard
20 = Robe
21 = Weapon-Main Hand
22 = Weapon-Off Hand
23 = Holdable
24 = Ammo
25 = Thrown
26 = Ranged(right)
27 = Quiver
28 = Relic
</pre>

### allowableclass

<pre>
  -1 = Any Class
   1 = Warrior
   2 = Paladin
   4 = Hunter
   8 = Rogue
  16 = Priest
  32 = Deathknight
  64 = Shaman
 128 = Mage
 256 = Warlock
1024 = Druid
</pre>

If you allow only two or three classes to use this item, simply add up the values.

### allowablerace

<pre>
  -1 = All races
   1 = Human
   2 = Orc
   3 = Dwarf
   4 = Nightelf
   5 = Undead
   6 = Tauren
   7 = Gnome
   8 = Troll
  10 = Bloodelf
  11 = Dranei 
 690 = All Horde races
1101 = All Alliance races
</pre>

### itemlevel

The value of the item level.

### requiredlevel

The required level to use this item.

### RequiredSkill

The required skill to use this item.

### RequiredSkillRank

The required rank of the skill (defined in "RequiredSkill") to use this item.

### RequiredSpell

The required Spell ID to use this item.

### RequiredPlayerRank1

...

### RequiredPlayerRank2

...

### RequiredFaction

The faction ID which is required.

### RequiredFactionStanding

The required faction standing for the defined "RequiredFaction" ID.

For more information, take a look at [playerreputations](/Wiki/database/characters/playerreputations/ "Playerreputations") table. (Rows "factions" and "standing")

### Unique

<pre>
0 = Normal (not unique, standard)
1 = Unique
</pre>

### maxcount

This defines the maximum stack count of this item in one slot.

### ContainerSlots

Defines how many container slots the item (bag) brings with it.
(Currently there are maximum 16 slots reserved for containers.)

### itemstatscount

...

### stat_type1-10

The type of stat of the item.

<pre>
 0 = Power
 1 = Health

<strike>2 = UNKNOWN</strike>
 3 = Agility
 4 = Strength
 5 = Intellect
 6 = Spirit
 7 = Stamina
11 = Weapon skill rating
12 = Defense rating
13 = Dodge rating
14 = Parry rating
15 = Shield block rating
16 = Melee hit rating
17 = Ranged hit rating
18 = Spell hit rating
19 = Melee critical strike rating
20 = Ranged critical strike rating
21 = Spell critical strike rating
22 = Melee hit avoidance rating
23 = Ranged hit avoidance rating
24 = Spell hit avoidance rating
25 = Melee critical avoidance rating
26 = Ranged critical avoidance rating
27 = Spell critical avoidance rating
28 = Melee haste rating
29 = Ranged haste rating
30 = Spell haste rating
31 = Hit rating
32 = Critical strike rating
33 = Hit avoidance rating
34 = Critical avoidance rating
35 = Resilence rating
36 = Haste rating
37 = Expertise rating
38 = Attackpower
39 = Ranged attackpower
40 = Feral attackpower
41 = Spell healing done
42 = Spell damage done
43 = Mana regeneration
44 = Armor penetration rating
45 = Spell power
46 = Health regent
47 = Spell penetration 
48 = Block value
</pre>

### stat_value1-10

The value for the stat type.

(These values affect the characters stats by wearing this item).

### ScaledStatsDistributionId

The scaling stat distribution ID (from .dbc).

### ScaledStatsDistributionFlag

<pre>
<strike>0 = Scaling stat stat? what?
1 = Scaling stat armor
2 = Scaling stat damage
3 = Scaling stat spell power</strike>
</pre>

### dmg_min_max_1-2

The minimum/maximum damage of a weapon.

### dmg_type1-2

<pre>
0 = Physical
1 = Holy
2 = Fire
3 = Nature
4 = Frost
5 = Shadow
6 = Arcane
</pre>

### armor

The armor value of the item.

### holy-arcane_res

The resistance value against the attacking damage types.

### delay

The time in milliseconds between the weapon hit a enemy (again).

### ammo_type

The type ammunition the item use:

<pre>
0 = no ammunition
1 = wand (shots)
2 = arrows (bows)
3 = bullets (pistoles)
</pre>

### range

The range in feets for a ranged weapon.

### spellid_(1-5)

The spell ID on the item.

### spelltrigger_1-5

The type how the spell triggers:

<pre>
0 = On use
1 = On equip
2 = Chance on hit
4 = Soulstone

<strike>5 = No delay</strike>
6 = Learn spell ID
</pre>

### spellcharges_1-5

The number of times the item can cast the spell.

<pre>
0 = infinite charges
</pre>

If the number of charges is a negative value, the item deletes itself.

### spellcooldown_1-5

The cooldown for the spell in milliseconds. (If this value = -1, the normal cooldown of this spell is used)

### spellcategory_1-5

The spellcategory of the spell.

### spellcategorycooldown_(1-5)

The cooldown for the spellcategory in milliseconds. (If this value = -1, the normal cooldown of this spellcategory is used)

### bonding

This field defines, how the item is bind to the character.

<pre>
0 = None
1 = On pickup
2 = On equip
3 = On use
4 = Quest bound
5 = Quest bound (Is handled like type 4)
</pre>

### description

The item description at the bottom of tooltip.

### page_id

The page ID from [item_pages](/Wiki/database/world/item_pages/ "Item pages") (Used for books etc.)

### page_language

The page text language:

<pre>
 0 = Universal (everybody can read)
 1 = Orcish
 2 = Darnassian
 3 = Taurahe
 6 = Dwarvish
 7 = Common
 8 = Demonic
 9 = Titan
10 = Thelassian
11 = Draconic
12 = Kalimag
13 = Gnomish
14 = Troll
33 = Gutterspeak
35 = Dranei
</pre>

### page_material

The material of the page:

<pre>
1 = Parchment
2 = Stone
3 = Marble
4 = Silver
5 = Bronze
6 = Valentine
7 = Illidan
</pre>

### quest_id

The quest entry ID from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table to start the quest.

### lock_id

The lock ID this item match (key to open a door) to field "Sound1" in [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

### lock_material

The type of material (controles the sound by moving this item)

<pre>
-1 = Consumabels
 0 = Undefined
 1 = Metal
 2 = Wood
 3 = Liquid
 4 = Jewelry
 5 = Chain
 6 = Plate
 7 = Cloth
 8 = Leather
</pre>

### sheathID

The sheath type to controle the action by using "Z" hotkey:

<pre>
1 = Weapon (two handed)
2 = Staff
3 = Weapon (one handed)
4 = Shield
5 = Enchanter's rod
6 = Weapon (off hand)
</pre>

### randomprop

This field defines the random property "group". This field gets filles with the entry ID from [item_randomprop_groups](/Wiki/database/world/item_randomprop_groups/ "Item randomprop groups") table.

NOTE!: **It exists no item** with a **randomprop and randomsuffix** value. Make shure that **only one** of these values links to an other table!

### randomsuffix

This field defines the random suffix "group". This field gets filles with the entry ID from [item_randomsuffix_groups](/Wiki/database/world/item_randomsuffix_groups/ "Item randomsuffix groups") table.

NOTE!: **It exists no item** with a **randomprop and randomsuffix** value. Make shure that **only one** of these values links to an other table!

### block

The value for the block (for shields...)

### itemset

The ID of the itemset. Items can be grouped by this ID (They are added all by using ".add itemset <ID>"

<pre>
> 0 A normal set
= 0 no set
< 0 is linked to an itemset (Added in table [items_linked_itemsets](http://www.ascemu.org/wiki/index.php?title=Items_linked_itemsets&action=edit&redlink=1 "Items linked itemsets (page does not exist)") to an positive itemsetid)
</pre>

### MaxDurability

Maximum durability on item (for equippable items)

### ZoneNameID

The name ID of the Zone the item can be used in.

### mapid

The map ID where the item can be used on.

### bagfamily

<pre>
    1 = Arrows (Quivers)
    2 = Bullets (Ammo pouches)
    4 = Soul Shards (Soul bags)
    8 = Leatherworking Supplies (Leatherworking supply bags)
   16 = Inscription supplies (Inscriber supply bags)
   32 = Herbalism supplies (Herbalism bags)
   64 = Enchanting Supplies (Enchanting bags)
  128 = Engineering Supplies (Tngineering toolboxes)
  256 = Keys (Keyring)
  512 = Jewelcrafting supplies (JC toolboxes)
 1024 = Mining Supplies (Mining toolboxes)

<strike>2048 = Soulbound Equipment
 4096 = Vanity Pets</strike>
 8192 = Currency
16384 = Quest items
</pre>

### TotemCategory

<pre>
  1 = Skinning Knife (OLD)
  2 = Earth Totem
  3 = Air Totem
  4 = Fire Totem
  5 = Water Totem
  6 = Runed Copper Rod
  7 = Runed Silver Rod
  8 = Runed Golden Rod
  9 = Runed Truesilver Rod
 10 = Runed Arcanite Rod
 11 = Mining Pick (OLD)
 12 = Philosopher's Stone
 13 = Blacksmith Hammer (OLD)
 14 = Arclight Spanner
 15 = Gyromatic Micro-Adjustor
 21 = Master Totem
 41 = Runed Fel Iron Rod
 62 = Runed Adamantite Rod
 63 = Runed Eternium Rod
 81 = Hollow Quill
101 = Runed Azurite Rod
121 = Virtuoso Inking Set
141 = Drums
161 = Gnomish Army Knife
162 = Blacksmith Hammer
165 = Mining Pick
166 = Skinning Knife
167 = Hammer Pick
168 = Bladed Pickaxe
169 = Flint and Tinder
189 = Runed Cobalt Rod
190 = Runed Titanium Rod
</pre>

### socket_color_1-3

<pre>
1 = Meta socket
2 = Red socket
4 = Yellow socket
8 = Blue socket
</pre>

### unk201_3

Amount of Gems in Meta socket

### unk201_5

...

### unk201_7

...

### socket_bonus

<pre>
3312 = +8 Strength
3313 = +8 Agility
3305 = +12 Stamina
3353 = +8 Intellect
2872 = +9 Healing
3753 = +9 Spell Power
3877 = +16 Attack Power
</pre>

### GemProperties

The gem properties ID from .dbc.

### ReqDisenchantSkill

The required disenchanting skill level...

### ArmorDamageModifier

...

### existingduration

Item duration in seconds.

### ItemLimitCategoryId

The item limit category ID from .dbc. defines the maximum amount of this item category.

### HollidayId

The holliday name ID (points to HolidayNames.dbc)

### food_type

The food type itself.

<pre>
1 = Meat
2 = Fish
3 = Cheese
4 = Bread
5 = Fungus
6 = Fruit
7 = Raw Meat
8 = Raw Fish
</pre>