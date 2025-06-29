---
title: Lua
type: standards_lua
layout: single_markdown
position: 1
---

# Information About ALE (AscEmu LuaEngine)

AscEmu LuaEngine (ALE) is a scripting engine that allows server developers to write custom game logic for AscEmu, a emulator based on the Antrix-Ascent-Arcemu cores. It uses the Lua scripting language to make it easier and faster to modify server behavior without recompiling the source code.

Key Information:

Scripting Language: Lua (is a powerful, fast, lightweight, embeddable scripting language.)

Purpose: To create scripts for NPC behavior, quests, events, spells, and more

Advantages:

- Scripts can be loaded or modified without restarting the server

- Lua has a simple and lightweight syntax

- Highly flexible and ideal for custom content development

Common Use Cases:

- NPC dialogues and interactions

- Triggering events when players enter certain areas

- Item usage effects

## API Documentation

Information About the typical function names.

### [Basic Lua](/Wiki/docs/standards_scripts/methods_lua/Basic_Lua)

### [Register Events and Server Hooks](/Wiki/docs/standards_scripts/methods_lua/List_of_all_Events)


### GameObject Methods


Command                                                                                                                     | Methods                                   | Description 
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[Activate](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_Activate)                                        | gameObject:Activate()                     | Activates/Deactivate a go, f.ex. opens a door.
[AddLoot](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_AddLoot)                                          | gameObject:AddLoot()                      |
[AddToPhase](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_AddToPhase)                                    | gameObject:AddToPhase()                   |
[CalcRadAngle](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_CalcRadAngle)                                | gameObject:CalcRadAngle()                 |
[CastSpell](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_CastSpell)                                      | gameObject:CastSpell()                    |
[CastSpellOnTarget](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_CastSpellOnTarget)                      | gameObject:CastSpellOnTarget()            |
[ChangeScale](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_ChangeScale)                                  | gameObject:ChangeScale()                  |
[CreateLuaEvent](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_CreateLuaEvent)                            | gameObject:CreateLuaEvent()               |
[CustomAnimate](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_CustomAnimate)                              | gameObject:CustomAnimate()                |
[Damage](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_Damage)                                            | gameObject:Damage()                       | Damages the GO if it’s a destructible building, guid is the damaging Unit’s GUID, spellid is the damaging spell.
[DeletePhase](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_DeletePhase)                                  | gameObject:DeletePhase()                  |
[Despawn](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_Despawn)                                          | gameObject:Despawn()                      |
[FullCastSpell](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_FullCastSpell)                              | gameObject:FullCastSpell()                |
[FullCastSpellOnTarget](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_FullCastSpellOnTarget)              | gameObject:FullCastSpellOnTarget()        |
[GetAreaId](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetAreaId)                                      | gameObject:GetAreaId()                    |
[GetByte](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetByte)                                          | gameObject:GetByte()                      |
[GetByteValue](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetByteValue)                                | gameObject:GetByteValue()                 |
[GetClosestPlayer](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetClosestPlayer)                        | gameObject:GetClosestPlayer()             |
[GetClosestUnit](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetClosestUnit)                            | gameObject:GetClosestUnit()               |
[GetCreatureNearestCoords](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetCreatureNearestCoords)        | gameObject:GetCreatureNearestCoords()     |
[GetDistance](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetDistance)                                  | gameObject:GetDistance()                  |
[GetDistanceYards](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetDistanceYards)                        | gameObject:GetDistanceYards()             |
[GetDungeonDifficulty](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetDungeonDifficulty)                | gameObject:GetDungeonDifficulty()         |
[GetEntry](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetEntry)                                        | gameObject:GetEntry()                     | Returns the entry ID.
[GetFloatValue](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetFloatValue)                              | gameObject:GetFloatValue()                |
[GetGameObjectNearestCoords](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetGameObjectNearestCoords)    | gameObject:GetGameObjectNearestCoords()   |
[GetGuid](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetGuid)                                          | gameObject:GetGuid()                      |
[GetHP](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetHP)                                              | gameObject:GetHP()                        | Returns the actual HP.
[GetInRangeObjects](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetInRangeObjects)                      | gameObject:GetInRangeObjects()            |
[GetInRangePlayers](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetInRangePlayers)                      | gameObject:GetInRangePlayers()            |
[GetInRangePlayersCount](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetInRangePlayersCount)            | gameObject:GetInRangePlayersCount()       |
[GetInRangeUnits](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetInRangeUnits)                          | gameObject:GetInRangeUnits()              |
[GetInstanceID](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetInstanceID)                              | gameObject:GetInstanceID()                |
[GetLandHeight](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetLandHeight)                              | gameObject:GetLandHeight()                |
[GetLocation](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetLocation)                                  | gameObject:GetLocation()                  |
[GetMapId](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetMapId)                                        | gameObject:GetMapId()                     |
[GetMaxHP](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetMaxHP)                                        | gameObject:GetMaxHP()                     | Returns the maximum HP.
[GetName](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetName)                                          | gameObject:GetName()                      | Get the name.
[GetO](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetO)                                                | gameObject:GetO()                         | Returns ‘GameObject’ 
[GetObject](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetObject)                                      | gameObject:GetObject()                    | Returns ‘GameObject’
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetObjectType)                              | gameObject:GetObjectType()                | Returns ‘GameObject’
[GetPhase](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetPhase)                                        | gameObject:GetPhase()                     |
[GetScale](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetScale)                                        | gameObject:GetScale()                     |
[GetSpawnId](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnId)                                    | gameObject:GetSpawnId()                   |
[GetSpawnLocation](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnLocation)                        | gameObject:GetSpawnLocation()             | Get the Location of a spawned unit.
[GetSpawnO](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnO)                                      | gameObject:GetSpawnO()                    |
[GetSpawnX](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnX)                                      | gameObject:GetSpawnX()                    |
[GetSpawnY](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnY)                                      | gameObject:GetSpawnY()                    |
[GetSpawnZ](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetSpawnZ)                                      | gameObject:GetSpawnZ()                    |
[GetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetUInt32Value)                            | gameObject:GetUInt32Value()               |
[GetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetUInt64Value)                            | gameObject:GetUInt64Value()               |
[GetWorldStateForZone](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetWorldStateForZone)                | gameObject:GetWorldStateForZone()         |
[GetX](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetX)                                                | gameObject:GetX()                         |
[GetY](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetY)                                                | gameObject:GetY()                         |
[GetZ](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetZ)                                                | gameObject:GetZ()                         |
[GetZoneId](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GetZoneId)                                      | gameObject:GetZoneId()                    |
[GossipComplete](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipComplete)                            | gameObject:GossipComplete()               |
[GossipCreateMenu](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipCreateMenu)                        | gameObject:GossipCreateMenu()             |
[GossipMenuAddItem](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipMenuAddItem)                      | gameObject:GossipMenuAddItem()            |
[GossipObjectComplete](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipObjectComplete)                | gameObject:GossipObjectComplete()         |
[GossipObjectCreateMenu](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipObjectCreateMenu)            | gameObject:GossipObjectCreateMenu()       |
[GossipObjectMenuAddItem](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipObjectMenuAddItem)          | gameObject:GossipObjectMenuAddItem()      |
[GossipObjectSendMenu](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipObjectSendMenu)                | gameObject:GossipObjectSendMenu()         |
[GossipObjectSendPOI](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipObjectSendPOI)                  | gameObject:GossipObjectSendPOI()          |
[GossipSendMenu](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipSendMenu)                            | gameObject:GossipSendMenu()               |
[GossipSendPOI](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipSendPOI)                              | gameObject:GossipSendPOI()                |
[GossipSendQuickMenu](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_GossipSendQuickMenu)                  | gameObject:GossipSendQuickMenu()          |
[HasFlag](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_HasFlag)                                          | gameObject:HasFlag()                      |
[IsActive](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_IsActive)                                        | gameObject:IsActive()                     |
[IsInBack](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_IsInBack)                                        | gameObject:IsInBack()                     |
[IsInFront](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_IsInFront)                                      | gameObject:IsInFront()                    |
[IsInPhase](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_IsInPhase)                                      | gameObject:IsInPhase()                    |
[IsInWorld](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_IsInWorld)                                      | gameObject:IsInWorld()                    |
[ModifyAIUpdateEvent](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_ModifyAIUpdateEvent)                  | gameObject:ModifyAIUpdateEvent()          |
[ModUInt32Value](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_ModUInt32Value)                            | gameObject:ModUInt32Value()               |
[PhaseAdd](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_PhaseAdd)                                        | gameObject:PhaseAdd()                     |
[PhaseDelete](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_PhaseDelete)                                  | gameObject:PhaseDelete()                  |
[PhaseSet](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_PhaseSet)                                        | gameObject:PhaseSet()                     |
[PlaySoundToSet](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_PlaySoundToSet)                            | gameObject:PlaySoundToSet()               |
[Rebuild](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_Rebuild)                                          | gameObject:Rebuild()                      | Rebuilds the GO, if it’s a destructible building. Restores it’s hp to max, and restores it’s displayid to normal.
[RegisterAIUpdateEvent](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RegisterAIUpdateEvent)              | gameObject:RegisterAIUpdateEvent()        |
[RemoveAIUpdateEvent](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RemoveAIUpdateEvent)                  | gameObject:RemoveAIUpdateEvent()          |
[RemoveEvents](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RemoveEvents)                                | gameObject:RemoveEvents()                 |
[RemoveFlag](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RemoveFlag)                                    | gameObject:RemoveFlag()                   |
[RemoveFromWorld](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_RemoveFromWorld)                          | gameObject:RemoveFromWorld()              | Removes the Game Object from the world.
[SendPacket](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SendPacket)                                    | gameObject:SendPacket()                   |
[SetByte](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetByte)                                          | gameObject:SetByte()                      |
[SetByteValue](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetByteValue)                                | gameObject:SetByteValue()                 |
[SetDungeonDifficulty](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetDungeonDifficulty)                | gameObject:SetDungeonDifficulty()         |
[SetFlag](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetFlag)                                          | gameObject:SetFlag()                      |
[SetFloatValue](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetFloatValue)                              | gameObject:SetFloatValue()                |
[SetOrientation](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetOrientation)                            | gameObject:SetOrientation()               |
[SetPhase](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetPhase)                                        | gameObject:SetPhase()                     |
[SetPosition](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetPosition)                                  | gameObject:SetPosition()                  |
[SetScale](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetScale)                                        | gameObject:SetScale()                     |
[SetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetUInt32Value)                            | gameObject:SetUInt32Value()               |
[SetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetUInt64Value)                            | gameObject:SetUInt64Value()               |
[SetWorldStateForZone](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetWorldStateForZone)                | gameObject:SetWorldStateForZone()         |
[SetZoneWeather](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SetZoneWeather)                            | gameObject:SetZoneWeather()               |
[SpawnCreature](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SpawnCreature)                              | gameObject:SpawnCreature()                |
[SpawnGameObject](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_SpawnGameObject)                          | gameObject:SpawnGameObject()              |
[Update](/Wiki/docs/standards_scripts/methods_lua/GameObject_Methods/Lua_Update)                                            | gameObject:Update()                       |


