---
title: Lua_CreateCustomWaypointMap
type: standards_lua
layout: single_markdown
position: 117
---

# Lua CreateCustomWaypointMap

## Description

Creates a waypoint map. If one exists already, then it deletes the previous waypoint map and uses the one created with this function. This waypoint map will not be overridden by the [CreateWaypoint(x, y, z, o, wait, flags, model)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_CreateWaypoint) function.

## Syntax

A waypoint map is needed for the unit to use waypoints. Each map is bound to the unit, so if you want to have the same waypoint on two different units, you will have to create the waypoint twice (once for each unit). For Lua purposes, the waypoint id of the created waypoint is the size of the waypoint map at the time of creation plus 1.
