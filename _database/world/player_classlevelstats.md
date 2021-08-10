---
title: player_classlevelstats
type: worlddb
category: P
layout: single_markdown
---

# player_classlevelstats
This table provides levelstats for level based on the class

## Structure

Field                               | Type        | Default | Comment        
----------------------------------- | ----------- | ------- | ---------------
[build](#build)                     | smallint(6) | 12340   | key
[class](#class)                     | tinyint(3)  | 0       |                
[level](#level)                     | int(10)     | 0       |                
[BaseHealth](#BaseHealth)                   | int(10)     | 0       |                
[BaseMana](#BaseMana)                   | int(10)     | 0       |                


### build

Build number to determine if the data is for our current compiled version.

### class

The class this levelstat is for.

### level

the level for this stat

### BaseHealth

...

### BaseMana

...