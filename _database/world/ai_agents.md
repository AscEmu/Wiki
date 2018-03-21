---
title: ai_agents
type: worlddb
category: A
layout: single_markdown
---

# ai_agents

This table contains spells that creatures use instead of advanced scripting.

## Structure

Field                                                                                             | Type          | Default | Comment
------------------------------------------------------------------------------------------------- | ------------- | ------- | -------
[entry](#entry)                               | int(10)       |         |        
[instance_mode](#instance_mode)               | tinyint(1)    | 4       |        
[type](#type)                                 | tinyint(1)    | 0       |        
[event](#event)                               | tinyint(1)    | 0       |        
[chance](#chance)                             | tinyint(3)    | 100     |        
[maxcount](#maxcount)                         | tinyint(3)    | 0       |        
[spell](#spell)                               | int(10)       | 0       |        
[spelltype](#spelltype)                       | tinyint(1)    | 0       |        
[targettype_overwrite](#targettype_overwrite) | tinyint(3)    |  -1     |        
[cooldown_overwrite](#cooldown_overwrite)     | mediumint(10) |  -1     |        
[floatMisc1](#floatMisc1)                     | float(0)      | 0       |        
[Misc2](#Misc2)                               | mediumint(10) | 0       |        

### entry

The entry ID of the NPC.

### instance_mode
<pre>
0 = Normal dungeon, Normal old raid, Normal 10 man raid
1 = Heroic dungeon, Normal 25man Raid 
2 = Heroic 10man Raid 
3 = Heroic 25man raid 
4 = All modes (0 - 3)
</pre>

### type

<pre>
1 = Melee
2 = Ranged
3 = Flee
4 = Spell
5 = Call For Help
</pre>

### event

<pre>
0 = Enter Combat
<strike>1 = Leave Combat</strike>
2 = Damage Taken
<strike>3 = Target Cast Spell</strike>
<strike>4 = Target Parried</strike>
<strike>5 = Target Dodged</strike>
<strike>6 = Target Blocked</strike>
<strike>7 = Target Critically Hit</strike>
<strike>8 = Target Died</strike>
<strike>9 = Target Died (!)</strike>
<strike>10 = Unit Parried</strike>
<strike>11 = Unit Dodged</strike>
<strike>12 = Unit Blocked</strike>
<strike>13 = Unit Critical Hit</strike>
<strike>14 = Unit Died</strike>
<strike>15 = Assisting Target Died (Pet)</strike>
<strike>16 = Follow Owner</strike>
</pre>

### chance

The chance in percent the spell has to be cast.

### maxcount

0 = infinite count

value > 0 = counts the spell is cast

### spell

ID of the spell that will be cast

### spelltype

<pre>
 1 = Root
 2 = Heal
 3 = Stun
 4 = Fear
 5 = Silence
 6 = Curse
 7 = AoE Damage
 8 = Damage
 9 = Summon
10 = Buff Spell
11 = Debuff Spell
</pre>

### targettype_overwrite

<pre>
0 = Null
1 = Random Target
2 = Target Location
3 = Creature Location
4 = Self
5 = Owner (Pets / Slave cast on their owner)
</pre>

### cooldown_overwrite

Value in milliseconds (1 sec = 1000)

### floatMisc1

If (type = FLEE [3]) then this should be the Health Percent it flees at. Default: 0.2f.

If (type = CALLFORHELP [5]) then this should be the Health Percent it calls for health at. Default: 0.2f

### Misc2

If (type = FLEE [3]) then this should be the time it flees for, in milliseconds. Default: 10000ms (10 seconds).