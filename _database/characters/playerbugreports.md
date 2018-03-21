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

<pre>
The unique ID of a bugreport.
</pre>

### AccountID

<pre>
The account ID from accounts table.
</pre>

### TimeStamp

<pre>
The creation timestamp of this bugreport.
</pre>

### Suggestion

<pre>
0 = it is a bugreport
≠ 0 = suggestion
</pre>

### Type

<pre>
The cleartext type.
</pre>

### Content

<pre>
The comments/description of the bugreport.
</pre>
