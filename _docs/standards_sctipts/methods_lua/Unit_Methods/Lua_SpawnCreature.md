---
title: Lua_SpawnCreature
type: standards_lua
layout: single_markdown
position: 142
---

# Lua SpawnCreature

## Syntax

```
pSpawnedUnit = pUnit:SpawnCreature(entry, x, y, z, o, faction, duration [, weaponslot1, weaponslot2, weaponslot3, phase, save])
```

weaponslot1 - slot3, phase and save are optional parameters save: Saves in database

Returns: An object of the spawned unit.


## Usage/Example

```
function OnPitQuestAccept(pUnit, event, pPlayer)
  if (pUnit ~= nil)
    pUnit:SpawnCreature(420032, pPlayer:GetX(), pPlayer:GetY(),pPlayer:GetZ(), pPlayer:GetO(), 14, 300000, 35, 0, 0)
  end
end
```