### Unit Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[AddAchievement](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddAchievement)                                  | unit:AddAchievement()                     | Adds the Achievement with the ID specified to the player.
[AddArenaPoints](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddArenaPoints)                                  | unit:AddArenaPoints()                     | Adds the specified amount of arena points to the Unit specified.
[AddAura](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddAura)                                                | unit:AddAura()                            | Buffs/Debuffs the current unit/player with the spell specified, with the duration specified. Setting temp to true allows it to stay on after logging.
[AddAuraObject](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddAuraObject)                                    | unit:AddAuraObject()                      |
[AddGroupMember](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddGroupMember)                                  | unit:AddGroupMember()                     | Adds the Target to the Player’s group.
[AddGuildMember](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddGuildMember)                                  | unit:AddGuildMember()                     | Forces pPlayer to join the Unit’s guild.
[AddItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddItem)                                                | unit:AddItem()                            | Creates a new menu item, used after registering a new menu with GossipCreateMenu().
[AddLifetimeKills](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddLifetimeKills)                              | unit:AddLifetimeKills()                   | Adds the amount of lifetime kills specified to the player’s total count.
[AddLoot](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddLoot)                                                | unit:AddLoot()                            | Adds the specified item to the Unit’s loot table. This will drop in amounts of mincount to maxcount, and if freeforall is set to true, anyone can use it.
[AddSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddSkill)                                              | unit:AddSkill()                           | Sets the player’s skill line at skill to current, and the max to max.
[AddToPhase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddToPhase)                                          | unit:AddToPhase()                         |
[AddVehiclePassenger](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AddVehiclePassenger)                        | unit:AddVehiclePassenger()                | Spawns an NPC and adds it as a passenger to the vehicle.
[AdvanceAllSkills](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AdvanceAllSkills)                              | unit:AdvanceAllSkills()                   | Advances all skills by amount.
[AdvanceQuestObjective](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AdvanceQuestObjective)                    | unit:AdvanceQuestObjective()              | Advances the objective in quest id by 1.
[AdvanceSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AdvanceSkill)                                      | unit:AdvanceSkill()                       | Advances the skill by count.
[AggroWithInRangeFriends](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AggroWithInRangeFriends)                | unit:AggroWithInRangeFriends()            | Unknown. See core for usage.
[Attack](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Attack)                                                  | unit:Attack()                             | Sets the Unit’s main-hand attack speed to timer. If offhand is true, offhand is also set to this.
[AttackReaction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_AttackReaction)                                  | unit:AttackReaction()                     | Adds threat to the target (Not damage) using the spell specified.
[BanFromChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_BanFromChannel)                                  | unit:BanFromChannel()                     | Bans the Unit from the Channel.
[CalcAngle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CalcAngle)                                            | unit:CalcAngle()                          | Calculates the angle between x/y and x2/y2 and takes the Unit’s position into account. See page for more info.
[CalcRadAngle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CalcRadAngle)                                      | unit:CalcRadAngle()                       | Returns an angle in radians from the numbers x/y, x2/y2 and the Unit’s position.
[CalcToDistance](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CalcToDistance)                                  | unit:CalcToDistance()                     | Calculates the distance between the Unit and the point specified.
[CallForHelpHp](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CallForHelpHp)                                    | unit:CallForHelpHp()                      | Sets the Unit’s ‘call for help’ HP to the hp specified. Basically, when the Unit hits this HP he flees for help.
[CanAttack](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CanAttack)                                            | unit:CanAttack()                          | Returns true if the unit can attack the target, false if not.
[CanCallForHelp](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CanCallForHelp)                                  | unit:CanCallForHelp()                     | Sets the Unit to be able/unable to call for help.
[CancelSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CancelSpell)                                        | unit:CancelSpell()                        | Stops casting the current spell.
[CanUseCommand](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CanUseCommand)                                    | unit:CanUseCommand()                      | Returns true if the Unit can use the specified level (“a” is usually GM, “az” for an admin).
[CastSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CastSpell)                                            | unit:CastSpell()                          | Casts the specified spell. Any cast time is ignored.
[CastSpellAoE](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CastSpellAoE)                                      | unit:CastSpellAoE()                       |
[CastSpellAoF](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CastSpellAoF)                                      | unit:CastSpellAoF()                       | Casts the targeted AoE spell (Think Blizzard & Shadowfury) at the given area. Ignores cast times.
[CastSpellOnTarget](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CastSpellOnTarget)                            | unit:CastSpellOnTarget()                  | Casts the specified spell on the target. Any cast time is ignored.
[ChangeGuildMaster](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ChangeGuildMaster)                            | unit:ChangeGuildMaster()                  | Changes the Guild Master to newmaster.
[ChangeTarget](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ChangeTarget)                                      | unit:ChangeTarget()                       | Sets the Unit’s new target to new_target.
[ChannelSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ChannelSpell)                                      | unit:ChannelSpell()                       | Channels the spell given at the target.
[ClearAllCooldowns](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ClearAllCooldowns)                            | unit:ClearAllCooldowns()                  | Clears all Cooldowns for the player.
[ClearCooldownForSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ClearCooldownForSpell)                    | unit:ClearCooldownForSpell()              | Removes the Cooldown of the spell specified for the player.
[ClearThreatList](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ClearThreatList)                                | unit:ClearThreatList()                    | Sets the threat of everyone on the Unit’s threat list to 1.
[CreateGuardian](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CreateGuardian)                                  | unit:CreateGuardian()                     | Creates a guardian (a mob that attacks when you are attacked) with the specified parameters.
[CreateLuaEvent](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CreateLuaEvent)                                  | unit:CreateLuaEvent()                     |
[CreatureHasQuest](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_CreatureHasQuest)                              | unit:CreatureHasQuest()                   | Returns true if the creature can give the quest, otherwise returns false.
[DealDamage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DealDamage)                                          | unit:DealDamage()                         | Deals damage to the target with the specified spell.
[DealGoldCost](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DealGoldCost)                                      | unit:DealGoldCost()                       | Removes the amount of copper from the player.
[DealGoldMerit](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DealGoldMerit)                                    | unit:DealGoldMerit()                      | Akin to DealGoldCost(), but adds copper instead of removing it.
[DeletePhase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DeletePhase)                                        | unit:DeletePhase()                        | Removes the phase specified. If ‘save’ is set to true, and the Unit is a NPC/Object, then the Unit will be saved to the new phase it is automatically set to.
[deMorph](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_deMorph)                                                | unit:deMorph()                            | Sets the Unit’s display id back to it’s native one.
[DemoteGuildMember](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DemoteGuildMember)                            | unit:DemoteGuildMember()                  | Forces the Unit to demote the target guild member.
[Despawn](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Despawn)                                                | unit:Despawn()                            | Despawns the Unit with the delay. If the respawntimer is set to 0, the mob won’t respawn.
[DisableCombat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableCombat)                                    | unit:DisableCombat()                      | If set to true, disables the Unit’s ability to enter combat completely.
[DisableMelee](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableMelee)                                      | unit:DisableMelee()                       | If set to true, disables the Unit’s ability to use Melee Combat.
[DisableRanged](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableRanged)                                    | unit:DisableRanged()                      | If set to true, disables the Unit’s ability to use Ranged Combat.
[DisableRespawn](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableRespawn)                                  | unit:DisableRespawn()                     | If set to false, the mob will no longer respawn.
[DisableSpells](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableSpells)                                    | unit:DisableSpells()                      | If set to true, disables the Unit’s ability to use Spells.
[DisableTargeting](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisableTargeting)                              | unit:DisableTargeting()                   | If set to true, disables the Unit’s targeting capabilities (The mob will not be able to use targeted spells either).
[DisbandGuild](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DisbandGuild)                                      | unit:DisbandGuild()                       | Disbands the Unit’s guild.
[DismissPet](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DismissPet)                                          | unit:DismissPet()                         | Dismisses any current pet.
[DismissVehicle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_DismissVehicle)                                  | unit:DismissVehicle()                     | Dismisses the vehicle of the selected unit.
[Dismount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Dismount)                                              | unit:Dismount()                           | Dismounts the Unit.
[EjectAllVehiclePassengers](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EjectAllVehiclePassengers)            | unit:EjectAllVehiclePassengers()          | Ejects all passengers from the Unit’s vehicle.
[EjectVehiclePassengerFromSeat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EjectVehiclePassengerFromSeat)    | unit:EjectVehiclePassengerFromSeat()      | Ejects the passenger from the specified seat of the Unit’s vehicle.
[Emote](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Emote)                                                    | unit:Emote()                              | Makes the Unit use the emote specified. If time is greater than 0, then it is preformed after a delay of (time)ms.
[EnableFlight](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EnableFlight)                                      | unit:EnableFlight()                       | If set to true, disables the usage of all flight path nodes.
[EnableFlyCheat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EnableFlyCheat)                                  | unit:EnableFlyCheat()                     | Acts similar to the gm command .cheat fly.
[EnableMoveFly](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EnableMoveFly)                                    | unit:EnableMoveFly()                      | Similar to SetFlying().
[Energize](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Energize)                                              | unit:Energize()                           | Restores the amount of a type of energy to the target using a spell visual. See page for more info.
[EnterVehicle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EnterVehicle)                                      | unit:EnterVehicle()                       | Makes the Unit enter a vehicle.
[EquipWeapons](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EquipWeapons)                                      | unit:EquipWeapons()                       | Equips the weapons specified in the specified slots. 1 (Main Hand), 2 (Off Hand), 3 (Ranged).
[EventCastSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EventCastSpell)                                  | unit:EventCastSpell()                     | Casts the spell on the target after the delay specified. Repeat set to 0 means that it repeats indefinitely. Ignores cast times.
[EventChat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_EventChat)                                            | unit:EventChat()                          | Sends a chat message with the parameters given after a delay in miliseconds.
[ExitVehicle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ExitVehicle)                                        | unit:ExitVehicle()                        | Makes the Unit exit it’s vehicle.
[ExpandToRaid](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ExpandToRaid)                                      | unit:ExpandToRaid()                       | Forcibly changes the Unit’s group to a raid.
[FinishQuest](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FinishQuest)                                        | unit:FinishQuest()                        | Forces the Unit to finish quest ID. Rewards are not given.
[FlagFFA](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FlagFFA)                                                | unit:FlagFFA()                            |
[FlagPvP](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FlagPvP)                                                | unit:FlagPvP()                            | Flags the Player for PvP.
[FullCastSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FullCastSpell)                                    | unit:FullCastSpell()                      | Casts the specified spell. If the spell has a cast time, it is used.
[FullCastSpellAoE](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FullCastSpellAoE)                              | unit:FullCastSpellAoE()                   |
[FullCastSpellAoF](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FullCastSpellAoF)                              | unit:FullCastSpellAoF()                   |
[FullCastSpellOnTarget](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_FullCastSpellOnTarget)                    | unit:FullCastSpellOnTarget()              | Casts the specified spell on the target. If the spell has a cast time, it is used.
[GetAccountName](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAccountName)                                  | unit:GetAccountName()                     | Returns the player’s account name.
[GetAddTank](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAddTank)                                          | unit:GetAddTank()                         | Returns the Unit second on the Unit’s threat table.
[GetAITargets](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAITargets)                                      | unit:GetAITargets()                       | Returns all units with threat on the Unit’s threat table.
[GetAITargetsCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAITargetsCount)                            | unit:GetAITargetsCount()                  | Returns the amount of units with threat on the Unit’s threat table.
[GetAreaId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAreaId)                                            | unit:GetAreaId()                          | Returns the Unit’s area id.
[GetArenaPoints](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetArenaPoints)                                  | unit:GetArenaPoints()                     | Returns the amount of Arena Points that the Unit specified has.
[GetAuraObjectById](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAuraObjectById)                            | unit:GetAuraObjectById()                  | Returns a aura object with the entered spell id.
[GetAuraStackCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetAuraStackCount)                            | unit:GetAuraStackCount()                  |
[GetByteValue](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetByteValue)                                      | unit:GetByteValue()                       | Returns the Byte value at index, index1. (Disabled)
[GetChannelMemberCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetChannelMemberCount)                    | unit:GetChannelMemberCount()              | Returns the number of members in Channel.
[GetChannelPassword](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetChannelPassword)                          | unit:GetChannelPassword()                 | Returns the password for the Channel.
[GetClosestEnemy](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetClosestEnemy)                                | unit:GetClosestEnemy()                    | Returns the closest Unit to the Unit considered ‘hostile’.
[GetClosestFriend](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetClosestFriend)                              | unit:GetClosestFriend()                   | Returns the closest Unit to the Unit considered ‘friendly’.
[GetClosestPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetClosestPlayer)                              | unit:GetClosestPlayer()                   | Returns the closets player to the Unit.
[GetClosestUnit](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetClosestUnit)                                  | unit:GetClosestUnit()                     |
[GetCoinage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetCoinage)                                          | unit:GetCoinage()                         | Returns the amount of copper the player has.
[GetCreatureNearestCoords](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetCreatureNearestCoords)              | unit:GetCreatureNearestCoords()           | Returns a creature that with the specified ID that is closest to the co-ordinates given.
[GetCurrentSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetCurrentSkill)                                | unit:GetCurrentSkill()                    | Returns the player’s Skill level of the skill specified.
[GetCurrentSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetCurrentSpell)                                | unit:GetCurrentSpell()                    | Returns a SPELL object.
[GetCurrentSpellId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetCurrentSpellId)                            | unit:GetCurrentSpellId()                  | Returns the spell entry ID that is current casting.
[GetDisplay](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetDisplay)                                          | unit:GetDisplay()                         | Returns the Unit’s current display ID.
[GetDistance](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetDistance)                                        | unit:GetDistance()                        | Returns the number of pixels between the Unit and target.
[GetDistanceYards](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetDistanceYards)                              | unit:GetDistanceYards()                   | Returns the number of yards between the Unit and target.
[GetDuelState](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetDuelState)                                      | unit:GetDuelState()                       | Returns the stage in which a duel is taking place with the unit. 0 (Requested), 1 (Started) or 2 (Finished).
[GetDungeonDifficulty](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetDungeonDifficulty)                      | unit:GetDungeonDifficulty()               | Returns the dungeon difficulty of the Unit.
[GetEntry](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetEntry)                                              | unit:GetEntry()                           | Returns the Unit’s entry id (does not work for items).
[GetEquippedItemBySlot](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetEquippedItemBySlot)                    | unit:GetEquippedItemBySlot()              | Returns an ITEM object from the item in the slot specified.
[GetFaction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetFaction)                                          | unit:GetFaction()                         | Returns the Unit’s faction.
[GetFactionStanding](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetFactionStanding)                          | unit:GetFactionStanding()                 | Returns a string value of the Unit’s standing with the faction.
[GetFloatValue](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetFloatValue)                                    | unit:GetFloatValue()                      | Returns the Unit’s float value. (Disabled)
[GetGameObjectNearestCoords](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGameObjectNearestCoords)          | unit:GetGameObjectNearestCoords()         | Returns the object closest to the co-ordinates specified with the id designated.
[GetGender](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGender)                                            | unit:GetGender()                          | Returns a numerical representation of the Unit’s gender.
[GetGmRank](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGmRank)                                            | unit:GetGmRank()                          | Returns the player’s GM rank in string form (Ie, “a”, “az”). Returns nil when the player is not a GM.
[GetGroupLeader](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGroupLeader)                                  | unit:GetGroupLeader()                     | Returns a object of the player’s group leader.
[GetGroupPlayers](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGroupPlayers)                                | unit:GetGroupPlayers()                    | Returns a table with the userdata of all players in Unit’s group.
[GetGroupType](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGroupType)                                      | unit:GetGroupType()                       | Returns the player’s group type. Returns nil if the player is not in a group.
[GetGuid](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuid)                                                | unit:GetGuid()                            | Returns the Unit’s GUID. A GUID is a unique number assigned to each and every object, unit and player in AE.
[GetGuildId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildId)                                          | unit:GetGuildId()                         | Returns the player’s Guild ID. Note that the guild ID is NOT the guild name.
[GetGuildLeader](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildLeader)                                  | unit:GetGuildLeader()                     | Returns a string value of the Guild Leader’s name.
[GetGuildMemberCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildMemberCount)                        | unit:GetGuildMemberCount()                | Returns the amount of members in the guild.
[GetGuildMembers](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildMembers)                                | unit:GetGuildMembers()                    | Returns a table of strings of guild members.
[GetGuildMotd](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildMotd)                                      | unit:GetGuildMotd()                       | Returns the Message of the Day from the specified unit’s guild.
[GetGuildName](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildName)                                      | unit:GetGuildName()                       | Returns the player’s guild name.
[GetGuildRank](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetGuildRank)                                      | unit:GetGuildRank()                       | Returns the Unit’s guild rank.
[GetHealth](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetHealth)                                            | unit:GetHealth()                          | Returns an absolute value of the Unit’s health.
[GetHealthPct](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetHealthPct)                                      | unit:GetHealthPct()                       | Returns a percentage of the Unit’s health.
[GetHonorToday](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetHonorToday)                                    | unit:GetHonorToday()                      | Returns all Honor earned by the Unit today.
[GetHonorYesterday](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetHonorYesterday)                            | unit:GetHonorYesterday()                  | Returns the Unit’s honor that was earnt yesterday.
[GetInRangeEnemies](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangeEnemies)                            | unit:GetInRangeEnemies()                  | Returns all hostiles in range of the Unit.
[GetInRangeFriends](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangeFriends)                            | unit:GetInRangeFriends()                  | Returns all friendlies in range of the Unit.
[GetInRangeObjects](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangeObjects)                            | unit:GetInRangeObjects()                  | Returns all nearby GameObjects in range of the Unit.
[GetInRangeObjectsCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangeObjectsCount)                  | unit:GetInRangeObjectsCount()             | Returns a count of all the GameObjects in range of the Unit.
[GetInRangePlayers](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangePlayers)                            | unit:GetInRangePlayers()                  | Returns all players in range of the Unit.
[GetInRangePlayersCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangePlayersCount)                  | unit:GetInRangePlayersCount()             | Returns a count of all the players in range of the Unit.
[GetInRangeUnits](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInRangeUnits)                                | unit:GetInRangeUnits()                    | Returns all units in the range of the Unit.
[GetInstanceID](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInstanceID)                                    | unit:GetInstanceID()                      | Return the Unit’s instance id.
[GetInventoryItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInventoryItem)                              | unit:GetInventoryItem()                   | Returns the item in the player’s inventory in specified bag and slot.
[GetInventoryItemById](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetInventoryItemById)                      | unit:GetInventoryItemById()               | Returns the slot that the item is in in the player’s inventory.
[GetItemCount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetItemCount)                                      | unit:GetItemCount()                       | Returns how many of an item the Unit has.
[GetLandHeight](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetLandHeight)                                    | unit:GetLandHeight()                      | Returns the land height using the parameters given.
[GetLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetLevel)                                              | unit:GetLevel()                           |
[GetLocation](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetLocation)                                        | unit:GetLocation()                        | Returns the Unit’s x, y, z and o co-ordinates.
[GetMainTank](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMainTank)                                        | unit:GetMainTank()                        | Returns the Unit with the highest threat on the Unit’s threat table.
[GetMana](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMana)                                                | unit:GetMana()                            | Returns an absolute value of the Unit’s mana.
[GetManaPct](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetManaPct)                                          | unit:GetManaPct()                         | Returns a percentage of the Unit’s mana.
[GetMapId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMapId)                                              | unit:GetMapId()                           | Returns the Unit’s map id.
[GetMaxHealth](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMaxHealth)                                      | unit:GetMaxHealth()                       | Returns the maximum amount of health the Unit can have.
[GetMaxMana](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMaxMana)                                          | unit:GetMaxMana()                         | Returns the maximum amount of mana the Unit can have.
[GetMaxPower](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMaxPower)                                        | unit:GetMaxPower()                        | Returns the absolute value of the Unit’s power (If type is specified, that type is returned instead).
[GetMaxSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetMaxSkill)                                        | unit:GetMaxSkill()                        | Returns the player’s Max Skill level of the skill specified.
[GetName](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetName)                                                | unit:GetName()                            | Returns the Unit’s name.
[GetNativeDisplay](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetNativeDisplay)                              | unit:GetNativeDisplay()                   | Returns the Unit’s spawn display ID.
[GetNativeFaction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetNativeFaction)                              | unit:GetNativeFaction()                   | Returns the Unit’s spawn faction.
[GetO](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetO)                                                      | unit:GetO()                               | Returns the Unit’s o co-ordinate.
[GetObject](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetObject)                                            | unit:GetObject()                          | Returns a Unit based on the GUID given.
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetObjectType)                                    | unit:GetObjectType()                      | Returns ‘Player’ or ‘Unit’ depending on the Unit.
[GetPetOwner](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPetOwner)                                        | unit:GetPetOwner()                        | Get Unit’s owner.
[GetPhase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPhase)                                              | unit:GetPhase()                           | Returns the phase the Unit is currently in.
[GetPlayerClass](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPlayerClass)                                  | unit:GetPlayerClass()                     | Returns a string representation of the player’s class.
[GetPlayerLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPlayerLevel)                                  | unit:GetPlayerLevel()                     | Returns the Unit’s level.
[GetPlayerMovementFlags](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPlayerMovementFlags)                  | unit:GetPlayerMovementFlags()             | Returns the movement flag of the player. See page for more information.
[GetPlayerMovementVector](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPlayerMovementVector)                | unit:GetPlayerMovementVector()            | Returns information about the Player’s movement.
[GetPlayerRace](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPlayerRace)                                    | unit:GetPlayerRace()                      | Returns a numerical representation of the player’s race.
[GetPower](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPower)                                              | unit:GetPower()                           | Returns an absolute value of the Unit’s power (If type is specified, that type is returned instead).
[GetPowerPct](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPowerPct)                                        | unit:GetPowerPct()                        | Return a percentage of the Unit’s power (If type is specified, that type is returned instead).
[GetPowerType](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetPowerType)                                      | unit:GetPowerType()                       | Returns a numerical representation of the Unit’s power type.
[GetQuestLogSlot](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetQuestLogSlot)                                | unit:GetQuestLogSlot()                    |
[GetQuestObjectiveCompletion](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetQuestObjectiveCompletion)        | unit:GetQuestObjectiveCompletion()        | Returns how many mobs killed for the specified quest and objective.
[GetRandomEnemy](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetRandomEnemy)                                  | unit:GetRandomEnemy()                     | Returns a Unit that is considered an Enemy to the Unit.
[GetRandomFriend](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetRandomFriend)                                | unit:GetRandomFriend()                    | Gets a Unit that is considered a Friend to the Unit.
[GetRandomPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetRandomPlayer)                                | unit:GetRandomPlayer()                    | Returns a random player based on the flag specified. See page for more details.
[GetSecondHated](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSecondHated)                                  | unit:GetSecondHated()                     |
[GetSelectedGO](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSelectedGO)                                    | unit:GetSelectedGO()                      |
[GetSelection](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSelection)                                      | unit:GetSelection()                       | Returns the player’s currently selected Unit.
[GetSpawnId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnId)                                          | unit:GetSpawnId()                         | Returns the Unit’s spawn ID.
[GetSpawnLocation](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnLocation)                              | unit:GetSpawnLocation()                   | Returns the Unit’s spawn x, y, and z co-ordinates.
[GetSpawnO](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnO)                                            | unit:GetSpawnO()                          | Return the Unit’s spawn position x co-ordinate.
[GetSpawnX](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnX)                                            | unit:GetSpawnX()                          | Return the Unit’s spawn position x co-ordinate.
[GetSpawnY](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnY)                                            | unit:GetSpawnY()                          | Return the Unit’s spawn position x co-ordinate.
[GetSpawnZ](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetSpawnZ)                                            | unit:GetSpawnZ()                          | Return the Unit’s spawn position x co-ordinate.
[GetStanding](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetStanding)                                        | unit:GetStanding()                        | Returns a numerical value of the Unit’s standing with the faction.
[GetStealthLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetStealthLevel)                                | unit:GetStanding()                        | Returns the Unit’s stealth level. To set the stealth level, use SetStealthLevel().
[GetTalentPoints](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetTalentPoints)                                | unit:GetTalentPoints()                    | Returns the player’s free talent points in the player’s primary (0) spec or secondary (1) spec.
[GetTaxi](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetTaxi)                                                | unit:GetTaxi()                            | Returns the taxi that the player is on.
[GetTeam](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetTeam)                                                | unit:GetTeam()                            | Returns 1 if Horde, and 0 if Alliance.
[GetThreat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetThreat)                                            | unit:GetThreat()                          | Returns the amount of threat that the Unit has with the target specified.
[GetTotalHonor](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetTotalHonor)                                    | unit:GetTotalHonor()                      | Returns the unit’s total honor.
[GetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetUInt32Value)                                  | unit:GetUInt32Value()                     | Returns the UInt32Value for Unit at field. (Disabled)
[GetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetUInt64Value)                                  | unit:GetUInt64Value()                     | Returns the UInt64Value for Unit at field. (Disabled)
[GetUnitByGUID](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetUnitByGUID)                                    | unit:GetUnitByGUID()                      | Returns the Unit with the GUID specified.
[GetUnitBySqlId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetUnitBySqlId)                                  | unit:GetUnitBySqlId()                     | Returns the Unit with the specified SQL ID.
[GetVehicleBase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetVehicleBase)                                  | unit:GetVehicleBase()                     | Retrieves the base unit of the Unit’s vehicle.
[GetWorldStateForZone](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetWorldStateForZone)                      | unit:GetWorldStateForZone()               |
[GetX](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetX)                                                      | unit:GetX()                               | Returns the Unit’s x co-ordinate.
[GetY](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetY)                                                      | unit:GetY()                               | Returns the Unit’s y co-ordinate.
[GetZ](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetZ)                                                      | unit:GetZ()                               | Returns the Unit’s z co-ordinate.
[GetZoneId](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GetZoneId)                                            | unit:GetZoneId()                          | Returns the Unit’s zone id.
[GiveHonor](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GiveHonor)                                            | unit:GiveHonor()                          | Gives the player specified the amount of honor specified.
[GiveXp](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GiveXp)                                                  | unit:GiveXp()                             | Gives the Player the specified amount of XP.
[GossipAddQuests](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipAddQuests)                                | unit:GossipAddQuests()                    | Adds quests to the gossip menu if any available.
[GossipComplete](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipComplete)                                  | unit:GossipComplete()                     | Completes (closes) the player’s gossip window.
[GossipCreateMenu](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipCreateMenu)                              | unit:GossipCreateMenu()                   | Creates a new NPC gossip menu with the TextID specified.
[GossipMenuAddItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipMenuAddItem)                            | unit:GossipMenuAddItem()                  | Creates a new menu item, used after registering a new menu with GossipCreateMenu().
[GossipMiscAction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipMiscAction)                              | unit:GossipMiscAction()                   | Performs a Gossip Action.
[GossipSendMenu](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipSendMenu)                                  | unit:GossipSendMenu()                     | Sends the gossip menu to the player.
[GossipSendPOI](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipSendPOI)                                    | unit:GossipSendPOI()                      | Sets a mark on the player’s mini map. Used when asking city guards where to go.
[GossipSendQuickMenu](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GossipSendQuickMenu)                        | unit:GossipSendQuickMenu()                |
[GuildBankDepositMoney](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GuildBankDepositMoney)                    | unit:GuildBankDepositMoney()              | Removes gold from the unit and deposits it in the guild bank.
[GuildBankWithdrawMoney](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_GuildBankWithdrawMoney)                  | unit:GuildBankWithdrawMoney()             | Removes gold from the guild bank and gives it to the unit.
[HandleEvent](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HandleEvent)                                        | unit:HandleEvent()                        | Unknown, see core for usage.
[HasAchievement](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasAchievement)                                  | unit:HasAchievement()                     | Returns true if the player has the achievement, otherwise false.
[HasAura](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasAura)                                                | unit:HasAura()                            | Returns true if the Unit is afflicted by an aura with the id specified, otherwise false.
[HasAuraWithMechanic](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasAuraWithMechanic)                        | unit:HasAuraWithMechanic()                | Returns true if the Unit has an aura that has a specific mechanic. See page for more details.
[HasEmptyVehicleSeat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasEmptyVehicleSeat)                        | unit:HasEmptyVehicleSeat()                | Tells if the Unit’s vehicle has an empty seat.
[HasFinishedQuest](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasFinishedQuest)                              | unit:HasFinishedQuest()                   | Returns true if the unit has completed the quest, false otherwise.
[HasFlag](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasFlag)                                                | unit:HasFlag()                            | Returns true if the Unit possess the flag at index, otherwise false. (Disabled)
[HasInRangeObjects](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasInRangeObjects)                            | unit:HasInRangeObjects()                  | Returns true if there are GameObjects in range of the Unit.
[HasItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasItem)                                                | unit:HasItem()                            | Returns true if the player has the item specified, false if not.
[HasNegativeAura](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasNegativeAura)                                | unit:HasNegativeAura()                    | Returns true if the Unit has a debuff on them, otherwise it returns false.
[HasPositiveAura](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasPositiveAura)                                | unit:HasPositiveAura()                    | The same as HasNegativeAura(), but with buffs instead of debuffs.
[HasQuest](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasQuest)                                              | unit:HasQuest()                           | Returns true if the Unit has the quest, returns false otherwise.
[HasSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasSkill)                                              | unit:HasSkill()                           | Returns true if the Unit has the skill specified, false if not.
[HasSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasSpell)                                              | unit:HasSpell()                           | Returns true if the Unit has the spell specified, false if not.
[HasTitle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_HasTitle)                                              | unit:HasTitle()                           | Returns true if the Unit has the title specified, otherwise false.
[Heal](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Heal)                                                      | unit:Heal()                               | Returns an absolute value of the Unit’s health.
[InterruptSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_InterruptSpell)                                  | unit:InterruptSpell()                     | Interrupts the current spell.
[IsAlive](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsAlive)                                                | unit:IsAlive()                            | Returns true if the Unit is alive, otherwise false.
[IsAttackable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsAttackable)                                      | unit:IsAttackable()                       | Returns true if Unit can attack target, otherwise false.
[IsCreature](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsCreature)                                          | unit:IsCreature()                         | Returns true if the Unit is a creature, otherwise false.
[isDazed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_isDazed)                                                | unit:isDazed()                            | Returns true if the Unit is dazed, otherwise false.
[IsDead](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsDead)                                                  | unit:IsDead()                             | Returns true if the Unit is dead, otherwise false.
[IsFeared](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsFeared)                                              | unit:IsFeared()                           | Returns true if the Unit is feared, otherwise false.
[IsFFAFlagged](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsFFAFlagged)                                      | unit:IsFFAFlagged()                       |
[IsFFAPvPFlagged](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsFFAPvPFlagged)                                | unit:IsFFAPvPFlagged()                    | Returns true if the Unit is flagged for free for all, otherwise false.
[IsFlying](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsFlying)                                              | unit:IsFlying()                           | Returns true if the Unit is flying, otherwise false.
[IsFriendly](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsFriendly)                                          | unit:IsFriendly()                         | Returns true if the target is friendly to the Unit, otherwise false.
[IsGm](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsGm)                                                      | unit:IsGm()                               | Returns true if the Unit has GM levels, otherwise false.
[IsGroupedWith](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsGroupedWith)                                    | unit:IsGroupedWith()                      | Returns true if the player is in a group with the target, false if not.
[IsGroupFull](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsGroupFull)                                        | unit:IsGroupFull()                        | Returns true if the group is full, false if not.
[IsHostile](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsHostile)                                            | unit:IsHostile()                          | IsFriendly(target) for hostile Units.
[IsInArc](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInArc)                                                | unit:IsInArc()                            | Returns true if the target is in an Arc that is degrees wide from the Unit.
[IsInBack](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInBack)                                              | unit:IsInBack()                           | Returns true if the Unit is considered ‘behind’ target.
[IsInChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInChannel)                                        | unit:IsInChannel()                        | Returns true if the Unit is in the channel specified, otherwise false.
[IsInCombat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInCombat)                                          | unit:IsInCombat()                         | Returns true if the Unit is in Combat, otherwise false.
[IsInDungeon](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInDungeon)                                        | unit:IsInDungeon()                        | Returns true if the Unit is in a dungeon, otherwise false.
[IsInFront](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInFront)                                            | unit:IsInFront()                          | Returns true if the Unit is considered ‘in front’ target.
[IsInGroup](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInGroup)                                            | unit:IsInGroup()                          | Returns true if the player is in a group, false if not.
[IsInGuild](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInGuild)                                            | unit:IsInGuild()                          | Returns true if the Unit is in a guild, otherwise false.
[IsInPhase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInPhase)                                            | unit:IsInPhase()                          | Returns true if the Unit is in the specified phase, otherwise false.
[IsInRaid](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInRaid)                                              | unit:IsInRaid()                           | IsInDungeon() for raids.
[IsInWater](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInWater)                                            | unit:IsInWater()                          | Returns true if the Unit is in water, otherwise false.
[IsInWorld](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsInWorld)                                            | unit:IsInWorld()                          | Returns true if the Unit is in the world, otherwise false.
[IsMounted](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsMounted)                                            | unit:IsMounted()                          | Returns true if the Unit is mounted, false if not.
[IsOnTaxi](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsOnTaxi)                                              | unit:IsOnTaxi()                           | Returns true if the Unit is on a taxi, otherwise false.
[IsOnVehicle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsOnVehicle)                                        | unit:IsOnVehicle()                        | Tells if the unit is on a vehicle.
[IsPacified](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPacified)                                          | unit:IsPacified()                         | Returns true if the unit is pacified, false if not.
[IsPet](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPet)                                                    | unit:IsPet()                              | Returns true if the Unit is a pet, otherwise false.
[IsPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPlayer)                                              | unit:IsPlayer()                           | Returns true if the player is moving, false if not.
[IsPlayerAttacking](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPlayerAttacking)                            | unit:IsPlayerAttacking()                  | Returns true if the player is attacking, false if not.
[IsPlayerMoving](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPlayerMoving)                                  | unit:IsPlayerMoving()                     | Returns true if the player is moving, false if not.
[isPoisoned](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_isPoisoned)                                          | unit:isPoisoned()                         | Returns true if the unit is poisoned, false if not.
[IsPvPFlagged](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsPvPFlagged)                                      | unit:IsPvPFlagged()                       | Returns true if the Unit is flagged for PvP, otherwise false.
[IsRooted](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsRooted)                                              | unit:IsRooted()                           | Returns true if the Unit is rooted, otherwise false.
[IsStealthed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsStealthed)                                        | unit:IsStealthed()                        | Returns true if the Unit is stealthed, otherwise false.
[IsStunned](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_IsStunned)                                            | unit:IsStunned()                          | Returns true if the unit is stunned, false if not.
[JoinChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_JoinChannel)                                        | unit:JoinChannel()                        | Force-joins the specified channel.
[KickFromChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_KickFromChannel)                                | unit:KickFromChannel()                    | Kicks the Unit from the Channel.
[KickPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_KickPlayer)                                          | unit:KickPlayer()                         | Kicks the player after the delay. Please leave your message after the beep.
[Kill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Kill)                                                      | unit:Kill()                               | Returns the player’s Skill level of the skill specified.
[Land](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Land)                                                      | unit:Land()                               | Disables flying if set to 1.
[LearnSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_LearnSpell)                                          | unit:LearnSpell()                         | Teaches the Unit the spell given.
[LearnSpells](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_LearnSpells)                                        | unit:LearnSpells()                        | Teaches the player all spells in the table specified.
[LeaveChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_LeaveChannel)                                      | unit:LeaveChannel()                       | Leaves the channel.
[LifeTimeKills](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_LifeTimeKills)                                    | unit:LifeTimeKills()                      | Adds the amount of lifetime kills specified to the player’s total count.
[MarkQuestObjectiveAsComplete](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_MarkQuestObjectiveAsComplete)      | unit:MarkQuestObjectiveAsComplete()       | Marks the objective of questid as completed.
[ModFloatValue](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModFloatValue)                                    | unit:ModFloatValue()                      | Modifies the Unit’s float value to the float specified. (Disabled)
[ModifyAIUpdateEvent](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyAIUpdateEvent)                        | unit:ModifyAIUpdateEvent()                | Modifies the AI Update event to run at newtime.
[ModifyFlySpeed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyFlySpeed)                                  | unit:ModifyFlySpeed()                     | Modifies the Unit’s fly speed to the specified speed.
[ModifyRunSpeed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyRunSpeed)                                  | unit:ModifyRunSpeed()                     | Modifies the Unit’s run speed to the specified speed.
[ModifyWalkSpeed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModifyWalkSpeed)                                | unit:ModifyWalkSpeed()                    | Modifies the Unit’s walk speed to the specified speed.
[ModThreat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModThreat)                                            | unit:ModThreat()                          | Modifies the Unit’s threat against target by amount.
[ModUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ModUInt32Value)                                  | unit:ModUInt32Value()                     | Modifies the Unit’s uint32_t flag at index. (Disabled)
[MovePlayerTo](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_MovePlayerTo)                                      | unit:MovePlayerTo()                       | MoveTo() for players. The flag can be 0 (walking), 256 (teleport), 4096 (running) or 12288 (flying).
[MoveRandomArea](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_MoveRandomArea)                                  | unit:MoveRandomArea()                     | Moves the Unit to a random area within the given realm.
[MoveTo](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_MoveTo)                                                  | unit:MoveTo()                             | Forcibly moves the Unit specified to the co-ordinates specified.
[MoveVehiclePassengerToSeat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_MoveVehiclePassengerToSeat)          | unit:MoveVehiclePassengerToSeat()         | Moves the specified passenger of the unit’s vehicle to another seat.
[PhaseAdd](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PhaseAdd)                                              | unit:PhaseAdd()                           |
[PhaseDelete](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PhaseDelete)                                        | unit:PhaseDelete()                        |
[PhaseSet](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PhaseSet)                                              | unit:PhaseSet()                           |
[PlayerSendChatMessage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PlayerSendChatMessage)                    | unit:PlayerSendChatMessage()              | Forces the Player to send the message with the parameters specified.
[PlaySoundToPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PlaySoundToPlayer)                            | unit:PlaySoundToPlayer()                  | Like PlaySoundToSet(sound), only the sound only plays to the player specified.
[PlaySoundToSet](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PlaySoundToSet)                                  | unit:PlaySoundToSet()                     | Plays the specified sound ID to everyone in the Unit’s map cell.
[PlaySpellVisual](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PlaySpellVisual)                                | unit:PlaySpellVisual()                    | ‘Casts’ the spell on the Unit GUID specified. The spell has no effect, and only the visual is played. To get a GUID, use GetGUID().
[Possess](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Possess)                                                | unit:Possess()                            | Like the GM command .npc possess.
[PromoteGuildMember](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_PromoteGuildMember)                          | unit:PromoteGuildMember()                 | Forces the Unit to promote the target guild member.
[QuestAddFinisher](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_QuestAddFinisher)                              | unit:QuestAddFinisher()                   | Allows the NPC to be used to finish the quest with the id given.
[QuestAddStarter](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_QuestAddStarter)                                | unit:QuestAddStarter()                    | Allows the NPC to be used to start the quest with the id given.
[RegisterEvent](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RegisterEvent)                                    | unit:RegisterEvent()                      | Registers the method given with the delay given and repeats (0 repeats indefinitely). The name can either be a reference, a direct method or a string value of the method.
[RemoveAchievement](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAchievement)                            | unit:RemoveAchievement()                  | Removes the Achievement with the ID specified from the player.
[RemoveAIUpdateEvent](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAIUpdateEvent)                        | unit:RemoveAIUpdateEvent()                | Removes all AI Update Events.
[RemoveAllAuras](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAllAuras)                                  | unit:RemoveAllAuras()                     | Removes all auras on the Unit.
[RemoveArenaPoints](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveArenaPoints)                            | unit:RemoveArenaPoints()                  | Removes the amount of arena points from the Unit specified.
[RemoveAura](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAura)                                          | unit:RemoveAura()                         | Removes the aura specified from the Unit. 
[RemoveAurasByMechanic](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAurasByMechanic)                    | unit:RemoveAurasByMechanic()              | Removes all auras by the mechanic given.
[RemoveAurasType](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveAurasType)                                | unit:RemoveAurasType()                    | Removes all auras by the type given. 
[RemoveEvents](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveEvents)                                      | unit:RemoveEvents()                       | Removes all events registered with RegisterEvent(). 
[RemoveFlag](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveFlag)                                          | unit:RemoveFlag()                         | Removes the Unit’s flag at field, value. (Disabled) 
[RemoveFromWorld](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveFromWorld)                                | unit:RemoveFromWorld()                    | Removes the Unit from the world. 
[RemoveGuildMember](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveGuildMember)                            | unit:RemoveGuildMember()                  | Force-removes the targeted guild member from the specified unit’s guild. Note that the target must be online for this to work.
[RemoveItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveItem)                                          | unit:RemoveItem()                         | Removes an item from the player with the count specified.
[RemoveNegativeAuras](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveNegativeAuras)                        | unit:RemoveNegativeAuras()                | Removes all negative auras from the Unit. 
[RemovePvPFlag](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemovePvPFlag)                                    | unit:RemovePvPFlag()                      | Removes the Unit’s PvP flag.
[RemoveSkill](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveSkill)                                        | unit:RemoveSkill()                        | Removes the skill from Unit with the skill id specified.
[RemoveStealth](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveStealth)                                    | unit:RemoveStealth()                      | Removes any stealth from the specified Unit.
[RemoveThreat](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RemoveThreat)                                      | unit:RemoveThreat()                       | Erases the target from the threat table.
[RepairAllPlayerItems](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_RepairAllPlayerItems)                      | unit:RepairAllPlayerItems()               | Repairs all items that the player has.
[Repop](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Repop)                                                    | unit:Repop()                              | Force releases the spirit of a dead player.
[ResetAllTalents](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ResetAllTalents)                                | unit:ResetAllTalents()                    | Resets the player’s talents. 
[ResetModel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ResetModel)                                          | unit:ResetModel()                         |
[ResetPetTalents](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ResetPetTalents)                                | unit:ResetPetTalents()                    | Resets the current pet’s talents.
[ResetTalents](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ResetTalents)                                      | unit:ResetTalents()                       |
[ResurrectPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ResurrectPlayer)                                | unit:ResurrectPlayer()                    | Revives the player unit.
[ReturnToSpawnPoint](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_ReturnToSpawnPoint)                          | unit:ReturnToSpawnPoint()                 | Returns the Unit to it’s spawn point.
[Root](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Root)                                                      | unit:Root()                               | Returns true if the Unit is rooted, otherwise false.
[SavePlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SavePlayer)                                          | unit:SavePlayer()                         | Saves the player to the database.
[SendAIReaction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendAIReaction)                                  | unit:SendAIReaction()                     |
[SendAreaTriggerMessage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendAreaTriggerMessage)                  | unit:SendAreaTriggerMessage()             | Sends an Area Trigger message with the specified string to the player.
[SendAuctionWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendAuctionWindow)                            | unit:SendAuctionWindow()                  | Sends the player unit’s auction window.
[SendBankWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendBankWindow)                                  | unit:SendBankWindow()                     | Sends the player specified a bank window with the unit as the sender.
[SendBattlegroundWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendBattlegroundWindow)                  | unit:SendBattlegroundWindow()             | Sends the Player Unit’s battleground window. The battleground window varies on the ID you give it - see page for more info.
[SendBroadcastMessage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendBroadcastMessage)                      | unit:SendBroadcastMessage()               | Broadcasts the specified string to the player.
[SendChatMessage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendChatMessage)                                | unit:SendChatMessage()                    | Forces the Player to send the message with the parameters specified.
[SendChatMessageAlternateEntry](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendChatMessageAlternateEntry)    | unit:SendChatMessageAlternateEntry()      | Forces the Unit with the entry id specified to send a message with the parameters designated.
[SendChatMessageToPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendChatMessageToPlayer)                | unit:SendChatMessageToPlayer()            | Sends the player specified a chat message with the parameters designated. 
[SendGuildChatMessage](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendGuildChatMessage)                      | unit:SendGuildChatMessage()               | Forces Unit to send a message to guild. If officer is set to true, then the message is broadcasted in the officer chat instead.
[SendGuildInvite](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendGuildInvite)                                | unit:SendGuildInvite()                    | Forces the Unit to send a guild invite to pPlayer.
[SendGuildLog](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendGuildLog)                                      | unit:SendGuildLog()                       | Sends the Guild Log to the Unit.
[SendInnkeeperWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendInnkeeperWindow)                        | unit:SendInnkeeperWindow()                | Sends an innkeeper window to the Unit.
[SendLootWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendLootWindow)                                  | unit:SendLootWindow()                     | Sends a loot window to the Unit with the specified loottype. 1 (creature), 2 (skinning), 3 (pickpocket), 4 (fishing), 5 (herb/mining), 6 (disenchanting/prospecting/milling, etc).
[SendPacket](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendPacket)                                          | unit:SendPacket()                         | Sends the packet specified to all near Units. If self is set to true, the packet is also sent to the unit. See Packet Function Documentation for more information on packets.
[SendPacketToGroup](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendPacketToGroup)                            | unit:SendPacketToGroup()                  | Sends the packet specified to the Unit’s group. See Packet Function Documentation for more information on packets.
[SendPacketToGuild](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendPacketToGuild)                            | unit:SendPacketToGuild()                  | Sends the packet specified to the Unit’s guild. See Packet Function Documentation for more information on packets.
[SendPacketToPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendPacketToPlayer)                          | unit:SendPacketToPlayer()                 | Sends the packet specified to the Unit specified. See Packet Function Documentation for more information on packets.
[SendTrainerWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendTrainerWindow)                            | unit:SendTrainerWindow()                  | Akin to SendBankWindow(), but with trainers instead of banks.
[SendVendorWindow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SendVendorWindow)                              | unit:SendVendorWindow()                   | Akin to SendBankWindow(), but with vendors instead of banks.
[SetAttackTimer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetAttackTimer)                                  | unit:SetAttackTimer()                     | Sets the Unit’s main-hand attack speed to timer. If offhand is true, offhand is also set to this.
[SetBindPoint](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetBindPoint)                                      | unit:SetBindPoint()                       | Sets the Unit’s bind point to the co-ordinates specified.
[SetByteValue](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetByteValue)                                      | unit:SetByteValue()                       | Sets the byte at index, index1 to value. (Disabled)
[SetChannelName](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetChannelName)                                  | unit:SetChannelName()                     | Renames the Channel.
[SetChannelPassword](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetChannelPassword)                          | unit:SetChannelPassword()                 | Adds a password to the Channel.
[SetCombatCapable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCombatCapable)                              | unit:SetCombatCapable()                   | If set to true, disables the Unit’s ability to enter combat completely.
[SetCombatMeleeCapable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCombatMeleeCapable)                    | unit:SetCombatMeleeCapable()              | If set to true, disables the Unit’s ability to use Melee Combat.
[SetCombatRangedCapable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCombatRangedCapable)                  | unit:SetCombatRangedCapable()             | If set to true, disables the Unit’s ability to use Ranged Combat.
[SetCombatSpellCapable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCombatSpellCapable)                    | unit:SetCombatSpellCapable()              |
[SetCombatTargetingCapable](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCombatTargetingCapable)            | unit:SetCombatTargetingCapable()          | If set to true, disables the Unit’s targeting capabilities (The mob will not be able to use targeted spells either).
[SetCreatureNameById](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetCreatureNameById)                        | unit:SetCreatureNameById()                | Currently the method is commented out. Do not use.
[SetDeathState](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetDeathState)                                    | unit:SetDeathState()                      | Sets the Unit’s death state. 0 (Alive), 1 (Just Died), 2 (Corpse), 3 (Dead).
[SetDungeonDifficulty](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetDungeonDifficulty)                      | unit:SetDungeonDifficulty()               | Sets the Dungeon difficulty to the level specified. 0 (10M), 2 (25M), 3 (10M HC) 4 (25M HC).
[SetFacing](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetFacing)                                            | unit:SetFacing()                          | Forces the Unit to face the orientation provided.
[SetFaction](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetFaction)                                          | unit:SetFaction()                         | Sets the Unit’s faction to the faction specified.
[SetFlag](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetFlag)                                                | unit:SetFlag()                            |
[SetFloatValue](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetFloatValue)                                    | unit:SetFloatValue()                      | Sets the Unit’s float value to the float specified. (Disabled)
[SetFlying](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetFlying)                                            | unit:SetFlying()                          | Allows the Unit to fly. Use Land() to force the unit to land again.
[SetGender](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetGender)                                            | unit:SetGender()                          | Sets the gender of a character.
[SetGroupLeader](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetGroupLeader)                                  | unit:SetGroupLeader()                     | Promotes the player specified to the Group Leader. If silent is set to true, then no message is made in the chat frame.
[SetGuildInformation](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetGuildInformation)                        | unit:SetGuildInformation()                | Sets the Guild Information to the string provided.
[SetGuildMotd](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetGuildMotd)                                      | unit:SetGuildMotd()                       | Sets the Message of the Day of the unit’s guild to the string given.
[SetGuildRank](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetGuildRank)                                      | unit:SetGuildRank()                       | Sets the Unit’s guild rank to the one specified.
[SetHealth](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetHealth)                                            | unit:SetHealth()                          | Sets the Unit’s health an absolute value based on the number specified.
[SetHealthPct](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetHealthPct)                                      | unit:SetHealthPct()                       | Sets the Unit’s health to a percentage based on the percentage given.
[SetInFront](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetInFront)                                          | unit:SetInFront()                         | Sets the target as ‘in front’ of the Unit.
[SetInvincible](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetInvincible)                                    | unit:SetInvincible()                      | Makes the unit invincible if set to true.
[SetInvisible](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetInvisible)                                      | unit:SetInvisible()                       | If set to true, the Unit becomes completely invisible.
[SetKnownTitle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetKnownTitle)                                    | unit:SetKnownTitle()                      | Makes the Player use the title specified. This is not saved to the database.
[SetLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetLevel)                                              | unit:SetLevel()                           | Sets the Player’s level to the level given. Cannot exceed the max level in configs.
[SetMana](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMana)                                                | unit:SetMana()                            | Sets the Unit’s mana to the absolute value provided.
[SetMaxHealth](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMaxHealth)                                      | unit:SetMaxHealth()                       | Sets the Unit’s maximum amount of health to the number specified.
[SetMaxMana](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMaxMana)                                          | unit:SetMaxMana()                         | Sets the Unit’s maximum mana to the absolute value provided.
[SetMaxPower](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMaxPower)                                        | unit:SetMaxPower()                        | Sets the Unit’s maximum power to the absolute value and type provided.
[SetModel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetModel)                                              | unit:SetModel()                           | Sets the Unit’s display id to the one specified. Returns true if successful, false if not.
[SetMount](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMount)                                              | unit:SetMount()                           | Mounts the Unit with the display ID given.
[SetMovementFlags](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetMovementFlags)                              | unit:SetMovementFlags()                   | Forces the Unit to move with the flags specified. 0 (Walk), 1 (Run), 2 (Fly).
[SetNPCFlags](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetNPCFlags)                                        | unit:SetNPCFlags()                        | Sets the Unit’s flags to the flags specified (This is used to disable gossip, etc).
[SetOfficerNote](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetOfficerNote)                                  | unit:SetOfficerNote()                     | Sets pPlayer’s officer note to the string provided.
[SetOrientation](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetOrientation)                                  | unit:SetOrientation()                     | Sets the Unit’s orientation to the orientation specified.
[SetOutOfCombatRange](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetOutOfCombatRange)                        | unit:SetOutOfCombatRange()                | When the Unit reaches this far away from it’s combat target, the combat is broken.
[SetPacified](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPacified)                                        | unit:SetPacified()                        | True to pacify the Unit, false to unpacify the Unit.
[SetPetOwner](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPetOwner)                                        | unit:SetPetOwner()                        | Sets Unit’s new owner to newowner.
[SetPhase](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPhase)                                              | unit:SetPhase()                           | Sets the Unit to the phase specified. If ‘save’ is set to true, and the Unit is a NPC/Object, then the Unit will be saved in that phase. Mapped to PhaseSet(newphase[, save]) and PhaseAdd(newphase[, save]).
[SetPlayerAtWar](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPlayerAtWar)                                  | unit:SetPlayerAtWar()                     | Sets /unsets the Player at war with the faction specified.
[SetPlayerLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPlayerLevel)                                  | unit:SetPlayerLevel()                     |
[SetPlayerLock](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPlayerLock)                                    | unit:SetPlayerLock()                      | Locks / unlocks the player from making any action.
[SetPlayerSpeed](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPlayerSpeed)                                  | unit:SetPlayerSpeed()                     | Sets the player’s global speed to speed.
[SetPlayerWeather](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPlayerWeather)                              | unit:SetPlayerWeather()                   | Sets the player’s weather to type, and makes the strength density.
[SetPosition](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPosition)                                        | unit:SetPosition()                        | Sets the Unit’s position to the co-ordinates specified.
[SetPower](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPower)                                              | unit:SetPower()                           | Sets the Unit’s power to the amount specified. If type is specified, the unit’s power of that type is used instead. See the page for more info.
[SetPowerPct](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPowerPct)                                        | unit:SetPowerPct()                        | Same as SetPower(), only this time you give a percentage instead of an absolute value.
[SetPowerType](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPowerType)                                      | unit:SetPowerType()                       |
[SetPublicNote](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetPublicNote)                                    | unit:SetPublicNote()                      | Sets pPlayer’s public note to the string provided.
[SetScale](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetScale)                                              | unit:SetScale()                           | Sets the Unit’s scale to the scale provided.
[SetSelectedGO](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetSelectedGO)                                    | unit:SetSelectedGO()                      |
[SetStanding](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetStanding)                                        | unit:SetStanding()                        | Sets the Unit’s standing with the faction to the value specified.
[SetStandState](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetStandState)                                    | unit:SetStandState()                      | Sets the Unit’s stand state.
[SetStealthLevel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetStealthLevel)                                | unit:SetStealthLevel()                    | Sets the Unit’s stealth level to the one provided. See page for more information.
[SetTalentPoints](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetTalentPoints)                                | unit:SetTalentPoints()                    | Sets spec to have amount talent points.
[SetTauntedBy](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetTauntedBy)                                      | unit:SetTauntedBy()                       |
[SetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetUInt32Value)                                  | unit:SetUInt32Value()                     | Sets the Unit’s uint32_t flag at index. (Disabled)
[SetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetUInt64Value)                                  | unit:SetUInt64Value()                     | Sets the Unit’s uint64_t guid at field. (Disabled)
[SetUnitToFollow](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetUnitToFollow)                                | unit:SetUnitToFollow()                    | Follows the target specified, at the specified angle and will stop following when it reaches the amount of yards specified.
[SetWorldStateForPlayer](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetWorldStateForPlayer)                  | unit:SetWorldStateForPlayer()             |
[SetWorldStateForZone](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetWorldStateForZone)                      | unit:SetWorldStateForZone()               |
[SetZoneWeather](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SetZoneWeather)                                  | unit:SetZoneWeather()                     | SetPlayerWeather() for zones.
[SoftDisconnect](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SoftDisconnect)                                  | unit:SoftDisconnect()                     | Kicks the player to the character select screen.
[SpawnAndEnterVehicle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SpawnAndEnterVehicle)                      | unit:SpawnAndEnterVehicle()               | Spawns a new vehicle and makes the Unit enter it.
[SpawnCreature](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SpawnCreature)                                    | unit:SpawnCreature()                      | Spawns a creature in the Unit’s map with the co-ordinates and faction specified. Despawns after duration (0 for no despawn).
[SpawnGameObject](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SpawnGameObject)                                | unit:SpawnGameObject()                    | Spawns a GameObject in the Unit’s map with the co-ordinates and scale specified. Despawns after duration (0 for no despawn).
[SpellNonMeleeDamageLog](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_SpellNonMeleeDamageLog)                  | unit:SpellNonMeleeDamageLog()             | Unknown, Check core for usage.
[StartQuest](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_StartQuest)                                          | unit:StartQuest()                         | Force-start the quest with the given ID. If any items are required for the quest, these are automatically added.
[StartTaxi](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_StartTaxi)                                            | unit:StartTaxi()                          | Forces the Unit to start the taxi path specified, and mount it on the specified display id.
[StopChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_StopChannel)                                        | unit:StopChannel()                        | Stops channeling the current spell.
[StopMovement](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_StopMovement)                                      | unit:StopMovement()                       | Stops all movement for the unit for the time specified.
[StopPlayerAttack](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_StopPlayerAttack)                              | unit:StopPlayerAttack()                   | Stops the player attacking. This is only for melee.
[Strike](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Strike)                                                  | unit:Strike()                             | The Unit damages the target with the damage type specified. If a spell is specified, this will be used. See the page for more information.
[TakeHonor](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_TakeHonor)                                            | unit:TakeHonor()                          | Like GiveHonor(), but removes instead of adds.
[Teleport](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Teleport)                                              | unit:Teleport()                           | Teleports the Player to the co-ordinates given.
[TeleportCreature](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_TeleportCreature)                              | unit:TeleportCreature()                   | Teleports the Creature to the co-ordinates given. Note that the creature cannot be teleported to another map. To do this, you’ll need to spawn it there.
[UnbanFromChannel](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_UnbanFromChannel)                              | unit:UnbanFromChannel()                   | Unbans the Unit from the Channel.
[UnlearnSpell](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_UnlearnSpell)                                      | unit:UnlearnSpell()                       | Removes the spell from the unit’s spell-book.
[Unpossess](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Unpossess)                                            | unit:Unpossess()                          | Like the GM command .npc unpossess.
[Unroot](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_Unroot)                                                  | unit:Unroot()                             | Allows movement.
[UnsetKnownTitle](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_UnsetKnownTitle)                                | unit:UnsetKnownTitle()                    | Removes the title specified. This is not saved to the database.
[UseAI](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_UseAI)                                                    | unit:UseAI()                              |
[VendorAddItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_VendorAddItem)                                    | unit:VendorAddItem()                      | Adds the specified amount of items to the Unit designated. Setting quantity to zero enables unlimited quantity.
[VendorRemoveAllItems](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_VendorRemoveAllItems)                      | unit:VendorRemoveAllItems()               | Removes all items from the vendor.
[VendorRemoveItem](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_VendorRemoveItem)                              | unit:VendorRemoveItem()                   | Removes the specified item from the Unit designed.
[WipeCurrentTarget](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_WipeCurrentTarget)                            | unit:WipeCurrentTarget()                  | Drops the Unit’s current target. Also sets their threat to 0 (More specifically, removes them from the threat table).
[WipeTargetList](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_WipeTargetList)                                  | unit:WipeTargetList()                     | Resets the Unit’s target list.
[WipeThreatList](/Wiki/docs/standards_scripts/methods_lua/Unit_Methods/Lua_WipeThreatList)                                  | unit:WipeThreatList()                     | Sets the threat of everyone on the unit’s threat list to 0.


