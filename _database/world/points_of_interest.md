---
title: points_of_interest
type: worlddb
category: P
layout: single_markdown
---

# points_of_interest
This table defines locations for the minimaps pointed by guards.

NOTE: This table is new... All points were moved from core to db, but the old function is available for script developers.
{: .info }

## Structure

Field                                                                                   | Type         | Default | Comment
--------------------------------------------------------------------------------------- | ------------ | ------- | -------
[entry](#entry)            | int(10)      | 0       |        
[x](#position)             | float(0)     | 0       |        
[y](#position)             | float(0)     | 0       |        
[icon](#icon)              | mediumint(8) | 0       |        
[flags](#flags)            | mediumint(8) | 0       |        
[data](#data)              | mediumint(8) | 0       |        
[icon_name](#icon_name)    | text         |         |        

### entry

The entry ID

### position

The x- and y position on the map, for pointing it on minimap.

### icon

The Point Icon:

<pre>
7 = standart
</pre>

### flags

Unknown... these two values:

<pre>
6  = 
99 = 
</pre>

### data

<pre>
0 = standart
</pre>

### icon_name

Hover text by hovering the point on minimap.