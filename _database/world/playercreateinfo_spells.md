---
title: playercreateinfo_spells
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo_spells
This table contains the spells for new created players.

## Structure

Field               | Type          | Default | Comment
------------------- | ------------- | ------- | -------
[indexid](#indexid) | tinyint(3)    | 0       | key
[build](#build)     | smallint(6)   | 12340   | key
[spellid](#spellid) | mediumint(10) | 0       |        

### indexid

The entry ID from [playercreateinfo](/Wiki/database/world/playercreateinfo/ "Playercreateinfo") table.

### build

Build number used by AE to determine if the data is for our current compiled version.

### spellid

The ID for the spell...