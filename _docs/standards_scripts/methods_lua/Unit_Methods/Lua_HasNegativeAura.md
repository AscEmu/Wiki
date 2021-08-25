---
title: Lua_HasNegativeAura
type: unit_methods
layout: single_markdown
position: 96
---

# Lua HasNegativeAura

## Description

HasNegativeAura() is similar to :HasAura() but with :HasNegativeAura() or :HasPositiveAura you can know if a spell is negative or positive on a player or a unit.

## Usage/Example

```
if player:HasNegativeAura(15007) == true then                                  -- 15007 = Resurrection Sickness
player:SendBroadcastMessage("You are afflicted of Resurrection Sickness.")
```

This script would check of the player has Resurrection Sickness and if it's true it would say it to the player.
