---
title: Naming
type: mysqlstandard
layout: single_markdown
position: 1
---
# Naming

Seperate names with one underscore and use lower case.

Right:
{: .success }

```sql
CREATE TABLE event_names(
```

Wrong:
{: .error }

```sql
CREATE TABLE EventNames( 
CREATE TABLE event__Names( 
CREATE TABLE event_Names(
```

## Building Groups

Create logical groups and use the most important name for the group.

Right:
{: .success }

```sql
 creature_names
 creature_spawns
 creature_waypoints
 ...
```

Wrong:
{: .error }

```sql
 creature_names
 proto_creature
 quest_finisher_creature
 ...
```