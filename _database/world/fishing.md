---
title: fishing
type: worlddb
category: F
layout: single_markdown
---

# fishing
This table contains the zone and skill requirements for fishing.

## Structure

Field                                                                   | Type        | Default | Comment
----------------------------------------------------------------------- | ----------- | ------- | -------
[zone](#zone)                                                           | smallint(5) |         |        
[MinSkill](#MinSkill)                                                   | smallint(5) | 0       |        
[MaxSkill](#MaxSkill)                                                   | smallint(5) | 0       |        

### zone

The zone that the fish can be fished in.

### MinSkill

The minimum required "Fishing" skill that the player must have to catch the fish.

### MaxSkill

The maximum required "Fishing" skill that the player must have to catch the fish. If higher, no fish is caught.