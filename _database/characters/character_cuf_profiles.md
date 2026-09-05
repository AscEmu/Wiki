---
title: character_cuf_profiles
type: characterdb
category: C
layout: single_markdown
---

# character_cuf_profiles

This table stores the player's Compact Unit Frames (CUF) profile settings.

Each character can have up to **5 CUF profiles**. The `ownerguid` field identifies the character, while `id` identifies the profile.

## Structure

| Field                         | Type              | Default | Comment                                   |
| ----------------------------- | ----------------- | ------- | ----------------------------------------- |
| [ownerguid](#ownerguid)       | int unsigned      |         | Character guid from the characters table. |
| [id](#id)                     | tinyint unsigned  |         | CUF profile identifier.                   |
| [name](#name)                 | varchar(12)       | ''      | Name of the CUF profile.                  |
| [frameHeight](#frameheight)   | smallint unsigned | 0       | Height of the CUF frame.                  |
| [frameWidth](#framewidth)     | smallint unsigned | 0       | Width of the CUF frame.                   |
| [sortBy](#sortby)             | tinyint unsigned  | 0       | Determines how units are sorted.          |
| [healthText](#healthtext)     | tinyint unsigned  | 0       | Health text display mode.                 |
| [boolOptions](#booloptions)   | int unsigned      | 0       | Bitmask containing CUF boolean options.   |
| [topPoint](#toppoint)         | tinyint unsigned  | 0       | Top frame anchor point.                   |
| [bottomPoint](#bottompoint)   | tinyint unsigned  | 0       | Bottom frame anchor point.                |
| [leftPoint](#leftpoint)       | tinyint unsigned  | 0       | Left frame anchor point.                  |
| [topOffset](#topoffset)       | smallint unsigned | 0       | Top frame offset.                         |
| [bottomOffset](#bottomoffset) | smallint unsigned | 0       | Bottom frame offset.                      |
| [leftOffset](#leftoffset)     | smallint unsigned | 0       | Left frame offset.                        |

The primary key consists of `ownerguid` and `id`.

### ownerguid

This is the character guid from the `characters` table.

### id

Identifies the CUF profile.

A character can have up to **5 profiles** (`0` through `4`).

### name

The name assigned to the CUF profile.

The maximum length is 12 characters.

### frameHeight

Defines the height of the Compact Unit Frame.

### frameWidth

Defines the width of the Compact Unit Frame.

### sortBy

Defines how units in the Compact Unit Frames are sorted.

### healthText

Defines how health information is displayed in the Compact Unit Frame.

### boolOptions

A bitmask containing boolean CUF profile options.

The following options are stored as individual bits:

```
0  = KEEP_GROUPS_TOGETHER
1  = DISPLAY_PETS
2  = DISPLAY_MAIN_TANK_AND_ASSIST
3  = DISPLAY_HEAL_PREDICTION
4  = DISPLAY_AGGRO_HIGHLIGHT
5  = DISPLAY_ONLY_DISPELLABLE_DEBUFFS
6  = DISPLAY_POWER_BAR
7  = DISPLAY_BORDER
8  = USE_CLASS_COLORS
9  = DISPLAY_NON_BOSS_DEBUFFS
10 = DISPLAY_HORIZONTAL_GROUPS
11 = LOCKED
12 = SHOWN
13 = AUTO_ACTIVATE_2_PLAYERS
14 = AUTO_ACTIVATE_3_PLAYERS
15 = AUTO_ACTIVATE_5_PLAYERS
16 = AUTO_ACTIVATE_10_PLAYERS
17 = AUTO_ACTIVATE_15_PLAYERS
18 = AUTO_ACTIVATE_25_PLAYERS
19 = AUTO_ACTIVATE_40_PLAYERS
20 = AUTO_ACTIVATE_SPEC_1
21 = AUTO_ACTIVATE_SPEC_2
22 = AUTO_ACTIVATE_PVP
23 = AUTO_ACTIVATE_PVE
24 = UNKNOWN
25 = UNKNOWN
26 = UNKNOWN
```

### topPoint

Defines the top anchor point used by the CUF profile.

### bottomPoint

Defines the bottom anchor point used by the CUF profile.

### leftPoint

Defines the left anchor point used by the CUF profile.

### topOffset

Defines the offset of the top anchor point.

### bottomOffset

Defines the offset of the bottom anchor point.

### leftOffset

Defines the offset of the left anchor point.
