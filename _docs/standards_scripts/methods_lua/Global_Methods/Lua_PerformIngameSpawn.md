---
title: Lua_PerformIngameSpawn
type: global_methods
layout: single_markdown
position: 10
---

# Lua PerformIngameSpawn

## Description

## Syntax

```
PerformIngameSpawn(1, entry id, map, x, y, z, o, faction, duration [, equip1, equip2, equip3, instance id, save]) -- 1 = Unit
```

## Syntax

```
PerformIngameSpawn(2, entry id, map, x, y, z, o, scale, duration) -- 2 = GameObject
```

------------- | ----------
spawntype     | 1 = Unit, 2 = GameObject
scale         | value in percent (f.ex. 100)
duration      | value in seconds, 0 = forever

## Usage/Example

Puts an eastergg where the player stands.

```
local x,y,z,o = pPlayer:GetLocation()
local m = pPlayer:GetMapId()
PerformIngameSpawn(2, 113768, m, x, y, z, o, 100, 0)
```

This command doesn't write anything into the db. This means if your reload the world db these objects don't respawn. Use WorldDBQuery(sql) to write into the database instead.
