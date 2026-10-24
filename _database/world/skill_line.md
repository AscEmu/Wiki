---
title: skill_line
type: worlddb
category: S
layout: single_markdown
---

# skill_line
This table contains the skill lines the clients from 7.x on know beyond the SkillLine.dbc the server loads: the profession lines, the secondary professions (cooking, fishing, archaeology) and the expansion lines that hang below a profession ("Classic Blacksmithing", "Khaz Algar Blacksmithing"). The server adds them to its skill line store and learns the expansion lines together with their parent. The clients from 8.x on look every expansion line of a profession up in the skill list of a character when a profession trainer is opened, so every character carries all of them at rank 0.

A server with its own client data (12.x) reads the lines from the client and does not use this table.

## Structure

Field                              | Type              | Default | Comment
---------------------------------- | ----------------- | ------- | -------
[build](#build)                    | int unsigned      |         | key
[id](#id)                          | smallint unsigned |         | key
[category](#category)              | tinyint unsigned  | 0       |
[parent](#parent)                  | smallint unsigned | 0       |
[tier](#tier)                      | tinyint unsigned  | 0       |
[name](#name)                      | varchar(64)       |         |

### build

Client build the row is valid from. The server loads, for every id, the row with the highest build that does not exceed its own build.

### id

The skill line id of the client.

### category

The SkillLine category of the client: 9 = secondary skill, 11 = profession.

### parent

The parent skill line of an expansion line, 0 for a parent line itself.

### tier

The tier index of the expansion line below its parent: 4 = Classic, one more per expansion.

### name

The name of the skill line.
