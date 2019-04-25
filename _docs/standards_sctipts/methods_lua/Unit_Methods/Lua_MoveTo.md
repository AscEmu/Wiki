---
title: Lua_MoveTo
type: standards_lua
layout: single_markdown
position: 128
---

# Lua MoveTo

## Description

Used to move an NPC to a certain Location (the specified coordinates)

## Syntax

```
 MoveTo(X Coordinates, Y Coordinates, Z coordinates, Orientation) 
```

## Usage/Example

```
function Kobold_Run(pUnit, event)
  if pUnit:GetHealthPct() < 1 then
    pUnit:MoveTo(3211.36272, -11136.46187, 2372.23267, 3.4567)
  end
end
```

The examle checks if its health is lower then one, and if so, it then moves to another location, specified in the MoveTo parameters.

Those GPS Locations are ***Example***. That Script will not work in every location.