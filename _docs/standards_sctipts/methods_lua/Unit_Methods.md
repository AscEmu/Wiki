---
title: Unit Methods
type: standards_lua
layout: single_markdown
position: 4
---

[Moooo](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Mooo)

# Get (Return) Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
[GetAccountName()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetAccountName)                                               | Returns the player's account name.
[GetAddTank()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetAddTank)                                                       | Returns the Unit second on the Unit's threat table.
[GetAIState()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetAIState)                                                       | Returns the Unit's AI state.
GetAITargets()                                                                                                                             | Returns all units with threat on the Unit's threat table.
GetAITargetsCount()                                                                                                                        | Returns the amount of units with threat on the Unit's threat table.
GetAreaId()                                                                                                                                | Returns the Unit's area id.
GetAura(slot)                                                                                                                              | Returns the spell id of the aura in the slot specified.
GetAuraObject(slot)                                                                                                                        | Returns an AURA object from the slot specified.
[GetAuraObjectById(spell id)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetAuraObjectById)                                 | Returns a aura object with the entered spell id.
GetByteValue(index, index1)                                                                                                                | Returns the Byte value at index, index1.
[GetClosestEnemy()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetClosestEnemy)                                             | Returns the closest Unit to the Unit considered 'hostile'.
[GetClosestFriend()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetClosestFriend)                                           | Returns the closest Unit to the Unit considered 'friendly'.
[GetClosestPlayer()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetClosestPlayer)                                           | Returns the closets player to the Unit.
[GetCoinage()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCoinage)                                                       | Returns the amount of copper the player has.
[GetCreatureNearestCoords(x, y, z, id)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCreatureNearestCoords)                | Returns a creature that with the specified ID that is closest to the co-ordinates given.
[GetCurrentSkill(skill)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCurrentSkill)                                        | Returns the player's Skill level of the skill specified.
[GetCurrentSpell()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCurrentSpell)                                             | Returns a SPELL object.
[GetCurrentSpellId()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCurrentSpellId)                                         | Returns the spell entry ID that is current casting.
[GetCurrentWaypoint()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetCurrentWaypoint)                                       | Returns the waypoint the Unit is currently at.
[GetDisplay()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetDisplay)                                                       | Returns the Unit's current display ID.
[GetDistance(target)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetDistance)                                               | Returns the number of pixels between the Unit and target.
GetDistanceYards(target)                                                                                                                   | Returns the number of yards between the Unit and target.
[GetDuelState()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetDuelState)                                                   | Returns the stage in which a duel is taking place with the unit. 0 (Requested), 1 (Started) or 2 (Finished).
[GetDungeonDifficulty()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetDungeonDifficulty)                                   | Returns the dungeon difficulty of the Unit.
[GetEntry()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetEntry)                                                           | Returns the Unit's entry id (does not work for items).
GetEntryId()                                                                                                                               | Same as GetEntry, but used for items.
GetEquippedItemBySlot(slot)                                                                                                                | Returns an ITEM object from the item in the slot specified.
[GetFaction()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetFaction)                                                       | Returns the Unit's faction.
[GetFactionStanding(faction)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetFactionStanding)                                | Returns a string value of the Unit's standing with the faction.
GetFloatValue()                                                                                                                            | Returns the Unit's float value.
[GetGameObjectNearestCoords(x, y, z, id)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetGameObjectNearestCoords)            | Returns the object closest to the co-ordinates specified with the id designated.
[GetGender()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetGender)                                                         | Returns a numerical representation of the Unit's gender.
[GetGmRank()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetGmRank)                                                         | Returns the player's GM rank in string form (Ie, "a", "az"). Returns nil when the player is not a GM.
[GetGUID()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetGUID)                                                             | Returns the Unit's GUID. A GUID is a unique number assigned to each and every object, unit and player in AE.
[GetHealth()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetHealth)                                                         | Returns an absolute value of the Unit's health.
[GetHealthPct()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetHealthPct)                                                   | Returns a percentage of the Unit's health.
GetHonorToday()                                                                                                                            | Returns all Honor earned by the Unit today.
GetHonorYesterday()                                                                                                                        | Returns the Unit's honor that was earnt yesterday.
GetInRangeEnemies()                                                                                                                        | Returns all hostiles in range of the Unit.
GetInRangeFriends()                                                                                                                        | Returns all friendlies in range of the Unit.
GetInRangeObjects()                                                                                                                        | Returns all nearby GameObjects in range of the Unit.
GetInRangeObjectsCount()                                                                                                                   | Returns a count of all the GameObjects in range of the Unit.
[GetInRangePlayers()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetInRangePlayers)                                         | Returns all players in range of the Unit.
[GetInRangePlayersCount()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetInRangePlayersCount)                               | Returns a count of all the players in range of the Unit.
[GetInRangeUnits()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetInRangeUnits)                                             | Returns all units in the range of the Unit.
[GetInstanceID()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetInstanceID)                                                 | Return the Unit's instance id.
GetInstanceOwner()                                                                                                                         | Returns the owner of Unit's instance.
GetInventoryItem(bag, bagslot)                                                                                                             | Returns the item in the player's inventory in specified bag and slot.
GetInventoryItemById(entry)                                                                                                                | Returns the slot that the item is in in the player's inventory.
[GetItemCount(item)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetItemCount)                                               | Returns how many of an item the Unit has.
[GetLocation()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetLocation)                                                     | Returns the Unit's x, y, z and o co-ordinates.
[GetMainTank()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMainTank)                                                     | Returns the Unit with the highest threat on the Unit's threat table.
[GetMana()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMana)                                                             | Returns an absolute value of the Unit's mana.
[GetManaPct()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetManaPct)                                                       | Returns a percentage of the Unit's mana.
[GetMapId()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMapId)                                                           | Returns the Unit's map id.
[GetMaxHealth()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMaxHealth)                                                   | Returns the maximum amount of health the Unit can have.
[GetMaxMana()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMaxMana)                                                       | Returns the maximum amount of mana the Unit can have.
[GetMaxPower(type)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMaxPower)                                                 | Returns the absolute value of the Unit's power (If type is specified, that type is returned instead).
[GetMaxSkill(skill)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetMaxSkill)                                                | Returns the player's Max Skill level of the skill specified.
[GetName(skill)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetName)                                                        | Returns the Unit's name.
GetNativeDisplay()                                                                                                                         | Returns the Unit's spawn display ID.
GetNativeFaction()                                                                                                                         | Returns the Unit's spawn faction.
[GetNextTarget()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetNextTarget)                                                 | Returns the target set by SetNextTarget(target).
GetNumWaypoints()                                                                                                                          | Returns the amount of waypoints that Unit has.
[GetO()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetO)                                                                   | Returns the Unit's o co-ordinate.
GetObject(guid)                                                                                                                            | Returns a Unit based on the GUID given.
GetObjectType()                                                                                                                            | Returns 'Player' or 'Unit' depending on the Unit.
[GetPlayerClass()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPlayerClass)                                               | Returns a string representation of the player's class.
[GetPlayerLevel()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPlayerLevel)                                               | Returns the Unit's level.
GetPlayerMovementFlags()                                                                                                                   | Returns the movement flag of the player. See page for more information.
GetPlayerMovementVector()                                                                                                                  | Returns information about the Player's movement. 
[GetPlayerRace()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPlayerRace)                                                 | Returns a numerical representation of the player's race.
[GetPower(type)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPower)                                                       | Returns an absolute value of the Unit's power (If type is specified, that type is returned instead).
[GetPowerPct(type)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPowerPct)                                                 | Return a percentage of the Unit's power (If type is specified, that type is returned instead).
[GetPowerType()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetPowerType)                                                   | Returns a numerical representation of the Unit's power type.
GetPrimaryCombatTarget()                                                                                                                   | Returns the Unit that the Unit is attacking.
[GetRandomEnemy()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetRandomEnemy)                                               | Returns a Unit that is considered an Enemy to the Unit.
[GetRandomFriend()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetRandomFriend)                                             | Gets a Unit that is considered a Friend to the Unit.
[GetRandomPlayer()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetRandomPlayer)                                             | Returns a random player based on the flag specified. See page for more details.
[GetSelection()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSelection)                                                   | Returns the player's currently selected Unit.
GetSoulLinkedWith()                                                                                                                        | Returns the Unit that the unit specified is soul-linked with. To Soul-Link a mob, use SetSoulLinkedWith().
GetSpawnId()                                                                                                                               | Returns the Unit's spawn ID.
[GetSpawnLocation()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSpawnLocation)                                           | Returns the Unit's spawn x, y, and z co-ordinates.
[GetSpawnO()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSpawnO)                                                         | Return the Unit's spawn position x co-ordinate.
[GetSpawnX()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSpawnX)                                                         | Return the Unit's spawn position x co-ordinate.
[GetSpawnY()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSpawnY)                                                         | Return the Unit's spawn position x co-ordinate.
[GetSpawnZ()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetSpawnZ)                                                         | Return the Unit's spawn position x co-ordinate.
[GetStanding(faction)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetStanding)                                              | Returns a numerical value of the Unit's standing with the faction.
GetStealthLevel()                                                                                                                          | Returns the Unit's stealth level. To set the stealth level, use SetStealthLevel().
GetTalentPoints(spec)                                                                                                                      | Returns the player's free talent points in the player's primary (0) spec or secondary (1) spec.
[GetTauntedBy()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetTauntedBy)                                                   | Returns the Unit that taunted the Unit.
GetTaxi()                                                                                                                                  | Returns the taxi that the player is on.
[GetTeam()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetTeam)                                                             | Returns 1 if Horde, and 0 if Alliance.
GetThreat(target)                                                                                                                          | Returns the amount of threat that the Unit has with the target specified.
GetTotalHonor()                                                                                                                            | Returns the unit's total honor.
[GetUInt32Value(field)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetUInt32Value)                                          | Returns the UInt32Value for Unit at field.
GetUInt64Value(field)                                                                                                                      | Returns the UInt64Value for Unit at field.
[GetUnitByGUID(guid)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetUnitByGUID)                                             | Returns the Unit with the GUID specified.
[GetUnitBySqlId(id)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetUnitBySqlId)                                             | Returns the Unit with the specified SQL ID.
GetUnitToFollow()                                                                                                                          | Returns the unit that the Unit specified is following.
[GetX()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetX)                                                                   | Returns the Unit's x co-ordinate.
[GetY()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetY)                                                                   | Returns the Unit's y co-ordinate.
[GetZ()](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_GetZ)                                                                   | Returns the Unit's z co-ordinate.
GetZoneId()                                                                                                                                | Returns the Unit's zone id.


