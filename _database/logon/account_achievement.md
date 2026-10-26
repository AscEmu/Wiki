---
title: account_achievement
type: logondb
category: A
layout: single_markdown
---

# account_achievement
This table contains the account wide achievements of every account (5.x and later). The realms read and write them over [LogonComm](/Wiki/docs/docs_core/logoncomm/ "LogonComm").

## Structure

Field                       | Type            | Default | Comment
--------------------------- | --------------- | ------- | -------
[account_id](#account_id)   | int unsigned    |         | key
[achievement](#achievement) | int unsigned    |         | key
[date](#date)               | bigint unsigned | 0       |

### account_id

The account from [accounts](/Wiki/database/logon/accounts/ "Accounts").

### achievement

Achievement id from the client data. Only achievements with the account flag (0x20000) are stored here, the others stay in [character_achievement](/Wiki/database/characters/character_achievement/ "Character achievement").

### date

Unix time of the completion. When several realms complete the achievement the earliest date stays.