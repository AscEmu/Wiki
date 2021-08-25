---
title: Lua_RemoveFromWorld
type: gameobject_methods
layout: single_markdown
position: 4
---

# Lua RemoveFromWorld

## Syntax

```
pGameObject:RemoveFromWorld()
```

Removes a GameObject from the world. It doesn't delete it in the database.

## Usage/Example

```
PerformIngameSpawn(2, 179697, 0, -13203, 277, 22, 4.18, 100, 0)
--
-- ... do something
--
local pChest = pUnit:GetGameObjectNearestCoords(-13203, 277, 22, 179697) 
pChest:RemoveFromWorld()
```