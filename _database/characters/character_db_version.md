---
title: character_db_version
type: characterdb
category: C
layout: single_markdown
---

# character_db_version
This table contains the **character** database version information.

## Structure

Field                     | Type         | Default      | Comment
------------------------- | ------------ | ------------ | -------
[id](#id)                 | smallint     | 0            | key, auto
[LastUpdate](#LastUpdate) | varchar(100) | Empty String |

### id

Auto-incrementing change counter for the character database.

Each database update increases this value sequentially.

### LastUpdate

Contains the identifier of the latest applied character database update.

For more information, see the [database auto-update documentation](https://ascemu.github.io/Wiki/database/auto_update/).
