---
title: script_spline_waypoints
type: worlddb
category: C
layout: single_markdown
---

# script_spline_waypoints
This table contains spline_chain_waypoints for creatures to move on.

## Structure

Field                                                                                                      | Type       | Default | Comment
---------------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[entry](#entry)                                                                                            | int(0)     | 0       |     primary   
[chainId](#chainId)                                                                                        | smallint(0)| 0       |     primary
[splineId](#splineId)                                                                                      | tinyint(0) | 0       |     prinary
[wpId](#wpId)                                                                                              | tinyint(0) | 0       |     primary
[x](#position_x_z)                                                                                         | float(0)   | 0.00    |        
[y](#position_x_z)                                                                                         | float(0)   | 0.00    |        
[z](#position_x_z)                                                                                         | float(0)   | 0.00    |           

### entry

This is a unique ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature Entry").

### chainId

This is the Chain ID

### splineId

current SplineId

### wpId

current waypoint Id

### position_x_z

Position x, y, z where creature move to.

...