### Item Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[AddEnchantment](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_AddEnchantment)                                  | item:AddEnchantment()                     |
[AddLoot](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_AddLoot)                                                | item:AddLoot()                            |
[Create](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_Create)                                                  | item:Create()                             |
[GetBuyPrice](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetBuyPrice)                                        | item:GetBuyPrice()                        |
[GetByteValue](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetByteValue)                                      | item:GetByteValue()                       |
[GetContainerItemCount](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetContainerItemCount)                    | item:GetContainerItemCount()              |
[GetDurability](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetDurability)                                    | item:GetDurability()                      |
[GetEntryId](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetEntryId)                                          | item:GetEntryId()                         |
[GetEquippedSlot](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetEquippedSlot)                                | item:GetEquippedSlot()                    |
[GetFloatValue](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetFloatValue)                                    | item:GetFloatValue()                      |
[GetGuid](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetGuid)                                                | item:GetGuid()                            |
[GetItemLevel](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetItemLevel)                                      | item:GetItemLevel()                       |
[getItemLink](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_getItemLink)                                        | item:getItemLink()                        |
[GetMaxDurability](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetMaxDurability)                              | item:GetMaxDurability()                   |
[GetName](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetName)                                                | item:GetName()                            |
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetObjectType)                                    | item:GetObjectType()                      |
[GetOwner](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetOwner)                                              | item:GetOwner()                           |
[GetRequiredLevel](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetRequiredLevel)                              | item:GetRequiredLevel()                   |
[GetSellPrice](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetSellPrice)                                      | item:GetSellPrice()                       |
[GetSpellId](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetSpellId)                                          | item:GetSpellId()                         |
[GetSpellTrigger](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetSpellTrigger)                                | item:GetSpellTrigger()                    |
[GetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetUInt32Value)                                  | item:GetUInt32Value()                     |
[GetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GetUInt64Value)                                  | item:GetUInt64Value()                     |
[GossipComplete](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipComplete)                                  | item:GossipComplete()                     |
[GossipCreateMenu](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipCreateMenu)                              | item:GossipCreateMenu()                   |
[GossipMenuAddItem](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipMenuAddItem)                            | item:GossipMenuAddItem()                  |
[GossipSendMenu](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipSendMenu)                                  | item:GossipSendMenu()                     |
[GossipSendPOI](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipSendPOI)                                    | item:GossipSendPOI()                      |
[GossipSendQuickMenu](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_GossipSendQuickMenu)                        | item:GossipSendQuickMenu()                |
[HasEnchantment](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_HasEnchantment)                                  | item:HasEnchantment()                     |
[HasFlag](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_HasFlag)                                                | item:HasFlag()                            |
[IsAccountbound](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_IsAccountbound)                                  | item:IsAccountbound()                     |
[IsContainer](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_IsContainer)                                        | item:IsContainer()                        |
[IsSoulbound](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_IsSoulbound)                                        | item:IsSoulbound()                        |
[ModFloatValue](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_ModFloatValue)                                    | item:ModFloatValue()                      |
[ModifyEnchantmentTime](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_ModifyEnchantmentTime)                    | item:ModifyEnchantmentTime()              |
[ModUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_ModUInt32Value)                                  | item:ModUInt32Value()                     |
[Remove](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_Remove)                                                  | item:Remove()                             |
[RemoveEnchantment](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_RemoveEnchantment)                            | item:RemoveEnchantment()                  |
[RemoveFlag](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_RemoveFlag)                                          | item:RemoveFlag()                         |
[repairItem](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_repairItem)                                          | item:repairItem()                         |
[SetByteValue](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetByteValue)                                      | item:SetByteValue()                       |
[SetFlag](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetFlag)                                                | item:SetFlag()                            |
[SetFloatValue](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetFloatValue)                                    | item:SetFloatValue()                      |
[SetStackCount](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetStackCount)                                    | item:SetStackCount()                      |
[SetUInt32Value](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetUInt32Value)                                  | item:SetUInt32Value()                     |
[SetUInt64Value](/Wiki/docs/standards_scripts/methods_lua/Item_Methods/Lua_SetUInt64Value)                                  | item:SetUInt64Value()                     |


