---
title: trainer_properties_spells
type: worlddb
category: T
layout: single_markdown
---

# trainer_properties_spells
This table defines the trainable spells for a trainer.

## Structure

Field                                                                                    | Type    | Default | Comment
---------------------------------------------------------------------------------------- | ------- | ------- | -------
[id](#id)                                                                                | int(11) | 0       | Unique Key
[min_build](#min_build)                                                                  | int(11) | 0       | Unique Key
[max_build](#max_build)                                                                  | int(11) | 0       |        
[cast_spell](#cast_spell)                                                                | int(11) | 0       | Unique Key
[learn_spell](#learn_spell)                                                              | int(11) | 0       | Unique Key
[spellcost](#spellcost)                                                                  | int(11) | 0       |        
[racemask](#racemask)                                                                    | int(11) | 0       |        
[reqspell](#reqspell)                                                                    | int(11) | 0       |        
[reqskill](#reqskill)                                                                    | int(11) | 0       |        
[reqskillvalue](#reqskillvalue)                                                          | int(11) | 0       |        
[reqlevel](#reqlevel)                                                                    | int(11) | 0       |        
[deletespell](#deletespell)                                                              | int(11) | 0       |        
[static](#static)                                                                        | int(11) | 0       |        

### id

The Id for defining a set of spells for a trainer.

### min_build
The minimum build number this spell is valid to train.

### max_build
The maximum build number this spell is valid to train.

### cast_spell

The spell ID which would be cast by the trainer.

### learn_spell

The spell ID which would be teached by the trainer.

### spellcost

The cost to learn this spell.  

### racemask
The racemask this spell is valid to be trained.

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

### static

1 = this spell is always visible in this spell set.

### under development

This table is not in production.