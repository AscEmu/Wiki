---
title: Windows Guide
type: installguide
category: 1
layout: single_markdown
---

### Windows Guide

### Requirements

* [Visual Studio](https://www.visualstudio.com/downloads/) Installing Visual Studio make sure to select 'Desktop Development with C++' 
* [MySQL Server](http://dev.mysql.com/downloads/mysql/)
* [Git](https://git-scm.com/downloads/)
* [GitHub Desktop](https://desktop.github.com/)
* [CMake](https://cmake.org/download/)

**Optional**
Microsoft Visual C++ Redistributable Package (Only if you run AscEmu on another PC as it was compiled)

**Helpful Programs**

* [Notepad++](https://notepad-plus-plus.org/download/)
* [HeidiSQL](https://www.heidisql.com/download.php)

### Getting the source

Before you start working with the program, read the instruction. [help.github.desktop.guides](https://help.github.com/desktop/guides/) .
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

### Database Setup

Create the 3 Databases.

```console
ascemu_logon  The login database (accounts)
ascemu_char   The characters database (All created characters)
ascemu_world  The world database (NPC, GO, Instances, Items, ...)
```

### Import the Structure

For **ascemu_world** apply all .sql files in folder 'fullDB' from: ![github.svg](/Wiki/images/mark-github.svg) [Link to Github](https://github.com/AscEmu/OneDB/).

### Updating the DBs

For updatefiles **ascemu_logon**, **ascemu_char** and **ascemu_world** you need to copy the **sql** folder to **C:/AscEmu/sql/** from ![github.svg](/Wiki/images/mark-github.svg) [Link to Github](https://github.com/AscEmu/AscEmu/).

**Done** Your databases are up to date. Move on with this guide.

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
