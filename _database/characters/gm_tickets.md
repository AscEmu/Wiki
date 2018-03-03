---
title: gm_tickets
type: characterdb
category: G
layout: single_markdown
---

# gm_tickets
This table contains the tickets for the ticketsystem.

## Structure

Field                     | Type         | Default      | Comment                                             
------------------------- | ------------ | ------------ | ----------------------------------------------------
[ticketid](#ticketid)     | int(11)      |              |                                                     
[playerGuid](#playerGuid) | int(11)      |              |                                                     
[name](#name)             | varchar(200) | Empty String |                                                     
[level](#level)           | int(6)       | 0            |                                                     
[map](#position)          | int(11)      | 0            |                                                     
[posX](#position)         | float        | 0            |                                                     
[posY](#position)         | float        | 0            |                                                     
[posZ](#position)         | float        | 0            |                                                     
[message](#message)       | text         |              |                                                     
[timestamp](#timestamp)   | text         |              | This seems to be the wrong row type for a timestamp.
[deleted](#deleted)       | int(10)      | 0            |                                                     
[assignedto](#assignedto) | int(11)      | 0            |                                                     
[comment](#comment)       | text         |              |                                                     

### ticketid

The ID of the ticket.

### playerGuid

The character guid from characters table.

### name

The name of the ticket creator.

### level

The level of the ticket creator (at the moment the ticket was created).

### position

The position (mapid, and x-, y-, z-position).

### message

The ticket message.

### timestamp

The time of the ticket creation.

### deleted

    0 = not deleted (default)
    1 = deleted

### backgroundcolour

The background colour.

### rating

The rating of the arena team.

### assignedto

The guid of the gamemaster from characters table.

### comment

The comment to this ticket inserted by the gamemaster.