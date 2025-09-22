---
title: item_properties_spells
type: worlddb
category: I
layout: single_markdown
---

# item_properties_spells
This table contains item spells information. 

## Structure

Field                                                   | Type         | Default                          | Comment
------------------------------------------------------- | ------------ | -------------------------------- | -------
[entry](#entry)                                         | mediumint(8) | unsigned NOT NULL DEFAULT '0'    | key
[build](#build)                                         | smallint(6)  | 12340                            | key
[spellid](#spellid)                                     | mediumint(8) | NOT NULL DEFAULT '0'             | key
[spelltrigger](#spelltrigger)                           | tinyint(3)   | unsigned NOT NULL DEFAULT '0'    |
[spellcharges](#spellcharges)                           | smallint(4)  | NOT NULL DEFAULT '0'             |
[spellcooldown](#spellcooldown)                         | int(11)      | NOT NULL DEFAULT '-1'            |
[spellcategory](#spellcategory)                         | smallint(5)  | unsigned NOT NULL DEFAULT '0'    |
[spellcategorycooldown](#spellcategorycooldown)         | int(11)      | NOT NULL DEFAULT '-1'            |

### entry

The entry ID of the item.

### build

Build number to determine if the data is for our current compiled version.

### spellid

The spell ID on the item.

### spelltrigger

The type how the spell triggers:

<pre>
0 = On use
1 = On equip
2 = Chance on hit
4 = Soulstone
5 = No delay - not used
6 = Learn spell ID
</pre>

### spellcharges

The number of times the item can cast the spell.

<pre>
0 = infinite charges
</pre>

If the number of charges is a negative value, the item deletes itself.

### spellcooldown

The cooldown for the spell in milliseconds. (If this value = -1, the normal cooldown of this spell is used)

### spellcategory

The spellcategory of the spell.

### spellcategorycooldown

The cooldown for the spellcategory in milliseconds. (If this value = -1, the normal cooldown of this spellcategory is used)
