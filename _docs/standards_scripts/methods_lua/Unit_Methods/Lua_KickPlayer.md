---
title: Lua_KickPlayer
type: unit_methods
layout: single_markdown
position: 125
---

# Lua KickPlayer

## Usage/Example

```
function SUBMENUExample(unit, event, player, id, intid, code)
if (intid == 1) and (Code == "cake") then
  player:Teleport(mapid, x, y, z, o)
  player:GossipComplete()
else
  player:SendBroadcastMessage("|cFFFF0000[NOTICE]:|r "..Code.." Is not the correct password.")
  player:KickPlayer(0) -- kicks player =)
  player:GossipComplete()
end
end
```
