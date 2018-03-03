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
[entry](#entry)                 | int(10)    | 0       |                                                    
[language_code](#language_code) | varchar(5) |         |                                                    
[text](#text)                   | text       |         | "Using the same type like in itempage! (longtext)!"

### entry

The entry ID from [itempages](http://www.ascemu.org/wiki/index.php?title=Itempages&action=edit&redlink=1 "Itempages (page does not exist)")

### language_code

The lanuguage code:

<pre>
frFR = french
deDE = german
ruRU = russian
</pre>

### text

The localized Text.