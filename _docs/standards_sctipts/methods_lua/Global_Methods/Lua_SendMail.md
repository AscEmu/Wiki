---
title: Lua_SendMail
type: global_methods
layout: single_markdown
position: 13
---

# Lua SendMail

## Description

Sends immediately a mail, optional with money or items.

## Syntax

```
SendMail(type, senderGuid, receivrGuid, subject, body, money, codAmount, itemRawGuid, stationeryId [, deliverdelay])
```

Possible values for type:

------------- | ----------
0             | NORMAL
1             | COD          -- Cash on Delivery
2             | AUCTION

Possible values for stationeryID (mail style):

------------- | ----------
1             | MAIL_STATIONERY_TEST1
41            | MAIL_STATIONERY_TEST2            / That's the default mail.
61            | MAIL_STATIONERY_GM               / shows a Blizz icon and the title is Support
62            | MAIL_STATIONERY_AUCTION          / shows a item icon and a auction house mail background
64            | MAIL_STATIONERY_VALENTINES       / shows a Valentine card icon and a valentine mail background
65            | MAIL_STATIONERY_XMAS             / shows XMas mail background

deliverdelay: Time in seconds to wait with delivering the mail (Default: 0)

## Usage/Example

Sends a message FROM the character with ID 15 in the character database TO the actual player, telling him welcome and give some money.

```
local Sender = 15
 
SendMail(0, NumberToGUID(Sender), pPlayer:GetGUID(), "Hello", "Welcome", 10000, 0, 0, 41)  -- send 1 gold
```

<!--- See Git bug (closed but not fixed!) https://github.com/arcemu/arcemu/issues/265 for more information.

--->
