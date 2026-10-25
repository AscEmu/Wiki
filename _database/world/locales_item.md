---
title: locales_item
type: worlddb
category: L
layout: single_markdown
---

# locales_item
This table defines the localization for itempages. 

## Structure

Field                                                                                  | Type          | Default | Comment                                            
-------------------------------------------------------------------------------------- | ------------- | ------- | ---------------------------------------------------
[entry](#entry)                                                                        | int(10)       | 0       |                                                    
[language_code](#language_code)                                                        | varchar(5)    |         |                                                    
[name](#name)                                                                          | varchar(100)  |         | 
[description](#description)                                                            | varchar(100)  |         | 

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

### name

The localized item name.

### description

The localized item description (the flavour text).