---
title: playercreateinfo
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo
This table contains the needed information for new players.

## Structure

Field                               | Type        | Default | Comment        
----------------------------------- | ----------- | ------- | ---------------
[Index](#Index)                     | tinyint(3)  |         | key, auto      
[build](#build)                     | smallint(6) | 12340   | key
[race](#race)                       | tinyint(3)  | 0       |                
[factiontemplate](#factiontemplate) | int(10)     | 0       |                
[class](#class)                     | tinyint(3)  | 0       |                
[mapID](#mapID)                     | int(10)     | 0       |                
[zoneID](#zoneID)                   | int(10)     | 0       |                
[positionX](#position)              | float(0)    | 0       |                
[positionY](#position)              | float(0)    | 0       |                
[positionZ](#position)              | float(0)    | 0       |                
[positionO](#position)              | float(0)    | 0       | (Not available)
[displayID](#displayID)             | smallint(5) | 0       |                
[BaseStrength](#BaseStrength)       | tinyint(3)  | 0       |                
[BaseAgility](#BaseAgility)         | tinyint(3)  | 0       |                
[BaseStamina](#BaseStamina)         | tinyint(3)  | 0       |                
[BaseIntellect](#BaseIntellect)     | tinyint(3)  | 0       |                
[BaseSpirit](#BaseSpirit)           | tinyint(3)  | 0       |                
[BaseHealth](#BaseHealth)           | tinyint(5)  | 0       |                
[BaseMana](#BaseMana)               | tinyint(3)  | 0       |                
[BaseRage](#BaseRage)               | tinyint(5)  | 0       |                
[BaseFocus](#BaseFocus)             | tinyint(1)  | 0       |                
[BaseEnergy](#BaseEnergy)           | tinyint(3)  | 0       |                
[attackpower](#attackpower)         | tinyint(3)  | 0       |                
[mindmg](#mindmg)                   | float(0)    |         |                
[maxdmg](#maxdmg)                   | float(0)    |         |                
[introid](#introid)                 | tinyint(3)  | 0       |                
[taximask](#taximask)               | tinytext(0) | NULL    |                

### Index

Index for this table, used to identify class/race values in other playercreateinf_* tables.

### build

Build number to determine if the data is for our current compiled version.

### race

...

### factiontemplate

...

### class

...

### mapID

...

### zoneID

...

### position

...

### displayID

...

### BaseStrength

...

### BaseAgility

...

### BaseStamina

...

### BaseIntellect

...

### BaseSpirit

...

### BaseHealth

...

### BaseMana

...

### BaseRage

...

### BaseFocus

...

### BaseEnergy

...

### attackpower

...

### mindmg

...

### maxdmg

...

### introid

...

### taximask

...