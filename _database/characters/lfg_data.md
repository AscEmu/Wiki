---
title: lfg_data
type: characterdb
category: L
layout: single_markdown
---

# lfg_data
This table contains saved data for LFG. This table is constantly in use by the core.

## Structure

Field               | Type       | Default | Comment
------------------- | ---------- | ------- | -------
[guid](#guid)       | bigint(10) |         |        
[dungeon](#dungeon) | int(10)    |         |        
[state](#state)     | int(10)    |         |        

### guid

The guid for this group.

### dungeon

The dungeon ID from dbc.

### state

The state for this group/dungeon.