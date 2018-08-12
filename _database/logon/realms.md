---
title: realms
type: logondb
category: R
layout: single_markdown
---

# realms
This table contains the information about connected and allowed realms.

## Structure

Field                                     | Type         | Default   | Comment
----------------------------------------- | ------------ | --------- | -------
[id](#id)                                 | int(10)      |           | key
[status](#status)                         | tinyint(1)   |           |        
[status_change_time](#status_change_time) | timestamp()  | On Update |        

### id

Unique realm id.

### status

1 = online, 0 = offline. The status gets checked every 2 minutes based on the received ping.

### status_change_time

The timestamp of the changed status.