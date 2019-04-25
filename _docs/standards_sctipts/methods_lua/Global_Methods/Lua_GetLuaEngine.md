---
title: Lua_GetLuaEngine
type: standards_lua
layout: single_markdown
position: 2
---

# Lua GetLuaEngine

## Description

This returns the ALE (AscEmu LuaEngine) you are currently running.

## Syntax

```
GetLuaEngine()
```

## Usage/Example

```
if GetLuaEngine() ~= "ALE" then
  print("ALE (AscEmu LuaEngine) is not installed. This script may not function correctly.")
  print("ALE comes with AscEmu by default.")
else
  print("ALE (AscEmu LuaEngine) successful detected")
end
```
