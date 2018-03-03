---
title: worldbroadcast
type: worlddb
category: W
layout: single_markdown
---

# worldbroadcast
This table contains the broatcast texts. 

## Structure

Field                                                                                        | Type         | Default | Comment
-------------------------------------------------------------------------------------------- | ------------ | ------- | -------
[id](#id)                           | int(11)      |         |        
[interval](#interval)               | int(3)       |         |        
[random_interval](#random_interval) | int(3)       |         |        
[text](#text)                       | varchar(255) |         |        

### id

The unique ID for the text.

### interval

Time in minutes to send this text again

### random_interval

Random time in minute to add some dynamic to the periodic broadcast (rand(random_interval) + interval)

### text

The text it self.

### percent

The percentage how often the text would be broadcasted.