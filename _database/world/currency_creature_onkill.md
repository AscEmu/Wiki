---
title: currency_creature_onkill
type: worlddb
category: C
layout: single_markdown
---

# currency_creature_onkill
This table contains the currency a player receives when a creature dies, for example the justice points of a dungeon boss. Every row of a creature is granted to each player that gets credit for the kill.

## Structure

Field                              | Type         | Default | Comment
---------------------------------- | ------------ | ------- | -------
[creature_id](#creature_id)        | int unsigned | 0       | key
[currency_id](#currency_id)        | int unsigned | 0       | key
[currency_count](#currency_count)  | int unsigned | 0       |

### creature_id

The entry ID of the creature from the [creature_properties](/Wiki/database/world/creature_properties/ "Creature properties") table.

### currency_id

The currency from **CurrencyTypes** of the client. A row with a currency the client does not know is skipped.

### currency_count

The amount of the currency every player with kill credit receives.
