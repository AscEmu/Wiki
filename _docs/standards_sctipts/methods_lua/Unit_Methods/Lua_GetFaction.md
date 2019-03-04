---
title: Lua_GetFaction
type: standards_lua
layout: single_markdown
position: 19
---

# Lua GetFaction

## Description

Returns the numerical value representing the units faction.

## Return values

```
1:    Human
3:    Dwarf
4:    Nightelf
115:  Gnom
1629: Draenei


2:    Orc
5:    Undead
6:    Taur
116:  Troll
1610: Blood Elf
```

## Usage/Examples

```
function ReturnFaction(pUnit)
	pUnit:SendChatMessage(12, 0, "Hello my faction is: "..pUnit:GetFaction().."!")
end
```