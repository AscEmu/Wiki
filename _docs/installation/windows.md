---
title: Windows Guide
type: installguide
category: 1
layout: single_markdown
---

### Windows Guide

### Requirements

* [Visual Studio](https://www.visualstudio.com/downloads/) 

![VisualStudio_1.png](/Wiki/images/installation.windows/VisualStudio_1.png)

Installing Visual Studio make sure to select 'Desktop Development with C++' 

* [MySQL Server](http://dev.mysql.com/downloads/mysql/)
* [Git](https://git-scm.com/downloads/)
* [GitHub Desktop](https://desktop.github.com/)
* [CMake](https://cmake.org/download/)
* [7-Zip](https://sourceforge.net/projects/sevenzip/?source=directory)

**Optional**
Microsoft Visual C++ Redistributable Package (Only if you run AscEmu on another PC as it was compiled)

**Helpful Programs**

* [Notepad++](https://notepad-plus-plus.org/download/)
* [HeidiSQL](https://www.heidisql.com/download.php)

### Install MySQL Server

**1.** Start installer.

![MySQL_1.png](/Wiki/images/installation.windows/MySQL_1.png)

**2.** Select mode of server you can select Server only or Custom or just keep Developer (will installed all components).

![MySQL_2.png](/Wiki/images/installation.windows/MySQL_2.png)

![MySQL_3.png](/Wiki/images/installation.windows/MySQL_3.png)

**3.** Set account login and password for root account : ascemu (login) ascemu (password)

![MySQL_4.png](/Wiki/images/installation.windows/MySQL_4.png)

**4.** Check the configuration: MySQL should start as a Windows service at system startup.

![MySQL_5.png](/Wiki/images/installation.windows/MySQL_5.png)

**5.** Optional: Config mysql server config

Sometimes you can receive a error: **MySQL server has gone away (error 2006)** 

Attention: folder hidden – [how to open](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files).

Open file : C:\ProgramData\MySQL\MySQL Server **8.0**\my.ini 
```
# The maximum size of one packet or any generated or intermediate string, or any parameter sent by the
# mysql_stmt_send_long_data() C API function.
max_allowed_packet=4M
```

Change on **max_allowed_packet**=128M or 500M and restart mysql service.

### Getting the source

Before you start working with the program, read the instruction [help.github.desktop.guides](https://help.github.com/desktop/guides/).
{: .info }

Sign in to GitHub and GitHub Desktop before you start to clone.
{: .info }

**1.** In the File menu, **click** Clone Repository.

![github.desktop_1.png](/Wiki/images/installation.windows/github.desktop_1.png)

**2.** Fill in the required information (Repository URL and Local path).

![github.desktop_2.png](/Wiki/images/installation.windows/github.desktop_2.png)

**3.** Click on **Clone** and wait until everything is loaded.

![github.desktop_3.png](/Wiki/images/installation.windows/github.desktop_3.png)

### CMake Precompile

**1.** Open **CMake(cmake-gui)** and fill in the source-path and the build-path:

![cmake_1.png](/Wiki/images/installation.windows/cmake_1.png)

**2.** Choose your compiler **Visual Studio** or other.

![cmake_2.png](/Wiki/images/installation.windows/cmake_2.png)

**3.** You should get a list with all available parts of our framework. Make your selection and press "Configure". Remember to create the folder specified under CMAKE_INSTALL_PREFIX, otherwise the INSTALL project will fail.

You can choose which client should be supported by AscEmu.

![cmake_3.png](/Wiki/images/installation.windows/cmake_3.png)

**4.** Now you can click on "Generate"

![cmake_4.png](/Wiki/images/installation.windows/cmake_4.png)

If you need maps, vmaps, mmaps enable menu item BUILD_TOOLS
{: .info }

### VS Compiling

**1.** Open Project Ascemu.sln

![cmake_5.png](/Wiki/images/installation.windows/cmake_5.png)

**2.** Right-click on "Solution Ascemu" and choose "Build Solution" (F7).

![msvc_1.png](/Wiki/images/installation.windows/msvc_1.png)

**3.** Wait while VS compiles your binaries. At the end VS shows something like this:

![msvc_2.png](/Wiki/images/installation.windows/msvc_2.png)

**4.** Right-click on "INSTALL" and choose "Project Only -> Build Only INSTALL"

![msvc_3.png](/Wiki/images/installation.windows/msvc_3.png)

**5.** The required server files will now be in the folder specified by CMAKE_INSTALL_PREFIX (by default: C:/AscEmu/)

![msvc_4.png](/Wiki/images/installation.windows/msvc_4.png)

**6.** After compilation, the directory with ascemu should look like this.

### Database Setup

Create the 3 Databases. Replace your_username with the username you used in the previous step.

```HeidiSQL
-- The world database (NPC, GO, Instances, Items, ...)
CREATE DATABASE `ascemu_world`;
GRANT ALL PRIVILEGES ON ascemu_world.* TO 'your_username'@'%';
-- The characters database (All created characters)
CREATE DATABASE `ascemu_char`;
GRANT ALL PRIVILEGES ON ascemu_char.* TO 'your_username'@'%';
-- The login database (accounts)
CREATE DATABASE `ascemu_logon`;
GRANT ALL PRIVILEGES ON ascemu_logon.* TO 'your_username'@'%';
quit
```

After you have created the databases, it’s time to populate them with the SQL files.

![sql_1.png](/Wiki/images/installation.windows/sql_1.png)

You will download and extract the world_base.sql into your sql/world/ dir. The latest full db can be downloaded here: [world db](https://github.com/AscEmu/OneDB/)

### Updating the DBs

The process is automated, [more information.](https://ascemu.github.io/Wiki/database/auto_update/)

### Extractors

You can find the extractors in:

```console
C:/Ascemu/tools/
```

Copy all extractors to you main WOW-folder (same folder where you can find wow.exe)

First run map_extractor.exe (output: dbc and maps)
Run vmaps.bat (output: vmaps)

**Optional**
You can test mmaps by running mmaps_generator (output: mmaps). This will take a long time...

Copy all output directories (dbc, maps, vmaps opt. mmaps) to your server folder (C:/Ascemu/)

### Configuration

Look for the *.conf files in the "configs" folder of AscEmu github-trunk. Copy the entire configs folder to your AscEmu Installation Folder in order for the server to read them.

Your "installation directory" should now look somewhat like this. 

```console
C:/Ascemu/configs/world.conf
C:/Ascemu/configs/logon.conf
```

### Configuring logon.conf

Enter your MySQL information at the the following section. 

```console
<LogonDatabase Hostname = "localhost"
Username = "ascemu"
Password = "ascemu"
Name     = "ascemu_logon"
Port     = "3306">
```

### Configuring world.conf

Enter your MySQL information at the the following section. 

```console
<WorldDatabase Hostname = "localhost" Username = "ascemu" Password = "ascemu" Name = "ascemu_world" Port = "3306">
<CharacterDatabase Hostname = "localhost" Username = "ascemu" Password = "ascemu" Name = "ascemu_char" Port = "3306">
```

Enter your Password in **RemotePassword**. 

```console
<LogonServer Address        = "127.0.0.1"
             Port           = "8093"
             Name           = "Default Logon"
             RealmCount     = "1"
             DisablePings   = "0"
             RemotePassword = "moo">
```

![sql_2.png](/Wiki/images/installation.windows/sql_2.png)

In db ascemu_logon->realms. (**RemotePassword** must match).

### Create an Account

**1.** Go to your world console and create an account.

```console
createaccount <accountname> <password>
```

example: createaccount admin adminpassword

**2.** Change permission(gmlevel) in your world console:

```console
setaccpermission <accountname> <permission>
```

example: setaccpermission admin az

**For further information about access levels, have a look to this page [GM Access Levels](/Wiki/docs/commands/access_levels/ "GM Access Levels")**
