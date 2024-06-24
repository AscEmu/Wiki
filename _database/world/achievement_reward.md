---
title: achievement_reward
type: worlddb
category: A
layout: single_markdown
---

# achievement_reward
This table contains the achievement rewards to send them by mail.

## Structure

Field                                                                            | Type         | Default | Comment
-------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)                                                                  | mediumint(8) | 0       |        
[gender](#gender)                                                                | tinyint(3)   | 2       |        
[title_A](#title_A)                                                              | mediumint(8) | 0       |        
[title_H](#title_H)                                                              | mediumint(8) | 0       |        
[item](#item)                                                                    | mediumint(8) | 0       |        
[sender](#sender)                                                                | mediumint(8) | 0       |        
[subject](#subject)                                                              | varchar(255) |         |        
[text](#text)                                                                    | text         |         |        

### entry

The entry ID of the achievement.

### gender

<pre>
0 = Male
1 = Female
2 = all Genders
</pre>

### title_A

The title ID for Alliance.

### title_H

The title ID for Horde.

### item

The recieve item entry ID from [item_properties](/Wiki/database/world/item_properties/ "Item properties") table (mail).

### sender

The sender entry id mostly from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### subject

The text shown in subject field (mail).

### text

The text shown in body (mail).