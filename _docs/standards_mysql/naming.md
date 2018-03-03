---
title: Naming
type: mysqlstandard
layout: single_markdown
position: 1
---
# Naming

Seperate names with one underscore and use lower case.

Right:

```sql
CREATE TABLE event_names(
```

Wrong:

```sql
CREATE TABLE EventNames( 
CREATE TABLE event__Names( 
CREATE TABLE event_Names(
```

## Building Groups

Create logical groups and use the most important name for the group.

Right:

```sql
 creature_names
 creature_spawns
 creature_waypoints
 ...
```

Wrong:

```sql
 creature_names
 proto_creature
 quest_finisher_creature
 ...
```