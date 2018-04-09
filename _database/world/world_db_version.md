---
title: world_db_version
type: worlddb
category: W
layout: single_markdown
---

# world_db_version
This table ensures that the world database matches the core

## Structure

Field                     | Type         | Default      | Comment
------------------------- | ------------ | ------------ | -------
[id](#id)                 | smallint(6)  | 0            | key, auto
[LastUpdate](#LastUpdate) | varchar(255) | Empty String |        

### id

Update ID

### LastUpdate

Filled by sql script from world_updates