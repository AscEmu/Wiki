---
title: account_achievement_progress
type: logondb
category: A
layout: single_markdown
---

# account_achievement_progress
This table contains the criteria progress of the account wide achievements of every account (5.x and later).

## Structure

Field                     | Type            | Default | Comment
------------------------- | --------------- | ------- | -------
[account_id](#account_id) | int unsigned    |         | key
[criteria](#criteria)     | int unsigned    |         | key
[counter](#counter)       | int unsigned    | 0       |
[date](#date)             | bigint unsigned | 0       |

### account_id

The account from [accounts](/Wiki/database/logon/accounts/ "Accounts").

### criteria

Criteria id from the client data (the numbering of 5.4 and later). Criteria with a timer are not stored, their progress ends with the timer.

### counter

The progress of the criteria. When several realms save the criteria the highest counter stays.

### date

Unix time of the last raise of the counter.