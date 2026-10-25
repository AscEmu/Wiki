---
title: Client Guide
type: installguide
category: 4
layout: single_markdown
---

### Connecting a client

AscEmu serves one client version per world server, selected with ASCEMU_VERSION at compile time and **ClientVersion** in world.conf. How the client finds the server depends on its generation: the old clients read a realm list, the Battle.net clients from WoD on need their login host and certificate patched into the client or a launcher that does it at runtime.

Expansion       | Build  | Login        | How to connect
:-------------: | :----: | :----------: | :-------------
:classic:       | 5875   | realm list   | [realmlist.wtf](#realmlistwtf)
:tbc:           | 8606   | realm list   | [realmlist.wtf](#realmlistwtf)
:wotlk:         | 12340  | realm list   | [realmlist.wtf](#realmlistwtf)
:cata:          | 15595  | realm list   | [Config.wtf](#configwtf): **SET realmList**
:mop:           | 18414  | realm list   | [Config.wtf](#configwtf): **SET portal**
:wod:           | 21742  | Battle.net   | [connection_patcher](#connection-patcher)
:legion:        | 26972  | Battle.net   | [connection_patcher](#connection-patcher)
:bfa:           | 35662  | Battle.net   | [connection_patcher](#connection-patcher)
:shadowlands:   | 45745  | Battle.net   | [Arctium Launcher](#arctium-launcher)
:dragonflight:  | 55664  | Battle.net   | [Arctium Launcher](#arctium-launcher)
:warwithin:     | 65299  | Battle.net   | [Arctium Launcher](#arctium-launcher)
:midnight:      | 70575  | Battle.net   | [Burralis Game Launcher](#burralis-game-launcher)

The world server answers only the client build it was compiled for. With a wrong **ClientVersion** in world.conf the client logs in but gets no answers: every NPC shows as Unknown and no button works.
{: .info }

### realmlist.wtf

Classic, TBC and WotLK read the realm list from **realmlist.wtf** in the data folder of the client locale, for example **Data/enUS/realmlist.wtf** (**Data/enGB/realmlist.wtf** for a European client). Point it to the logonserver:

```console
set realmlist 127.0.0.1
```

The logonserver answers on port 3724 (**RealmListPort** in logon.conf), the realm address the client receives afterwards comes from **Realm1.Address** in world.conf.

### Config.wtf

Cata and MoP have no realmlist.wtf any more, the host is a variable in **WTF/Config.wtf** of the client. Cata reads

```console
SET realmList "127.0.0.1"
```

and MoP

```console
SET portal "127.0.0.1"
```

Both still use the classic realm list login of the logonserver.

### Connection patcher

WoD, Legion and BfA log in through Battle.net: a TLS connection to the bnetserver whose certificate the client verifies against the keys built into its executable. The connection patcher of the tools (**BUILD_TOOLS** in CMake) replaces those keys with the ones of your server and writes a patched copy of the client:

```console
connection_patcher <Wow-64.exe> <bnetserver.cert.pem>
```

The certificate is the one the bnetserver uses (**certs/bnetserver.cert.pem**, generated on the first start when none exists). The patcher writes **Wow_AEPatched.exe** next to the original and the signed certificate bundle the client expects. Afterwards set the login host in **WTF/Config.wtf**:

```console
SET portal "127.0.0.1"
```

Only Windows clients are supported by the patcher. Clients that are already prepared for private servers (their executable carries the community keys) need no patching, the **SET portal** line is enough.
{: .info }

### Arctium Launcher

The Shadowlands, Dragonflight and The War Within clients cannot be patched on disk, their code is encrypted. Use the original client executable of the build with the [Arctium Launcher](https://arctium.io), which applies the patches at runtime (certificate check, login keys), and set the login host in **WTF/Config.wtf**:

```console
SET portal "127.0.0.1"
```

AscEmu signs the world connection with the same keys as the launcher expects, so no further step is needed on the server side.

### Burralis Game Launcher

The Midnight client (12.1.5) is started with the [Burralis Game Launcher](https://github.com/Burralis/Game-Launcher) pointed at your logonserver. The launcher needs a TLS certificate that is valid for the Battle.net host name it connects to; a self-signed certificate for 127.0.0.1 is enough for a local server. The portal setting of Config.wtf is handled by the launcher.
