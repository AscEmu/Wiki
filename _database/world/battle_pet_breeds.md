---
title: battle_pet_breeds
type: worlddb
category: B
layout: single_markdown
---

# battle_pet_breeds
This table contains the breeds a battle pet species can be learned with (5.x and later). A new pet gets one of them by chance.

## Structure

Field                     | Type              | Default | Comment
------------------------- | ----------------- | ------- | -------
[species_id](#species_id) | int unsigned      | 0       | key
[breed_id](#breed_id)     | smallint unsigned | 0       | key

### species_id

BattlePetSpecies id from the client data. Rows of species the client data of the server does not know are skipped.

### breed_id

The breed (3 to 12, 13 to 22 for the female variant). It names the BattlePetBreedState rows of the client data that add power, stamina and speed. A species without rows is learned with breed 3 (balanced).

The rows cover the species up to 6.2, newer species use breed 3 until rows are added.