### Packet Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[CreatePacket](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_CreatePacket)                                    | packet:CreatePacket()                     |
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_GetObjectType)                                  | packet:GetObjectType()                    |
[GetOpcode](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_GetOpcode)                                          | packet:GetOpcode()                        |
[GetSize](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_GetSize)                                              | packet:GetSize()                          |
[ReadByte](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadByte)                                            | packet:ReadByte()                         |
[ReadDouble](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadDouble)                                        | packet:ReadDouble()                       |
[ReadFloat](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadFloat)                                          | packet:ReadFloat()                        |
[ReadGUID](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadGUID)                                            | packet:ReadGUID()                         |
[ReadLong](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadLong)                                            | packet:ReadLong()                         |
[ReadShort](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadShort)                                          | packet:ReadShort()                        |
[ReadString](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadString)                                        | packet:ReadString()                       |
[ReadUByte](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadUByte)                                          | packet:ReadUByte()                        |
[ReadULong](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadULong)                                          | packet:ReadULong()                        |
[ReadUShort](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadUShort)                                        | packet:ReadUShort()                       |
[ReadWoWGuid](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_ReadWoWGuid)                                      | packet:ReadWoWGuid()                      |
[WriteByte](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteByte)                                          | packet:WriteByte()                        |
[WriteDouble](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteDouble)                                      | packet:WriteDouble()                      |
[WriteFloat](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteFloat)                                        | packet:WriteFloat()                       |
[WriteGUID](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteGUID)                                          | packet:WriteGUID()                        |
[WriteLong](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteLong)                                          | packet:WriteLong()                        |
[WriteShort](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteShort)                                        | packet:WriteShort()                       |
[WriteString](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteString)                                      | packet:WriteString()                      |
[WriteUByte](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteUByte)                                        | packet:WriteUByte()                       |
[WriteULong](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteULong)                                        | packet:WriteULong()                       |
[WriteUShort](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteUShort)                                      | packet:WriteUShort()                      |
[WriteWoWGuid](/Wiki/docs/standards_scripts/methods_lua/Packet_Methods/Lua_WriteWoWGuid)                                    | packet:WriteWoWGuid()                     |


