---
title: Naming
type: mysqlstandard
layout: single_markdown
position: 1
---
# File naming

We use the following file naming: yyyymmdd-xx_description.sql. All files missing the file naming rules will be declined.
This rule will only apply on official update files. If you are providing data in the as WIP you can ignore this rule.

# Table naming

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

# Column naming

Do NOT use lowerUppercase or any uppercase in your column naming! If you need to seperate words use underscore _

Right:
{: .success }

```sql
min_healt
max_health
```

Wrong:
{: .error }

```sql
minHealt
maxHealth
```
