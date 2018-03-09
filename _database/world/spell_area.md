---
title: spell_area
type: worlddb
category: S
layout: single_markdown
---

# spell_area
This contains area variables for spells.

## Structure

Field                                                                                          | Type         | Default | Comment
---------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[spell](#spell)                           | mediumint(8) | 0       |        
[area](#area)                             | mediumint(8) | 0       |        
[quest_start](#quest_start)               | mediumint(8) | 0       |        
[quest_start_active](#quest_start_active) | tinyint(1)   | 0       |        
[quest_end](#quest_end)                   | mediumint(8) | 0       |        
[aura_spell](#aura_spell)                 | mediumint(8) | 0       |        
[racemask](#racemask)                     | mediumint(8) | 0       |        
[gender](#gender)                         | tinyint(1)   | 0       |        
[autocast](#autocast)                     | tinyint(1)   | 0       |        

### spell

The entry ID of the spell...

### area

The area ID

### quest_start

The entry ID from [quest_properties](/Wiki/database/world/quest_properties/ "Quest properties") table to activate this area spell.

### quest_start_active

...

### quest_end

..

### aura_spell

The spell ID

<pre>
< 0 = If player has this aura then the spell will not be activated.
= 0 = no aura restrictions
> 0 = If player has not this aura then the spell will not be activated.
</pre>

### racemask

...

### gender

<pre>
0 = Male
1 = Female
2 = all Genders
</pre>

### autocast

Boolean value:

<pre>
0 = no autocast by entering the area.
1 = autocast by entering the area.
</pre>