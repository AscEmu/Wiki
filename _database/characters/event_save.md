---
title: event_save
type: characterdb
category: E
layout: single_markdown
---

# event_save
This table contains the event states for game events. (Filled by the core)

## Structure

Field                       | Type       | Default | Comment
--------------------------- | ---------- | ------- | -------
[event_entry](#event_entry) | tinyint(3) |         |        
[state](#state)             | tinyint(3) | 1       |        
[next_start](#next_start)   | int(10)    | 0       |        

### event_entry

The entry ID of the event from event_properties table.

### state

The state of the event.

    0 = Inactive
    1 = active
    2 = preparing (starting soon)
    3 = inactive forced (by admin)
    4 = active forced (by admin)


### next_start

Unixtime (date time) for next start of this event.