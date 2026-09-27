---
title: logon_db_version
type: logondb
category: L
layout: single_markdown
---

# logon_db_version
This table contains the **logon** database version information.

## Structure

Field                     | Type         | Default      | Comment
------------------------- | ------------ | ------------ | -------
[id](#id)                 | smallint     | 0            | key, auto
[LastUpdate](#LastUpdate) | varchar(100) |              |        
    
### id

Auto-incrementing change counter for the logon database.

Each database update increases this value sequentially.

### LastUpdate

Contains the identifier of the latest applied logon database update.

For more information, see the [database auto-update documentation](https://ascemu.github.io/Wiki/database/auto_update/).
