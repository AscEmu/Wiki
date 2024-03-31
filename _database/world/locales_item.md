---
title: locales_item
type: worlddb
category: L
layout: single_markdown
---

# locales_item
This table defines the localization for itempages. 

## Structure

Field                                                                                  | Type       | Default | Comment                                            
-------------------------------------------------------------------------------------- | ---------- | ------- | ---------------------------------------------------
[entry](#entry)                                                                        | int(10)    | 0       |                                                    
[language_code](#language_code)                                                        | varchar(5) |         |                                                    
[text](#text)                                                                          | text       |         | "Using the same type like in itempage! (longtext)!"

### entry

The entry ID from [item_pages](/Wiki/database/world/item_pages/ "Item pages")

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