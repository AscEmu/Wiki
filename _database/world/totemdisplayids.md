---
title: totemdisplayids
type: worlddb
category: T
layout: single_markdown
---

# totemdisplayids
This table contains the displayids for the totems. 

## Structure

Field                                 | Type         | Default | Comment
------------------------------------- | ------------ | ------- | -------
[race](#race)                         | smallint(2)  |         | key
[build](#build)                       | smallint(8)  | 12340   | key
[totem](#totem)                       | int(8)       |         | key
[displayid](#displayid)               | int(8)       | NULL    |  

### race

Race id of the character.

### build

Build number for AE version.

### totem

DisplayId of the basic totem.

### displayid

Race specific displayid for the totem.
