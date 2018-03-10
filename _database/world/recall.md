---
title: recall
type: worlddb
category: R
layout: single_markdown
---

# recall
This table contains spells that creatures use instead of advanced scripting.

## Structure

Field                                                                                 | Type         | Default | Comment 
------------------------------------------------------------------------------------- | ------------ | ------- | --------
[id](#id)                            | bigint(20)   |         | Auto Num
[name](#name)                        | varchar(100) |         |         
[MapId](#MapId)                      | int(10)      | 0       |         
[positionX](#positions)              | float(0)     | 0       |         
[positionY](#positions)              | float(0)     | 0       |         
[positionZ](#positions)              | float(0)     | 0       |         
[Orientation](#positions)            | float(0)     | 0       |         

### id

A unique MySQL-generated ID. Do not touch unless you know what you are doing!

### name

The name of the port, used by the command .recall port and found with the command .recall list.

### MapId

The Map ID of the port point

### position

Alignement by arriving the point.