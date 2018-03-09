---
title: WoW Data
type: unsorted
layout: single_markdown
position: 4
---

# WoW Data
To notify the client about the basic appearance of an entity we send the packet SMSG_UPDATE_OBJECT with the updated information. To keep track about these values, we stored them serverside as *uint32_t, *int32_t and *float_t with an index from UpdateFields.h.
The real change to this is, that we access this data with an structure.

... to be continued.
