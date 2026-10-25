---
title: battle_pets
type: logondb
category: B
layout: single_markdown
---

# battle_pets
This table contains the battle pet journal (5.x and later) of every account. The journal is account wide and shared by all realms, the world servers reach it only over [LogonComm](/Wiki/docs/docs_core/logoncomm "LogonComm").

## Structure

Field                             | Type              | Default | Comment
--------------------------------- | ----------------- | ------- | -------
[account_id](#account_id)         | int unsigned      |         | key
[id](#id)                         | int unsigned      |         | key
[species](#species)               | int unsigned      | 0       |
[breed](#breed)                   | smallint unsigned | 0       |
[display_id](#display_id)         | int unsigned      | 0       |
[level](#level)                   | smallint unsigned | 1       |
[experience](#experience)         | smallint unsigned | 0       |
[health](#health)                 | int unsigned      | 0       |
[quality](#quality)               | tinyint unsigned  | 0       |
[flags](#flags)                   | smallint unsigned | 0       |
[name](#name)                     | varchar(16)       | ''      |
[name_timestamp](#name_timestamp) | bigint unsigned   | 0       |

### account_id

The account from [accounts](/Wiki/database/logon/accounts/ "Accounts") the pet belongs to.

### id

Id of the pet inside the account. The logonserver hands it out (highest id of the account + 1) when a realm adds a pet, so several realms of one account never produce the same id.

### species

BattlePetSpecies id from the client data. A realm whose client data does not know the species keeps the pet hidden and unchanged, it shows up again on realms that know it.

### breed

The breed of the pet (3 to 12, 13 to 22 for the female variant). It selects the power, stamina and speed states of the client data, see [battle_pet_breeds](/Wiki/database/world/battle_pet_breeds/ "Battle pet breeds").

### display_id

The display the pet was learned with. A realm uses it only when its creature of the species has this display, otherwise it picks one of its own. 0 lets the client choose (species with random displays).

### level

Level of the pet, 1 to 25.

### experience

Experience gained on the current level.

### health

Current health. Power, speed and maximum health are not stored, every realm calculates them from breed, species, quality and level with its own client data.

### quality

Value | Quality
----- | ---------
0     | Poor
1     | Common
2     | Uncommon
3     | Rare
4     | Epic
5     | Legendary

### flags

Flag  | Meaning
----- | -------------------
0x001 | Favorite
0x002 | Converted
0x004 | Revoked
0x008 | Locked for convert
0x010 | Ability 0 selection
0x020 | Ability 1 selection
0x040 | Ability 2 selection
0x080 | Fanfare needed
0x100 | Display overridden

The client can only change favorite and the ability selections.

### name

The custom name, empty when the pet was not renamed.

### name_timestamp

Unix time of the last rename. Other clients ask for the name again when it changes.