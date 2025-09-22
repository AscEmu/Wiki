---
title: item_properties_stats
type: worlddb
category: I
layout: single_markdown
---

# item_properties_stats
This table contains item stats information. 

## Structure

Field                       | Type         | Default                          | Comment
--------------------------- | ------------ | -------------------------------- | -------
[entry](#entry)             | mediumint(8) | unsigned NOT NULL DEFAULT '0'    | key
[build](#build)             | smallint(6)  | 12340                            | key
[type](#type)               | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    | key
[value](#value)             | smallint(6)  | NOT NULL DEFAULT '0'             |

### entry

The entry ID of the item.

### build

Build number to determine if the data is for our current compiled version.

### type

The type of stat of the item.

<pre>
 0 = Power
 1 = Health
 2 = UNKNOWN - not used
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
49 = Mastery
50 = Bonus Armor
51 = Arcane Resistance
52 = Nature Resistance
53 = Holy Resistance
54 = Frost Resistance
55 = Fire Resistance
56 = Shadow Resistance
</pre>

### value

The value for the stat type.

(These values affect the characters stats by wearing this item).
