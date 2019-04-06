---
title: Global Methods
type: standards_lua
layout: single_markdown
position: 7
---

# Global Functions

## Database Functions

---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
WorldDBQuery(query)                                                                                                                                  | Performs a query on the world database. Returns a "QueryResult" object.
CharDBQuery(query)                                                                                                                                   | Performs a query on the character database. Returns a "QueryResult" object.
WorldDBQueryTable(query)                                                                                                                             | Similar to WorldDBQuery(query). See core for more info.
CharDBQueryTable(query)                                                                                                                              | Similar to CharDBQuery(query). See core for more info.
result:GetColumn()                                                                                                                                   | Get a column by index in the query result
result:GetColumnCount()                                                                                                                              | Get number of columns in the query result
result:GetRowCount()                                                                                                                                 | Get number of rows in the query result
result:NextRow()                                                                                                                                     | Fetches the next row


## Core/Engine functions

---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
GetLUAEngine()                                                                                                                                       | Returns what engine the server is using. Should be LuaEngine.
GetLUAEngineVersion()                                                                                                                                | Returns what version LuaEngine on the server is.
ReloadLuaEngine()                                                                                                                                    | Reloads the Lua engine and scripts.
Rehash()                                                                                                                                             | Rehashes server config files.
logcol(color)                                                                                                                                        | Changes the color of the log to the number given.
GetLuaEngineRevision()                                                                                                                               | Returns the server's AE revision.
GetPlatform()                                                                                                                                        | Returns the platform ex. Win32. 


## C++ style bit functions

---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- 
bit_and(...)                                                                                                                                         |
bit_or(...)                                                                                                                                          |
bit_xor(...)                                                                                                                                         |
bit_not(op1)                                                                                                                                         |
bit_shiftleft(op, shift number)                                                                                                                      |
bit_shiftright(op, shift number)                                                                                                                     |


## Timed Events

---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
RegisterTimedEvent(function_name, delay, repeats [, optionalParamtersToFunction ...])                                                                | Registers a timed event
RemoveTimedEventsInTable(table)                                                                                                                      | Removes all timed events from the specified table (string).
RemoveTimedEventsWithName(name)                                                                                                                      | Removes all timed events with the specified name.
RemoveTimedEvent(reference)                                                                                                                          | Removes the specific timed event. reference is returned by RegisterTimedEvent.
HasTimedEvents()                                                                                                                                     | Returns true if any timed events are registered.
HasTimedEventInTable(table)                                                                                                                          | Returns true if an event with the specified table is registered.
HasTimedEventWithName(name)                                                                                                                          | Returns true if an event with the specified name is registered.
HasTimedEvent(reference)                                                                                                                             | Returns true if the specific event is still registered. reference is returned by RegisterTimedEvent.


## Other Functions

---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
PerformIngameSpawn(spawntype, entry id, map, x, y, z, o, faction (unit) or scale (go), duration [, equip1, equip2, equip3, instance id, save])       | Spawns a unit or gameobject.
GetPlayer(name)                                                                                                                                      | Returns a player with the name given.
GetGameTime()                                                                                                                                        | Returns server time in seconds. 
SendWorldMessage(message, msg type)                                                                                                                  | Sends a message to everyone with message type given.
GetPlayersInWorld()                                                                                                                                  | Returns a table containing all the players in the world.
GetPlayersInMap(map id)                                                                                                                              | Returns a table containing all of the players in the map.
GetPlayersInZone(zone id)                                                                                                                            | Returns a table containing all the players in the zone.
SendMail(type, senderGuid, receivrGuid, subject, body, money, codAmt, itemRawGuid, stationeryId)                                                     | Sends a mail message with specified parameters.
GetTaxiPath(path id)                                                                                                                                 | Retuns the Taxi object for path from the DBCs.
SetDBCSpellVar(entry, var [,subindex], value)                                                                                                        | Similar to Spell:SetVar, but this sets vars by entry id, rather than by individual spell objects.
GetDBCSpellVar(entry, var [,subindex])                                                                                                               | Retrieves a spell var based on spell entry id.
NumberToGUID(number)                                                                                                                                 | Creates a GUID-sized number from the number given. 
GetInstanceCreature(map id, instance id, npc id OR npc guid)                                                                                         | Returns the creature found in the instance. 
GetInstancePlayerCount(map id, instance id)                                                                                                          | Returns the number of players in the instance. 
GetPlayersInInstance(map id, instance id)                                                                                                            | Returns a table containing all of the players in the instance.
GetGuildByName(name)                                                                                                                                 | Returns a guild with the name given.
GetGuildByLeaderGuid(guid)                                                                                                                           | Returns a guild with the name given.


## Packet – Functions

---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------
SendPacketToWorld(worldpacket)                                                                                                                       | Sends the packet to everyone online. 
SendPacketToInstance(worldpacket, instance id)                                                                                                       | Sends the packet to everyone in the instance. 
SendPacketToZone(worldpacket, zone id)                                                                                                               | Sends the packet to everyone in the zone. 
SendPacketToChannel(worldpacket, channel name, team)                                                                                                 | Sends the packet to the said team on the channel. 
