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
[on_choose_action](#on_choose_action)   | int(8)  | 0       |        
[on_choose_data](#on_choose_action)     | int(10) | 0       |        
[on_choose_data2](#on_choose_action)    | int(10) | 0       |  
[on_choose_data3](#on_choose_action)    | int(10) | 0       |  
[on_choose_data4](#on_choose_action)    | int(10) | 0       |  
[next_gossip_menu](#next_gossip_menu)   | int(10) | 0       |        
[next_gossip_text](#next_gossip_text)   | int(10) | 0       |        
[requirement_type](#requirement_type)   | int(8)  | 0       |        
[requirement_data](#requirement_data)   | int(10) | 0       |        

### id

The entry ID for the gossip_menu the option should be displayed.

### item_order

The number the item is ordered in the menu. 1-...

### menu_option

The unique menu option ID from [gossip_menu_option](/Wiki/database/world/gossip_menu_option/ "Gossip menu option") table

### icon

Icon displayed beside the option.

### on_choose_action

***Action 0***
- None

***Action 1***
- Sends point of Interest (on_choose_data = poiId)

***Action 2***
- Casts Spell on Player (on_choose_data = spellId)

***Action 3***
- Starts taxi (on_choose_data = taxiId, on_choose_data2 = modelId)

***Action 4***
- required standing (wip) (on_choose_data = factionId, on_choose_data2 = standing, on_choose_data3 = broadcastTextId, on_choose_data4 = spellId)

***Action 5***
- No data, close gossip on clicking on option.

***Action 6***
- Toggle gain XP, (on_choose_data = box money, on_choose_data2 = box textId)


### next_gossip_menu

Next gossip menu id in this table.

### next_gossip_text

The unique text id in [npc_text](/Wiki/database/world/npc_text/ "Npc text") table.

### requirement_type
***Type 0***
- None

***Type 1***
- Check for active quest (requirement_data = questId)

***Type 2***
- Check for completed quest (wip) (requirement_data = questId)

***Type 3***
- Check if player can gain xp

***Type 4***
- Check if player can not gain xp
