---
title: locales_gameobject
type: worlddb
category: L
layout: single_markdown
---

# locales_gameobject
This table contains the localizations for the gameobjects.

## Structure

Field                                                                                        | Type         | Default | Comment
-------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                                                                              | int(30)      |         |        
[language_code](#language_code)                                                              | varchar(5)   |         |        
[name](#name)                                                                                | varchar(100) |         |        

### entry

The entry ID of the gameobject from [gameobject_properties](/Wiki/database/world/gameobject_properties/ "Gameobject properties") table.

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

The localized name of the gameobject.