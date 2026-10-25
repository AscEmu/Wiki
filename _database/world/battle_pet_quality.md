---
title: battle_pet_quality
type: worlddb
category: B
layout: single_markdown
---

# battle_pet_quality
This table contains the quality a battle pet species is learned with (5.x and later).

## Structure

Field                     | Type             | Default | Comment
------------------------- | ---------------- | ------- | -------
[species_id](#species_id) | int unsigned     | 0       | key
[quality](#quality)       | tinyint unsigned | 0       |

### species_id

BattlePetSpecies id from the client data. Rows of species the client data of the server does not know are skipped.

### quality

Value | Quality
----- | ---------
0     | Poor
1     | Common
2     | Uncommon
3     | Rare
4     | Epic
5     | Legendary

The quality selects the BattlePetBreedQuality multiplier of the stats. A species without a row is learned as Poor.