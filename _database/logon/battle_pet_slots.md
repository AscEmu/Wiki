---
title: battle_pet_slots
type: logondb
category: B
layout: single_markdown
---

# battle_pet_slots
This table contains the three battle slots of the battle pet journal of every account.

## Structure

Field                     | Type             | Default | Comment
------------------------- | ---------------- | ------- | -------
[account_id](#account_id) | int unsigned     |         | key
[slot](#slot)             | tinyint unsigned |         | key
[pet_id](#pet_id)         | int unsigned     | 0       |
[locked](#locked)         | tinyint unsigned | 1       |

### account_id

The account from [accounts](/Wiki/database/logon/accounts/ "Accounts").

### slot

Index of the battle slot, 0 to 2.

### pet_id

The [battle_pets](/Wiki/database/logon/battle_pets/ "Battle pets") id in the slot, 0 for an empty slot. A realm that does not know the species of the pet shows the slot empty and keeps the stored value.

### locked

1 while the slot is locked, 0 when it is unlocked. An account without rows starts with three locked slots.