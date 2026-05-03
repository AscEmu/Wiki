---
title: spell_coefficient_override
type: worlddb
category: S
layout: single_markdown
---

# spell_coefficient_override

This table overrides scaling coefficients used by the server for individual spell effects.

It allows database developers to correct or adjust scaling values when the coefficients provided by DBC are incorrect or missing. 

Overrides can be applied per spell, per effect index, and per client build range.

If a record exists in this table and the current server build falls within the specified build range, the server will use the overridden values instead of the default scaling values.

## Structure

Field                                         | Type         | Default | Comment        
--------------------------------------------- | ------------ | ------- | ---------------
[spell_id](#spell_id)                         | int unsigned | 0       | Spell entry ID.
[effectIndex](#effectIndex)                   | tinyint      | 0       | Spell effect index.
[min_build](#min_build)                       | int unsigned | 12340   | Minimum client build this override applies to.
[max_build](#max_build)                       | int unsigned | 12340   | Maximum client build this override applies to.
[sp_coefficient](#sp_coefficient)             | float        | NULL    | Spell Power scaling coefficient override.
[ap_coefficient](#ap_coefficient)             | float        | NULL    | Attack Power scaling coefficient override.
[flags](#flags)                               | tinyint      | 0       | Override behavior flags.
[description](#description)                   | varchar(100) | NULL    | Developer description.


### spell_id

The entry ID of the spell from Spell.dbc.

This identifies which spell the coefficient override applies to.


### effectIndex

Specifies which spell effect the override applies to.

Spells may contain multiple effects (Effect[0], Effect[1], Effect[2]).
This field allows overriding coefficients for a specific effect.

Value                                         | Meaning
--------------------------------------------- | ------------
0                                             | First effect
1                                             | Second effect
2                                             | Third effect


### min_build

Build number this override is valid.


### max_build

Max Build number this override is valid for.


### sp_coefficient

Overrides the Spell Power scaling coefficient for the specified spell effect.

This value defines how much Spell Power contributes to the final damage or healing.

If the value is:

```
NULL
```


the server will use the default value from DBC or internal calculation.

Example:

```
0.857
```


Meaning the spell effect scales with 85.7% of Spell Power.


### ap_coefficient

Overrides the Attack Power scaling coefficient for the specified spell effect.

Used for abilities that scale with Attack Power.

Example:

```
0.2
```


Meaning the effect scales with 20% of Attack Power.

If the value is:

```
NULL
```


the default scaling logic will be used.


### flags


Optional flags that modify how the override is applied.

Default value:

```
0
```


Meaning no special behavior.

This field is reserved for internal spell system logic.

### description

Optional developer comment explaining the purpose of the override.

This field does not affect server behaviour.
