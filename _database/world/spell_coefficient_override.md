---
title: spell_coefficient_override
type: worlddb
category: S
layout: single_markdown
---

# spell_coefficient_override
This table defines coeff overrides for spells

## Structure

Field                                         | Type         | Default | Comment        
--------------------------------------------- | ------------ | ------- | ---------------
[spell_id](#spell_id)                         | int(10)      | 0       | key
[min_build](#min_build)                       | int(6)       | 12340   | key
[max_build](#max_build)                       | int(6)       | 12340   |
[direct_coefficient](#direct_coefficient)     | float(0)     | -1      |                
[overtime_coefficient](#overtime_coefficient) | float(0)     | -1      |                
[description](#description)                   | varchar(300) | NULL    |

### spell_id

The entry ID of the spell...


### min_build

Build number this override is valid.


### max_build

Max Build number this override is valid for.



### direct_coefficient

...


### overtime_coefficient

...


### description

The description... used by db devs.

