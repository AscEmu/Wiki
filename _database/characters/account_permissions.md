---
title: account_permissions
type: characterdb
category: A
layout: single_markdown
---

# account_permissions
This table contains the realm specific permissions.

## Structure

Field                       | Type         | Default | Comment
--------------------------- | ------------ | ------- | -------
[id](#id)                   | int(10)      |         |        
[permissions](#permissions) | varchar(100) |         |        
[name](#name)               | varchar(50)  |         |        

### id

This is the same like row "id" in accounts table.

### permissions

The permissions for the account, take a look at [GM_Access_Levels](/Wiki/docs/commands/access_levels/ "GM Access Levels").

### name

The name of the account