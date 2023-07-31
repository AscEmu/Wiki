---
title: script_spline_meta
type: worlddb
category: C
layout: single_markdown
---

# script_spline_meta
This table contains spline chains metadata with infos such as speed and duration of each spline

## Structure

Field                                                                                                      | Type       | Default | Comment
---------------------------------------------------------------------------------------------------------- | ---------- | ------- | -------
[entry](#entry)                                                                                            | int(0)     | 0       |       primary 
[chainId](#chainId)                                                                                        | smallint(0)| 0       |       primary
[splineId](#splineId)                                                                                      | tinyint(0) | 0       |       primary
[expectedDuration](#expectedDuration)                                                                      | int(0)     | 0       |          
[msUntilNext](#msUntilNext)                                                                                | int(0)     | 0       |        
[velocity](#velocity)                                                                                      | float(0)   | 0       |        

### entry

This is a unique ID from [script_spline_wayoints](/Wiki/database/world/script_spline_wayoints/ "Spline Waypoint Data").

### chainId

current chainId of Spline

### splineId

current splineId

### expectedDuration

expected duration of the spline

### msUntilNext

expected duration to next point

### velocity

speed

...