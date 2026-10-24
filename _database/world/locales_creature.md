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
[id](#id)                                                                                  | int(30)      |         | Ruling... id OR entry... don't mix it up!
[build](#build)                                                                            | int           | 0       | key
[language_code](#language_code)                                                            | varchar(5)   |         |                                          
[name](#name)                                                                              | varchar(100) |         |                                          
[subname](#subname)                                                                        | varchar(100) |         |                                          

### id

The entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### build

Client build the names are valid from. The server loads, for every creature, the row with the highest build that does not exceed its own build.
### language_code

The lanuguage code:

Locale   | Name                         |
-------- | ---------------------------- |
koKR     | Korean                       |
frFR     | French                       |
deDE     | German                       |
zhCN     | Chinese                      |
zhTW     | Taiwanese                    |
esES     | Spanish (EU)                 |
esMX     | Spanish (Latin American)     |
ruRU     | Russian                      |

### name

The localized name of the creature.

### subname

The localized subname of the creature.