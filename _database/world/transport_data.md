---
title: transport_data
type: worlddb
category: T
layout: single_markdown
---

# transport_data
This table includes all transport data needed to create it. 

## Structure

Field             | Type         | Default | Comment
----------------- | ------------ | ------- | -------
[entry](#entry)   | mediumint(8) | 0       | key
[min_build](#min_build) | int           | 12340   | key
[max_build](#max_build) | int           | 12340   | 
[name](#name)     | text         |         |        

### entry

The transport entry ID.

### min_build

First client build the row is valid for. A row is used when the build of the server lies between min_build and max_build.

### max_build

Last client build the row is valid for.

### name

The transport name (optional).
