---
title: Lua_SendChatMessageToPlayer
type: unit_methods
layout: single_markdown
position: 141
---

# Lua SendChatMessageToPlayer

## Description

This method is used to send a chat message to the or a player. Only the specified player can see the message. This method is often used to avoid spamming npc's. (Since only the specified player can see it)

## Syntax

```
:SendChatMessageToPlayer(type, language, "message", name)
```

## Usage/Example

```
pUnit:SendChatMessageToPlayer(type, language, "message", pPlayer)
*unit:SendChatMessageToPlayer(type, language, "message", pPlayer)
pPlayer:SendChatMessageToPlayer(type, language, "message", player-name)
```

### List of Types

------------- | ---------- 
Value         | Description
0             | CHAT_MSG_SYSTEM
1             | CHAT_MSG_SAY
2             | CHAT_MSG_PARTY
3             | CHAT_MSG_RAID
4             | CHAT_MSG_GUILD
5             | CHAT_MSG_OFFICER
6             | CHAT_MSG_YELL
7             | CHAT_MSG_WHISPER
9             | CHAT_MSG_WHISPER_INFORM
10            | CHAT_MSG_EMOTE
11            | CHAT_MSG_TEXT_EMOTE
23            | CHAT_MSG_AFK
24            | CHAT_MSG_DND
25            | CHAT_MSG_IGNORED
26            | CHAT_MSG_SKILL
27            | CHAT_MSG_LOOT
28            | CHAT_MSG_MONEY

### List of Languages

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

The following example will make an npc say something when you gossip with him or her.

```
function OnGossip(pUnit, event, pPlayer)
pUnit:SendChatMessageToPlayer(12, 0, "Hey hello there player!", pPlayer)
pUnit:GossipCreateMenu(100, pPlayer, 0)
pUnit:GossipMenuAddItem(7, "Menu row 1", 1, 0)
pUnit:GossipMenuAddItem(7, "Menu row 2", 2, 0)
pUnit:GossipSendMenu(pPlayer)
end
RegisterUnitGossipEvent(npc-id, 1, "OnGossip")
```

The following example will make you say something to the closest player to you when you log in.

```
function OnEnterWorld(event, pPlayer)
if(pPlayer:IsGm() == true) then
pPlayer:SendChatMessageToPlayer(12, 0, "I'm a Gm and I logged in!", pPlayer:GetClosestPlayer())
end
end
RegisterServerHook(4, "OnEnterWorld")
```