# Gossip Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ---------- 
GossipCreateMenu(npc_text, pPlayer, 0)                                                                                                     | Creates a new NPC gossip menu with the TextID specified.
GossipMenuAddItem(Icon, "Name", intid, code[, messagebox, gold])                                                                           | Creates a new menu item, used after registering a new menu with GossipCreateMenu().
GossipAddQuests(pPlayer)                                                                                                                   | Adds quests to the gossip menu if any available.
GossipSendMenu(pPlayer)                                                                                                                    | Sends the gossip menu to the player.
GossipComplete()                                                                                                                           | Completes (closes) the player's gossip window.
GossipSendPOI(X, Y, Icon, Flags, Data, Name)                                                                                               | Sets a mark on the player's mini map. Used when asking city guards where to go.
GossipMiscAction(action, creature, intid)                                                                                                  | Performs a Gossip Action. 


# Modify/Set Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
CallForHelpHp(hp)                                                                                                                          | Sets the Unit's 'call for help' HP to the hp specified. Basically, when the Unit hits this HP he flees for help.
CanCallForHelp(true/false)                                                                                                                 | Sets the Unit to be able/unable to call for help.
ChangeTarget(new_target)                                                                                                                   | Sets the Unit's new target to new_target.
ClearThreatList()                                                                                                                          | Sets the threat of everyone on the Unit's threat list to 1.
DeMorph()                                                                                                                                  | Sets the Unit's display id back to it's native one.
DisableCombat(1/0)                                                                                                                         | If set to true, disables the Unit's ability to enter combat completely.
SetCombatCapable(1/0)                                                                                                                      | If set to true, disables the Unit's ability to enter combat completely.
DisableMelee(true/false)                                                                                                                   | If set to true, disables the Unit's ability to use Melee Combat.
SetCombatMeleeCapable()                                                                                                                    | If set to true, disables the Unit's ability to use Melee Combat.
DisableRanged(true/false)                                                                                                                  | If set to true, disables the Unit's ability to use Ranged Combat.
SetCombatRangedCapable()                                                                                                                   | If set to true, disables the Unit's ability to use Ranged Combat. 
DisableRespawn()                                                                                                                           | If set to false, the mob will no longer respawn.
DisableSpells(true/false)                                                                                                                  | If set to true, disables the Unit's ability to use Spells.
SetCombatSpellsCapable()                                                                                                                   | If set to true, disables the Unit's ability to use Spells.
DisableTargeting(true/false)                                                                                                               | If set to true, disables the Unit's targeting capabilities (The mob will not be able to use targeted spells either).
SetCombatTargetingCapable()                                                                                                                | If set to true, disables the Unit's targeting capabilities (The mob will not be able to use targeted spells either). 
EnableFlight(true/false)                                                                                                                   | If set to true, disables the usage of all flight path nodes.
EnableFlyCheat(true/false)                                                                                                                 | Acts similar to the gm command .cheat fly. 
EnableMoveFly()                                                                                                                            | Similar to SetFlying().
ModFloatValue(float)                                                                                                                       | Modifies the Unit's float value to the float specified.
ModifyFlySpeed(speed)                                                                                                                      | Modifies the Unit's fly speed to the specified speed.
ModifyRunSpeed(speed)                                                                                                                      | Modifies the Unit's run speed to the specified speed.
ModifyWalkSpeed(speed)                                                                                                                     | Modifies the Unit's walk speed to the specified speed.
ModThreat(target, amount)                                                                                                                  | Modifies the Unit's threat against target by amount.
ModUInt32Value(index, flag)                                                                                                                | Modifies the Unit's uint32_t flag at index.
NoRespawn(true/false)                                                                                                                      | If set to false, the mob will no longer respawn.
RemoveFlag(field, value)                                                                                                                   | Removes the Unit's flag at field, value.
RemoveThreat(target)                                                                                                                       | Erases the target from the threat table.
SetActionBar()                                                                                                                             | Unknown, see core for usage.
[SetAIState(state)](/Wiki/docs/standards_sctipts/methods_lua/Unit_Methods/Lua_SetAIState)                                                  | Sets the Unit's AI State to the designated one. See page for more information.
SetAttackTimer(timer, offhand)                                                                                                             | Sets the Unit's main-hand attack speed to timer. If offhand is true, offhand is also set to this.
SetBindPoint(x, y, z, map, zone)                                                                                                           | Sets the Unit's bind point to the co-ordinates specified.
SetByte(index, index1, value)                                                                                                              | Sets the byte at index, index1 to value.
SetByteValue(index, index1, value)                                                                                                         | Sets the byte at index, index1 to value.
SetCreatureNameById(id)                                                                                                                    | Currently the method is commented out. Do not use.
SetDeathState(state)                                                                                                                       | Sets the Unit's death state. 0 (Alive), 1 (Just Died), 2 (Corpse), 3 (Dead).
SetDungeonDifficulty(difficultylevel)                                                                                                      | Sets the Dungeon difficulty to the level specified. 0 (10M), 2 (25M), 3 (10M HC) 4 (25M HC).
SetFacing(o)                                                                                                                               | Forces the Unit to face the orientation provided.
SetFaction(faction)                                                                                                                        | Sets the Unit's faction to the faction specified.
SetFloatValue(float)                                                                                                                       | Sets the Unit's float value to the float specified.
SetFlying()                                                                                                                                | Allows the Unit to fly. Use Land() to force the unit to land again.
SetGender(1/2)                                                                                                                             | Sets the gender of a character.
SetHealth(health)                                                                                                                          | Sets the Unit's health an absolute value based on the number specified.
SetHealthPct(percentage)                                                                                                                   | Sets the Unit's health to a percentage based on the percentage given.
SetInFront(target)                                                                                                                         | Sets the target as 'in front' of the Unit.
SetInvincible(true/false                                                                                                                   | Makes the unit invincible if set to true. 
SetInvisible(true/false)                                                                                                                   | If set to true, the Unit becomes completely invisible.
SetKnownTitle(id)                                                                                                                          | Makes the Player use the title specified. This is not saved to the database.
SetLevel(level)                                                                                                                            | Sets the Player's level to the level given. Cannot exceed the max level in configs.
SetMana(mana)                                                                                                                              | Sets the Unit's mana to the absolute value provided.
SetMaxHealth(health)                                                                                                                       | Sets the Unit's maximum amount of health to the number specified.
SetMaxMana(mana)                                                                                                                           | Sets the Unit's maximum mana to the absolute value provided.
SetMaxPower(amount[, type])                                                                                                                | Sets the Unit's maximum power to the absolute value and type provided.
SetModel(id)                                                                                                                               | Sets the Unit's display id to the one specified. Returns true if successful, false if not.
SetMount(display)                                                                                                                          | Mounts the Unit with the display ID given.
SetMovementFlags(flags)                                                                                                                    | Forces the Unit to move with the flags specified. 0 (Walk), 1 (Run), 2 (Fly).
SetMovementType(type)                                                                                                                      | Sets the Unit's movement type to the one specified.
SetMoveRunFlag(1/0)                                                                                                                        | Allows the Unit to run (if set to 1).
SetNextTarget(target)                                                                                                                      | Sets the next target (Called through GetNextTarget()) of the Unit.
SetNPCFlags(flags)                                                                                                                         | Sets the Unit's flags to the flags specified (This is used to disable gossip, etc).
SetOrientation(o)                                                                                                                          | Sets the Unit's orientation to the orientation specified.
SetOutOfCombatRange(range)                                                                                                                 | When the Unit reaches this far away from it's combat target, the combat is broken.
SetPacified(true/false)                                                                                                                    | True to pacify the Unit, false to unpacify the Unit.
SetPlayerAtWar(faction, bool)                                                                                                              | Sets /unsets the Player at war with the faction specified.
SetPlayerLock(1/0)                                                                                                                         | Locks / unlocks the player from making any action.
SetPlayerSpeed(speed)                                                                                                                      | Sets the player's global speed to speed.
SetPlayerWeather(type, density)                                                                                                            | Sets the player's weather to type, and makes the strength density.
SetPosition(x, y, z, o)                                                                                                                    | Sets the Unit's position to the co-ordinates specified.
SetPower(amount[, type])                                                                                                                   | Sets the Unit's power to the amount specified. If type is specified, the unit's power of that type is used instead. See the page for more info.
SetPowerPct(amount[, type])                                                                                                                | Same as SetPower(), only this time you give a percentage instead of an absolute value.
SetRotation(rotation)                                                                                                                      | Sets the Unit's rotation to the rotation specified. This is not orientation.
SetScale(scale)                                                                                                                            | Sets the Unit's scale to the scale provided.
SetSoulLinkedWith(target)                                                                                                                  | Sets the Unit to be soul-linked with the target specified. This means that if the target is aggro'd, the Unit tags along.
SetStanding(faction, value)                                                                                                                | Sets the Unit's standing with the faction to the value specified.
SetStandState(state)                                                                                                                       | Sets the Unit's stand state.
SetStealthLevel(level)                                                                                                                     | Sets the Unit's stealth level to the one provided. See page for more information.
SetTalentPoints(spec amount)                                                                                                               | Sets spec to have amount talent points.
SetTauntedBy(target)                                                                                                                       | Sets the person who taunted us to the target. This is used in conjunction with GetTauntedBy().
SetUInt32Value(index, flag)                                                                                                                | Sets the Unit's uint32_t flag at index.
SetUInt64Value(field, guid)                                                                                                                | Sets the Unit's uint64_t guid at field.
SetUnitToFollow(target, distance, angle)                                                                                                   | Follows the target specified, at the specified angle and will stop following when it reaches the amount of yards specified.
SetZoneWeather(zone, type, density)                                                                                                        | SetPlayerWeather() for zones.
UnsetKnownTitle(id)                                                                                                                        | Removes the title specified. This is not saved to the database.
WipeCurrentTarget()                                                                                                                        | Drops the Unit's current target. Also sets their threat to 0 (More specifically, removes them from the threat table).
WipeTargetList()                                                                                                                           | Resets the Unit's target list.
WipeThreatList()                                                                                                                           | Sets the threat of everyone on the unit's threat list to 0.


# Is/Has (Boolean) Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
IsCasting()                                                                                                                                | Returns true if the Unit is casting, otherwise false.
IsGm()                                                                                                                                     | Returns true if the Unit has GM levels, otherwise false.
CanUseCommand("level")                                                                                                                     | Returns true if the Unit can use the specified level ("a" is usually GM, "az" for an admin).
HasSpell(spell)                                                                                                                            | Returns true if the Unit has the spell specified, false if not.
HasSkill(skill)                                                                                                                            | Returns true if the Unit has the skill specified, false if not.
HasNegativeAura()                                                                                                                          | Returns true if the Unit has a debuff on them, otherwise it returns false.
HasPositiveAura()                                                                                                                          | The same as HasNegativeAura(), but with buffs instead of debuffs.
IsMounted()                                                                                                                                | Returns true if the Unit is mounted, false if not.
IsPlayerMoving()                                                                                                                           | Returns true if the player is moving, false if not.
HasItem(item)                                                                                                                              | Returns true if the player has the item specified, false if not.
IsPlayerAttacking()                                                                                                                        | Returns true if the player is attacking, false if not.
IsPacified()                                                                                                                               | Returns true if the unit is pacified, false if not.
IsPoisoned()                                                                                                                               | Returns true if the unit is poisoned, false if not.
IsStunned()                                                                                                                                | Returns true if the unit is stunned, false if not.
IsDazed()                                                                                                                                  | Returns true if the Unit is dazed, otherwise false.
IsFeared()                                                                                                                                 | Returns true if the Unit is feared, otherwise false. 
IsFlying()                                                                                                                                 | Returns true if the Unit is flying, otherwise false.
CanAttack(target)                                                                                                                          | Returns true if the unit can attack the target, false if not.
IsPlayer()                                                                                                                                 | Returns true if the Unit is a player, otherwise returns false.
IsCreatureMoving()                                                                                                                         | Akin to IsPlayerMoving() for creatures.
IsOnTaxi()                                                                                                                                 | Returns true if the Unit is on a taxi, otherwise false.
IsPet()                                                                                                                                    | Returns true if the Unit is a pet, otherwise false.
IsStealthed()                                                                                                                              | Returns true if the Unit is stealthed, otherwise false.
IsAlive()                                                                                                                                  | Returns true if the Unit is alive, otherwise false.
IsDead()                                                                                                                                   | Returns true if the Unit is dead, otherwise false.
IsFriendly(target)                                                                                                                         | Returns true if the target is friendly to the Unit, otherwise false.
IsHostile(target)                                                                                                                          | IsFriendly() for hostile Units.
HasFlag(index, flag)                                                                                                                       | Returns true if the Unit possess the flag at index, otherwise false.
IsInWorld()                                                                                                                                | Returns true if the Unit is in the world, otherwise false.
IsInDungeon()                                                                                                                              | Returns true if the Unit is in a dungeon, otherwise false.
IsInRaid()                                                                                                                                 | IsInDungeon() for raids.
IsCreature()                                                                                                                               | Returns true if the Unit is a creature, otherwise false.
IsInBack(target)                                                                                                                           | Returns true if the Unit is considered 'behind' target.
IsInFront(target)                                                                                                                          | Returns true if the Unit is considered 'in front' target.
HasInRangeObjects()                                                                                                                        | Returns true if there are GameObjects in range of the Unit.
HasAura(id)                                                                                                                                | Returns true if the Unit is afflicted by an aura with the id specified, otherwise false.
HasAuraWithMechanic(mechanic)                                                                                                              | Returns true if the Unit has an aura that has a specific mechanic. See page for more details.
IsRooted()                                                                                                                                 | Returns true if the Unit is rooted, otherwise false.
IsInPhase(phase)                                                                                                                           | Returns true if the Unit is in the specified phase, otherwise false.
IsInWater()                                                                                                                                | Returns true if the Unit is in water, otherwise false.
IsPvPFlagged()                                                                                                                             | Returns true if the Unit is flagged for PvP, otherwise false.
IsFFAPvPFlagged()                                                                                                                          | Returns true if the Unit is flagged for free for all, otherwise false.
IsInCombat()                                                                                                                               | Returns true if the Unit is in Combat, otherwise false.
IsAttackable(target)                                                                                                                       | Returns true if Unit can attack target, otherwise false.
HasTitle(id)                                                                                                                               | Returns true if the Unit has the title specified, otherwise false.


# Uncategorized Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
AddArenaPoints(amount)                                                                                                                     | Adds the specified amount of arena points to the Unit specified.
AddAssistTarget(unit)                                                                                                                      | Tells the Unit to assist the friendly unit given.
AddAura(id, duration[, temp])                                                                                                              | Buffs/Debuffs the current unit/player with the spell specified, with the duration specified. Setting temp to true allows it to stay on after logging. 
AddItem(item, quantity)                                                                                                                    | Gives the player an amount of items. Returns the item added or nil.
AddLifetimeKills(amount)                                                                                                                   | Adds the amount of lifetime kills specified to the player's total count.
AddLoot(id, mincount, maxcount, freeforall)                                                                                                | Adds the specified item to the Unit's loot table. This will drop in amounts of mincount to maxcount, and if freeforall is set to true, anyone can use it.
AddSkill(skill, current, max)                                                                                                              | Sets the player's skill line at skill to current, and the max to max.
AdvanceAllSkills(amount)                                                                                                                   | Advances all skills by amount.
AdvanceSkill(skill, count)                                                                                                                 | Advances the skill by count.
AggroWithInRangeFriends()                                                                                                                  | Unknown. See core for usage.
Attack(target)                                                                                                                             | Clears the threat list, taunts the target and makes the Unit attack it.
AttackReaction(target, damage, spell)                                                                                                      | Adds threat to the target (*Not damage*) using the spell specified.
CancelSpell()                                                                                                                              | Stops casting the current spell.
CastSpell(spell)                                                                                                                           | Casts the specified spell. Any cast time is ignored.
CastSpellAoF(x, y, z, id)                                                                                                                  | Casts the targeted AoE spell (Think Blizzard & Shadowfury) at the given area. Ignores cast times.
CastSpellOnTarget(spell, target)                                                                                                           | Casts the specified spell on the target. Any cast time is ignored.
ChannelSpell(id, target)                                                                                                                   | Channels the spell given at the target.
ClearAllCooldowns()                                                                                                                        | Clears all Cooldowns for the player.
ClearCooldownForSpell(id)                                                                                                                  | Removes the Cooldown of the spell specified for the player.
CreateCustomWaypoint(id, x, y, z, o, wait, flags, model)                                                                                   | Creates a waypoint and adds it at the given id to the current Waypoint Map.
CreateCustomWaypointMap()                                                                                                                  | Creates a custom waypoint map for unit, and destroys the previous one if it existed.
CreateGuardian(id, duration, angle, level)                                                                                                 | Creates a guardian (a mob that attacks when you are attacked) with the specified parameters.
CreateWaypoint(x, y, z, o, wait, flags, model)                                                                                             | Creates a waypoint and appends it to the Waypoint Map.
DealDamage(target, damage, spell)                                                                                                          | Deals damage to the target with the specified spell.
DealGoldCost(cost)                                                                                                                         | Removes the amount of copper from the player.
DealGoldMerit(merit)                                                                                                                       | Akin to DealGoldCost(), but adds copper instead of removing it.
DeleteAllWaypoints()                                                                                                                       | Deletes all of Unit's waypoints.
DeleteWaypoint(wp)                                                                                                                         | Removes the waypoint at the index given. Yes, it IS lowercase.
Despawn(delay, respawntimer)                                                                                                               | Despawns the Unit with the delay. If the respawntimer is set to 0, the mob won't respawn.
DestroyCustomWaypointMap()                                                                                                                 | Destroys the current 'custom' waypoint map.
DismissPet()                                                                                                                               | Dismisses any current pet.
Dismount()                                                                                                                                 | Dismounts the Unit.
Emote(id, time)                                                                                                                            | Makes the Unit use the emote specified. If time is greater than 0, then it is preformed after a delay of (time)ms.
Energize(target, spell, amount, type)                                                                                                      | Restores the amount of a type of energy to the target using a spell visual. See page for more info.
EquipWeapons(equip1, equip2, equip3)                                                                                                       | Equips the weapons specified in the specified slots. 1 (Main Hand), 2 (Off Hand), 3 (Ranged).
EventCastSpell(target, spell, delay, repeat)                                                                                               | Casts the spell on the target after the delay specified. Repeat set to 0 means that it repeats indefinitely. Ignores cast times.
EventChat(type, language, message, delay)                                                                                                  | Sends a chat message with the parameters given after a delay in miliseconds.
FlagPvP()                                                                                                                                  | Flags the Player for PvP.
FullCastSpell(spell)                                                                                                                       | Casts the specified spell. If the spell has a cast time, it is used.
FullCastSpellOnTarget(spell, target)                                                                                                       | Casts the specified spell on the target. If the spell has a cast time, it is used.
GetArenaPoints()                                                                                                                           | Returns the amount of Arena Points that the Unit specified has.
GetPetOwner()                                                                                                                              | Get Unit's owner.
GiveHonor(amount)                                                                                                                          | Gives the player specified the amount of honor specified.
GiveXp(amount)                                                                                                                             | Gives the Player the specified amount of XP.
HandleEvent(unit, eventid, misc1)                                                                                                          | Unknown, see core for usage.
Heal(target, spell, amount)                                                                                                                | The Unit heals the target using the spell specified for the amount designed.
InterruptSpell()                                                                                                                           | Interrupts the current spell.
KickPlayer(delay)                                                                                                                          | Kicks the player after the delay. Please leave your message after the beep. 
Kill(target)                                                                                                                               | Causes the Unit to kill the target.
Land(1/0)                                                                                                                                  | Disables flying if set to 1.
LearnSpell(spell)                                                                                                                          | Teaches the Unit the spell given.
LearnSpells(table)                                                                                                                         | Teaches the player all spells in the table specified.
LifeTimeKills(kills, mode)                                                                                                                 | Returns a number if kills is 0 and mode is nil. If mode is "add", it adds the kills onto the Unit's lifetime kills. If the mode is "del", it removes them. If the mode is "set", it explicity sets it to that amount.
ModifyAIUpdateEvent(newtime)                                                                                                               | Modifies the AI Update event to run at newtime.
MovePlayerTo(x, y, z, o, flag[, speed])                                                                                                    | MoveTo() for players. The flag can be 0 (walking), 256 (teleport), 4096 (running) or 12288 (flying).
MoveRandomArea(x1, y1, z1, x2, y2, z2, o)                                                                                                  | Moves the Unit to a random area within the given realm.
MoveTo(x, y, z, o)                                                                                                                         | Forcibly moves the Unit specified to the co-ordinates specified.
MoveToWaypoint(id)                                                                                                                         | Force-moves the Unit to the Waypoint specified.
PlayerSendChatMessage(type, language, message)                                                                                             | Forces the Player to send the message with the parameters specified.
PlaySoundToPlayer(sound)                                                                                                                   | Like PlaySoundToSet(), only the sound only plays to the player specified.
PlaySoundToSet(sound)                                                                                                                      | Plays the specified sound ID to everyone in the Unit's map cell.
PlaySpellVisual(guid, spell)                                                                                                               | 'Casts' the spell on the Unit GUID specified. The spell has no effect, and only the visual is played. To get a GUID, use GetGUID().
Possess(unit)                                                                                                                              | Like the GM command .npc possess.
RegisterAIUpdateEvent(time)                                                                                                                | Registers an AI Update event with the time given for the Unit specified.
RegisterEvent(name, delay, repeats)                                                                                                        | Registers the method given with the delay given and repeats (0 repeats indefinitely). The name can either be a reference, a direct method or a string value of the method.
RemoveAIUpdateEvent()                                                                                                                      | Removes all AI Update Events.
RemoveAllAuras()                                                                                                                           | Removes all auras on the Unit.
RemoveArenaPoints(amount)                                                                                                                  | Removes the amount of arena points from the Unit specified.
RemoveAura(id)                                                                                                                             | Removes the aura specified from the Unit.
RemoveAurasByMechanic(mechanic)                                                                                                            | Removes all auras by the mechanic given.
RemoveAurasType(type)                                                                                                                      | Removes all auras by the type given.
RemoveEvents()                                                                                                                             | Removes all events registered with RegisterEvent().
RemoveFromWorld()                                                                                                                          | Removes the Unit from the world.
RemoveItem(item, quantity)                                                                                                                 | Removes an item from the player with the count specified.
RemoveNegativeAuras()                                                                                                                      | Removes all negative auras from the Unit.
RemovePvPFlag()                                                                                                                            | Removes the Unit's PvP flag.
RemoveSkill(skill)                                                                                                                         | Removes the skill from Unit with the skill id specified.
RemoveStealth()                                                                                                                            | Removes any stealth from the specified Unit.
RepairAllPlayerItems()                                                                                                                     | Repairs all items that the player has.
Repop()                                                                                                                                    | Force releases the spirit of a dead player.
ResetAllTalents()                                                                                                                          | Resets the player's talents.
ResetPetTalents()                                                                                                                          | Resets the current pet's talents. 
ResurrectPlayer()                                                                                                                          | Revives the player unit.
ReturnToSpawnPoint()                                                                                                                       | Returns the Unit to it's spawn point.
Root()                                                                                                                                     | Disables all movement.
SavePlayer()                                                                                                                               | Saves the player to the database.
SendAreaTriggerMessage(string)                                                                                                             | Sends an Area Trigger message with the specified string to the player.
SendBroadcastMessage(string)                                                                                                               | Broadcasts the specified string to the player.
SendChatMessage(type, language, message)                                                                                                   | Sends a chat message with the parameters specified.
SendChatMessageAlternateEntry(entry, type, lang, message)                                                                                  | Forces the Unit with the entry id specified to send a message with the parameters designated.
SendChatMessageToPlayer(type, language, message, player)                                                                                   | Sends the player specified a chat message with the parameters designated.
SendPacket(packet, self)                                                                                                                   | Sends the packet specified to all near Units. If self is set to true, the packet is also sent to the unit. See Packet Function Documentation for more information on packets.
SendPacketToGroup(packet)                                                                                                                  | Sends the packet specified to the Unit's group. See Packet Function Documentation for more information on packets.
SendPacketToGuild(packet)                                                                                                                  | Sends the packet specified to the Unit's guild. See Packet Function Documentation for more information on packets.
SendPacketToPlayer(packet)                                                                                                                 | Sends the packet specified to the Unit specified. See Packet Function Documentation for more information on packets.
SetPetOwner(newowner)                                                                                                                      | Sets Unit's new owner to newowner.
SoftDisconnect()                                                                                                                           | Kicks the player to the character select screen.
SpawnCreature(entry, x, y, z, o, faction, duration[, equip1, equip2, equip3, phase, save])                                                 | Spawns a creature in the Unit's map with the co-ordinates and faction specified. Despawns after duration (0 for no despawn).
SpawnGameObject(id, x, y, z, o, duration, scale[, phase, save])                                                                            | Spawns a GameObject in the Unit's map with the co-ordinates and scale specified. Despawns after duration (0 for no despawn).
SpellNonMeleeDamageLog(victim, spell, damage, allowproc, staticdmg, noremoveauras)                                                         | Unknown, Check core for usage.
StartTaxi(taxipath, display)                                                                                                               | Forces the Unit to start the taxi path specified, and mount it on the specified display id.
StopChannel()                                                                                                                              | Stops channeling the current spell.
StopMovement(time)                                                                                                                         | Stops all movement for the unit for the time specified.
StopPlayerAttack()                                                                                                                         | Stops the player attacking. This is only for melee.
Strike(target, damage_type, spell, additional_damage, exclusive_damage, damage_mod_pct)                                                    | The Unit damages the target with the damage type specified. If a spell is specified, this will be used. See the page for more information.
TakeHonor(amount)                                                                                                                          | Like GiveHonor(), but removes instead of adds.
Teleport(map, x, y, z, o)                                                                                                                  | Teleports the Player to the co-ordinates given.
TeleportCreature(x, y, z)                                                                                                                  | Teleports the Creature to the co-ordinates given. Note that the creature cannot be teleported to another map. To do this, you'll need to spawn it there.
UnlearnSpell(spell)                                                                                                                        | Removes the spell from the unit's spell-book.
Unpossess(unit)                                                                                                                            | Like the GM command .npc unpossess.
Unroot()                                                                                                                                   | Allows movement.


# Phasing Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ---------- 
SetPhase(newphase[, save])                                                                                                                 | Sets the Unit to the phase specified. If 'save' is set to true, and the Unit is a NPC/Object, then the Unit will be saved in that phase. Mapped to PhaseSet(newphase[, save]) and PhaseAdd(newphase[, save]).
DeletePhase(phase[, save])                                                                                                                 | Removes the phase specified. If 'save' is set to true, and the Unit is a NPC/Object, then the Unit will be saved to the new phase it is automatically set to.
GetPhase()                                                                                                                                 | Returns the phase the Unit is currently in.


# Vendor Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
VendorAddItem(item, quantity[, extendedcost])                                                                                              | Adds the specified amount of items to the Unit designated. Setting quantity to zero enables unlimited quantity.
VendorRemoveItem(item)                                                                                                                     | Removes the specified item from the Unit designed.
VendorRemoveAllItems()                                                                                                                     | Removes all items from the vendor.


# Send Window Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
SendBankWindow(pUnit)                                                                                                                      | Sends the player specified a bank window with the unit as the sender.
SendTrainerWindow(pUnit)                                                                                                                   | Akin to SendBankWindow(), but with trainers instead of banks.
SendBattlegroundWindow(pUnit, id)                                                                                                          | Sends the Player Unit's battleground window. The battleground window varies on the ID you give it - see page for more info.
SendVendorWindow(pUnit)                                                                                                                    | Akin to SendBankWindow(), but with vendors instead of banks.
SendLootWindow(guid, loottype)                                                                                                             | Sends a loot window to the Unit with the specified loottype. 1 (creature), 2 (skinning), 3 (pickpocket), 4 (fishing), 5 (herb/mining), 6 (disenchanting/prospecting/milling, etc).
SendInnkeeperWindow(pUnit, loottype)                                                                                                       | Sends an innkeeper window to the Unit.
SendAuctionWindow(pUnit)                                                                                                                   | Sends the player unit's auction window.


# Group Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
SendPacketToGroup(packet)                                                                                                                  | Sends the Unit's group the packet specified.
ExpandToRaid()                                                                                                                             | Forcibly changes the Unit's group to a raid.
IsGroupFull()                                                                                                                              | Returns true if the group is full, false if not.
GetGroupType()                                                                                                                             | Returns the player's group type. Returns nil if the player is not in a group.
GetGroupLeader()                                                                                                                           | Returns a object of the player's group leader.
SetGroupLeader(newleader[, silent])                                                                                                        | Promotes the player specified to the Group Leader. If silent is set to true, then no message is made in the chat frame.
IsInGroup()                                                                                                                                | Returns true if the player is in a group, false if not.
IsGroupedWith(target)                                                                                                                      | Returns true if the player is in a group with the target, false if not.
AddGroupMember(target)                                                                                                                     | Adds the Target to the Player's group.
GetGroupPlayers()                                                                                                                          | Returns a table with the userdata of all players in Unit's group.


# Guild Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
GetGuildLeader()                                                                                                                           | Returns a string value of the Guild Leader's name
IsInGuild()                                                                                                                                | Returns true if the Unit is in a guild, otherwise false.
GetGuildId()                                                                                                                               | Returns the player's Guild ID. *Note that the guild ID is NOT the guild name.*
GetGuildName()                                                                                                                             | Returns the player's guild name.
GetGuildMotd()                                                                                                                             | Returns the Message of the Day from the specified unit's guild.
SetGuildMotd(string)                                                                                                                       | Sets the Message of the Day of the unit's guild to the string given.
GuildBankWithdrawMoney(amount)                                                                                                             | Removes gold from the guild bank and gives it to the unit.
GuildBankDepositMoney(amount)                                                                                                              | Removes gold from the unit and deposits it in the guild bank.
GetGuildRank()                                                                                                                             | Returns the Unit's guild rank.
SetGuildRank(rank)                                                                                                                         | Sets the Unit's guild rank to the one specified.
SendGuildInvite(pPlayer)                                                                                                                   | Forces the Unit to send a guild invite to pPlayer.
AddGuildMember(pPlayer)                                                                                                                    | Forces pPlayer to join the Unit's guild.
RemoveGuildMember(target)                                                                                                                  | Force-removes the targeted guild member from the specified unit's guild. Note that the target must be online for this to work.
DemoteGuildMember(target)                                                                                                                  | Forces the Unit to demote the target guild member.
PromoteGuildMember(target)                                                                                                                 | Forces the Unit to promote the target guild member.
GetGuildMembers()                                                                                                                          | Returns a table of strings of guild members.
GetGuildMemberCount()                                                                                                                      | Returns the amount of members in the guild.
SetGuildInformation(string)                                                                                                                | Sets the Guild Information to the string provided.
SetPublicNote(pPlayer, string)                                                                                                             | Sets pPlayer's public note to the string provided.
SetOfficerNote(pPlayer, string)                                                                                                            | Sets pPlayer's officer note to the string provided.
DisbandGuild()                                                                                                                             | Disbands the Unit's guild.
ChangeGuildMaster(newmaster)                                                                                                               | Changes the Guild Master to newmaster.
SendGuildChatMessage(message[, officer])                                                                                                   | Forces Unit to send a message to guild. If officer is set to true, then the message is broadcasted in the officer chat instead.
SendGuildLog()                                                                                                                             | Sends the Guild Log to the Unit.


# Achievement Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
AddAchievement(id)                                                                                                                         | Adds the Achievement with the ID specified to the player.
HasAchievement(id)                                                                                                                         | Returns true if the player has the achievement, otherwise false.
RemoveAchievement(id)                                                                                                                      | Removes the Achievement with the ID specified from the player.


# Arithmetic Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
CalcAngle(x, y, x2, y2)                                                                                                                    | Calculates the angle between x/y and x2/y2 and takes the Unit's position into account. See page for more info.
CalcRadAngle(x, y, x2, y2)                                                                                                                 | Returns an angle in radians from the numbers x/y, x2/y2 and the Unit's position.
CalcToDistance(x, y, z)                                                                                                                    | Calculates the distance between the Unit and the point specified.
GetLandHeight(x, y)                                                                                                                        | Returns the land height using the parameters given.
IsInArc(target, degrees)                                                                                                                   | Returns true if the target is in an Arc that is degrees wide from the Unit.


# Questing Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
StartQuest(Id)                                                                                                                             | Force-start the quest with the given ID. If any items are required for the quest, these are automatically added.
FinishQuest(Id)                                                                                                                            | Forces the Unit to finish quest ID. Rewards are not given.
HasQuest(Id)                                                                                                                               | Returns true if the Unit has the quest, returns false otherwise.
MarkQuestObjectiveAsComplete(QuestID, Objective)                                                                                           | Marks the objective of questid as completed.
HasFinishedQuest(Id)                                                                                                                       | Returns true if the unit has completed the quest, false otherwise.
QuestAddStarter(Id)                                                                                                                        | Allows the NPC to be used to start the quest with the id given.
QuestAddFinisher(Id)                                                                                                                       | Allows the NPC to be used to finish the quest with the id given.
AdvanceQuestObjective(Id, Objective)                                                                                                       | Advances the objective in quest id by 1.
CreatureHasQuest(Id)                                                                                                                       | Returns true if the creature can give the quest, otherwise returns false.
GetQuestObjectiveCompletion(QuestID, Objective)                                                                                            | Returns how many mobs killed for the specified quest and objective.


# Channel Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
IsInChannel(channel)                                                                                                                       | Returns true if the Unit is in the channel specified, otherwise false.
JoinChannel(channel[, password])                                                                                                           | Force-joins the specified channel.
LeaveChannel(channel)                                                                                                                      | Leaves the channel.
SetChannelName(channel, new_name)                                                                                                          | Renames the Channel.
SetChannelPassword(channel, password)                                                                                                      | Adds a password to the Channel.
GetChannelPassword(channel)                                                                                                                | Returns the password for the Channel.
KickFromChannel(channel)                                                                                                                   | Kicks the Unit from the Channel.
BanFromChannel(channel)                                                                                                                    | Bans the Unit from the Channel.
UnbanFromChannel(channel))                                                                                                                 | Unbans the Unit from the Channel.
GetChannelMemberCount(channel)                                                                                                             | Returns the number of members in Channel.


