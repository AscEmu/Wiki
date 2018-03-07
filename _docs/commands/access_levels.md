---
title: Access Levels
type: command
layout: single_markdown
position: 1

---
# Access Levels

## Introduction
There are various levels of GM commands you can privilege game accounts with.

The GM levels are additive, meaning the letters can be combined to provide a user with any desired combination of command groups.

A normal player account should be created with GM level 0. (ZERO)

There are two other Special Command Groups, a and z. a gives a user access to every command except the ones in the z group.

An account with GM level az (which is a + z) is considered to have Full Administrator access.

### Worldserver character_db

##### ![alt text](/Wiki/images/world_icon_s.jpg "Worldserver logo") You can set the access level in the table "account_permissions":
{: .info }

## Available Levels
    b - Character bans, kicks, paralyze.
    c - Block/allow whispers, get tickets from help queue, speak and understand all languages.
    d - Debug, lots of advanced functions, see page.  
    e - Battlegrounds, start, stop, enter, leave.
    f - Disconnect by player, disconnect by account.
    g - Whisper block/allow.
    h - Shows help for commands.
    i - Invisible.
    j - Invincible.
    l - Lookup access.
    m - Instant teleport to starting location, char additems/removeitems
    n - Reset rep, skills, talent and NPC commands.
    o - GameObject commands.
    p - Lists GMs online.
    q - Recall commands, list, port, add, delete.
    r - Kill player/creature, and revive self/player.
    s - Save, save all commands.
    t - GM flag on/off. (Adds the <gm> in name)
    u - Announcements.
    v - Summon/appear at player, worldport and warp to trigger.
    w - Waypoint commands.

### Special Groups
    0 - Normal Player.
    a - All commands in the above groups and: Account bans, kicks, mute, and spawn bot.
    z - Account commands, server restart and shutdown.
