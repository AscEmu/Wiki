---
title: Lua_GetHealthPct
type: standards_lua
layout: single_markdown
position: 26
---

# Lua GetHealthPct

## Description

This method is used to find the health percentage of the unit when the method is called. Will return a numeric value and can be used on both units and players.

## Syntax

```
Unit:GetHealthPct()
player:GetHealthPct()
```

## Usage/Example

```
function NPCScript(Unit)
    if Unit:GetHealthPct() >= 50 then
        Unit:CastSpellOnTarget(5)
    end
end
```