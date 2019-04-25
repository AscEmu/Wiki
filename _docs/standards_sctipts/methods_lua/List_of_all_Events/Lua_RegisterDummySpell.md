---
title: Lua_RegisterDummySpell
type: standards_lua
layout: single_markdown
position: 1
---

# Lua RegisterDummySpell

## Description

Returns a function after casting a registered spell with a dummy effect.

## Usage/Example

Registering a spell with a "dummy","script effect" or "send event" effect:

```
RegisterDummySpell(18282, DummySpell)
```

## Function example:

```
function DummySpell(spellIndex, pSpell)
   print(pSpell:GetEntry()) -- 18282
end
```
