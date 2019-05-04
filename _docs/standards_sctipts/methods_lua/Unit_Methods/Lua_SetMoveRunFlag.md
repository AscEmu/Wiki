---
title: Lua_SetMoveRunFlag
type: unit_methods
layout: single_markdown
position: 88
---

# Lua SetMoveRunFlag

## Description

Will enable running or walking. If the unit is not moving no effect is shown, any time it tries to move will be running if parameter passed is 1 or walking if parameter run is zero.

## Syntax

```
SetMoveRunFlag(run)
```

## Usage/Example

```
:SetMoveRunFlag(1)
:SetMoveRunFlag(0)
```
