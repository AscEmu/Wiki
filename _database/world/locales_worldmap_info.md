---
title: locales_worldmap_info
type: worlddb
category: L
layout: single_markdown
---

# locales_worldmap_info
This table defines the localization for worldmap info. 

## Structure

Field                                                                                           | Type         | Default | Comment
----------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                 | int(11)      |         |        
[language_code](#language_code) | varchar(5)   |         |        
[text](#text)                   | varchar(255) |         |        

### entry

The map entry ID from [worldmap_info](/Wiki/database/world/worldmap_info/ "Worldmap info")

### language_code

The lanuguage code:

<pre>
frFR = french
deDE = german
ruRU = russian
</pre>

### text

The localized map name.