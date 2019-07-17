---
title: Lua_PlayerSendChatMessage
type: unit_methods
layout: single_markdown
position: 130
---

# Lua PlayerSendChatMessage

## Description

The player sends a message using the type and language given.

Note: If your message uses special characters like öäü (German Umlaute) etc. you have to save your Lua script in UTF-8 without BOM.

## Syntax

```
pPlayer:PlayerSendChatMessage(int Type, int Language, string Message)
```

### Type Values

(../world/Chat/ChatDefines.hpp)

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

Using saved variables: 
When the player types ".test" (without quotions) in the chat it will say: "You are not prepared!" 
It works a bit like macro's this way.

```
CHAT_MSG_SAY = 1
LANG_UNIVERSAL = 0
SERVER_HOOK_CHAT = 16
 
function Test(event, pPlayer, strMessage, Type, Language, Misc)
  if(strMessage == ".test") then
    pPlayer:PlayerSendChatMessage(CHAT_MSG_SAY, LANG_UNIVERSAL, "You are not prepared!") 
    return false
  end
end
 
RegisterServerHook(SERVER_HOOK_CHAT, "Test")
```

You can make the player shout something when a create enters combat...

```
function KoboldVermin_OnEnterCombat(pUnit, Event) 
  pPlayer:PlayerSendChatMessage(12, 0, "I take your candle!")
end

RegisterUnitEvent(6, 1, "KoboldVermin_OnEnterCombat") -- On Enter Combat event for unit with ID 6 (Kobold Vermin)
```

Another good example which from: Lua Sample Scripts

```
function KoboldVermin_OnEnterCombat(pUnit, Event) 
  if math.random() > 0.5 then -- math.random() will return a float between 0 and 1 (not including 1).
    pUnit:SendChatMessage(11, 0, "You no take candle!") -- 11 is monster say, and 0 is universal language
  else 
    pUnit:SendChatMessage(11, 0, "Yiieeeeeee! Me run!") -- 11 is monster say, and 0 is universal language
  end 
end
 
RegisterUnitEvent(6, 1, "KoboldVermin_OnEnterCombat") -- On Enter Combat event for unit with ID 6 (Kobold Vermin)
```

This is a script that goes in action when  start fighting Kobold Vermin (Human starting place)!
When you attack the Kobold it will shout something random.
Once the Kobold reaches 40% or less hp we make it say "You won't defeat Kobold !!!" after that the attacker (you) will yell: "Yes I will!"

```
function KoboldVermin_OnEnterCombat(pUnit, Event) 
	KoboldRND = math.random(1, 2)
	-- math.random(X, X) will return a random number between the two #'s you put in the ()'s
	if KoboldRND == 1 then
		pUnit:SendChatMessage(12, 0, "You no take candle!")
		-- 12 is Monster Say, and 0 is universal language
	end
	if KoboldRND == 2 then
		pUnit:SendChatMessage(12, 0, "Kobold attack!")
	end 
end
 
function KoboldVermin_CheckDamageTaken(pUnit, event, pAttacker, pAmount)
    if(HasSaid == nil) then
        HasSaid = 0
    end
	if(PlrSaid == nil) then
	    PlrSaid = 0
	end
	if(pUnit:GetHealthPct() <= 40 and HasSaid == 0) then
        -- we check if the kobold has 20% hp or less and check if HasSaid is set to 0
        pUnit:SendChatMessage(12, 0, "You won't defeat Kobold !!! ")
        HasSaid = 1
	elseif(pUnit:GetHealthPct() <= 40 and HasSaid == 1 and PlrSaid == 0) then
        pAttacker:PlayerSendChatMessage(6, 0, "Yes I will!")
		PlrSaid = 1
    end
end
 
RegisterUnitEvent(6, 1, "KoboldVermin_OnEnterCombat") -- On Enter Combat event for unit with ID 6 (Kobold Vermin)
RegisterUnitEvent(6, 23, "KoboldVermin_CheckDamageTaken") -- We check Kobold Vermin's hp every time he takes damage
```