# Spell & Aura Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
GetCaster()                                                                                                                                | Returns the userdata of the caster of the aura/spell.
GetObjectType()                                                                                                                            | Will return "Aura" if the object is an userdata of an aura.
GetDuration()                                                                                                                              | Will return the total duration left in miliseconds. (the duration which were left when the aura just was added.)
SetDuration(dur)                                                                                                                           | Sets the total duration left of the aura.
SetNegative([amount])                                                                                                                      | Sets the aura negative. Amount is optional; Some auras needs more points do become negative.
SetPositive([amount])                                                                                                                      | Same as above. This is just used to set the aura positive. 
SetVar(var [, subindex], value)                                                                                                            | var is a string referring to a parameter of Spell. subindex is optional; used when the variable you are setting has sub indexes. value is what you want to set it to. Returns true on success, false on failure.
GetVar(var [, subindex])                                                                                                                   | See above, but returns the value on success or nil on failure.
GetAuraSlot()                                                                                                                              | Returns the current slot of the aura. Gonna update this page at saturday - Ice.
SetAuraSlot(slot)                                                                                                                          | Sets the slot of the aura.
Remove()                                                                                                                                   | Removes *all* effects and events by the aura. (Triggers, effect, etc.) 
GetTimeLeft()                                                                                                                              | Returns the duration left of the aura.


