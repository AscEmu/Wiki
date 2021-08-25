---
title: List of all Events
type: list_of_all_events
layout: single_markdown
position: 2
---

## Register Quest Events

Quest callbacks are made by using the function ***RegisterQuestEvent(QuestId, EventId, function)***

```
QUEST_EVENT_ON_ACCEPT                       = 1    -- (pPlayer, QuestId)
QUEST_EVENT_ON_COMPLETE                     = 2    -- (pPlayer, QuestId)
QUEST_EVENT_ON_CANCEL                       = 3    -- (pPlayer)
QUEST_EVENT_GAMEOBJECT_ACTIVATE             = 4    -- (GameObjectId, pPlayer, QuestId)
QUEST_EVENT_ON_CREATURE_KILL                = 5    -- (CreatureId, pPlayer, QuestId)
QUEST_EVENT_ON_EXPLORE_AREA                 = 6    -- (AreaTriggerId, pPlayer, QuestId)
QUEST_EVENT_ON_PLAYER_ITEMPICKUP            = 7    -- (ItemId, Count, pPlayer, QuestId)
```

## Register Unit Events

Unit callbacks are made by using the function ***RegisterUnitEvent(UnitId, EventId, function)***

```
CREATURE_EVENT_ON_ENTER_COMBAT              = 1    -- (pUnit, event, pAttacker)
CREATURE_EVENT_ON_LEAVE_COMBAT              = 2    -- (pUnit, event, pLastTarget)
CREATURE_EVENT_ON_TARGET_DIED               = 3    -- (pUnit, event, pDied)
CREATURE_EVENT_ON_DIED                      = 4    -- (pUnit, event, pLastTarget)
CREATURE_EVENT_ON_TARGET_PARRIED            = 5    -- (pUnit, event, pTarget)
CREATURE_EVENT_ON_TARGET_DODGED             = 6    -- (pUnit, event, pTarget)
CREATURE_EVENT_ON_TARGET_BLOCKED            = 7    -- (pUnit, event, pTarget, pAmount)
CREATURE_EVENT_ON_TARGET_CRIT_HIT           = 8    -- (pUnit, event, pTarget, pAmount)
CREATURE_EVENT_ON_PARRY                     = 9    -- (pUnit, event, pTarget)
CREATURE_EVENT_ON_DODGED                    = 10   -- (pUnit, event, pTarget)
CREATURE_EVENT_ON_BLOCKED                   = 11   -- (pUnit, event, pTarget, pAmount)
CREATURE_EVENT_ON_CRIT_HIT                  = 12   -- (pUnit, event, pTarget, pAmount)
CREATURE_EVENT_ON_HIT                       = 13   -- (pUnit, event, pTarget, pAmount)
CREATURE_EVENT_ON_ASSIST_TARGET_DIED        = 14   -- (pUnit, event, pAssistTarget)
CREATURE_EVENT_ON_FEAR                      = 15   -- (pUnit, event, pTarget, pSpell)
CREATURE_EVENT_ON_FLEE                      = 16   -- (pUnit, event, pTarget)
CREATURE_EVENT_ON_CALL_FOR_HELP             = 17   -- (pUnit, event)
CREATURE_EVENT_ON_LOAD                      = 18   -- (pUnit, event)
CREATURE_EVENT_ON_REACH_WP                  = 19   -- (pUnit, event, pWaypointId, pForwards)
CREATURE_EVENT_ON_LOOT_TAKEN                = 20   -- (pUnit, event, pPlayer, pItemId)
CREATURE_EVENT_ON_AIUPDATE                  = 21   -- (pUnit, event)
CREATURE_EVENT_ON_EMOTE                     = 22   -- (pUnit, event, pPlayer, pEmote)
CREATURE_EVENT_ON_DAMAGE_TAKEN              = 23   -- (pUnit, event, pAttacker, pAmount)
CREATURE_EVENT_ON_ENTER_VEHICLE             = 24   -- (pUnit)
CREATURE_EVENT_ON_EXIT_VEHICLE              = 25   -- (pUnit)
CREATURE_EVENT_ON_FIRST_PASSENGER_ENTERED   = 26   -- (pUnit, Passenger)
CREATURE_EVENT_ON_VEHICLE_FULL              = 27   -- (pUnit)
CREATURE_EVENT_ON_LAST_PASSENGER_LEFT       = 28   -- (pUnit, Passenger)
```

