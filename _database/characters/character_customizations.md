---
title: character_customizations
type: characterdb
category: C
layout: single_markdown
---

# character_customizations
This table contains the look of a character as the customization choices of the clients from 9.x on: one row per option (skin color, face, hair, horns, tattoos, ...). A character created by such a client stores the choices as sent; a character created by an older client, an old character at its next login and a character leaving the barber shop get the rows derived from the look bytes of the **characters** row, so every character has them. The clients from 9.x on receive the rows in the character list and in the create block; the older clients keep reading the look bytes.

## Structure

Field                              | Type         | Default | Comment
---------------------------------- | ------------ | ------- | -------
[guid](#guid)                      | int unsigned |         | key
[option_id](#option_id)            | int unsigned |         | key
[choice_id](#choice_id)            | int unsigned | 0       |

### guid

The guid of the character from [characters](/Wiki/database/characters/characters/ "Characters").

### option_id

The ChrCustomizationOption id of the client.

### choice_id

The ChrCustomizationChoice id of the client chosen for the option.
