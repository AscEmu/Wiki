---
title: locales_worldstring_table
type: worlddb
category: L
layout: single_markdown
---

# locales_worldstring_table
This table defines the localization for worldstrings. 

## Structure

Field                                                                                               | Type       | Default | Comment
--------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[entry](#entry)                                                                                     | int(11)    |         |        
[language_code](#language_code)                                                                     | varchar(5) |         |        
[text](#text)                                                                                       | text(255)  |         |        

### entry

The entry ID from [worldstring_tables](/Wiki/database/world/worldstring_tables/ "Worldstring tables")

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

### text

The localized Text.