---
title: Commands
type: command
layout: single_markdown
position: 2
---

# Command Tables

## .account

Subcommand | Access | Description                                                     | Usage
---------- | ------ | --------------------------------------------------------------- | ----------------------------------------------------
create     | a      | Creates an account                                              | .account create (account_name) (password)
ban        | a      | Bans account.                                                   | .account ban (account_name) (duration) (reason_text)
changepw   | 0      | Change your own password                                        | .account changepw (current_pw) (new_pw) (new_pw)
level      | z      | Sets gm level on account. Pass it username and 0,1,2,3,az, etc. | .account level (acc_id) (level)
mute       | a      | Mutes account for (timeperiod).                                 | .account mute (acc_id)
unban      | z      | Unbans account.                                                 | .account unban (account_name)
unmute     | a      | Unmutes account (x)                                             | .account unmute (acc_id)

## .achieve

Subcommand | Access | Description                                  | Usage
---------- | ------ | -------------------------------------------- | ----------------------
complete   | m      | completes achievements id                    | .achieve complete (id)
criteria   | m      | completes the specified achievement criteria | .achieve criteria (id)
reset      | m      | resets achievements id                       | .achieve reset (id)

## .admin

Subcommand | Access | Description                                                   | Usage
---------- | ------ | ------------------------------------------------------------- | ------------------------------------------------------
castall    | z      | Makes all players online cast spell (x).                      | .admin castall (spell id)
dispelall  | z      | Dispels all negative (or positive w/ 1) auras on all players. | .admin dispelall (spell id)
masssummon | z      | Summons all online players to your location                   | .admin masssummon (optional h or a for Horde/Alliance)
playall    | z      | Plays a sound to everyone on the realm.                       | .admin playall (sound_id)

## announcements

### .announce

Access: u 

Description: Sends Msg To All 

Usage: .announce (text to announce) 

## .arena

