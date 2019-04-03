---
title: Lua_HandleEvent
type: standards_lua
layout: single_markdown
position: 124
---

# Lua HandleEvent

## Description

Target is the unit you want to handle the event for Event_ID has the following possible values:

(../world/Units/Creatures/AIEvents.h)

```
EVENT_ENTERCOMBAT     = 0
EVENT_LEAVECOMBAT     = 1
EVENT_DAMAGETAKEN     = 2
EVENT_FEAR            = 3
EVENT_UNFEAR          = 4
EVENT_FOLLOWOWNER     = 5
EVENT_WANDER          = 6
EVENT_UNWANDER        = 7
EVENT_UNITDIED,       = 8
EVENT_HOSTILEACTION 
EVENT_FORCEREDIRECTED 
NUM_AI_EVENTS
```

misc_1 is only used for EVENT_DAMAGETAKEN. It is he amount of damage that was taken.
