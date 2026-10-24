---
title: creature_group_spawn
type: worlddb
category: C
layout: single_markdown
---

# creature_group_spawn
This table assigns creature spawns to the spawn groups of [spawn_group_id](/Wiki/database/world/spawn_group_id/ "Spawn group id"). A group spawns and despawns as a unit, for example the pack of an encounter.

## Structure

Field                              | Type         | Default | Comment
---------------------------------- | ------------ | ------- | -------
[groupId](#groupId)                | tinyint      | 0       | key
[spawnId](#spawnId)                | int          | 0       | key

### groupId

The group from [spawn_group_id](/Wiki/database/world/spawn_group_id/ "Spawn group id").

### spawnId

The spawn id from [creature_spawns](/Wiki/database/world/creature_spawns/ "Creature spawns"). A spawn on another map than the group is skipped unless the group carries the system flag.
