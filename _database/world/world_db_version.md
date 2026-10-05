---
title: world_db_version
type: worlddb
category: W
layout: single_markdown
---

# world_db_version
This table contains the **world** database version information.

## Structure

Field                     | Type         | Default      | Comment
------------------------- | ------------ | ------------ | -------
[id](#id)                 | smallint(6)  | 0            | key, auto
[LastUpdate](#LastUpdate) | varchar(100) | Empty String |        

### id

Auto-incrementing change counter for the world database.

Each database update increases this value sequentially.

### LastUpdate

Contains the identifier of the latest applied world database update.

For more information, see the [database auto-update documentation](https://ascemu.github.io/Wiki/database/auto_update/).
