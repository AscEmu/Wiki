---
title: recall
type: worlddb
category: R
layout: single_markdown
---

# recall
This table contains spells that creatures use instead of advanced scripting.

## Structure

Field                                | Type         | Default | Comment 
------------------------------------ | ------------ | ------- | --------
[id](#id)                            | bigint(20)   |         | key, auto
[min_build](#min_build)              | smallint(6)  | 12340   | key
[max_build](#max_build)              | smallint(6)  | 12340   |
[name](#name)                        | varchar(100) |         |         
[MapId](#MapId)                      | int(10)      | 0       |         
[positionX](#positions)              | float(0)     | 0       |         
[positionY](#positions)              | float(0)     | 0       |         
[positionZ](#positions)              | float(0)     | 0       |         
[Orientation](#positions)            | float(0)     | 0       |         

### id

Id for this recall, only used internal.

### min_build

Build number this position was available.

### max_build

Max Build number position was valid for.

### name

The name of the port, used by the command .recall port and found with the command .recall list.

### MapId

The Map ID of the port point

### position

Alignement by arriving the point.