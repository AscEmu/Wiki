---
title: event_properties
type: worlddb
category: E
layout: single_markdown
---

# event_properties
This table contains the start/endtime for auto events.

## Structure

Field                                                                                  | Type         | Default             | Comment
-------------------------------------------------------------------------------------- | ------------ | ------------------- | -------
[entry](#entry)             | tinyint(3)   |                     |        
[start_time](#start_time)   | timestamp    | 0000-00-00 00:00:00 |        
[end_time](#end_time)       | timestamp    | 0000-00-00 00:00:00 |        
[occurence](#occurence)     | bigint(20)   | 5184000             |        
[length](#length)           | bigint(20)   | 2592000             |        
[holiday](#holiday)         | mediumint(8) | 0                   |        
[description](#description) | varchar(255) |                     |        
[world_event](#world_event) | tinyint(3)   | 0                   |        
[announce](#announce)       | tinyint(3)   | 2                   |        

### entry

The entry ID of the event.

### start_time

the absolute start time. Events will never start before.

### end_time

the absolute end time. Events will never start after.

### occurence

Delay in minutes between occurences of the event.

### length

Length in minutes of the event.

### holiday

The holiday id from dbc.

### description

The name/description of the event.

### world_event

<pre>
0 = normal event
1 = world event
</pre>

### announce

<pre>
0 = no announce
1 = announce

<strike>2 = custom</strike>
</pre>