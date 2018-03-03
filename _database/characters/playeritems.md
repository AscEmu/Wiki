---
title: playeritems
type: characterdb
category: P
layout: single_markdown
---

# playeritems
This table contains the player items.

## Structure

Field                                     | Type       | Default  | Comment
----------------------------------------- | ---------- | -------- | -------
[ownerguid](#ownerguid)                   | int(10)    | 0        |        
[guid](#guid)                             | bigint(10) | Auto Num |        
[entry](#entry)                           | int(10)    | 0        |        
[wrapped_item_id](#wrapped_item_id)       | int(30)    | 0        |        
[wrapped_creator](#wrapped_creator)       | int(30)    | 0        |        
[creator](#creator)                       | int(10)    | 0        |        
[count](#count)                           | int(10)    | 0        |        
[charges](#charges)                       | int(10)    | 0        |        
[flags](#flags)                           | int(10)    | 0        |        
[randomprop](#randomprop)                 | int(10)    | 0        |        
[randomsuffix](#randomsuffix)             | int(10)    |          |        
[itemtext](#itemtext)                     | int(10)    | 0        |        
[durability](#durability)                 | int(10)    | 0        |        
[containerslot](#containerslot)           | int(10)    |  -1      |        
[slot](#slot)                             | int(10)    | 0        |        
[enchantments](#enchantments)             | longtext   |          |        
[duration_expireson](#duration_expireson) | int(10)    | 0        |        
[refund_purchasedon](#refund_purchasedon) | int(10)    | 0        |        
[refund_costid](#refund_costid)           | int(10)    | 0        |        
[text](#text)                             | text       |          |        

### ownerguid

This is the player guild ID from characters table.

### guid

This field is filled by the database.

### entry

The entry ID of the item from item_properties table.

### wrapped_item_id

The "wrapped" item entry ID from item_properties template.
NOTE: The item needed the flag 
<strike>512</strike> Something is curious with the item flags!

### wrapped_creator

The creator guid from characters table.

### creator

The character ID of the creator from characters table. Only for items with flags = 2 (conjured).

### count

This value define, how many of this item is stacked in the slot.

### charges

The left charges of this item.

### flags

The flag of the playeritem:

    0          = no flag
    1          = soulbound
    2          = conjured
    4          = lootable
    8          = wrapped
    16         = broken
    32         = indestructible
    <strike>64         = unknown
    128        = unknown
    256        = unknown</strike>
    512        = gift
    1024       = create item (probably wrong)
    2048       = lootable in ffa (free for all)
    4096       = refundable
    8192       = signable
    16384      = readable
    <strike>32768      = unknown</strike>
    65536      = event required (maybe wrong)
    <strike>131072     = unknown</strike>
    262144     = prospectable
    524288     = unique equipment
    <strike>1048576    = unknown</strike>
    2097152    = useable in arena
    4194304    = thrown
    8388608    = shapeshitg ok
    <strike>16777216   = unknwon</strike>
    33554432   = profession recipes (lootable if you meet requirements)
    <strike>67108864   = unknown</strike>
    134217728  = accountbound
    <strike>268435456  = unknown</strike>
    536870912  = millable
    <strike>1073741824 = unknown</strike>
    2147483648 = bind on pickup (tradeable)

### randomprop

If random properties point is negative that means the item uses random suffix as random enchantment

### randomsuffix

If random properties point is negative that means the item uses random suffix as random enchantment.
If random properties is <= "0" randomsuffix is set to "0".

### itemtext

The tex which is shown at the bottom of the item's tooltip.

### durability

The current durability of the items.

### containerslot

    -1 = default Backpack
    19 = bag in first bagslot
    20 = bag in second bagslot
    21 = bag in third bagslot
    22 = bag in fourth bagslot

### slot

If the default Backpack (-1 in containerslot) is set:
**Equipment slots**

    0  = Head
    1  = Neck
    2  = Shoulders
    3  = Shirt
    4  = Chest
    5  = Waist
    6  = Legs
    7  = Feet
    8  = Wrist
    9  = Hands
    10 = Finger-0
    11 = Finger-1
    12 = Trinket-0
    13 = Trinket-1
    14 = Back
    15 = Main-Hand
    16 = Off-Hand or Shield
    17 = Relic or Ranged
    18 = Ammo

**Bag slots**

    19 = Bagslot 1
    20 = Bagslot 2
    21 = Bagslot 3
    22 = Bagslot 4

**Inventory slots for default Backpack**

    23 - 38 = Slot 1 - 16 in Backpack

**Bank slots**

    39 - 66 = Slots 1 - 28 in Bank
    67 - 73 = Bag slots 1 - 7 in Bank

**Inventory Keyring**

    86 - 117   = Keyslot 1 - 32 in Keyring

**Currency/Token slots**

    118-135  = Slot 1 - 32 Currencies (emblems,marks etc.)

### enchantments

In this row you find three values separated by ",".
The form of these values:

<Enchantment ID>, <time>,<Enchantment Slot>


### duration_expireson

Unixtime when the item expire (appears on items with flags = 2 (conjured) )

### refund_purchasedon

Will be set to "0" if it would send by mail. Seems it would be set by selling in auctionshouse.

### refund_costid

The auctionshouse item id... let me check this.