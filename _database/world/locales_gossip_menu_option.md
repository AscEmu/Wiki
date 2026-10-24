---
title: locales_gossip_menu_option
type: worlddb
category: L
layout: single_markdown
---

# locales_gossip_menu_option
This table contains the localized gossip menu option texts. 

## Structure

Field                                                                                                | Type       | Default | Comment
---------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[entry](#entry)                                                                                      | int(10)    |         |        
[language_code](#language_code)                                                                      | varchar(5) |         |        
[option_text](#option_text)                                                                                        | text       |         |        

### entry

The unique ID from [gossip_menu_option](/Wiki/database/world/gossip_menu_option/ "Gossip menu option") for the text.

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

### option_text

The localized menu option text instead of the english text.