# Vehicle Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
AddVehiclePassenger(creature_entry)                                                                                                        | Spawns an NPC and adds it as a passenger to the vehicle.
DismissVehicle()                                                                                                                           | Dismisses the vehicle of the selected unit.
EjectAllVehiclePassengers()                                                                                                                | Ejects all passengers from the Unit's vehicle.
EjectVehiclePassengerFromSeat(seat)                                                                                                        | Ejects the passenger from the specified seat of the Unit's vehicle.
MoveVehiclePassengerToSeat(unit, seat)                                                                                                     | Moves the specified passenger of the unit's vehicle to another seat.
EnterVehicle(guid, delay)                                                                                                                  | Makes the Unit enter a vehicle.
ExitVehicle()                                                                                                                              | Makes the Unit exit it's vehicle.
GetVehicleBase()                                                                                                                           | Retrieves the base unit of the Unit's vehicle. 
IsOnVehicle()                                                                                                                              | Tells if the unit is on a vehicle. 
HasEmptyVehicleSeat()                                                                                                                      | Tells if the Unit's vehicle has an empty seat. 
SpawnAndEnterVehicle(creature_entry, delay)                                                                                                | Spawns a new vehicle and makes the Unit enter it.


# Deprecated Methods

------------------------------------------------------------------------------------------------------------------------------------------ | ----------
GetGameTime()                                                                                                                              | Deprecated. Use the global GetGameTime() instead.
GetTarget()                                                                                                                                | Deprecated. Use GetSelection() instead.
SendPacketToInstance(packet)                                                                                                               | Deprecated. Use SendPacketToInstance(packet) instead.