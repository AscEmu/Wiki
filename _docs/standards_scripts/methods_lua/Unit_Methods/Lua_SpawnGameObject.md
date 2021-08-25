---
title: Lua_SpawnGameObject
type: unit_methods
layout: single_markdown
position: 143
---

# Lua SpawnGameObject

## Description

Will spawn the game object that match the specified entry id.

If the spawned object is moved by a GM with a command ingame, the game object will not despawn after the duration.
{: .success }

## Syntax

```
pGameObject = pUnit:SpawnGameObject(uint32 Entry, float X, float Y, float Z, float O, uint32 Duration, float Scale [, uint32 Phase, int (bool) Save])
```

------------- | ---------- 
pUnit         | Unit that will spawn the object.
Entry         | Entry of the spawned gameobject.
X, Y, Z and O | Coordinates and orientation of the object.
Duration      | Defines how long in miliseconds the gameobject will exist in the world before despawned. Use 0 for infinte.
Scale         | Size of the game object in percent
Phase         | The phase the gameobject is spawned to. Optional, spawn in phase 1 if not set.
Save          | Defines if the gameobject is saved to database. Use 1 to save and 0 not to save. Optional, wont save if not set.

The method will return the spawned object. If no object was spawned, returns nil. 

## Usage/Example

```
local function NPC_OnDeath(pUnit, event, pPlayer)
  -- Spawn 2 gameobjects, One phased. One is at the last player target and one is at the killed NPC.
  local x,y,z,o = pUnit:GetLocation()
  pUnit:SpawnGameObject(101779, x, y, z, o, 60000, 100)
  local x,y,z,o = pPlayer:GetLocation()
  local Object = pUnit:SpawnGameObject(101779, x, y, z, o, 60000, 100, 2, 0)
  if (Object) then -- Check that an object was spawned
    pPlayer:SendAreaTriggerMessage("Spawned an object to your location")
  end
end
 
RegisterUnitEvent(123, 4, NPC_OnDeath)
```
