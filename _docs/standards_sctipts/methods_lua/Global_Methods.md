---
title: Global Methods
type: standards_lua
layout: single_markdown
position: 7
---

# Database Functions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
[WorldDBQuery(query)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                      | Performs a query on the world database. Returns a "QueryResult" object.
[CharDBQuery(query)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                       | Performs a query on the character database. Returns a "QueryResult" object.


## Database Functions Options

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
WorldDBQueryTable(query)                                                                                                                                                                                                                        | Similar to [WorldDBQuery(query)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery). See core for more info.
CharDBQueryTable(query)                                                                                                                                                                                                                         | Similar to [CharDBQuery(query)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery). See core for more info.
[GetColumn()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                              | Get a column by index in the query result
[GetColumnCount()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                         | Get number of columns in the query result
[GetRowCount()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                            | Get number of rows in the query result
[NextRow()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_DBQuery)                                                                                                                                                                | Fetches the next row


# Core/Engine functions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
[GetLUAEngine()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_GetLuaEngine)                                                                                                                                                      | Returns what engine the server is using. Should be ALE (AscEmu LuaEngine).
[GetLuaEngineVersion()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_GetLuaEngineVersion)                                                                                                                                        | Returns what version ALE (AscEmu LuaEngine) on the server is.
[ReloadLuaEngine()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_ReloadLuaEngine)                                                                                                                                                | Reloads the ALE (AscEmu LuaEngine) and scripts.
[Rehash()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_Rehash)                                                                                                                                                                  | Rehashes server config files.
[logcol(color)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_logcol)                                                                                                                                                             | Changes the color of the log to the number given.
[GetAERevision()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_GetAERevision)                                                                                                                                                    | Returns the server's AE revision.
[GetPlatform()](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_GetPlatform)                                                                                                                                                        | Returns the platform ex. Win32. 


# Packet Functions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
SendPacketToWorld(worldpacket)                                                                                                                                                                                                                  | Sends the packet to everyone online. 
SendPacketToInstance(worldpacket, instance id)                                                                                                                                                                                                  | Sends the packet to everyone in the instance. 
SendPacketToZone(worldpacket, zone id)                                                                                                                                                                                                          | Sends the packet to everyone in the zone. 
SendPacketToChannel(worldpacket, channel name, team)                                                                                                                                                                                            | Sends the packet to the said team on the channel. 


# Timed Events

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
[RegisterTimedEvent(function_name, delay, repeats [, optionalParamtersToFunction ...])](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_RegisterTimedEvent)                                                                         | Registers a timed event
RemoveTimedEventsInTable(table)                                                                                                                                                                                                                 | Removes all timed events from the specified table (string).
RemoveTimedEventsWithName(name)                                                                                                                                                                                                                 | Removes all timed events with the specified name.
RemoveTimedEvent(reference)                                                                                                                                                                                                                     | Removes the specific timed event. reference is returned by RegisterTimedEvent.
HasTimedEvents()                                                                                                                                                                                                                                | Returns true if any timed events are registered.
HasTimedEventInTable(table)                                                                                                                                                                                                                     | Returns true if an event with the specified table is registered.
HasTimedEventWithName(name)                                                                                                                                                                                                                     | Returns true if an event with the specified name is registered.
HasTimedEvent(reference)                                                                                                                                                                                                                        | Returns true if the specific event is still registered. reference is returned by RegisterTimedEvent.


# Other Functions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
[PerformIngameSpawn(spawntype, entry id, map, x, y, z, o, faction (unit) or scale (go), duration [, equip1, equip2, equip3, instance id, save])](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_PerformIngameSpawn)                | Spawns a unit or gameobject.
[GetPlayer(name)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_GetPlayer)                                                                                                                                                        | Returns a player with the name given.
GetGameTime()                                                                                                                                                                                                                                   | Returns server time in seconds. 
[SendWorldMessage(message, msg type)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_SendWorldMessage)                                                                                                                             | Sends a message to everyone with message type given.
GetPlayersInWorld()                                                                                                                                                                                                                             | Returns a table containing all the players in the world.
GetPlayersInMap(map id)                                                                                                                                                                                                                         | Returns a table containing all of the players in the map.
GetPlayersInZone(zone id)                                                                                                                                                                                                                       | Returns a table containing all the players in the zone.
[SendMail(type, senderGuid, receivrGuid, subject, body, money, codAmt, itemRawGuid, stationeryId)](/Wiki/docs/standards_sctipts/methods_lua/Global_Methods/Lua_SendMail)                                                                        | Sends a mail message with specified parameters.
GetTaxiPath(path id)                                                                                                                                                                                                                            | Retuns the Taxi object for path from the DBCs.
SetDBCSpellVar(entry, var [,subindex], value)                                                                                                                                                                                                   | Similar to Spell:SetVar, but this sets vars by entry id, rather than by individual spell objects.
GetDBCSpellVar(entry, var [,subindex])                                                                                                                                                                                                          | Retrieves a spell var based on spell entry id.
NumberToGUID(number)                                                                                                                                                                                                                            | Creates a GUID-sized number from the number given. 
GetInstanceCreature(map id, instance id, npc id OR npc guid)                                                                                                                                                                                    | Returns the creature found in the instance. 
GetInstancePlayerCount(map id, instance id)                                                                                                                                                                                                     | Returns the number of players in the instance. 
GetPlayersInInstance(map id, instance id)                                                                                                                                                                                                       | Returns a table containing all of the players in the instance.
GetGuildByName(name)                                                                                                                                                                                                                            | Returns a guild with the name given.
GetGuildByLeaderGuid(guid)                                                                                                                                                                                                                      | Returns a guild with the name given.


# C++ style bit functions

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
bit_and(...)                                                                                                                                                                                                                                    |
bit_or(...)                                                                                                                                                                                                                                     |
bit_xor(...)                                                                                                                                                                                                                                    |
bit_not(op1)                                                                                                                                                                                                                                    | Method is not stable and is disabled.
bit_shiftleft(op, shift number)                                                                                                                                                                                                                 |
bit_shiftright(op, shift number)                                                                                                                                                                                                                |

