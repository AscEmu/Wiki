---
title: social_friends
type: characterdb
category: S
layout: single_markdown
---

# social_friends
This table contains the friendship between characters.

## Structure

Field                             | Type         | Default | Comment
--------------------------------- | ------------ | ------- | -------
[character_guid](#character_guid) | int(30)      |         |        
[friend_guid](#friend_guid)       | int(30)      |         |        
[note](#note)                     | varchar(100) |         |        

### character_guid

The character guid from characters table.

### friend_guid

The character guid from characters table.

### note

A short text to describe the friendship relation