### Taxi Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[AddPathNode](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_AddPathNode)                                        | taxi:AddPathNode()                        |
[CreateTaxi](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_CreateTaxi)                                          | taxi:CreateTaxi()                         |
[GetId](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetId)                                                    | taxi:GetId()                              |
[GetNodeCount](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetNodeCount)                                      | taxi:GetNodeCount()                       |
[GetNodeMapId](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetNodeMapId)                                      | taxi:GetNodeMapId()                       |
[GetNodeX](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetNodeX)                                              | taxi:GetNodeX()                           |
[GetNodeY](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetNodeY)                                              | taxi:GetNodeY()                           |
[GetNodeZ](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetNodeZ)                                              | taxi:GetNodeZ()                           |
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Taxi_Methods/Lua_GetObjectType)                                    | taxi:GetObjectType()                      |


### Spell Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[CanCast](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_CanCast)                                               | spell:CanCast()                           | Returns true if the spell is castable.
[Cancel](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_Cancel)                                                 | spell:Cancel()                            | Cancels the spell.
[Cast](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_Cast)                                                     | spell:Cast()                              | Returns the caster of the spell. Can return a Unit, Item or GameObject.
[Finish](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_Finish)                                                 | spell:Finish()                            | Finishes the spell, used post-casting.
[GetCastedItemId](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetCastedItemId)                               | spell:GetCastedItemId()                   | Returns what item ID cast the spell.
[GetCaster](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetCaster)                                           | spell:GetCaster()                         | Returns the caster of the spell. Can return a Unit, Item or GameObject.
[GetEntry](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetEntry)                                             | spell:GetEntry()                          | Returns the entry ID of the spell.
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetObjectType)                                   | spell:GetObjectType()                     | Returns Spell.
[GetPossibleEnemy](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetPossibleEnemy)                             | spell:GetPossibleEnemy()                  | Returns the GUID of a possible unit enemy of the spell. Range is optional.
[GetPossibleFriend](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetPossibleFriend)                           | spell:GetPossibleFriend()                 | Same as above but for a friendly target.
[GetSpellState](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetSpellState)                                   | spell:GetSpellState()                     | Returns the state of the spell.
[GetSpellType](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetSpellType)                                     | spell:GetSpellType()                      | Returns the type of the spell.
[GetTarget](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetTarget)                                           | spell:GetTarget()                         | Returns the target of the spell if the spell has a trigger effect. Can return a Unit, Item or GameObject.
[GetVar](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_GetVar)                                                 | spell:GetVar()                            | See SetVar(var [,subindex], value), but returns the value on success or nil on failure.
[HasPower](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_HasPower)                                             | spell:HasPower()                          | Returns true if the caster has enough power to cast the spell.
[IsAspect](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_IsAspect)                                             | spell:IsAspect()                          | Returns true if the spell is a hunter Aspect spell.
[IsDuelSpell](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_IsDuelSpell)                                       | spell:IsDuelSpell()                       | Returns true if the spell was cast in a duel.
[IsInvisibilitySpell](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_IsInvisibilitySpell)                       | spell:IsInvisibilitySpell()               | Like IsStealthSpell() but for invisibility.
[IsSeal](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_IsSeal)                                                 | spell:IsSeal()                            | Returns true if the spell is a paladin Seal spell.
[IsStealthSpell](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_IsStealthSpell)                                 | spell:IsStealthSpell()                    | Returns true if the spell grants some kind of stealth.
[ResetAllVars](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_ResetAllVars)                                     | spell:ResetAllVars()                      | Resets all of Spell’s vars to the DBC originals. Returns true on success, false on failure.
[ResetVar](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_ResetVar)                                             | spell:ResetVar()                          | Resets the specified var to the DBC original. Returns true on success, false on failure.
[SetVar](/Wiki/docs/standards_scripts/methods_lua/Spell_Methods/Lua_SetVar)                                                 | spell:SetVar()                            | Var is a string referring to a parameter of Spell. subindex is optional; used when the variable you are setting has sub indexes. value is what you want to set it to. Returns true on success, false on failure.