Subcommand      | Access | Description                                                                                             | Usage
--------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------------------------------
createteam      | e      | Creates arena team with (type) (name) for targeted player.                                              | .arena createteam (type) (name)
setteamleader   | e      | Sets the arena team leader for (type) for targeted player (if he is a member of a arena team with type. | .arena setteamleader(type)
resetallratings | z      | Resets all arena teams to their default rating                                                          | .arena resetallratings

### types
    2 = 2v2
    3 = 3v3
    5 = 5v5

### .wannounce

Access: u 

Description: Sends Widescreen Msg To All 

Usage: .wannounce (text to announce)

## .ban and .unban

.ban Subcommand   | Access | Description                               | Usage
----------------- | ------ | ----------------------------------------- | ---------------------------------------------------
all               | a      | Bans account, ip, and character.          | .ban all (char_name) (duration) (reason_text)
character         | b      | Bans character.                           | .ban character (char_name) (duration) (reason_text)
ip                | m      | Adds an address to the IP ban table.      | .ban ip (ip_address) (duration) (reason_text)

.unban Subcommand | Access | Description                               | Usage
----------------- | ------ | ----------------------------------------- | ---------------------------------------------------
character         | b      | Unbans character.                         | .unban character (char_name)
ip                | m      | Deletes an address from the IP ban table. | .unban ip (ip_address)

Note: The (duration) for the ban commands includes a value and the types: (h)hours, (d)days, (w)weeks, (m)months, (y)years, default minutes
For example:
    .ban char (char_name) 30  = bans char for 30 minutes
    .ban char (char_name) 15d = bans char for 15 days
    .ban char (char_name) 1w  = bans char for 1 week


## .battleground

Subcommand     | Access | Description                                                   | Usage
-------------- | ------ | ------------------------------------------------------------- | ------------------------------------------------------------------
forceinitqueue | z      | Forces initialization of all battlegrounds with active queue. | .battleground forceinitqueue
getqueue       | z      | Gets common battleground queue information.                   | .battleground getqueue
info           | e      | Displays information about current battleground.              | .battleground info
leave          | e      | Leaving the current battleground.                             | .battleground leave
menu           | e      | Shows BG Menu                                                 | .battleground menu
pause          | e      | Pauses current battleground match.                            | .battleground pause
playsound      | e      | Plays sound_id to all characters in the current bg.           | .battleground playsound (sound_id)
start          | e      | Starts current battleground match.                            | .battleground start
setscore       | e      | Sets battleground score. 2 Arguments.                         | .battleground setscore (Teamid) (Score)
setstatus      | e      | NYI                                                           | .battleground setstatus (status)
setworldstate  | e      | Var can be in hex. WS Value.                                  | .battleground setworldstate (var)
setworldstates | e      | Var can be in hex. WS Value.                                  | .battleground setworldstate (var)


## .char

Subcommand          | Access | Description                                                                      | Usage
------------------- | ------ | -------------------------------------------------------------------------------- | -------------------------------------------------------------
add                 | m      | Shows .character add commands                                                    | .character add
set                 | m      | Shows .character set commands                                                    | .character set
list                | m      | Shows .character list commands                                                   | .character list
clearcooldowns      | m      | Clears all cooldowns for your class                                              | .character clearcooldowns
demorph             | m      | Demorphs targeted character from morphed model                                   | .char demorph
levelup             | m      | Adds x level to targeted character.                                              | .char levelup (levels)
removeauras         | m      | Removes all auras from target                                                    | .character removeauras
removesickness      | m      | Removes resurrection sickness from the target                                    | .char removesickness
learn               | m      | Learns spell to targeted character.                                              | .char learn (spell_id)
unlearn             | m      | Unlearns spell of targeted character.                                            | .char unlearn (spell_id)
learnskill          | m      | Learns skill targeted character.                                                 | .char learnskill (skill_id) (optional) (value) (maxvalue)
advanceskill        | m      | Advances skill line x times..                                                    | .char advanceskill (skill_id) (amount, optional, default = 1)
removeskill         | m      | Removes skill_id of the targeted character.                                      | .char removeskill (skill_id)
increaseweaponskill | m      | Increase equipped weapon skill x times (defaults to 1).                          | .char increaseweaponskill (count)
resetreputation     | n      | Resets reputation to character start level.                                      | .char resetreputation
resetspells         | n      | Resets all spells to starting spells of targeted player. DANGEROUS.              | .char resetspells
resettalents        | n      | Resets all talents of targeted player to that of their current level. DANGEROUS. | .char resettalents
resetskills         | n      | Resets all skills of targeted character.                                         | .char resetskills
removeitem          | m      | Removes item x count y from targeted char inventory.                             | .char removeitem (item_entry) (count)
advanceallskills    | m      | Advances all skills (x) points.                                                  | .char advanceallskills (skill_level)

### .char add

Subcommand  | Access | Description                                     | Usage
----------- | ------ | ----------------------------------------------- | -----------------------------------
copper      | m      | Adds amount of copper (x) the selected target.  | .char add  copper (copper)
silver      | m      | Adds amount of silver (x) the selected target.  | .char add  silver (silver)
gold        | m      | Adds amount of gold (x) the selected target.    | .char add gold (gold)
honorpoints | m      | Adds x amount of honor points/currency          | .char add honorpoints (points)
honorkills  | m      | Adds x amount of honor kills                    | .char add honorkills (kills)
item        | m      | Adds item x count y to targeted char inventory. | .char add item (item_entry) (count)
itemset     | m      | Adds item set to targeted char inventory.       | .char add itemset (itemset_id)

### .char set

Subcommand    | Access | Description                                       | Usage
------------- | ------ | ------------------------------------------------- | ----------------------------------------
allexplored   | m      | Reveals the unexplored parts of the map.          | .char set allexplored
gender        | m      | Changes gender of target. 0=male, 1=female.       | .char set  gender (gender)
itemsrepaired | n      | Sets all items repaired for selected player       | .char set itemsrepaired
level         | m      | Sets level of selected target to (x).             | .char set level (x)
name          | m      | Renames character x to y.                         | .char set name (current_name) (new_name)
phase         | m      | Sets phase of selected player                     | .char set phase (phase)
speed         | m      | Sets speed of the selected target to (x).         | .char set speed (speed)
name          | m      | Renames character x to y.                         | .char set name (current_name) (new_name)
standing      | m      | Sets standing of faction x to y.                  | .char set standing(faction) (standing)
talentpoints  | m      | Sets available talent points of the target.       | .char set talentpoints (amount)
title         | m      | Sets pvp title for target                         | .char set title (hex)
forcerename   | m      | Forces char x to rename on next login             | .char set forcerename (char_name)
customize     | m      | Allows char x to customize on next login          | .char set customize (char_name)
factionchange | m      | Allows char x to change the faction on next login | .char set factionchange (char_name)
racechange    | m      | Allows char x to change the race on next login    | .char set racechange (char_name)

### .char list

Subcommand | Access | Description                                       | Usage
---------- | ------ | ------------------------------------------------- | ---------------------------------
skills     | m      | Gets all the skills from targeted player.         | .char list skills
spells     | m      | Gets all the spells from targeted player.         | .char list spells
standing   | m      | Gets standing of faction from targeted character. | .char list standing  (faction_id)
items      | m      | Shows items of selected Player                    | .char list items
kills      | m      | Shows kills of selected Player                    | .char list kills
instances  | z      | Shows persistent instances of selected Player     | .char list instances

## .cheat

Subcommand  | Access | Description                                     | Usage
----------- | ------ | ----------------------------------------------- | ------------------
list        | m      | Shows active cheats of targeted character.      | .cheat list
taxi        | m      | Toggles TaxiCheat on selected player.           | .cheat taxi
cooldown    | m      | Toggles CooldownCheat on selected player.       | .cheat cooldown
casttime    | m      | Enables no cast time cheat.                     | .cheat casttime
power       | m      | Disables mana consumption etc.                  | .cheat power
god         | m      | Sets god mode, prevents you from taking damage. | .cheat god
fly         | m      | Sets fly mode                                   | .cheat fly
aurastack   | m      | Enables aura stacking cheat.                    | .cheat aurastack
itemstack   | m      | Enables item stacking cheat.                    | .cheat itemstack
triggerpass | m      | Ignores area trigger prerequisites.             | .cheat triggerpass

## .commands

Access: h 

Description: Shows Commands 

Usage: .commands 

## .debug

Subcommand          | Access | Description                                                                              | Usage
------------------- | ------ | ---------------------------------------------------------------------------------------- | ------------------------------------
dumpscripts         | d      | Dumps aispells to a new table creature_ai_scripts_(mapid)                                | .debug dumpscripts (mapid)
sendcreaturemove    | d      | Requests the target creature moves to you using movement manager.                        | .debug sendcreaturemove
dopctdamage         | z      | Do percent damage to creature target                                                     | .debug dopctdamage (percent damage)
setscriptphase      | z      | ScriptPhase test                                                                         | .debug setscriptphase (script phase)
aicharge            | z      | AiCharge test                                                                            | .debug aicharge
aiknockback         | z      | AiKnockBack test                                                                         | .debug aiknockback
aijump              | z      | AiJump test                                                                              | .debug aijump
aifalling           | z      | AiFalling test                                                                           | .debug aifalling
movetospawn         | z      | Move target to spwn                                                                      | .debug movetospawn
position            | z      | Show position                                                                            | .debug position
setorientation      | z      | Sets orientation on npc                                                                  | .debug setorientation (orientation)
infront             | d      |                                                                                          | .debug infront
showreact           | d      |                                                                                          | .debug showreact (ai raction)
aimove              | d      |                                                                                          | .debug aimove (move) (run) (time) (method)
dist                | d      | Shows distance between you and target                                                    | .debug dist
face                | d      |                                                                                          | .debug face
dumpstate           | d      | Dumps server state to chat                                                               | .debug dumpstate
moveinfo            | d      | Shows movement info aof selected target                                                  | .debug moveinfo
landwalk            | d      |                                                                                          | .debug landwalk
waterwalk           | d      | Enables/disables Waterwalk for selected target                                           | .debug waterwalk
castspell           | d      | Casts spell on selected target.                                                          | .debug castspell (spellid)
castself            | d      | Selected target casts spell (spellId) on itself.                                         | .debug castself (spellId)
castspellne         | d      | Casts spell on target (only plays animations, doesnt handle effects or range/facing/etc. | .debug castspellne (spellid)
aggrorange          | d      | Shows aggro Range of the selected Creature.                                              | .debug aggrorange
knockback           | d      | Knocks selected target back (default target you).                                        | .debug knockback (value)
fade                | d      | calls ModThreatModifyer().                                                               | .debug fade (value)
threatMod           | d      | calls ModGeneratedThreatModifyer().                                                      | .debug threatMod (value)
calcThreat          | d      | calculates threat.                                                                       | .debug calcThreat (dmg) (spellId)
threatList          | d      | returns all AI_Targets of the selected Creature.                                         | .debug threatList
gettptime           | d      | grabs transporter travel time                                                            | .debug gettptime
dumpcoords          | d      | Dumps coords to db or file (needs to be checked)                                         | .debug dumpcoords
sendpacket          | d      | Sending opcodes to you                                                                   | .debug (opcode ID), (data)
sqlquery            | d      |                                                                                          | .debug sqlquery (sql query)
rangecheck          | d      | Checks the yard range and internal range between the player and the target.              | .debug rangecheck
setallratings       | d      | Sets rating values to incremental numbers based on their index.                          | .debug setallratings
testlos             | d      | tests los                                                                                | .debug testlos
testindoor          | d      | tests indoor                                                                             | .debug testindoor
getheight           | d      | Gets height                                                                              | .debug getheight
deathstate          | d      | returns current deathstate for target                                                    | .debug deathstate
sendfailed          | d      |                                                                                          |
playmovie           | d      | Triggers a movie for a player                                                            | .debug playmovie (movie_id)
auraupdate          | d      | (SpellID) (Flags) (StackCount) (caster guid = player target)                             |
auraremove          | d      | (VisualSlot)                                                                             |
spawnwar            | d      | Spawns desired amount of npcs to fight with eachother                                    | .debug spawnwar (number) (npc_entry)
updateworldstate    | d      | Sets the specified worldstate field to the specified value                               | .debug updateworldstate
initworldstates     | d      | (re)initializes the worldstates.                                                         |
clearworldstates    | d      | Clears the worldstates                                                                   | .debug clearworldstates
pvpcredit           | m      | Sends PVP credit packet, with specified rank and points                                  | .debug pvpcredit
calcdist            | d      | Displays distance between your current position and (x) (y) (z)                          | .debug calcdist
dumpmovement        | d      | Dump movement                                                                            | .debug dumpmovement
movefall            | d      | Makes the creature fall to the ground                                                    | .debug movefall

## .event

Subcommand | Access | Description                      | Usage
---------- | ------ | -------------------------------- | -----------------
list       | m      | Shows available event id's       | .event list
start      | m      | Starts event by event_id         | .event start (id)
stop       | m      | Stops active event by id         | .event stop (id) 
reset      | m      | Resets forced flags for an event | .event reset (id)
reload     | m      | Reloads all events from database | .event reload

## .getskilllevel

Access: m 

Description: Gets the current level of a skill 

Usage: .getskilllevel (skill id) 

## .gm

Subcommand    | Access | Description                                                  | Usage
------------- | ------ | ------------------------------------------------------------ | ----------------------------
active        | t      | Set/Remove (GM) tag.                                         | .gm active
allowwhispers | c      | Allows whispers from player while in .gm on mode.            | .gm allowwhispers
announce      | u      | Send an announce to all online GMs                           | .gm announce (your announce)
blockwhispers | c      | Blocks whispers from player revert .gm allowwhispers mode.   | .gm blockwhispers
devtag        | 1      | Set/Remove (DEV) tag.                                        | .gm devtag
list          | 0      | Shows active GM's                                            | .gm list
logcomment    | t      | Adds a comment to the gm log                                 | .gm log (Your comment)

## .gmticket

Subcommand                       | Access | Description                                                  | Usage                                        | MyMaster
-------------------------------- | ------ | ------------------------------------------------------------ | -------------------------------------------- | --------
get                              | c      | Gets GM Ticket list.                                         | .gmticket get                                |  Yes
getId                            | c      | Gets GM Ticket by ticket ID.                                 | .gmticket getId (ticket_id)                  |  Yes
delId                            | c      | Deletes GM Ticket by ticket ID.                              | .gmticket delId (ticket_id                   |  Yes
(strike)list(/strike)            | c      | Lists all active GM Tickets.                                 | .gmticket list                               |
(strike)get(/strike)             | c      | Gets GM Ticket with ID x.                                    | .gmticket get (ticket_id)                    |
(strike)remove(/strike)          | c      | Removes GM Ticket with ID x.                                 | .gmticket remove (ticket_id)                 |
(strike)deletepermanent(/strike) | z      | Deletes GM Ticket with ID x permanently.                     | .gmticket deletepermanent (ticket_id)        |
(strike)assign(/strike)          | c      | Assigns GM Ticket with id x to GM y (if empty to your self). | .gmticket assign (ticket_id) (gm_name)       |
(strike)release(/strike)         | c      | Releases assigned GM Ticket with ID x.                       | .gmticket release (ticket_id)                |
(strike)comment(/strike)         | c      | Sets comment x to GM Ticket with ID y.                       | .gmticket comment (comment_text) (ticket_id) |
toggle                           | z      | Toggles the ticket system status.                            | .gmticket toggle                             |  Yes

## .gobject

Subcommand | Access | Description                                                             | Usage
---------- | ------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------
select     | o      | Selects the nearest GameObject to you                                   | .gobject select
selectguid | o      | Selects the GO with GUID                                                | .gobject selectguid (guid)
delete     | o      | Deletes selected GameObject                                             | .go delete
spawn      | o      | Spawns a GameObject by entry ID                                         | .gobject spawn (entry_id)
info       | o      | Gives you information about selected GO                                 | .gobject info
damage     | o      | Damages the GO for the specified hitpoints                              | .gobject damage (hitpoints)
rebuild    | o      | Rebuilds the selected GO.                                               | .gobject rebuild
open       | o      | Opens/Closes the selected GO.                                           | .go open
enable     | o      | Enables the selected GO for use.                                        | .gobject enable
export     | o      | Exports the current GO selected                                         | .gobject export
movehere   | g      | Moves selected GO to your position                                      | .gobject movehere
rotate     | g      | Rotates the selected GO (x-, y-,o-axis). Default o.                     | .go rotate o (setting the rotation of GO = rotation of player)

### .gobject set

Subcommand   | Access | Description                              | Usage
------------ | ------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------
state        | o      | Sets the state byte of the selected GO   | .gobject set state (state_bytes) 
flag         | o      | Sets the flags of the GO                 | .gobject set flag (flags)
faction      | o      | Sets the faction of the GO               | .gobject set faction (faction_id)
phase        | o      | Phase selected GameObject                | .gobject set phase (phase_num)
scale        | o      | Sets scale of selected GO. (1 is normal) | .gobject set scale (scale)
animprogress | o      | Sets anim progress                       | .gobject set animprogress

## go*  (teleport)

Subcommand      | Access | Description                                        | Usage
--------------- | ------ | -------------------------------------------------- | ----------------------------
gocreature      | v      | Teleports you to the creature with spawn id x.     | .gocreature (spawn_id)
gogameobject    | v      | Teleports you to the gameobject with spawn ID      | .gogameobject (spawn_id)
gostartlocation | m      | Teleports player target to names starting location | .gostartlocation (race_name)
gotrig          | v      | Teleports you to the chosen area trigger position. | .gotrig (area_trigger_id)

## .gps

Access: p 

Description: Shows your position 

Usage: .gps 

## .guild

Subcommand   | Access | Description                        | Usage
------------ | ------ | ---------------------------------- | -----------------------------------
join         | m      | Force joins a guild                | .guild join (guild_name)
create       | m      | Creates a guild.                   | .guild create (guild_name)
rename       | m      | Renames a guild.                   | .guild rename (old_name) (new_name)
listmembers  | m      | Lists guildmembers and their ranks | .guild members (guild_name)
removeplayer | m      | Removes a player from a guild.     | .guild removeplayer (player_name)
disband      | m      | Disbands the guild of your target. | .guild disband

## .help

Access: h 

Description: Shows help for command 

Usage: .help (command) 

## .instance

Subcommand | Access | Description                                                       | Usage
---------- | ------ | ----------------------------------------------------------------- | -------------------------------------------------------------
create     | z      | Generically instances a map that requires instancing, mapid x y z | .instance create (instancin) (map_id) (x-pos) (y-pos) (z-pos)
reset      | z      | Removes instance ID x from target player                          | .instance reset (instance_id)
resetall   | m      | Removes all instance IDs from target player.                      | .instance resetall
shutdown   | z      | Shutdown instance with ID x (default is current instance).        | .instance shutdown (instance_id)
info       | m      | Gets info about instance with ID x (default is current instance). | .instance info (instance_id)
exit       | m      | Exits current instance, return to entry point.                    | .instance exit

## invin/invis

### .invincible

Access: j 

Description: Toggles INVINCIBILITY (mobs won't attack you) 

Usage: .invincible [player name]

### .invisible

Access: i 

Description: Toggles INVINCIBILITY and INVISIBILITY 

Usage: .invisible [player name]

## .kick

Subcommand | Access | Description                                   | Usage
---------- | ------ | --------------------------------------------- | -------------------------------------
account    | f      | Disconnects the session with account by name. | .kick account (account_name) (reason)
ip         | f      | Disconnects the session by ip address.        | .kick ip (ip_address) (reason)
player     | f      | Disconnects the player by player name.        | .kick player (player_name) (reason)

Note: The value (reason) is optional

## .kill

Access: r 

Description: Kills selected unit 

Usage: .kill (to kill a selected unit.) 
or: .kill (playername) (to kill a player with name (playername))

## .logcomment

Access: 1 

Description: Adds a comment to the GM log for the admins to read 

Usage: .logcomment (text to log) 

## .lookup

Subcommand  | Access | Description                   | Usage
----------- | ------ | ----------------------------- | --------------------------------------
achievement | l      | Looks up achievement by name. | .lookup achievement (achievement name)
creature    | l      | Looks up creature by name.    | .lookup creature (creature name)
faction     | l      | Looks up faction by name.     | .lookup faction (faction name)
item        | l      | Looks up item by name.        | .lookup item (item name)
object      | l      | Looks up gameobject by name.  | .lookup object (gameobject name)
quest       | l      | Looks up quest by title.      | .lookup quest (quest title)
skill       | l      | Looks up skill by name.       | .lookup skill (skill name)
spell       | l      | Looks up spell by name.       | .lookup spell (spell name)

## .modify

Subcommand      | Access | Description                                                    | Usage
--------------- | ------ | -------------------------------------------------------------- | ---------------------------------------
hp              | m      | Modifies health points (HP) of selected target                 | .modify hp (value)
mana            | m      | Modifies mana points (MP) of selected target.                  | .modify mana (value)
rage            | m      | Modifies rage points of selected target.                       | .modify rage (value)
energy          | m      | Modifies energy points of selected target.                     | .modify energy (value)
runicpower      | m      | Modifies runic power points of selected target.                | .modify runicpower (value)
strength        | m      | Modifies the strength value of the selected target.            | .modify strength (value)
agility         | m      | Modifies the agility value of the selected target.             | .modify agility (value)
intelligence    | m      | Modifies the intelligence value of the selected target.        | .modify int (value)
spirit          | m      | Modifies the spirit value of the selected target.              | .modify spirit (value)
armor           | m      | Modifies the armor of selected target.                         | .modify armor (value)
holy            | m      | Modifies the holy resistance of selected target.               | .modify holy (value)
fire            | m      | Modifies the fire resistance of selected target.               | .modify fire (value)
nature          | m      | Modifies the nature resistance of selected target.             | .modify nature (value)
frost           | m      | Modifies the frost resistance of selected target.              | .modify frost (value)
shadow          | m      | Modifies the shadow resistance of selected target.             | .modify frost (value)
arcane          | m      | Modifies the arcane resistance of selected target.             | .modify arcane (value)
damage          | m      | Modifies the damage done by the selected target.               | .modify damage (value)
ap              | m      | Modifies the attack power of the selected target.              | .modify ap (value)
rangeap         | m      | Modifies the range attack power of the selected target.        | .modify rangeap (value)
scale           | m      | Modifies the scale of the selected target (1 is normal scale). | .modify scale (value)
nativedisplayid | m      | Modifies the native display identifier of the target.          | .modify nativedisplayid (new_displayid)
displayid       | m      | Modifies the display identifier (DisplayID) of the target.     | .modify displayid (display_id)
flags           | m      | Modifies the flags of the selected target.                     | .modify flags (value)
faction         | m      | Modifies the faction template of the selected target.          | .modify faction (faction_id)
dynamicflags    | m      | Modifies the dynamic flags of the selected target.             | .modify dynamicflags (value)
happiness       | m      | Modifies the happiness value of the selected pet.              | .modify happiness (value)
boundingraidius | m      | Modifies the bounding radius of the selected target.           | .modify boundinfradius (value)
combatreach     | m      | Modifies the combat reach of the selected target.              | .modify combatreach (value_in_feet)
emotestate      | m      | Modifies the Unit emote state of the selected target.          | .modify npcemotestate (emote_id)
bytes0          | m      | WARNING! Modifies the bytes0 entry of selected target.         | .modify bytes0 (values)
bytes1          | m      | WARNING! Modifies the bytes1 entry of selected target.         | .modify bytes1 (values)
bytes2          | m      | WARNING! Modifies the bytes2 entry of selected target.         | .modify bytes2 (values)

## mounting

### .mount

Access: m 

Description: Mounts into specified modelid 

Usage: .mount (model_id) 

### .dismount

Access: h 

Description: Dismounts selected target 

Usage: .dismount

## .npc

Subcommand       | Access | Description                                                                            | Usage
---------------- | ------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------
addagent         | n      |                                                                                        | .npc addagent (agent) (procEvent) (procChance) (procCount) (spellId) (spellType) (spelltargetType) (spellCooldown) (floatMisc1) (Misc2)
addtrainerspell  | m      | Adds trainer spell to trainer                                                          | .npc addtrainerspell (spell id) (training cost) (required spell id) (required player level) (delete spell id)
set              | 0      | Shows set subcommands                                                                  | .npc set
vendoradditem    | n      | Adds to vendor                                                                         | .npc vendoradditem (item_entry) (count)
vendorremoveitem | n      | Removes from vendor.                                                                   | .npc vendorremoveitem (item_entry)
delete           | n      | Deletes targetd mob from world.                                                        | .npc delete .npc delete 1 (removes creature from creature_spawns table).
info             | n      | Displays information of the targeted npc.                                              | .npc info
listAgent        | n      |                                                                                        | .npc listAgent
say              | n      | Makes selected mob say text (text).                                                    | .npc say (text)
yell             | n      | Makes selected mob yell text (text).                                                   | .npc yell (Text)
come             | n      | Makes npc move to your position                                                        | .npc come
return           | n      | Returns ncp to spawnpoint.                                                             | .npc return
spawn            | n      | Spawns npc of entry (id)                                                               | .npc spawn
respawn          | n      | Respawns a dead npc from its corpse.                                                   | .respawn
possess          | n      | Possess an npc (mind control)                                                          | .npc possess
unpossess        | n      | Unpossess any currently possessed npc.                                                 | .npc unpossess
select           | n      | selects npc closest                                                                    | .npc select
follow           | m      | Sets selected npc to follow you                                                        | .npc npcfollow
stopfollow       | m      | Sets npc to not follow anything                                                        | .npc nullfollow
listloot         | m      | displays possible loot for the selected NPC.                                           | .npc listloot (quality_id)
cast             | n      | Makes the selected NPC cast this spell.                                                | .npc cast (spellid)

### .npc set

Subcommand      | Access | Description                                                 | Usage
--------------- | ------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------
canfly          | n      | Toggles selected NPC CanFly state                           | .npc set canfly (save)
emote           | n      | Sets emote state of the targeted npc.                       | .npc set emote (emote_id) (sets emote temporarily) .npc set emote (emote)
equip           | m      | Equipping selected npc.                                     | .npc set equip (slot) (itemid) (to equip item) .npc set equip (slot) 0 (to remove equiped item) Slots: 0 =melee, 1 = offhand, 2 = ranged
formationmaster | m      | Sets formation master.                                      | .npc set formationmaster to you
flags           | m      | Change flags for creature spawn. You may dclear your cache. | .npc set flags (flags) .npc set flags (flags)
phase           | n      | Sets phase of selected creature.                            | .npc set (phase) .npc set phase (phase)
standstate      | m      | Change standstate for creature spawn.                       | .npc set standstate (standstate) .npc set standstate (standstate)

## .pet

Subcommand  | Access | Description                         | Usage
----------- | ------ | ----------------------------------- | ---------------------------
create      | m      | Creates a pet with (entry).         | .pet create (entry_id)
dismiss     | m      | Dismisses selected pet.             | .pet dismiss
rename      | m      | Renames a selected.                 | .pet rename (name)
removespell | m      | Removes pet spell for selected pet. | .pet removespell (spell_id)
setlevel    | m      | Sets pet level of selected pet.     | .pet setlevel (level)

## .playerinfo

Access: m 

Description: Displays informations about the selected or given character 

Usage: .playerinfo [player name] 

## .quest

Subcommand  | Access | Description                                               | Usage
----------- | ------ | --------------------------------------------------------- | ----------------------------
addboth     | 2      | Add quest (id) to the targeted NPC as start & finish      | .quest addboth (questid)
addfinish   | 2      | Add quest (id) to the targeted NPC as finisher            | .quest addfinish  (questid) 
addstart    | 2      | Add quest (id) to the targeted NPC as starter             | .quest addstart (questid)
delboth     | 2      | Delete quest (id) from the targeted NPC as start & finish | .quest delboth (questid)
delfinish   | 2      | Delete quest (id) from the targeted NPC as finisher       | .quest delfinish (questid)
delstart    | 2      | Delete quest (id) from the targeted NPC as starter        | .quest delstart (questid)
complete    | 2      | Complete/Finish quest (id)                                | .quest complete (questid)
fail        | 2      | Fail quest (id)                                           | .quest fail (questid)
finisher    | 2      | Lookup quest finisher for quest (id)                      | .quest finisher (questid)
item        | 2      | Lookup itemid necessary for quest (id)                    | .quest item (questid)
list        | 2      | Lists the quests for the npc (id)                         | .quest list (npc entry_id)
load        | 2      | Loads quests from database                                | .quest load
giver       | 2      | Lookup quest giver for quest (id)                         | .quest giver (questid)
remove      | 2      | Removes the quest (id) from the targeted player           | .quest remove (questid)
reward      | 2      | Shows reward for quest (id)                               | .quest reward (questid)
status      | 2      | Lists the status of quest (id)                            | .quest status (questid)
start       | 2      | Starts quest (id)                                         | .quest start (questid)
startspawn  | 2      | Port to spawn location for quest (id) (starter)           | .quest startspawn (questid) 
finishspawn | 2      | Port to spawn location for quest (id) (finisher)          | .quest finishspawn (questid)

## .recall

Subcommand | Access | Description                                               | Usage
---------- | ------ | --------------------------------------------------------- | ------------------------------
list       | q      | List all recall locations.                                | .recal list
add        | q      | Add current position to recall location                   | .recal add (recal_name)
del        | q      | Remove a recall location by name                          | .recal del (recal_name)
port       | q      | Ports you to recalled location                            | .recal port (recal_name)
portplayer | m      | Ports specified player to a recalled location             | .recal portplayer (playername)
portus     | m      | Ports you and the targeted character to recalled location | .recal portus (recal_name)

## .revive

Access: r 

Description: Revives you, or a selected player 

Usage: .revive (revives target or self) or .revive (playername) (revives player with name (playername))

## root/unroot

### .root

Access: b 

Description: Roots the target 

Usage: .root

### .unroot

Access: b 

Description: Unroots the target 

Usage: .unroot

## .server

Subcommand     | Access | Description                                               | Usage
-------------- | ------ | --------------------------------------------------------- | --------------------------------
setmotd        | m      | Sets MOTD text.                                           | .server setmotd (text)
rehash         | z      | Reloads config file.                                      | .server rehash
reloadtable    | m      | Do not use this command on a productive server!!          | .server reloadtable (table_name)
shutdown       | z      | Initiates server shutdown in (x) seconds (30 by default). | .server shutdown (seconds)
restart        | z      | Initiates server restart in (x) seconds (30 by default).  | .server restart (seconds)
cancelshutdown | z      | Cancels a Server Restart/Shutdown.                        | .server cancelshutdown
save           | s      | Save's targeted character                                 | .server save
saveall        | s      | Save's all online characters                              | .server saveall
info           | 0      | Server info (Onlinetime, max online players,...)          | .server info

### .server reloadtable

NOTE: Do not use these commands on a productive server!!!

Subcommand          | Access | Description                      | Usage
------------------- | ------ | -------------------------------- | -----
gameobjects         | z      | Reload gameobjets                |
creatures           | z      | Reload creatures                 |
areatriggers        | z      | Reload areatriggers table        |
command_overrides   | z      | Reload command_overrides table   |
fishing             | z      | Reload fishing table             |
gossip_menu_option  | z      | Reload gossip_menu_option table  |
graveyards          | z      | Reload graveyards table          |
items               | z      | Reload items table               |
itempages           | z      | Reload itempages table           |
npc_script_text     | z      | Reload npc_script_text table     |
npc_text            | z      | Reload npc_text table            |
pet_level_abilities | z      | Reload pet_level_abilities table |
player_xp_for_level | z      | Reload player_xp_for_level table |
points_of_interest  | z      | Reload points_of_interest table  |
quests              | z      | Reload quests table              |
teleport_coords     | z      | Reload teleport_coords table     |
worldbroadcast      | z      | Reload worldbroadcast table      |
worldmap_info       | z      | Reload worldmap_info table       |
worldstring_tables  | z      | Reload worldstring_tables table  |
zoneguards          | z      | Reload zoneguards table          |

## .ticket

Subcommand | Access | Description                             | Usage
---------- | ------ | --------------------------------------- | ----------------------------------
list       | c      | Shows all active tickets                | .ticket list
listall    | c      | Shows all tickets in the database       | .ticket listall
get        | c      | Returns the content of the specified ID | .ticket get (ticketID)
close      | c      | Close ticket with specified ID          | .ticket close (ticketID) (comment)
delete     | a      | Delete ticket by specified ID           | .ticket delete (ticketID)

## teleport and summon

Subcommand | Access | Description                                  | Usage
---------- | ------ | -------------------------------------------- | ----------------------------------------------------------
appear     | v      | You appear at the chosen character position. | .appear (char_name)
summon     | v      | Summons character by name to your position   | .summon (char_name)
worldport  | v      | Ports you to given map and coordination      | .worldport (map_id) (x-position) (y-position) (z-position)

## .transport

Subcommand | Access | Description                                               | Usage
---------- | ------ | --------------------------------------------------------- | ----------------------------------------------------
info       | m      | Displays the current transport info                       | .transport info
spawn      | m      | Spawns transport with entry/period in current instance    | .transport spawn (entry:u32) (period:u32 time in ms)
start      | m      | Force starts the current transport                        | .transport start
stop       | m      | Force stops the current transport                         | .transport stop
getperiod  | m      | Displays the current transport period in ms               | .transport getperiod

## .vehicle

Subcommand         | Access | Description                                       | Usage
------------------ | ------ | ------------------------------------------------- | ---------------------------------
ejectpassenger     | m      | Ejects the passenger from the specified seat      | .vehicle ejectpassenger (seat_id)
ejectallpassengers | m      | Ejects all passengers from targeted vehicle       | .vehicle ejectallpassengers
installaccessories | m      | Installs the accessories for the selected vehicle | .vehicle installaccessories
removeaccessories  | m      | Removes the accessories of the selected vehicle   | .vehicle removeaccessories
addpassenger       | m      | Adds a new NPC passenger to the vehicle           | .vehicle addpassenger (npc_entry)

## .waypoint

Subcommand | Access | Description                                                  | Usage
---------- | ------ | ------------------------------------------------------------ | --------------------------------
add        | w      | Add wp at current pos to selected NPC.                       | .waypoint add
show       | w      | Show wp's for selected creature                              | .waypoint show
hide       | w      | Hide wp's for selected creature                              | .waypoint hide
delete     | w      | Delete selected wp                                           | .waypoint delete
deleteall  | w      | Delete all waypoints of the selected NOC.                    | .waypoint deleteall
