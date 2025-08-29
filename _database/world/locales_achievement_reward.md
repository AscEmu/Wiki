---
title: locales_achievement_reward
type: worlddb
category: L
layout: single_markdown
---

# locales_achievement_reward
This table contains localizations for achievement reward messages.

## Structure

Field                                                                                      | Type         | Default | Comment                                  
------------------------------------------------------------------------------------------ | ------------ | ------- | -----------------------------------------
[entry](#entry)                                                                            | medium int   |         | entry of the achievement
[gender](#gender)                                                                          | tinyint      |         | gender (0 male, 1 female 2 both)
[language_code](#language_code)                                                            | varchar(5)   |         | deDE, frFR, ... 
[subject](#subject)                                                                        | varchar(100) |         |   
[text](#text)                                                                              | text         |         |   

### entry

The entry ID from [achievement_reward](/Wiki/database/world/achievement_reward/ "Achievement Reward")

### gender

The required gender for this localized message.

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
