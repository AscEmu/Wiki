---
title: Lua_GetFaction
type: unit_methods
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
4:    Night Elf
115:  Gnome
1629: Draenei


2:    Orc
5:    Undead
6:    Tauren
116:  Troll
1610: Blood Elf
```

## Usage/Example

```
function ReturnFaction(pUnit)
  pUnit:SendChatMessage(12, 0, "Hello my faction is: "..pUnit:GetFaction().."!")
end
```