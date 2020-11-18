---
title: Packet Serialization
type: CoreGroup
layout: single_markdown
position: 3
---

# Packet Serialization
To serialise packets gives us the option to split preparation code and packet creation. It comes handy for our approach to support different versions.

## class ManagedPackets
The class has two member variables initialized with the constructor. The first variable is "m_opcode" (uint16_t) and holds the value of the opcode.
The second variable is m_minimum_size (size_t) which is used to check the packet size before it gets deserialised. We check the received packets because we have to make sure, that it fits into the prepared read structure.
Beside deserialisation, we have to serialise all packets we create and send to the clients program. To define the size of serialised packets, we use a virtual function called "expectedSize()".

We should mention, that all class functions are in fact virtual functions and should be overwritten by packet classes.

## Packet classes
There should be a class for every single packet which includes content. Be aware that some packets have no content, therefore without anything to de-/sereialise.
The packet class inherits publicly from the ManagedPacket class, e.g. for MSG_GUILD_BANK_LOG_QUERY:

```
class MsgGuildBankLogQuery : public ManagedPacket
```

### Packet classes - class constructor
The class constructor holds the initialiser for the inheritanced class ManagedPacket as first parameter. As already stated the first value is the packet, the second is the minimum size.
All other packet specific member fields gets initialized after it. e.g.

```
MsgGuildBankLogQuery(uint8_t slotId, std::vector<GuildBankMoneyLog> moneyLog) :
            ManagedPacket(MSG_GUILD_BANK_LOG_QUERY, 1),
            slotId(slotId),
            moneyLog(moneyLog)
        {
        }
```

### Packet classes - member fields
The member fields represent the structure of the send/received packet. All member fields represents the corresponding part of the packet with its name and type.
To keep the initiale parameters amount as low as possible, we suggest to create a struct e.g.


```
struct GuildBankMoneyLog
{
    uint8_t action;
    uint64_t memberGuid;
    uint32_t entry;
    uint32_t stackCount;
    uint32_t timestamp;
};

namespace AscEmu::Packets
{
    class MsgGuildBankLogQuery : public ManagedPacket
    {
    public:
        uint8_t slotId;
        std::vector<GuildBankMoneyLog> moneyLog;

        MsgGuildBankLogQuery() : MsgGuildBankLogQuery(0, {})
        {
        }

        MsgGuildBankLogQuery(uint8_t slotId, std::vector<GuildBankMoneyLog> moneyLog) :
            ManagedPacket(MSG_GUILD_BANK_LOG_QUERY, 1),
            slotId(slotId),
            moneyLog(moneyLog)
        {
        }
```

### Packet classes - override virtual functions
We can use the following functions:
 * size_t expectedSize() const override; - used to set the size for serialised packets.
 * bool internalSerialise(WorldPacket& packet) override; - used to create our defined packet content.
 * bool internalDeserialise(WorldPacket& packet) override; - used to deserialise received packets.

Most packets will either read (deserialise) or write (serialise) packet content. To decide what to do with a packet, you could have a look to the packet enum name in enum Opcodes.
We have three different packet types:
 * SMSG_ (Server Message - from server to client) ! We have to create the packet content.
 * CMSG_ (Client Message - from client to server) ! We have to interpret the packet content.
 * MSG_ (Message - from client to server and from server to client) ! We have to do both above.
 
example code from MSG_GUILD_BANK_LOG_QUERY:
```
        size_t expectedSize() const override
        {
            return slotId != 6 ? 21 : 17 * moneyLog.size() + 2;
        }

        bool internalSerialise(WorldPacket& packet) override
        {
            packet << slotId;
            packet << uint8_t(moneyLog.size() > 25 ? 25 : moneyLog.size());

            for (const auto& log : moneyLog)
            {
                packet << log.action << log.memberGuid << log.entry;

                if (slotId < 6)
                    packet << log.stackCount;

                const uint32_t currentTime = static_cast<uint32_t>(UNIXTIME);
                packet << uint32_t(currentTime - log.timestamp);
            }
            return true;
        }

        bool internalDeserialise(WorldPacket& packet) override
        {
            packet >> slotId;
            return true;
        }
```
