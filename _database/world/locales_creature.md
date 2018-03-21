---
title: locales_creature
type: worlddb
category: L
layout: single_markdown
---

# locales_creature
This table contains localizations for the creature names.

## Structure

Field                                                                                      | Type         | Default | Comment                                  
------------------------------------------------------------------------------------------ | ------------ | ------- | -----------------------------------------
[id](#id)                       | int(30)      |         | Ruling... id OR entry... don't mix it up!
[language_code](#language_code) | varchar(5)   |         |                                          
[name](#name)                   | varchar(100) |         |                                          
[subname](#subname)             | varchar(100) |         |                                          

### id

The entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### language_code

The lanuguage code:

<pre>
frFR = french
deDE = german
ruRU = russian
</pre>

### name

The localized name of the creature.

### subname

The localized subname of the creature.