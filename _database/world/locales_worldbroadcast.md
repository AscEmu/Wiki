---
title: locales_worldbroadcast
type: worlddb
category: L
layout: single_markdown
---

# locales_worldbroadcast
This table contains the broatcast texts. 

## Structure

Field                                                                                            | Type         | Default | Comment
------------------------------------------------------------------------------------------------ | ------------ | ------- | -------
[entry](#entry)                                                                                  | int(11)      |         |        
[language_code](#language_code)                                                                  | varchar(5)   |         |        
[text](#text)                                                                                    | varchar(255) |         |        

### entry

The unique ID from [worldbroadcastfor](/Wiki/database/world/worldbroadcast/ "Worldbroadcast") the text.

### languages_code

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

### text

The localized text to broadcast instead of the english text.