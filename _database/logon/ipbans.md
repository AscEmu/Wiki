---
title: ipbans
type: logondb
category: I
layout: single_markdown
---

# ipbans
This table contains the information about ip bans.

## Structure

Field                   | Type         | Default | Comment
----------------------- | ------------ | ------- | -------
[ip](#ip)               | varchar(20)  |         |        
[expire](#expire)       | int(10)      |         |        
[banreason](#banreason) | varchar(255) | NULL    |        

### ip

The ip address to ban.

### expire

Time in s when the ban would be expired.

### banreason

The banreason comment. Unfortunately this field is not required.