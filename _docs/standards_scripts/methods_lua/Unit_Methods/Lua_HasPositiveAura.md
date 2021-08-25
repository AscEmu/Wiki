---
title: Lua_HasPositiveAura
type: unit_methods
layout: single_markdown
position: 97
---

# Lua HasPositiveAura

## Description

HasPositiveAura() is similar to HasAura() but it can show you if the spell is positive or negative.

## Usage/Example

```
if plr:HasPositiveAura(50220) == true then
  player:SendBroadcastMessage("The spell is positive.")
else
  player:SendBroadcastMessage("The spell is negative.")
end
end
```

This script would show you if the spell 50220 is positive or negative on the player.

