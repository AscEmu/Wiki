---
title: npc_gossip_properties
type: worlddb
category: N
layout: single_markdown
---

# npc_gossip_properties
This table defines the gossip textids for creatures. 

## Structure

Field                                                                                 | Type    | Default | Comment
------------------------------------------------------------------------------------- | ------- | ------- | -------
[creatureid](#creatureid)                                                             | int(10) | 0       |        
[build](#build)                                                                       | int unsigned  | 5875    | key
[textid](#textid)                                                                     | int(10) | 0       |        

### creatureid

The entry ID from [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties")

### build

Client build the row is valid from. The server loads, for every entry, the row with the highest build that does not exceed its own build, so a row is only needed where the data differs from the previous build.
### textid

The text ID from [npc_gossip_texts](/Wiki/database/world/npc_gossip_texts/ "Npc gossip texts")