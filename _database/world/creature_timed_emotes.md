---
title: creature_timed_emotes
type: worlddb
category: C
layout: single_markdown
---

# creature_timed_emotes
This table managed Creature timed emotes.

## Structure

Field                                                                                         | Type       | Default | Comment
--------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[Spwnid](#Spwnid)             | int(10)    | 0       |        
[rowid](#rowid)               | int(10)    | 0       |        
[type](#type)                 | tinyint(1) | 1       |        
[value](#value)               | int(10)    | 0       |        
[msg](#msg)                   | text(0)    | NULL    |        
[msg_type](#msg_type)         | int(10)    | 0       |        
[msg_lang](#msg_lang)         | int(10)    | 0       |        
[expire_after](#expire_after) | int(10)    | 0       |        

### spawnid

Creature entry ID spawn from [creature_spawns](http://www.ascemu.org/wiki/index.php?title=Creature_spawns "Creature spawns") table.

### rowid

Unique ID of action done by this row.

### type

1 = change standstate

2 = change emotestate

3 = do emote oneshoot

### value

Depends on type (genius...)

### msg

Say something when creature is changing standstate/emote etc.

### msg_type

12 = CHAT_MSG_MONSTER_SAY

13 = CHAT_MSG_MONSTER_PARTY

14 = CHAT_MSG_MONSTER_YELL

15 = CHAT_MSG_MONSTER_WHISPER

16 = CHAT_MSG_MONSTER_EMOTE

### msg_lang

0 = universal language

1 = orcish

7 = common

### expire_after

Time in miliseconds ( 1 sec = 1000 ms )