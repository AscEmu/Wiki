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
[entry](#entry)     | mediumint(8) | 0       |        
[gender](#gender)   | tinyint(3)   | 2       |        
[title_A](#title_A) | mediumint(8) | 0       |        
[title_H](#title_H) | mediumint(8) | 0       |        
[item](#item)       | mediumint(8) | 0       |        
[sender](#sender)   | mediumint(8) | 0       |        
[subject](#subject) | varchar(255) |         |        
[text](#text)       | text         |         |        

## entry

The entry ID of the achievement.

## gender

?? unknown

## title_A

The title ID for Alliance.

## title_H

The title ID for Horde.

## item

The recieve item entry ID from [items](http://www.ascemu.org/wiki/index.php?title=Items&action=edit&redlink=1 "Items (page does not exist)") table. (mail)

## sender

The sender entry id mostly from [creature_names](http://www.ascemu.org/wiki/index.php?title=Creature_names&action=edit&redlink=1 "Creature names (page does not exist)") table.

## subject

The text shown in subject field (mail).

## text

The text shown in body (mail).