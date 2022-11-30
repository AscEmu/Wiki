---
title: playercreateinfo_bars
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo_bars
This table contains the the bar and button actions for players on create.

## Structure

Field             | Type          | Default | Comment
----------------- | ------------- | ------- | -------
[build](#build)   | smallint(6)   | 12340   | key
[race](#race)     | tinyint(3)    | 0       | key
[class](#class)   | tinyint(3)    | 0       | key
[button](#button) | tinyint(3)    | 0       |        
[action](#action) | mediumint(10) | 0       |        
[type](#type)     | tinyint(3)    | 0       |        
[misc](#misc)     | tinyint(3)    | 0       |        

### build

Build number used by AE to determine if the data is for our current compiled version.

### race

The race ID.

<pre>
1 = Human
2 = Orc
3 = Dwarf
4 = Night Elf
5 = Undead
6 = Tauren
7 = Gnome
8 = Troll
10 = Blood Elf
11 = Draenei
</pre>

### class

The class ID.

<pre>
1 = Warrior
2 = Paladin
3 = Hunter
4 = Rogue
5 = Priest
6 = Deathknight
7 = Shaman
8 = Mage
9 = Warlock
11 = Druid
</pre>

### button

The interface button for the defined action.

<pre>
1-11    = (SHIFT + 1)
12-23   = (SHIFT + 2)
24-35   = (SHIFT + 3) h1. Right Side Bar
36-47   = (SHIFT + 4) Right Side Bar 2
48-59   = (SHIFT + 5) h1. Bottom Right Bar
60-71   = (SHIFT + 6) Bottom Left Bar
72-83   = SpecialA
84-95   = SpecialB
96-107  = SpecialC
108-119 = SpecialD
</pre>

### action

Could be an spell... depending on the type...

### type

<pre>
0   = Spell
64  = Macro
128 = Item
</pre>

### misc

...