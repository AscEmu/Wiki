---
title: character_achievement_progress
type: characterdb
category: C
layout: single_markdown
---

# character_achievement_progress
This table contains the character archievement progress.

## Structure

Field                 | Type    | Default | Comment
--------------------- | ------- | ------- | -------
[guid](#guid)         | int(10) | 0       |        
[criteria](#criteria) | int(10) | 0       |        
[counter](#counter)   | int(10) | NULL    |        
[date](#date)         | int(10) | NULL    |        

### guid

The character guid from characters table.

### criteria

Criteria id from the client data. Up to 4.x the ids of Achievement_Criteria, from 5.x on the ids of Criteria (see [last_login_build](/Wiki/database/characters/characters/#last_login_build "Characters")).

### counter

The progress of the criteria. From 5.x on only counted criteria are stored, values the server reads from the character (level, skills, reputation, ...) are computed at login.

### date

Unix time of the last change of the counter.