---
title: arenateams
type: characterdb
category: A
layout: single_markdown
---

# arenateams
This table contains the information about the arena teams.

## Structure

Field                                     | Type         | Default | Comment
----------------------------------------  | ------------ | ------- | -------
[id](#id)                                 | int(30)      |         |        
[type](#type)                             | int(30)      |         |        
[leader](#leader)                         | int(30)      |         |        
[name](#name)                             | varchar(150) |         |        
[emblemstyle](#emblemstyle)               | int(40)      |         |        
[emblemcolour](#emblemcolour)             | bigint(40)   |         |        
[borderstyle](#borderstyle)               | int(40)      |         |        
[bordercolour](#bordercolour)             | bigint(40)   |         |        
[backgroundcolour](#backgroundcolour)     | bigint(40)   |         |        
[rating](#rating)                         | int(30)      |         |        
[data](#data)                             | varchar(150) |         |        
[ranking](#ranking)                       | int(30)      |         |        
[player_data1](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data2](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data3](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data4](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data5](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data6](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data7](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data8](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data9](#player_data.281_-_10.29)  | varchar(60)  |         |        
[player_data10](#player_data.281_-_10.29) | varchar(60)  |         |        

### id

This is id of the aren team.

### type
    0 = 2v2
    1 = 3v3
    2 = 5v5 

### leader

The guid id row guid from characters table.

### name

The name of the arena team.

### emblemstyle

The style of the emblem.

### emblemcolour

The colour for the emblem.

### borderstyle

The style of the border.

### bordercolour

The colour of the border.

### backgroundcolour

The background colour.

### rating

The rating of the arena team.

### data

...

### ranking

The ranking for the aren team.

### player_data(1 - 10)

Name of arena team member row name from characters table.