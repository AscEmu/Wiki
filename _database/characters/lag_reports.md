---
title: lag_reports
type: characterdb
category: L
layout: single_markdown
---

# lag_reports
This table contains all reported lags.

## Structure

Field                       | Type        | Default | Comment
--------------------------- | ----------- | ------- | -------
[lag_id](#lag_id)           | int(10)     |         |        
[player](#player)           | int(10)     |         |        
[account](#account)         | int(10)     |         |        
[lag_type](#lag_type)       | smallint(2) |         |        
[map_id](#map_id)           | int(5)      | 0       |        
[position_x](#position_x-z) | float       | 0       |        
[position_y](#position_x-z) | float       | 0       |        
[position_z](#position_x-z) | float       | 0       |        

### lag_id

ID for this lag report (unique)

### player

Player ID (reporter)

### account

Account ID of the reporter

### lag_type

    0 = Loot
    1 = Auctionshouse
    2 = Mail
    3 = Chat
    4 = Movement
    5 = Spells

### map_id

The map ID

### position_x-z

position of the reporter.