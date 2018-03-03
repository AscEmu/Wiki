---
title: ai_threattospellid
type: worlddb
category: A
layout: single_markdown
---

# ai_threattospellid

Modifies threat > creature per spell.

## Structure

Field                                                                            | Type     | Default | Comment
-------------------------------------------------------------------------------- | -------- | ------- | -------
[spell](#spell)     | int(11)  | 0       |        
[mod](#mod)         | int(11)  | 0       |        
[modcoef](#modcoef) | float(0) | 1       |        

### spell

Spell ID

### mod

The threat value that this spells should add to the caster (or take away if it is negative).

### modcoef

...