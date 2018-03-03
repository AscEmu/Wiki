---
title: gossip_menu_items
type: worlddb
category: G
layout: single_markdown
---

# gossip_menu_items
This table contains all data for gossip menu generation. 

## Structure

Field                                                                                               | Type    | Default | Comment
--------------------------------------------------------------------------------------------------- | ------- | ------- | -------
[id](#id)                               | int(10) |         | key 1  
[item_order](#item_order)               | int(10) | 1       | key 2  
[menu_option](#menu_option)             | int(10) | 0       |        
[icon](#icon)                           | int(10) | 0       |        
[point_of_interest](#point_of_interest) | int(10) | 0       |        
[next_gossip_menu](#next_gossip_menu)   | int(10) | 0       |        
[next_gossip_text](#next_gossip_text)   | int(10) | 0       |        

### id

The entry ID for the gossip_menu the option should be displayed.

### item_order

The number the item is ordered in the menu. 1-...

### menu_option

The unique menu option ID from [gossip_menu_option](http://www.ascemu.org/wiki/index.php?title=Gossip_menu_option "Gossip menu option") table

### icon

Icon displayed beside the option.

### point_of_interest

ID from [points_of_interest](http://www.ascemu.org/wiki/index.php?title=Points_of_interest "Points of interest") table.

### next_gossip_menu

Next gossip menu id in this table.

### next_gossip_text

The unique text id in [npc_text](http://www.ascemu.org/wiki/index.php?title=Npc_text "Npc text") table.