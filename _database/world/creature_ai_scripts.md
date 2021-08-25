---
title: creature_ai_scripts
type: worlddb
category: C
layout: single_markdown
---

# creature_ai_scripts
This table is for simple creature scripts e.g. trashmobs in several instances. 

## Structure

Field                                                                                | Type     | Default | Comment
------------------------------------------------------------------------------------ | -------- | ------- | -------
[min_build](#min-max_build)             | int       | 12340  |        
[max_build](#min-max_build)             | int       | 12340  |        
[entry](#entry)                         | int       |        |        
[difficulty](#difficulty)               | tinyint   | 0      |        
[phase](#phase)                         | tinyint   | 0      |        
[event](#event)                         | tinyint   | 0      |        
[action](#action)                       | tinyint   | 0      |        
[maxCount](#maxCount)                   | tinyint   | 0      |        
[chance](#chance)                       | float     | 1      |        
[spell](#spell)                         | int       | 0      |        
[spell_type](#spell_type)               | int       | 0      |        
[triggered](#triggered)                 | tinyint   | 0      | 1 = true, 0 = false       
[target](#target)                       | int       | 0      |        
[cooldownMin](#cooldownMin-Max)         | int       | 0      |        
[cooldownMax](#cooldownMin-Max)         | int       | 0      |        
[minHealth](#min-maxHealth)             | float     | 0      |        
[maxHealth](#min-maxHealth)             | float     | 100    |        
[textId](#textId)                       | int       | 0      |        
[misc1](#misc1)                         | int       | 0      |        
[comments](#comments)                   | text      | NULL   |        

### min-max_build

The build range for this script to be loaded.

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### difficulty

<pre>
0 = Normal / 10 Man Normal,
1 = Heroic / 25 Man Normal,
2 = 10 Man Heroic,
3 = 25 Man Heroic,
4 = All difficulties, ignore difficulty check.
</pre>

### phase

This is NOT the worldphase, it is the script phase. Controle in which script phase this record is enabled.

### event

<pre>
0 = onLoad,
1 = onEnterCombat,
2 = onLeaveCombat,
3 = onDied,
4 = onTargetDied,
5 = onAIUpdate,
6 = onCallForHelp,
7 = onRandomWaypoint,
8 = onDamageTaken,
9 = onFlee
</pre>

### action

<pre>
0 = actionNone,
1 = actionSpell,
2 = actionSendMessage,
3 = actionPhaseChange   Change phase +1
</pre>

### maxCount

Maximum count how often this script gets executed.

### chance

The percent the monster will say some text on entering event.

<pre>
0 = never
100 = always.
</pre>

### spell

The spellId to cast.

### spell_type

The spell type

### triggered

Defines if the spell is triggered (1) or not (0).

### target

The target for this spell:

<pre>
0 = TARGET_SELF,
1 = TARGET_VARIOUS,
2 = TARGET_ATTACKING,
3 = TARGET_DESTINATION,
4 = TARGET_SOURCE,
5 = TARGET_RANDOM_FRIEND,
6 = TARGET_RANDOM_SINGLE,
7 = TARGET_RANDOM_DESTINATION,
8 = TARGET_CLOSEST,
9 = TARGET_FURTHEST
</pre>

### cooldownMin-Max

**action = 1 (spell)**
min/max cooldown in ms

**action = 3 (change phase)**
min/max time for changing script phase

### min-maxHealth

**action = 1 (spell)

min and max = used for hp range when a spell can get casted.


**events**

Call For Help Health

Flee Health

On AiUpdate Action on xx Health

ChangePhase at % hp


### textId

**action = 1 (spell)**

Send message on casting spell.


**action = 2 (chat message)**

Send message on event.


### misc1

**action = 3 (change phase)**

change script phase to X.


**event = 9 (flee)**

Duration in ms how long creature is fleeing.


### comments
Used for db devs.
