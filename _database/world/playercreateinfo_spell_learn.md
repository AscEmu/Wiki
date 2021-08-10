---
title: playercreateinfo_spell_learn
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo_spell_learn
This table contains the spells for new created players to learn.

## Structure

Field               | Type          | Default | Comment
------------------- | ------------- | ------- | -------
[build](#build)     | smallint(6)   | 12340   | key
[raceMask](#raceMask)     | int()   | 0   | key
[classMask](#classMask)     | int()   | 0   | key
[spellid](#spellid) | mediumint(10) | 0       |        

### build

Build number used by AE to determine if the data is for our current compiled version.

### raceMask

...

### classMask

...

### spellid

The ID of the spell...