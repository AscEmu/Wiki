---
title: Lua_CreateWaypoint
type: standards_lua
layout: single_markdown
position: 118
---

# Lua CreateWaypoint

## Description

If there is no waypoint map bound to this unit, then it creates one. Each waypoint created with this has the index of the size of the waypoint map plus one. So the first waypoint you create will start at 1, the next one that the script comes across for this unit will be 2.

## Syntax
:CreateWaypoint(x, y, z, o, wait time, flags, model id)

x, y, z, and o are standard coordinates for where you would like the waypoint to be.           
wait time is how long the unit will wait before the next move, in milliseconds.               
flags are 768 (fly) 256 (run) or 0 (walk).                
model id is what you want the unit to look like on the way to this waypoint. 0 will show the current model.             

## Usage/Example

Works well with :MoveToWaypoint(waypointid) and the server hook for reaching a waypoint (19). You can also specifically create your own waypoint map with :CreateCustomWaypointMap().

```
function OnReachWaypoint(pUnit, Event, WaypointId)
  if (WaypointId ==  1) then
    pUnit:MoveToWaypoint(2)
  end
  if (WaypointId == 2) then
    pUnit:MoveToWaypoint(1)
  end
end
 
function OnLoad(pUnit, Event)
  pUnit:CreateWaypoint(14, 25.12, 13, 2, 1000, 256, 0)   -- Will be waypoint 1
  pUnit:CreateWaypoint(567, 2452, 16, 75, 5600, 768, 0)  -- Will be waypoint 2
end
 
RegisterUnitEvent(<creatureid>, 18, "OnLoad")
RegisterUnitEvent(<creatureid>, 19, "OnReachWaypoint")
```
