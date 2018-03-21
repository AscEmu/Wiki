---
title: trainer_spells
type: worlddb
category: T
layout: single_markdown
---

# trainer_spells
This table defines the important facts to learn a spell. 

## Structure

Field                                                                                    | Type    | Default | Comment
---------------------------------------------------------------------------------------- | ------- | ------- | -------
[entry](#entry)                 | int(11) | 0       |        
[cast_spell](#cast_spell)       | int(11) | 0       |        
[learn_spell](#learn_spell)     | int(11) | 0       |        
[spellcost](#spellcost)         | int(11) | 0       |        
[reqspell](#reqspell)           | int(11) | 0       |        
[reqskill](#reqskill)           | int(11) | 0       |        
[reqskillvalue](#reqskillvalue) | int(11) | 0       |        
[reqlevel](#reqlevel)           | int(11) | 0       |        
[deletespell](#deletespell)     | int(11) | 0       |        

### entry

The creature entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### cast_spell

The spell ID which would be cast by the trainer.

### learn_spell

The spell ID which would be teached by the trainer.

### spellcost

The cost to learn this spell.  

### reqspell

The spell entry ID which is required to learn the new spell.

### reqskill

The required skill entry ID.

### reqskillvalue

The required skill value of the required skill.

### reqlevel

The required level of the player to learn this spell.

### deletespell

The spell entry ID which would be removed.