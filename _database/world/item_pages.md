---
title: item_pages
type: worlddb
category: I
layout: single_markdown
---

# item_pages
This table defines the itempages. 

## Structure

Field                                                                        | Type     | Default | Comment
---------------------------------------------------------------------------- | -------- | ------- | -------
[entry](#entry)         | int(10)  | 0       |        
[text](#text)           | longtext |         |        
[next_page](#next_page) | int(10)  | 0       |        

### entry

The unique ID for the page. this id is used in row `page_id` in table [item_properties](/Wiki/database/world/item_properties/ "Item properties")

### text

The Text on the page

### next_page

The next entry ID in this Table :-)