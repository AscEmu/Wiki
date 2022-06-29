---
title: clientaddons
type: characterdb
category: C
layout: single_markdown
---

# clientaddons
This table receives and stores information on addons allowing administrators to enable good addons and disable malicious ones. 

## Structure

Field                     | Type        | Default | Comment 
------------------------- | ----------- | ------- | --------
[id](#id)                 | int(10)     |         | Auto Num
[name](#name)             | varchar(50) | NULL    |         
[crc](#crc)               | bigint(20)  | NULL    |         
[banned](#banned)         | int(10)     | 0       |         
[showinlist](#showinlist) | int(10)     | 0       |     
[timestamp](#timestamp)   | TIMESTAMP   | NULL    |     
[version](#version)       | varchar(60) | NULL    |     

### id

MySQL-generated ID of the addon. Do not touch!

### name

The name of the addon.

### crc

The CRC value of the addon.

### banned

"Whether or not the addon is blocked/banned from the server."

    0 = not banned
    1 = banned

### showinlist

"Determines whether or not the addon shows in the addon box in your client."

    0 = not shown
    1 = shown

### timestamp

??

### version

??
