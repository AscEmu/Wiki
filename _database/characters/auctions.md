---
title: auctions
type: characterdb
category: A
layout: single_markdown
---

# auctions
This table contains the auctions for the auctionshouse.

## Structure

Field                         | Type       | Default | Comment
----------------------------- | ---------- | ------- | -------
[auctionId](#auctionId)       | int(32)    |         |        
[auctionhouse](#auctionhouse) | int(32)    | NULL    |        
[item](#item)                 | bigint(10) | NULL    |        
[owner](#owner)               | bigint(10) | NULL    |        
[startbid](#startbid)         | int(32)    | NULL    |        
[buyout](#buyout)             | int(32)    | NULL    |        
[time](#time)                 | int(32)    | NULL    |        
[bidder](#bidder)             | bigint(10) | NULL    |        
[bid](#bid)                   | int(32)    | NULL    |        
[deposit](#deposit)           | int(32)    | NULL    |        

### auctionId

The unique ID for this auction.

### auctionhouse

Unfortunately this is the auctionshouse group. Have a look at the creature definitions in world db auctionhouse table.

    1 = Alliance
    6 = Horde
    7 = Neutral

### item

The item guid from playeritems table.

### owner

The character guid from characters table.

### startbid

The startprice defined by the seller in copper.

### buyout

The buyout price in copper.

### time

The remaining time of this auction in milliseconds.

### bidder

The character guid of the current highest bidder from characters table.

### bid

The current highest bid in this auction.

### deposit

The amount of copper which was required to start the auction.