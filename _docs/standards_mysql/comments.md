---
title: Comments
type: mysqlstandard
layout: single_markdown
position: 2
---
# Comments/Description

## SQL-files

Comment your script and set these comments in a single line above the part.

Right:
{: .success }

```sql
-- Trenton Lighthammer Gossip
DELETE FROM npc_gossip_textid WHERE
```

Wrong:
{: .error }

```sql
DELETE FROM npc_gossip_textid WHERE id = 1345;  -- Trenton Lighthammer Gossip
```

### Headers

Every SQL-file needs a header like this:

```sql
--
-- Tablestructure: creatur_names
--
```

Or:

```sql
/* 
\* creature_names
\* Updating the Violet Hold npcs and setting the right faction
\*/
```

## Table/Row Description

Every row needs a short description.
