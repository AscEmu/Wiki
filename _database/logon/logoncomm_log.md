---
title: logoncomm_log
type: logondb
category: L
layout: single_markdown
---

# logoncomm_log
This table contains one row for every request a realm sends to the logonserver over [LogonComm](/Wiki/docs/docs_core/logoncomm "LogonComm"), to trace which realm did what and when.

## Structure

Field                       | Type              | Default | Comment
--------------------------- | ----------------- | ------- | -------------------
[id](#id)                   | bigint unsigned   |         | key, auto increment
[time](#time)               | datetime          |         |
[realm_ids](#realm_ids)     | varchar(32)       | ''      |
[remote_ip](#remote_ip)     | varchar(45)       | ''      |
[opcode](#opcode)           | smallint unsigned | 0       |
[opcode_name](#opcode_name) | varchar(40)       | ''      |
[account_id](#account_id)   | int unsigned      | 0       |
[detail](#detail)           | varchar(255)      | ''      |

### id

Running number of the row.

### time

Time the logonserver received the request.

### realm_ids

The [realms](/Wiki/database/logon/realms/ "Realms") registered on the connection, comma separated. Empty before the realm registered (authentication, register request).

### remote_ip

Address of the world server.

### opcode

The LogonComm opcode of the request, see [LogonComm](/Wiki/docs/docs_core/logoncomm "LogonComm") for the list.

### opcode_name

Name of the opcode, e.g. LRCMSG_BATTLE_PET_ADD. UNKNOWN for opcodes the logonserver does not know.

### account_id

The account the request is about, 0 when it names none or the account does not exist.

### detail

What the request did, e.g. **species 44 as pet 1**, **save pet 1, 3 slots**, **ban account 'TEST' 3600 reason 'spam'**. Passwords are never written. Requests from connections that are not authenticated and unknown opcodes are logged as well.

The pings and the population answers of the realms are not logged, they arrive every few seconds from every realm.