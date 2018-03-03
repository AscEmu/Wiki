---
title: weather
type: worlddb
category: W
layout: single_markdown
---

# weather
This table defines the weather chances in the different zones. 

## Structure

Field                                                                         | Type    | Default | Comment              
----------------------------------------------------------------------------- | ------- | ------- | ---------------------
[zoneId](#zoneId)           | int(11) | 0       |                      
[high_chance](#high_chance) | int(11) | 0       |                      
[high_type](#weather_types) | int(11) | 0       | linked to high_chance
[med_chance](#med_chance)   | int(11) | 0       |                      
[med_type](#weather_types)  | int(11) | 0       | linked to med_chance 
[low_chance](#low_chance)   | int(11) | 0       |                      
[low_type](#weather_types)  | int(11) | 0       | linked to low_chance 

### zoneId

The zone ID

### high_chance

The percentage of the highest chance the weather proc (must be higher then med and low_chance).

### med_chance

The percentage of medium chance the weather proc (must be lower then high and higher then low_chance).

### low_chance

The percentage of lowest chance the weather proc (must be smaller then med_chance).

### weather_types

The type the weather would be:

<pre>
0  = normal
1  = fog
2  = rain (normal)
4  = rain (heavey)
8  = snow
16 = sandstorm
</pre>