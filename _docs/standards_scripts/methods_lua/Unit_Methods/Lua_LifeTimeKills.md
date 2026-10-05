---
title: Lua_LifeTimeKills
type: unit_methods
layout: single_markdown
position: 127
---

# Lua LifeTimeKills

## Description

Modifies the number of lifetime honorable kills for a player.

```lua
LifeTimeKills(int kills, string check) -- is a player-only method.
```

- **kills**: The number of kills to modify.
- **check**: Specifies how the number of kills should be modified. Possible values:

Value   | Description
------- | ----------------------------------------------------------------------------------------
"add"   | Adds the specified number of kills to the player's current total.
"del"   | Removes the specified number of kills from the player's current total.
"set"   | Sets the player's total kills to the specified number, regardless of the previous total.

## Usage/Example

To add 500 kills to a player's honorable kill count:

```lua
player:LifeTimeKills(500, "add")
```

To remove 1337 kills from a player's honorable kill count:

```lua
player:LifeTimeKills(1337, "del")
```

To set a player's honorable kill count to 5318008:

```lua
player:LifeTimeKills(5318008, "set")
```
