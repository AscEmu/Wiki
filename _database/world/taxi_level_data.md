---
title: taxi_level_data
type: worlddb
category: T
layout: single_markdown
---

# taxi_level_data
This table contains the character level from which a flight path node is known. The clients from 9.x on (level squish) unlock the nodes by level instead of by discovery; a node without a row stays locked.

## Structure

Field                              | Type         | Default | Comment
---------------------------------- | ------------ | ------- | -------
[TaxiNodeId](#TaxiNodeId)          | smallint     |         | key
[Level](#Level)                    | tinyint      | 0       |

### TaxiNodeId

The node from **TaxiNodes** of the client. A row for a node the client does not know is skipped.

### Level

The character level from which the node is unlocked.
