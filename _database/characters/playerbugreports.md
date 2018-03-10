---
title: playerbugreports
type: characterdb
category: P
layout: single_markdown
---

# playerbugreports
This table contains the submitted bugreports.

## Structure

Field                     | Type    | Default | Comment
------------------------- | ------- | ------- | -------
[UID](#UID)               | int(10) |         |        
[AccountID](#AccountID)   | int(10) |         |        
[TimeStamp](#TimeStamp)   | int(10) |         |        
[Suggestion](#Suggestion) | int(10) |         |        
[Type](#Type)             | text    |         |        
[Content](#Content)       | text    |         |        

### UID

The unique ID of a bugreport.

### AccountID

The account ID from accounts table.

### TimeStamp

The creation timestamp of this bugreport.

### Suggestion

0 = it is a bugreport
≠ 0 = suggestion

### Type

The cleartext type.

### Content

The comments/description of the bugreport.
