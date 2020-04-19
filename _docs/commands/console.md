---
title: Console Documentation
type: command
layout: single_markdown
position: 3
---

# [![logon_icon_s.jpg](/Wiki/images/logon_icon_s.jpg)](/Wiki/images/logon_icon_s.jpg)Logon console

## Commands

Command              | Usage                                    | Description                             | Available?
-------------------- | ---------------------------------------- | --------------------------------------- | ----------
help / ?             |                                          | help, ?: Prints this help text.         | Yes       
account create       | account create <name> <password> <email> | Creates a new account.                  | Yes       
account delete       | account delete <name>                    | Deletes an account by name.             | Yes       
account set gm       | account set gm <name> <gmlevel>          | Sets gm access to account               | Yes       
account set password | account set password <name> <password>   | Sets a new password for an account      | Yes       
reload               |                                          | Reloads accounts                        | Yes       
rehash               |                                          | Rehash configs                          | Yes       
netstatus            |                                          | Shows network status                    | Yes       
shutdown/exit        |                                          | Turns logon server off                  | Yes       
info                 |                                          | Shows some information about the server | Yes       

# [![world_icon_s.jpg](/Wiki/images/world_icon_s.jpg)](/Wiki/images/world_icon_s.jpg)World console

## Remote Access

```console
<RemoteConsole Enabled = "0"
                 Host = "0.0.0.0"
                 Port = "8092">
```

Set "Enabled" to 1, set "Host" to the ip ascemu is running on and open the Port.

You can connect to the **telnet** RA for example with PuTTY.

[![Telnet 1.JPG](/Wiki/images/Telnet_1.JPG)]()

You can now login with an "AZ" account:

[![Telnet 2.JPG](/Wiki/images/Telnet_2.JPG)]()

Type "?" to get a list of all available commands:

[![Telnet 3.JPG](/Wiki/images/Telnet_3.JPG)]()