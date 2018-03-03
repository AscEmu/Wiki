---
title: auctionhouse
type: worlddb
category: A
layout: single_markdown
---

# auctionhouse
This table stores auctioneer NPCs. 

## Structure

Field                                                                                    | Type        | Default | Comment
---------------------------------------------------------------------------------------- | ----------- | ------- | -------
[creature_entry](#creature_entry) | smallint(5) |         |        
[ahgroup](#ahgroup)               | tinyint(1)  |         |        

### creature_entry

The creature entry ID

### ahgroup

The group of the auction

1 = Stormwind

2 = Alliance

3 = Darnassus

4 = Undercity

5 = Thunderbluff

6 = Horde

7 = Blackwater Raiders (neutral)