### Query Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[GetColumn](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetColumn)                                          | sqlAPI:GetColumn()                        | Get a column by index in the query result.
[NextRow](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_NextRow)                                              | sqlAPI:NextRow()                          | Fetches the next row.
[GetColumnCount](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetColumnCount)                                | sqlAPI:GetColumnCount()                   | Get number of columns in the query result.
[GetRowCount](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetRowCount)                                      | sqlAPI:GetRowCount()                      | Get number of rows in the query result.


### Fields Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[GetBool](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetBool)                                              | sqlAPI:GetBool()                          |
[GetByte](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetByte)                                              | sqlAPI:GetByte()                          |
[GetFloat](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetFloat)                                            | sqlAPI:GetFloat()                         |
[GetGuid](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetGuid)                                              | sqlAPI:GetGuid()                          |
[GetLong](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetLong)                                              | sqlAPI:GetLong()                          |
[GetShort](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetShort)                                            | sqlAPI:GetShort()                         |
[GetString](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetString)                                          | sqlAPI:GetString()                        |
[GetUByte](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetUByte)                                            | sqlAPI:GetUByte()                         |
[GetULong](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetULong)                                            | sqlAPI:GetULong()                         |
[GetUShort](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetUShort)                                          | sqlAPI:GetUShort()                        |



