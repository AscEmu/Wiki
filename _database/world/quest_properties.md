---
title: quest_properties
type: worlddb
category: Q
layout: single_markdown
---

# quest_properties
This table contains the information about the quests.

## Structure

Field                                                   | Type      | Default                                             | Comment         
------------------------------------------------------- | --------- | --------------------------------------------------- | ----------------
[entry](#entry)                                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       | key
[build](#build)                                         | smallint(6)   | 12340                                           | key
[ZoneId](#ZoneId)                                       | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[sort](#sort)                                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[flags](#flags)                                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[MinLevel](#MinLevel)                                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[questlevel](#questlevel)                               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[Type](#Type)                                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredRaces](#RequiredRaces)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredClass](#RequiredClass)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredTradeskill](#RequiredTradeskill)               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredTradeskillValue](#RequiredTradeskillValue)     | int(5)    | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredRepFaction](#RequiredRepFaction)               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredRepValue](#RequiredRepValue)                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[LimitTime](#LimitTime)                                 | int(10)   | unsigned NOT NULL DEFAULT '0'                       | NOT IMPLEMENTED!
[SpecialFlags](#SpecialFlags)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       | NOT USED!       
[PrevQuestId](#PrevQuestId)                             | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[NextQuestId](#NextQuestId)                             | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[srcItem](#srcItem)                                     | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[SrcItemCount](#SrcItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[Title](#Title)                                         | char(255) | NOT NULL                                            |                 
[Details](#Details)                                     | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[Objectives](#Objectives)                               | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[CompletionText](#CompletionText)                       | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[IncompleteText](#IncompleteText)                       | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[EndText](#EndText)                                     | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[ObjectiveText1](#ObjectiveText)                        | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[ObjectiveText2](#ObjectiveText)                        | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[ObjectiveText3](#ObjectiveText)                        | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[ObjectiveText4](#ObjectiveText)                        | text      | CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL |                 
[ReqItemId1](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemId2](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemId3](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemId4](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemId5](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemId6](#ReqItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount1](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount2](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount3](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount4](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount5](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqItemCount6](ReqItemCount)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqKillMobOrGOId1](#ReqKillMobOrGOId)                  | int(10)   | NOT NULL DEFAULT '0'                                |                 
[ReqKillMobOrGOId2](#ReqKillMobOrGOId)                  | int(10)   | NOT NULL DEFAULT '0'                                |                 
[ReqKillMobOrGOId3](#ReqKillMobOrGOId)                  | int(10)   | NOT NULL DEFAULT '0'                                |                 
[ReqKillMobOrGOId4](#ReqKillMobOrGOId)                  | int(10)   | NOT NULL DEFAULT '0'                                |                 
[ReqKillMobOrGOCount1](#ReqKillMobOrGOCount)            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqKillMobOrGOCount2](#ReqKillMobOrGOCount)            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqKillMobOrGOCount3](#ReqKillMobOrGOCount)            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqKillMobOrGOCount4](#ReqKillMobOrGOCount)            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReqCastSpellId1](#ReqCastSpellId)                      | int(11)   | NOT NULL DEFAULT '0'                                |                 
[ReqCastSpellId2](#ReqCastSpellId)                      | int(11)   | NOT NULL DEFAULT '0'                                |                 
[ReqCastSpellId3](#ReqCastSpellId)                      | int(11)   | NOT NULL DEFAULT '0'                                |                 
[ReqCastSpellId4](#ReqCastSpellId)                      | int(11)   | NOT NULL DEFAULT '0'                                |                 
[ReqEmoteId1](#ReqEmoteId)                              | int(10)   | unsigned DEFAULT '0'                                |                 
[ReqEmoteId2](#ReqEmoteId)                              | int(10)   | unsigned DEFAULT '0'                                |                 
[ReqEmoteId3](#ReqEmoteId)                              | int(10)   | unsigned DEFAULT '0'                                |                 
[ReqEmoteId4](#ReqEmoteId)                              | int(10)   | unsigned DEFAULT '0'                                |                 
[RewChoiceItemId1](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemId2](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemId3](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemId4](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemId5](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemId6](#RewChoiceItemId)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount1](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount2](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount3](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount4](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount5](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewChoiceItemCount6](#RewChoiceItemCount)              | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemId1](#RewItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemId2](#RewItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemId3](#RewItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemId4](#RewItemId)                                | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemCount1](#RewItemCount)                          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemCount2](#RewItemCount)                          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemCount3](#RewItemCount)                          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewItemCount4](#RewItemCount)                          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction1](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction2](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction3](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction4](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction5](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepFaction6](#RewRepFaction)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepValue1](#RewRepValue)                            | int(10)   | NOT NULL DEFAULT '0'                                |                 
[RewRepValue2](#RewRepValue)                            | int(10)   | NOT NULL DEFAULT '0'                                |                 
[RewRepValue3](#RewRepValue)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepValue4](#RewRepValue)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepValue5](#RewRepValue)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepValue6](#RewRepValue)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewRepLimit](#RewRepLimit)                             | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewMoney](#RewMoney)                                   | int(10)   | NOT NULL DEFAULT '0'                                |                 
[RewXP](#RewXP)                                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewSpell](#RewSpell)                                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[CastSpell](#CastSpell)                                 | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[MailTemplateId](#MailTemplateId)                       | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[MailDelaySecs](#MailDelaySecs)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[MailSendItem](#MailSendItem)                           | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[PointMapId](#PointMapId)                               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[PointX](#PointX)                                       | float     | NOT NULL DEFAULT '0'                                |                 
[PointY](#PointY)                                       | float     | NOT NULL DEFAULT '0'                                |                 
[PointOpt](#PointOpt)                                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewardMoneyAtMaxLevel](#RewardMoneyAtMaxLevel)         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ExploreTrigger1](#ExploreTrigger)                      | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ExploreTrigger2](#ExploreTrigger)                      | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ExploreTrigger3](#ExploreTrigger)                      | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ExploreTrigger4](#ExploreTrigger)                      | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredOneOfQuest](#RequiredOneOfQuest)               | longtext  | NOT NULL                                            |                 
[RequiredQuest1](#RequiredQuest)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredQuest2](#RequiredQuest)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredQuest3](#RequiredQuest)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RequiredQuest4](#RequiredQuest)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RemoveQuests](#RemoveQuests)                           | longtext  | NOT NULL                                            |                 
[ReceiveItemId1](#ReceiveItemId)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemId2](#ReceiveItemId)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemId3](#ReceiveItemId)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemId4](#ReceiveItemId)                        | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemCount1](#ReceiveItemCount)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemCount2](#ReceiveItemCount)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemCount3](#ReceiveItemCount)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[ReceiveItemCount4](#ReceiveItemCount)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[IsRepeatable](#IsRepeatable)                           | int(11)   | NOT NULL DEFAULT '0'                                |                 
[bonushonor](#bonushonor)                               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[bonusarenapoints](#bonusarenapoints)                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[rewardtitleid](#rewardtitleid)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[rewardtalents](#rewardtalents)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[suggestedplayers](#suggestedplayers)                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemotecount](#detailemotecount)                   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemote1](#detailemote)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemote2](#detailemote)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemote3](#detailemote)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemote4](#detailemote)                            | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemotedelay1](#detailemotedelay)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemotedelay2](#detailemotedelay)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemotedelay3](#detailemotedelay)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[detailemotedelay4](#detailemotedelay)                  | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemotecnt](#completionemotecnt)               | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemote1](#completionemote)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemote2](#completionemote)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemote3](#completionemote)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemote4](#completionemote)                    | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemotedelay1](#completionemotedelay)          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemotedelay2](#completionemotedelay)          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemotedelay3](#completionemotedelay)          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completionemotedelay4](#completionemotedelay)          | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[completeemote](#completeemote)                         | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[incompleteemote](#incompleteemote)                     | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[iscompletedbyspelleffect](#iscompletedbyspelleffect)   | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 
[RewXPId](#RewXPId)                                     | int(10)   | unsigned NOT NULL DEFAULT '0'                       |                 

### entry

The unique entry ID of the quest.

### build

Build number to determine if the data is for our current compiled version.

### ZoneId

The entry ID of the Zone

### sort

<pre>
  0 = -NOT SET-
  1 = Epic
 21 = REUSE - Old Wailing Caverns
 22 = Seasonal
 23 = REUSE - Old Undercity
 24 = Herbalism
 25 = Battlegrounds
 41 = REUSE - Old Uldaman
 61 = Warlock
 81 = Warrior
 82 = Shaman
101 = Fishing
121 = Blacksmithing
141 = Paladin
161 = Mage
162 = Rogue
181 = Alchemy
182 = Leatherworking
201 = Engineering
221 = Treasure Map
241 = REUSE - Old Sunken Temple
261 = Hunter
262 = Priest
263 = Druid
264 = Tailoring
284 = Special
304 = Cooking
324 = First Aid
344 = Legendary
364 = Darkmoon Faire
365 = Ahn'Qiraj War
366 = Lunar Festival
367 = Reputation
368 = Invasion
369 = Midsummer
370 = Brewfest
371 = Inscription
372 = Death Knight
373 = Jewelcrafting
</pre>

### flags

Value  | Name                       | Hex        | Comment                                                                                                                                                      
------ | -------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------
0      | QUEST_FLAG_NONE            | 0x00000000 | No flag                                                                                                                                                      
1      | QUEST_FLAG_DELIVER         | 0x00000001 | ?                                                                                                                                                            
2      | QUEST_FLAG_KILL            | 0x00000002 | ?                                                                                                                                                            
4      | QUEST_FLAG_SPEAKTO         | 0x00000004 | ?                                                                                                                                                            
8      | QUEST_FLAG_REPEATABLE      | 0x00000008 | ?                                                                                                                                                            
16     | QUEST_FLAG_EXPLORATION     | 0x00000010 | ?                                                                                                                                                            
32     | QUEST_FLAG_TIMED           | 0x00000020 | ?                                                                                                                                                            
64     | QUEST_FLAG_UNK1            | 0x00000040 | ?                                                                                                                                                            
128    | QUEST_FLAG_REPUTATION      | 0x00000080 | Not used currently: _DELIVER_MORE Quest needs more than normal _q-item_ drops from mobs                                                                      
256    | QUEST_FLAGS_UNK2           | 0x00000100 | Not used currently: _DELIVER_MORE Quest needs more than normal _q-item_ drops from mobs                                                                      
512    | QUEST_FLAGS_HIDDEN_REWARDS | 0x00000200 | Items and money rewarded only sent in SMSG_QUESTGIVER_OFFER_REWARD (not in SMSG_QUESTGIVER_QUEST_DETAILS or in client quest log(SMSG_QUEST_QUERY_RESPONSE))
1024   | QUEST_FLAGS_AUTO_REWARDED  | 0x00000400 | These quests are automatically rewarded on quest complete and they will never appear in quest log client side.                                               
2048   | QUEST_FLAGS_TBC_RACES      | 0x00000800 | Not used currently: Blood elf/Draenei starting zone quests                                                                                                   
4096   | QUEST_FLAGS_DAILY          | 0x00001000 | Daily quest. Can be done once a day. Quests reset at regular intervals for all players.                                                                      
8192   | QUEST_FLAGS_FLAGS_PVP      | 0x00002000 | activates PvP on accept                                                                                                                                      
16384  | QUEST_FLAGS_UNK4           | 0x00004000 | ? Membership Card Renewal                                                                                                                                    
32768  | QUEST_FLAGS_WEEKLY         | 0x00008000 | Weekly quest. Can be done once a week. Quests reset at regular intervals for all players.                                                                    
65536  | QUEST_FLAGS_AUTOCOMPLETE   | 0x00010000 | auto complete                                                                                                                                                
131072 | QUEST_FLAGS_UNK5           | 0x00020000 | has something to do with ReqItemId and SrcItemId                                                                                                             
262144 | QUEST_FLAGS_UNK6           | 0x00040000 | use Objective text as Complete text                                                                                                                          
524288 | QUEST_FLAGS_AUTO_ACCEPT    | 0x00080000 | quests in starting areas                                                                                                                                     

### MinLevel

The minimum level of the character to start the quest.

### questlevel

...

### Type

The type of the quest:

<pre>
 0 = Normal
 1 = Group
21 = Life
41 = PvP
62 = Raid
81 = Dungeon
82 = World Event
83 = Legendary
84 = Escort
85 = Heroic
88 = Raid (10)
89 = Raid (25)
</pre>

### RequiredRaces

Races who can accept/view this quest:

<pre>
   0 = All Races
   1 = Human
   2 = Orc
   4 = Dwarf
   8 = Night Elf
  16 = Undead
  32 = Tauren
  64 = Gnome
 128 = Troll
 512 = Blood Elf
1024 = Draenei
Special definitions:
 690 = All the Hordes Races
1101 = All the Alliance Races
</pre>

### RequiredClass

<pre>
   0 = All Classes
   1 = Warrior
   2 = Paladin
   4 = Hunter
   8 = Rogue
  16 = Priest
  32 = Death Knight
  64 = Shaman
 128 = Mage
 256 = Warlock
1024 = Druid
</pre>

### RequiredTradeskill

<pre>
129 = First Aid
164 = Blacksmith
165 = Leatherworking
171 = Alchemy
182 = Herbalism
185 = Cooking
186 = Mining
197 = Tailoring
202 = Engineering
333 = Enchanting
356 = Fishing
393 = Skinning
755 = Jewelcrafting
762 = Riding
</pre>

### RequiredTradeskillValue

The skill value of the specific Tradeskill

### RequiredRepFaction

The ID of the Faction.

### RequiredRepValue

<pre>
 3000 = Friendly
 9000 = Honored
21000 = Revered
42000 = Exalted
</pre>

### LimitTime

<strike>Quests that need to be completed in specified time.</strike>

### SpecialFlags

Not used?

### PrevQuestId

The Quest Id of the previous quest.

### NextQuestId

The Quest Id of the next quest.

### srcItem

### SrcItemCount

### Title

The Title of the Quest.

### Details

The Details of the Quest.

### Objectives

The Objectives of the Quest.

### CompletionText

The completion text of the Quest.

### IncompleteText

The incomplete text of the Quest.

### EndText

The end text of the Quest.

### ObjectiveText

### ReqItemId

The required Item (entry) ID.

### ReqItemCount

The required count of Item entry.

### ReqKillMobOrGOId

The entry ID of the rquired npc (to kill) 
<strike>or gameobject (to destroy/open?)</strike>.

### ReqKillMobOrGOCount

The required count of killing
<strike>/destroying/opening</strike> (ref. to ReqKillMobOrGOId)

### ReqCastSpellId

The required spell (ID)

### ReqEmoteId

The required emote Id.

### RewChoiceItemId

Item entry ID's from which player can choose as a quest reward. From [item_properties](/Wiki/database/world/item_properties/ "Item properties") table.

### RewChoiceItemCount

Count of each item.

### RewItemId

ID of Item you attain when you complete the quest from [item_properties](/Wiki/database/world/item_properties/ "Item properties") table, can be mixed with rewchoiceitems.

### RewItemCount

Amount of the items you are rewarded with.

### RewRepFaction

The faction ID from dbc-file.

### RewRepValue

Value of Reputation You will gain on quest finish.

### RewRepLimit

Reputation value on player at which the quest wont give anymore reputation (will only disable reputation given. Quest can still be completed).

### RewMoney

Money you earn when finishing quest (in copper [e.x. - 105075 = 10g 50s 75c) Negative value means that quest require money.

### RewXP

EXP your are rewarded with when you complete a custom quest.

### RewSpell

Spell you ATTAIN when finishing quest, SHOULD BE AVOIDED (only use it if you know what you are doing).

### CastSpell

Spell cast on the player, when they complete the quest (this SHOULD be used for teaching player spells, using the TRAINER spells).

### MailTemplateId

The template of the mail from dbc "MailTemplateEntry".

### MailDelaySecs

The time delay before the mail is send to the player in seconds.

### MailSendItem

The item entry ID which would be attached to the mail from [item_properties](/Wiki/database/world/item_properties/ "Item properties") table.

### PointMapId

### PointX

### PointY

### PointOpt

### RewardMoneyAtMaxLevel

Money you receive when you complete the quest at the server's max level.

### ExploreTrigger

Areatriggers entry ID from [areatriggers](/Wiki/database/world/areatriggers/ "Areatriggers") players need to go to, for finishing quest.

### RequiredOneOfQuest

IDs of quests that you must have completed one of to obtain this quest

### RequiredQuest

The quest entry IDs the player must complete before attaining this quest.

### RemoveQuests

### ReceiveItemId

The item entry ID the player revieves from [item_properties](/Wiki/database/world/item_properties/ "Item properties") table.

### ReceiveItemCount

Count of item received.

### IsRepeatable

Boolean...

<pre>
0 = Not repeatable (Default)
1 = Repeatable
</pre>

### bonushonor

The amount of Honor you get when you complete the quest.

### bonusarenapoints

The amount of arenapoints you get when you complete the quest.

### rewardtitleid

The Entry of the reward title.

### rewardtalents

The ID of a Title you get when you complete the quest (found in DBC files).

### suggestedplayers

The amount of players suggested to complete the quest.

### detailemotecount

### detailemote

### detailemotedelay

### completionemotecnt

### completionemote

### completionemotedelay

### completeemote

### incompleteemote

### iscompletedbyspelleffect

### RewXPId