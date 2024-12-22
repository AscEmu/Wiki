---
title: spell_ranks
type: worlddb
category: S
layout: single_markdown
---

# spell_ranks
This table defines spell rank chains. Single spell can only be part of one rank chain.

## Structure

Field                                                                       | Type         | Default | Comment
--------------------------------------------------------------------------- | ------------ | ------- | -------
[spell_id](#spell_id)                                                       | int(10)      | 0       |        
[min_build](#min_build)                                                     | int(10)      | 12340   | key
[max_build](#max_build)                                                     | int(10)      | 12340   |        
[first_spell](#first_spell)                                                 | int(10)      | 0       | key
[rank](#rank)                                                               | tinyint(3)   | 0       | key
[comment](#comment)                                                         | varchar(50)  | ""      |        

### spell_id

The spell entry ID.

### min_build

Build version this spell entry was introduced to rank chain.

### max_build

Max build version this spell entry is valid for in rank chain.

### first_spell

Spell entry ID of the first spell in rank chain.

### rank

The rank number of this spell entry in rank chain.

### comment

Comment about this spell entry (most of the time spell's name).
