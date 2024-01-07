---
title: Lua_GetEntry
type: gameobject_methods
layout: single_markdown
position: 1
---

# Lua GetEntry

## Description

Returns the entry ID of the unit. Works for NPC as well as for GO.        

## Syntax

```
entry = gameObject:GetEntry()
```

## Usage/Example

```
function CheckGO(gameObject)
  entry = gameObject:GetEntry()
    if(entry==101) then
      -- do stuff
    end
  end
end
```
