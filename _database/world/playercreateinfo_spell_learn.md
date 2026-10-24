---
title: playercreateinfo_spell_learn
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo_spell_learn
This table contains the spells for new created players to learn.

## Structure

Field                       | Type          | Default | Comment
--------------------------- | ------------- | ------- | -------
[min_build](#min_build)     | int           | 5875    | key
[max_build](#max_build)     | int           | 18414   | key
[raceMask](#raceMask)       | int()         | 0       | key
[classMask](#classMask)     | int()         | 0       | key
[spellid](#spellid)         | mediumint(10) | 0       |        
[note](#note)               | VARCHAR(200)  | 0       | 

### min_build

First client build the row is valid for. A row is used when the build of the server lies between min_build and max_build.

### max_build

Last client build the row is valid for.

### raceMask

...

### classMask

...

### spellid

The ID of the spell...

### note

...