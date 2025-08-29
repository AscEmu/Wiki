---
title: locales_points_of_interest
type: worlddb
category: L
layout: single_markdown
---

# locales_points_of_interest
This table contains localizations for points of interest.

## Structure

Field                                                                                      | Type         | Default | Comment                                  
------------------------------------------------------------------------------------------ | ------------ | ------- | -----------------------------------------
[entry](#entry)                                                                            | medium int   |         | entry of the achievement
[language_code](#language_code)                                                            | varchar(5)   |         | deDE, frFR, ... 
[icon_name](#icon_name)                                                                    | text         |         |   

### entry

The entry ID from [points_of_interest](/Wiki/database/world/points_of_interest/ "points_of_interest")

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

### icon_name

The localised icon name of the point of interest

