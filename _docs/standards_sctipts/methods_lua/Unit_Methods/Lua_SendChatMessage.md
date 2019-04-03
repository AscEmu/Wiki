---
title: Lua_SendChatMessage
type: standards_lua
layout: single_markdown
position: 140
---

# Lua SendChatMessage

## Description

The NPC sends a message using the type and language given. (Doesn't work for players)

Note: If your message uses special characters like öäü (German Umlaute) etc. you have to save your Lua script in UTF-8 without BOM.

## Syntax

```
pUnit:SendChatMessage(Type, Language, string Message)
```

### Type Values

(../src/world/Chat/ChatDefines.hpp)

------------- | ---------- 
Value         | Description
8             | CHAT_MSG_WHISPER_MOB
12            | CHAT_MSG_MONSTER_SAY
13            | CHAT_MSG_MONSTER_PARTY
14            | CHAT_MSG_MONSTER_YELL
15            | CHAT_MSG_MONSTER_WHISPER
16            | CHAT_MSG_MONSTER_EMOTE

### Language Values

------------- | ---------- 
Value         | Description
0             | LANG_UNIVERSAL
1             | LANG_ORCISH
2             | LANG_DARNASSIAN
3             | LANG_TAURAHE
6             | LANG_DWARVISH
7             | LANG_COMMON
8             | LANG_DEMONIC
9             | LANG_TITAN
10            | LANG_THELASSIAN
11            | LANG_DRACONIC
12            | LANG_GNOMISH
13            | LANG_TROLL
14            | LANG_GUTTERSPEAK
33            | LANG_DRAENEI

## Usage/Example

```
-- This is dummy code, just to get the idea!
 
-- Specify npc
local TalkToMe_ID = 6000051
 
-- Gossip
function TalkToMe(pUnit, event, pPlayer, id, intid, code, pMisc)
   	pUnit:SendChatMessage(12, 0, "You are not prepared!")
end
 
-- Register
RegisterUnitGossipEvent(TalkToMe_ID, 1, "TalkToMe")
```