### Aura Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[GetAuraSlot](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetAuraSlot)                                        | aura:GetAuraSlot()                        | Returns the slot that the aura is in. See Unit.h for meanings.
[GetCaster](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetCaster)                                            | aura:GetCaster()                          | Returns the object that casted the aura. Can be a Unit, GameObject, or Item.
[GetDuration](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetDuration)                                        | aura:GetDuration()                        | Returns the duration in miliseconds.
[GetObjectType](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetObjectType)                                    | aura:GetObjectType()                      | Will return Aura if the aura is not nil.
[GetSpellId](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetSpellId)                                          | aura:GetSpellId()                         | Returns the aura’s spell id.
[GetTarget](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetTarget)                                            | aura:GetTarget()                          | Returns the target of the aura; the person who is currently affected by it.
[GetTimeLeft](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetTimeLeft)                                        | aura:GetTimeLeft()                        | Returns the amount of time left until the aura expires in miliseconds.
[GetVar](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_GetVar)                                                  | aura:GetVar()                             | See above, but returns the value on success or nil on failure.
[Remove](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_Remove)                                                  | aura:Remove()                             | Removes the aura & all of its events (duration, etc.,).
[SetAuraSlot](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_SetAuraSlot)                                        | aura:SetAuraSlot()                        | Sets the aura’s slot. See Unit.h for meanings.
[SetDuration](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_SetDuration)                                        | aura:SetDuration()                        | Sets the duration of the aura. The aura will be removed after the duration has passed.
[SetVar](/Wiki/docs/standards_scripts/methods_lua/Aura_Methods/Lua_SetVar)                                                  | aura:SetVar()                             | Var is a string referring to a parameter of Spell. subindex is optional; used when the variable you are setting has sub indexes. value is what you want to set it to. Returns true on success, false on failure.