## Register GameObject Events

GameObject callbacks are made by using the function ***RegisterGameObjectEvent(GameObjectId, EventId, function)***

```
GAMEOBJECT_EVENT_ON_CREATE                  = 1    -- (pGameObject)
GAMEOBJECT_EVENT_ON_SPAWN                   = 2    -- (pGameObject)
GAMEOBJECT_EVENT_ON_LOOT_TAKEN              = 3    -- (pGameObject, event, pLooter, ItemId)
GAMEOBJECT_EVENT_ON_USE                     = 4    -- (pGameObject, event, pPlayer)
GAMEOBJECT_EVENT_AIUPDATE                   = 5    -- (pGameObject)
GAMEOBJECT_EVENT_ON_DESPAWN                 = 6    -- No arguments passed.
GAMEOBJECT_EVENT_ON_DAMAGED                 = 7    -- (pGameObject, damage)
GAMEOBJECT_EVENT_ON_DESTROYED               = 8    -- (pGameObject)
```

## Register Unit Gossip Events

Gossip Event callbacks can be made using any of the following functions. Note that the pUnit in the arguments of these functions variate depending on the register you use.       
[RegisterUnitGossipEvent(UnitId, EventId, function)](/Wiki/docs/standards_sctipts/methods_lua/List_of_all_Events/Lua_RegisterUnitGossipEvent) (Applies to Creatures only)            
***RegisterGOGossipEvent(GameObjectId, EventId, function)***        
***RegisterItemGossipEvent(ItemId, EventId, function)***     

```
GOSSIP_EVENT_ON_TALK                        = 1    -- (pUnit, event, pPlayer)
GOSSIP_EVENT_ON_SELECT_OPTION               = 2    -- (pUnit, event, pPlayer, id, intid, code)
GOSSIP_EVENT_ON_END                         = 3    -- (pUnit, event)
GAMEOBJECT_GOSSIP_EVENT_ON_TALK             = 4    -- (pGameObject, event, pPlayer) -- Use this one instead #1
```

## Register Dummy Spell Event

Dummy Spell callbacks can be made by using the function [RegisterDummySpell(SpellId, function)](/Wiki/docs/standards_sctipts/methods_lua/List_of_all_Events/Lua_RegisterDummySpell)

```
 -- (spellIndex, pSpell)
```

## Register Instance Events

Instance Hook callbacks can be made by using the function ***RegisterInstanceEvent(MapId, EventId, function)***

```
INSTANCE_EVENT_ON_PLAYER_DEATH              = 1    -- (InstanceID, pPlayer, pKiller)
INSTANCE_EVENT_ON_PLAYER_ENTER              = 2    -- (InstanceID, pPlayer)
INSTANCE_EVENT_ON_AREA_TRIGGER              = 3    -- (InstanceID, pPlayer, nAreaId)
INSTANCE_EVENT_ON_ZONE_CHANGE               = 4    -- (InstanceID, pPlayer, nNewZone, nOldZone)
INSTANCE_EVENT_ON_CREATURE_DEATH            = 5    -- (InstanceID, pVictim, pKiller)
INSTANCE_EVENT_ON_CREATURE_PUSH             = 6    -- (InstanceID, pUnit) {AKA "OnSpawn" but for within an instance}
INSTANCE_EVENT_ON_GO_ACTIVATE               = 7    -- (InstanceID, pGo, pPlayer)
INSTANCE_EVENT_ON_GO_PUSH                   = 8    -- (InstanceID, pGo) {AKA "OnSpawn" but for within an instance}
INSTANCE_EVENT_ONLOAD                       = 9    -- (InstanceID) {When the instance is created}
INSTANCE_EVENT_DESTROY                      = 10   -- (InstanceID) {When the instance is destroyed, happens when the instance resets.}
```

