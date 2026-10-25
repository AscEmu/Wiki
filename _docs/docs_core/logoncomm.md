---
title: LogonComm
type: CoreGroup
layout: single_markdown
position: 5
---

# LogonComm
LogonComm is the connection between the world servers (realms) and the logonserver. Every world server opens one TCP connection to the logonserver and asks it for everything that belongs to an account instead of reading the logon database itself.

## Why

One logonserver serves many realms, also realms of different client versions (for example MoP, The War Within and Midnight at the same time). The data is split by owner:

* The logonserver owns the account data: accounts, bans, mutes, permissions, the Battle.net sessions and account wide data like the [battle pet journal](/Wiki/database/logon/battle_pets/ "Battle pets").
* Every world server owns its character and world database.

A world server never opens the logon database, the logonserver never opens a character database. Data of the other side only travels over LogonComm. This gives us:

* **One owner per table.** Only the logonserver writes account data, so it can check and order changes that several realms make at the same time. Example: when two realms of one account learn a battle pet at the same moment, the logonserver hands out the pet ids and checks the limits under one lock, two realms can not produce the same id.
* **No logon database credentials on realm hosts.** A world server only needs the address of the logonserver and the realm password.
* **A fixed set of requests.** A realm can only do what the protocol offers, every request is visible in one place and is written to [logoncomm_log](/Wiki/database/logon/logoncomm_log/ "LogonComm log").
* **Version independent data.** The logonserver stores raw values (e.g. a battle pet species id), every realm interprets them with its own client data and hides what its version does not know without changing it.

## Connection

1. The world server connects to the **ServerPort** of the logonserver (logon.conf section **Listen**, default 8093). The logonserver accepts only addresses listed in **AllowedIPs** (logon.conf section **LogonServer**). Account changes (LRCMSG_ACCOUNT_DB_MODIFY_REQUEST: bans, mutes, ip bans, passwords, new accounts) are only accepted from addresses in **AllowedModIPs**.
2. The world server sends LRCMSG_AUTH_REQUEST with the SHA1 hash of its **RemotePassword** (world.conf section **LogonServer**) and its realm id. The logonserver compares it with the hash of **password** in [realms](/Wiki/database/logon/realms/ "Realms") and answers with LRSMSG_AUTH_RESPONSE.
3. From now on both sides encrypt every packet with RC4, the password hash is the key.
4. The world server registers its realm (LRCMSG_REALM_REGISTER_REQUEST: id, name, address, flags, icon, time zone, population, lock, build). The logonserver sets the realm online and asks for the character count of every account (LRSMSG_ACC_CHAR_MAPPING_REQUEST) for the realm list.
5. The world server pings every 15 seconds, the logonserver asks for the population of the realm regularly. A realm without pings is set offline.

## Packet format

Every packet starts with a header of 6 bytes: the opcode (uint16) and the size of the body (uint32, big endian). After the authentication header and body are RC4 encrypted. The body uses the ByteBuffer serialisation of the core (little endian numbers, zero terminated strings).

## Opcodes

LRCMSG opcodes are sent by the world server, LRSMSG opcodes by the logonserver. The enum lives in **src/shared/LogonCommDefines.hpp**.