### Global Methods


Command                                                                                                                     | Methods                                   | Description
----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-----------
[bit_and](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_bit_and)                                              | bit_and()                                 |
[bit_or](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_bit_or)                                                | bit_or()                                  |
[bit_shiftleft](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_bit_shiftleft)                                  | bit_shiftleft()                           |
[bit_shiftright](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_bit_shiftright)                                | bit_shiftright()                          |
[bit_xor](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_bit_xor)                                              | bit_xor()                                 |
[CharDBQuery](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_CharDBQuery)                                      | CharDBQuery()                             | Performs a query on the character database. Returns a “QueryResult” object.
[CharDBQueryTable](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_CharDBQueryTable)                            | CharDBQueryTable()                        | Similar to CharDBQuery(query). See core for more info.
[GetAERevision](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetAERevision)                                  | GetAERevision()                           | Returns the server’s AE revision.
[GetClientVersion](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetClientVersion)                            | GetClientVersion()                        |
[GetDBCSpellVar](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetDBCSpellVar)                                | GetDBCSpellVar()                          | Retrieves a spell var based on spell entry id.
[GetGameTime](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetGameTime)                                      | GetGameTime()                             | Returns server time in seconds.
[GetGuildByLeaderGuid](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetGuildByLeaderGuid)                    | GetGuildByLeaderGuid()                    | Returns a guild with the name given.
[GetGuildByName](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetGuildByName)                                | GetGuildByName()                          | Returns a guild with the name given.
[GetInstanceCreature](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetInstanceCreature)                      | GetInstanceCreature()                     | Returns the creature found in the instance.
[GetInstancePlayerCount](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetInstancePlayerCount)                | GetInstancePlayerCount()                  | Returns the number of players in the instance.
[GetLuaEngine](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetLuaEngine)                                    | GetLuaEngine()                            | Returns what engine the server is using. Should be ALE (AscEmu LuaEngine).
[GetPlatform](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlatform)                                      | GetPlatform()                             | Returns the platform ex. Win32.
[GetPlayer](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlayer)                                          | GetPlayer()                               | Returns a player with the name given.
[GetPlayersInInstance](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlayersInInstance)                    | GetPlayersInInstance()                    | Returns a table containing all of the players in the instance.
[GetPlayersInMap](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlayersInMap)                              | GetPlayersInMap()                         | Returns a table containing all of the players in the map.
[GetPlayersInWorld](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlayersInWorld)                          | GetPlayersInWorld()                       | Returns a table containing all the players in the world.
[GetPlayersInZone](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_GetPlayersInZone)                            | GetPlayersInZone()                        | Returns a table containing all the players in the zone.
[HasTimedEvent](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_HasTimedEvent)                                  | HasTimedEvent()                           | Returns true if any timed events are registered.
[HasTimedEventInTable](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_HasTimedEventInTable)                    | HasTimedEventInTable()                    | Returns true if an event with the specified table is registered.
[HasTimedEvents](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_HasTimedEvents)                                | HasTimedEvents()                          | Returns true if any timed events are registered.
[HasTimedEventWithName](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_HasTimedEventWithName)                  | HasTimedEventWithName()                   | Returns true if an event with the specified name is registered.
[logcol](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_logcol)                                                | logcol()                                  | Changes the color of the log to the number given.
[NumberToGUID](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_NumberToGUID)                                    | NumberToGUID()                            | Creates a GUID-sized number from the number given.
[PerformIngameSpawn](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_PerformIngameSpawn)                        | PerformIngameSpawn()                      | Spawns a unit or gameobject.
[Rehash](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_Rehash)                                                | Rehash()                                  | Rehashes server config files.
[ReloadLuaEngine](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_ReloadLuaEngine)                              | ReloadLuaEngine()                         | Reloads the ALE (AscEmu LuaEngine) and scripts.
[ReloadTable](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_ReloadTable)                                      | ReloadTable()                             | Reload Table.
[RemoveTimedEvent](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_RemoveTimedEvent)                            | RemoveTimedEvent()                        | Removes all timed events from the specified table (string).
[RemoveTimedEventsInTable](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_RemoveTimedEventsInTable)            | RemoveTimedEventsInTable()                | Removes all timed events from the specified table (string).
[RemoveTimedEventsWithName](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_RemoveTimedEventsWithName)          | RemoveTimedEventsWithName()               | Removes all timed events with the specified name.
[SendMail](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendMail)                                            | SendMail()                                | Sends a mail message with specified parameters.
[SendPacketToChannel](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendPacketToChannel)                      | SendPacketToChannel()                     | Sends the packet to the said team on the channel.
[SendPacketToInstance](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendPacketToInstance)                    | SendPacketToInstance()                    | Sends the packet to everyone in the instance.
[SendPacketToWorld](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendPacketToWorld)                          | SendPacketToWorld()                       | Sends the packet to everyone online.
[SendPacketToZone](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendPacketToZone)                            | SendPacketToZone()                        | Sends the packet to everyone in the zone.
[SendWorldMessage](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SendWorldMessage)                            | SendWorldMessage()                        | Sends a message to everyone with message type given.
[SetDBCSpellVar](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_SetDBCSpellVar)                                | SetDBCSpellVar()                          | Similar to Spell:SetVar, but this sets vars by entry id, rather than by individual spell objects. 
[WorldDBQuery](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_WorldDBQuery)                                    | WorldDBQuery()                            | Performs a query on the world database. Returns a “QueryResult” object. 
[WorldDBQueryTable](/Wiki/docs/standards_scripts/methods_lua/Global_Methods/Lua_WorldDBQueryTable)                          | WorldDBQueryTable()                       | Similar to WorldDBQuery(query). See core for more info. 


## Key Terminology
You may find some of these terms within the Wiki pages.

##### **Unit:** A Creature or Player.

##### **Creature:** A Mob/ile Unit. Also known as an NPC - [Non-player character](https://en.wikipedia.org/wiki/Non-player_character)

##### **Gossip:** Menus that allow you to interact with the Player.

##### **Phase:** A unique instance of the Game World.

##### **Method:** Also commonly known as a **Function** or **Command**. This is the correct word for it - Method adopts a more Object-Orientated view on Lua, which is what we want.

##### **Function:** A block of code in Lua.

##### **Command:** Usually assumed to be any Lua Method, it is incorrect terminology. It is not a command.

##### **Statement:** A piece of code that performs a single action.

##### **Expression:** A statement that evaluates true or false.
