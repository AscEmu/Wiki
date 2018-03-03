---
title: server_settings
type: characterdb
category: S
layout: single_markdown
---

# server_settings
This table contains the ignored players for a character.

## Structure

Field                           | Type         | Default | Comment
------------------------------- | ------------ | ------- | -------
[setting_id](#setting_id)       | varchar(200) |         |        
[setting_value](#setting_value) | int(50)      |         |        

### setting_id

    next_instance_reset_mapid = defines the next reset for instances.
    last_arena_update_time = defines the latest update time for arenas
    last_daily_update_time = defines the latest update time for honor. Base timecycle is: "daily". It depends on the world config which unixtime would be set in row setting_value (daily/weekly/monthly or hourly).

### setting_value

Time (unixtime) for resetting tasks.