---
title: Lua_RegisterTimedEvent
type: standards_lua
layout: single_markdown
position: 9
---

# Lua RegisterTimedEvent

## Description

Registers a timed event.

## Syntax

```
hndEvent = RegisterTimedEvent(string FunctionName, uint Delay, uint Repeats [, optionalParamtersToFunction ...])
```

Returns a reference to the registered event.

------- | ----------
Delay   | Time in ms
Repeats | 0 = repeats endless, > 1 no. of repeats

## Usage/Example

```
function Player_Enters_World(event, pPlayer)
  pPlayer:SendBroadcastMessage("Welcome "..pPlayer:GetName())
  RegisterTimedEvent("Player_Enters_World_Text1", 5000, 1, pPlayer)
end

function Player_Enters_World_Text1(pPlayer)
  pPlayer:SendBroadcastMessage("Now it's 5 seconds later :-)")
end

RegisterServerHook(19, "Player_Enters_World") -- SERVER_HOOK_ENTER_WORLD_2
```

Be careful by passing units with this function. May they are valid only for a short period. Refering to invalid units may crash your server.
{: .info }