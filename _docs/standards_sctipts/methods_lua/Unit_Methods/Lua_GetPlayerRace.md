---
title: Lua_GetPlayerRace
type: standards_lua
layout: single_markdown
position: 45
---

# Lua GetPlayerRace

## Description

Used to find the targeted player's race, if a target is present, else returns false. Player only command.

## Return values

```
1:    Human
3:    Dwarf
4:    Night Elf
7:    Gnome
11:   Draenei


2:    Orc
5:    Undead
6:    Tauren
8:    Troll
10:   Blood Elf
```

## Usage/Example

```
function NPC_Gossip(Unit, Event, player)
  local race = player:GetPlayerRace()
  if (race == 1) then
    Unit:SendChatMessage(14, 0, "I'm Human")
  end
end
```
