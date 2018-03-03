---
title: locales_npc_monstersay
type: worlddb
category: L
layout: single_markdown
---

# locales_npc_monstersay
This table contains the localized creature monstersay. 

## Structure

Field                                                                                            | Type       | Default | Comment
------------------------------------------------------------------------------------------------ | ---------- | ------- | -------
[entry](#entry)                 | int(10)    | 0       |        
[language_code](#language_code) | varchar(5) | 0       |        
[monstername](#monstername)     | longtext   |         |        
[text0](#text.280_-_4.29)       | longtext   |         |        
[text1](#text.280_-_4.29)       | longtext   |         |        
[text2](#text.280_-_4.29)       | longtext   |         |        
[text3](#text.280_-_4.29)       | longtext   |         |        
[text4](#text.280_-_4.29)       | longtext   |         |        

### entry

The creature entry ID from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table.

### language_code

The lanuguage code:

<pre>
frFR = french
deDE = german
ruRU = russian
</pre>

### monstername

Monstername from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table (seems to be optional).

### text(0 - 4)

The localized text the monster say.