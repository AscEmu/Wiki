---
title: Lua_FullCastSpell
type: unit_methods
layout: single_markdown
position: 122
---

# Lua FullCastSpell

## Description

Makes the unit cast a spell with cast time on itself using the spell ID given.

## Syntax

```
FullCastSpell(Spell_IDs) -- Spell_IDs are located in your spells.dbc. You can also get your Spell_IDs from wowhead!
```

## Usage/Example

```
function castSpell(pUnit)
  pUnit:FullCastSpell(12324)
end
```
