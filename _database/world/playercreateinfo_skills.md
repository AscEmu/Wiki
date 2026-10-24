---
title: playercreateinfo_skills
type: worlddb
category: P
layout: single_markdown
---

# playercreateinfo_skills
This table contains the skills for the players on create.

## Structure

Field                           | Type                   | Default | Comment
------------------------------- | ---------------------- | ------- | -------
[min_build](#min_build)         | int           | 5875    | key
[max_build](#max_build)         | int           | 18414   | key
[raceMask](#raceMask)           | int()                  | 0       | key
[classMask](#classMask)         | int()                  | 0       | key
[skillid](#skillid)             | smallint(5)            | 0       |        
[level](#level)                 | smallint(5)            | 0       |        
[note](#note)                   | VARCHAR(100)           | 0       |       

### min_build

First client build the row is valid for. A row is used when the build of the server lies between min_build and max_build.

### max_build

Last client build the row is valid for.

### raceMask

Bit mask of the races the row applies to, 0 = every race. The bit of a race is 1 << (race id - 1).

### classMask

Bit mask of the classes the row applies to, 0 = every class. The bit of a class is 1 << (class id - 1).

### skillid

The skill line a new character of the race and class starts with. From 8.x on the rows follow the SkillRaceClassInfo data of the client.

### level

Minimum character level for the skill, 0 = from the start.

### note

Free text for the row, not read by the server.