## Register Server Hooks

Server Hook callbacks can be made by using the function ***RegisterServerHook(EventId, function)***

```
SERVER_HOOK_EVENT_ON_NEW_CHARACTER          = 1    -- (event, pName, int Race, int Class)
SERVER_HOOK_EVENT_ON_KILL_PLAYER            = 2    -- (event, pKiller, pVictim)
SERVER_HOOK_EVENT_ON_FIRST_ENTER_WORLD      = 3    -- (event, pPlayer)                 / a new created character enters for first time the world
SERVER_HOOK_EVENT_ON_ENTER_WORLD            = 4    -- (event, pPlayer)                 / a character enters the world (login) or moves to another map
SERVER_HOOK_EVENT_ON_GUILD_JOIN             = 5    -- (event, pPlayer, str GuildName)
SERVER_HOOK_EVENT_ON_DEATH                  = 6    -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_REPOP                  = 7    -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_EMOTE                  = 8    -- (event, pPlayer, pUnit, EmoteId)
SERVER_HOOK_EVENT_ON_ENTER_COMBAT           = 9    -- (event, pPlayer, pTarget)
SERVER_HOOK_EVENT_ON_CAST_SPELL             = 10   -- (event, pPlayer, SpellId, pSpellObject)
SERVER_HOOK_EVENT_ON_TICK                   = 11   -- No arguments passed.
SERVER_HOOK_EVENT_ON_LOGOUT_REQUEST         = 12   -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_LOGOUT                 = 13   -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_QUEST_ACCEPT           = 14   -- (event, pPlayer, QuestId, pQuestGiver)
SERVER_HOOK_EVENT_ON_ZONE                   = 15   -- (event, pPlayer, ZoneId, OldZoneId)
SERVER_HOOK_EVENT_ON_CHAT                   = 16   -- (event, pPlayer, str Message, Type, Language, Misc)
SERVER_HOOK_EVENT_ON_LOOT                   = 17   -- (event, pPlayer, pTarget, Money, ItemId)
SERVER_HOOK_EVENT_ON_GUILD_CREATE           = 18   -- (event, pPlayer, pGuildName)
SERVER_HOOK_EVENT_ON_ENTER_WORLD_2          = 19   -- (event, pPlayer)                 / a character enters the world (login)
SERVER_HOOK_EVENT_ON_CHARACTER_CREATE       = 20   -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_QUEST_CANCELLED        = 21   -- (event, pPlayer, QuestId)
SERVER_HOOK_EVENT_ON_QUEST_FINISHED         = 22   -- (event, pPlayer, QuestId, pQuestGiver)
SERVER_HOOK_EVENT_ON_HONORABLE_KILL         = 23   -- (event, pPlayer, pKilled)
SERVER_HOOK_EVENT_ON_ARENA_FINISH           = 24   -- (event, pPlayer, str TeamName, bWinner, bRated)
SERVER_HOOK_EVENT_ON_OBJECTLOOT             = 25   -- (event, pPlayer, pTarget, Money, ItemId)
SERVER_HOOK_EVENT_ON_AREATRIGGER            = 26   -- (event, pPlayer, AreaTriggerId)
SERVER_HOOK_EVENT_ON_POST_LEVELUP           = 27   -- (event, pPlayer)
SERVER_HOOK_EVENT_ON_PRE_DIE                = 28   -- (event, pKiller, pDied)          / general unit die, not only based on players
SERVER_HOOK_EVENT_ON_ADVANCE_SKILLLINE      = 29   -- (event, pPlayer, SkillId, SkillLevel)
SERVER_HOOK_EVENT_ON_DUEL_FINISHED          = 30   -- (event, pWinner, pLoser)
SERVER_HOOK_EVENT_ON_AURA_REMOVED           = 31   -- (event, pAuraObject)
SERVER_HOOK_EVENT_ON_RESURRECT              = 32   -- (event, pPlayer)
```
