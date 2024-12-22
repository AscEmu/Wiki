---
title: locales_npc_script_text
type: worlddb
category: L
layout: single_markdown
---

# locales_npc_script_text
This table contains the localized npc_script texts. 

## Structure

Field                                                                                             | Type       | Default | Comment
------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[entry](#entry)                                                                                   | int(10)    | 0       |        
[language_code](#language_code)                                                                   | varchar(5) | 0       |        
[text](#text)                                                                                     | longtext   |         |        

### entry

The unique ID from [npc_script_text](/Wiki/database/world/npc_script_text/ "Npc script text") for the text.

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

The localized text.