Opcode | Name                             | Direction     | Purpose
------ | -------------------------------- | ------------- | -----------------------------------------------------------------------
0x001  | LRCMSG_REALM_REGISTER_REQUEST    | world → logon | register a realm
0x002  | LRSMSG_REALM_REGISTER_RESULT     | logon → world | result of the registration
0x003  | LRCMSG_ACC_SESSION_REQUEST       | world → logon | session key of an account (clients up to 5.x)
0x004  | LRSMSG_ACC_SESSION_RESULT        | logon → world | session key, account id, GM flags, account flags, language, mute
0x005  | LRCMSG_LOGON_PING_STATUS         | world → logon | keep alive
0x006  | LRSMSG_LOGON_PING_RESULT         | logon → world | answer to the ping
0x007  | LRCMSG_BUILD_REQUEST             | world → logon | client build the address logged in with
0x008  | LRSMSG_BUILD_RESULT              | logon → world | the build
0x009  | LRCMSG_AUTH_REQUEST              | world → logon | authenticate the world server
0x00A  | LRSMSG_AUTH_RESPONSE             | logon → world | result of the authentication
0x00B  | LRSMSG_ACC_CHAR_MAPPING_REQUEST  | logon → world | request the character count of all accounts
0x00C  | LRCMSG_ACC_CHAR_MAPPING_RESULT   | world → logon | character count of all accounts (compressed)
0x00D  | LRCMSG_ACC_CHAR_MAPPING_UPDATE   | world → logon | character count of one account changed
0x00E  | LRSMSG_SEND_ACCOUNT_DISCONNECT   | logon → world | disconnect an account
0x00F  | LRCMSG_LOGIN_CONSOLE_REQUEST     | world → logon | check a remote console login
0x010  | LRSMSG_LOGIN_CONSOLE_RESULT      | logon → world | result of the console login
0x011  | LRCMSG_ACCOUNT_DB_MODIFY_REQUEST | world → logon | ban, mute, ip ban, password change, account creation
0x012  | LRSMSG_ACCOUNT_DB_MODIFY_RESULT  | logon → world | result of the change
0x013  | LRSMSG_REALM_POPULATION_REQUEST  | logon → world | request the population
0x014  | LRCMSG_REALM_POPULATION_RESULT   | world → logon | population of the realm
0x015  | LRCMSG_ACCOUNT_REQUEST           | world → logon | check an account or get its id
0x016  | LRSMSG_ACCOUNT_RESULT            | logon → world | the account information
0x017  | LRCMSG_ALL_ACCOUNT_REQUEST       | world → logon | id, name and GM flags of all accounts
0x018  | LRSMSG_ALL_ACCOUNT_RESULT        | logon → world | the account list
0x019  | LRSMSG_PENDING_WORLD_SESSION     | logon → world | Battle.net session (6.x and later) announced before the client connects
0x01A  | LRCMSG_BATTLE_PET_REQUEST        | world → logon | load the battle pet journal of an account
0x01B  | LRSMSG_BATTLE_PET_RESULT         | logon → world | pets and battle slots of the account
0x01C  | LRCMSG_BATTLE_PET_SAVE           | world → logon | changed and released pets, battle slots
0x01D  | LRCMSG_BATTLE_PET_ADD            | world → logon | new pet, the logonserver checks the limits and hands out the id
0x01E  | LRSMSG_BATTLE_PET_ADD_RESULT     | logon → world | the new pet with its id or the reason it was refused

## Threads

The answers of the logonserver arrive on the network thread of the LogonComm connection, not on the thread of the session they belong to. A handler finds the session by account (**sWorld.getSessionByAccountId**) and only stores the result there. The session sends what changed to its client in its own update (e.g. the battle pet journal and newly added pets). Nothing that touches the player or the map runs on the LogonComm thread.

## Logging

The logonserver writes every request of a realm to [logoncomm_log](/Wiki/database/logon/logoncomm_log/ "LogonComm log"): time, realm, address, opcode, account and a short detail. The pings and the population answers are skipped. Passwords are never logged.

## Adding a message

1. Add the opcode pair to **LogonRealmOpcodes** in **src/shared/LogonCommDefines.hpp** in front of **LRMSG_MAX_OPCODES** and its name to **getLogonRealmOpcodeName**.
2. Add the handler at the same position to the handler arrays of **LogonCommServerSocket::HandlePacket** (logonserver) and **LogonCommClientSocket::HandlePacket** (world server), NULL on the side that only sends it.
3. Put serialisation both sides share into a header in **src/shared** (see **LogonCommBattlePets.hpp**).
4. In the logonserver handler set **m_logAccountId** and **m_logDetail**, the row in logoncomm_log is written after the handler.
5. Raise the logon database version when the message needs new tables.