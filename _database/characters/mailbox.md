---
title: mailbox
type: characterdb
category: M
layout: single_markdown
---

# mailbox
This table contains the mails for the characters.

## Structure

Field                                       | Type         | Default      | Comment
------------------------------------------- | ------------ | ------------ | -------
[message_id](#message_id)                   | int(30)      | 0            |        
[message_type](#message_type)               | int(30)      | 0            |        
[player_guid](#player_guid)                 | int(30)      | 0            |        
[sender_guid](#sender_guid)                 | bigint(30)   | 0            |        
[subject](#subject)                         | varchar(255) | Empty String |        
[body](#body)                               | longtext     |              |        
[money](#money)                             | int(30)      | 0            |        
[attached_item_guids](#attached_item_guids) | varchar(200) | Empty String |        
[cod](#cod)                                 | int(30)      | 0            |        
[stationary](#stationary)                   | int(30)      | 0            |        
[expiry_time](#expiry_time)                 | int(30)      | 0            |        
[delivery_time](#delivery_time)             | int(30)      | 0            |        
[checked_flag](#checked_flag)               | int(30)      | 0            |        
[deleted_flag](#deleted_flag)               | int(30)      | 0            |        

### message_id

The unique ID of the message/mail.

### message_type

    0 = Normal     (sender is a character)
    1 = COD        (sender will recieve money before the mail will be delivered)
    2 = Auction    (sender is the auctionshouse)
    3 = Creature   (sender is a NPC)
    4 = Gameobject 
    5 = Item       (mail includes items)

### player_guid

The character guid of the reviever from characters table.

### sender_guid

The character guid of the sender from characters table.

### subject

The subject of the mail.

### body

The text of this mail.

### money

The attached money in copper.

### attached_item_guids

The item entry IDs from playeritems table. You can attach up to 12 items.
Form stack itemguid, stack2 itemguid2, ...

### cod

Amount of money (in copper) needed to recieve this message.

### stationary

    0  = Standard
    1  = Test 1 - not used
    41 = Test 2 - not used
    61 = Gamemaster
    62 = Auction
    64 = Valentines day
    65 = Chrismas

### expiry_time

The time in seconds when the mail would be expired (for example unix time now + seconds to expire = expiry time).

### delivery_time

The time in seconds for the delivery (for example unix time now + seconds to delivery = deliver time).

### checked_flag

    0  = None
    1  = Readed      (this mail is already readed)
    2  = Returned    (this mail was already returned)
    4  = Copied      (this mail is just a copy of the text, not of the items!)
    8  = COD Payment (this mail cost to revieve it)
    16 = Has body    (this mail has text)


### deleted_flag

    1 = Mail is deleted
    0 = Mail is not deleted (default)