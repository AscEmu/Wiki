---
title: Lua_LifeTimeKills
type: unit_methods
layout: single_markdown
position: 127
---

# Lua LifeTimeKills

## Description

Modifies the amount of lifetime honorable kills a player has.

LifeTimeKills(int kills, string check) a player only command.         

kills is how many kills you would like to modify by.         

check is how you would like to modify. Possible values:              

----- | ---------- 
"add" | Adds the amount of kills to the current number of kills the player has.
"del" | Removes the amount of kills from the current number of kills the player has.
"set" | Sets the number of kills to what you specify, regardless of how many kills the player had previously.

## Usage/Example

If you want to add 500 kills to a player's honorable kills:

```
player:LifeTimeKills(500, "add")
```

If you want to remove 1337 kills from a player's honorable kills:

```
player:LifeTimeKills(1337, "del")
```

If you want to set a player's honorable kills to 5318008

```
player:LifeTimeKills(5318008, "set")
```
