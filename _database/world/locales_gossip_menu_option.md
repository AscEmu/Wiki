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
[text](#text)                                                                                        | text       |         |        

### entry

The unique ID from [gossip_menu_option](/Wiki/database/world/gossip_menu_option/ "Gossip menu option") for the text.

### languages_code

The lanuguage code:

<pre>
frFR = french
deDE = german
ruRU = russian
</pre>

### text

The localized menu option text instead of the english text.