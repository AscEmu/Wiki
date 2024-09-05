---
title: Windows Guide
type: installguide
category: 1
layout: single_markdown
---

### Requirements

* [OpenSSL](#openssl)
* [Redistributable Package](#redistributable-package)
* [MySQL Setup](#mysql-setup)
* [GitHub Desktop](#github-desktop)
* [Visual Studio](#visual-studio)
* [CMake](#cmake)
* [Compiling Core](#compiling-core)
* [Database Setup](#database-setup)
* [Extractors](#extractors)
* [Configuration](#configuration)
* [Automatic Database Updating](#automatic-database-updating)
* [Create an Account](#create-an-account)

### Helpful Program

* [Notepad++](https://notepad-plus-plus.org/download/)
* [HeidiSQL](https://www.heidisql.com/download.php)
* [MySQL Notifier](https://downloads.mysql.com/archives/notifier/)
* [SQLyog](https://github.com/webyog/sqlyog-community/wiki/Downloads)
* [DBeaver](https://dbeaver.io/download/)
* [7-Zip](https://sourceforge.net/projects/sevenzip/?source=directory)

### Windows Guide

#### OpenSSL

[OpenSSL](https://slproweb.com/products/Win32OpenSSL.html) - The Win32/Win64 OpenSSL Installation Project is dedicated to providing a simple installation of OpenSSL for Microsoft Windows.

OpenSSL **3.0 and higher** is required.
{: .success }

Do **NOT use the light version** of OpenSSL. Here are the direct links to the msi installer. Make sure to change the option to **The OpenSSL binaries (/bin) directory**
{: .success }

![openssl_option.jpg](/Wiki/images/installation.windows/openssl_option.jpg)

**Win64**

Find the 64bit version by finding the latest 3.X Win64 OpenSSL that is NOT the "light" version. (Example of a working Version: Win64 OpenSSL v3.1.6)

**Wind32**

Find the 32bit version by finding the latest 3.X Win32 OpenSSL that is NOT the "light" version. (Example of a working Version: Win32 OpenSSL v3.1.6)

#### Redistributable Package

The Visual C++ [Redistributable Package](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) Microsoft C and C++ (MSVC) runtime libraries.

**Win64**

64bit version [https://aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)

**Wind32**

32bit version [https://aka.ms/vs/17/release/vc_redist.x86.exe](https://aka.ms/vs/17/release/vc_redist.x86.exe)

#### MySQL Setup

[MySQL Server](https://dev.mysql.com/downloads/windows/installer/) - Installation Project is dedicated to providing a simple installation of MySQL for Microsoft Windows.

Use **version ≥ 5.7** with mysql server configuration.
{: .success }

**1.** Start installer.

![MySQL_1.png](/Wiki/images/installation.windows/MySQL_1.png)

**2.** Select mode of server you can select Server only or Custom or just keep Developer (will installed all components).

![MySQL_2.png](/Wiki/images/installation.windows/MySQL_2.png)

**3. MySQL Authentication Method**

**3.1. Legacy Authentication** In most cases your current MySQL Server uses already the Legacy Authentication Method. Check out the config files and set "LegacyAuth" = "1"

![MySQL_3.png](/Wiki/images/installation.windows/MySQL_3.png)

**3.2 Default: String Password Encryption (recommended)** We highly recommend using the Strong Password Encryption for new installed MySQL Servers. This is activated in your config files by default LegacyAuth = "0"

![MySQL_3_NewAuthMethod.png](/Wiki/images/installation.windows/MySQL_3_NewAuthMethod.png)

**4.** Set account login and password for root account : ascemu (login) ascemu (password).

![MySQL_4.png](/Wiki/images/installation.windows/MySQL_4.png)

**5.** Check the configuration: MySQL should start as a Windows service at system startup.

![MySQL_5.png](/Wiki/images/installation.windows/MySQL_5.png)

**6.** Optional: Config mysql server config

Sometimes you can receive a error: **MySQL server has gone away (error 2006)** 

Attention: folder hidden – [how to open](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files).

Open file : C:\ProgramData\MySQL\MySQL Server **8.0**\my.ini 

```
# The maximum size of one packet or any generated or intermediate string, or any parameter sent by the
# mysql_stmt_send_long_data() C API function.
max_allowed_packet=4M
```

Change on **max_allowed_packet**=128M or 500M and restart mysql service.

#### GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) - Installation Project is an application that enables you to interact with GitHub using a GUI instead of the command line or a web browser.

Before you start working with the program, read the instruction [Help guides](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop/).
{: .info }

Sign in to GitHub and GitHub Desktop before you start to clone.
{: .info }

**1.** In the File menu, **click** Clone Repository.

![github.desktop_1.png](/Wiki/images/installation.windows/github.desktop_1.png)

**2.** Fill in the required information (Repository URL and Local path).

![github.desktop_2.png](/Wiki/images/installation.windows/github.desktop_2.png)

**3.** Click on **Clone** and wait until everything is loaded.

![github.desktop_3.png](/Wiki/images/installation.windows/github.desktop_3.png)

#### Visual Studio

[Visual Studio](https://www.visualstudio.com/downloads/) - The comprehensive IDE for C++ developers on Windows. 

![VisualStudio_1.png](/Wiki/images/installation.windows/VisualStudio_1.png)

Installing Visual Studio make sure to select 'Desktop Development with C++' and install all required components. 

#### CMake

[CMake](https://cmake.org/download/) - Installation Project is an open-source, cross-platform family of tools designed to build, test and package software.

**1.** Open **CMake (cmake-gui)** and fill in the source-path and the build-path:

![cmake_1.png](/Wiki/images/installation.windows/cmake_1.png)

**2.** Choose your compiler **Visual Studio** or other.

Visual Studio **16, 17** is supported.
{: .success }

![cmake_2.png](/Wiki/images/installation.windows/cmake_2.png)

**3.** You should get a list with all available parts of our framework. Make your selection and press "Configure". Remember to create the folder specified under CMAKE_INSTALL_PREFIX, otherwise the INSTALL project will fail.

You can choose which client should be supported by AscEmu.

![cmake_3.png](/Wiki/images/installation.windows/cmake_3.png)

**4.** Now you can click on "Generate"

If you need maps, vmaps, mmaps enable menu item BUILD_TOOLS
{: .info }

Here is a quick view of the variables you can include with cmake command:

<pre>
-DCMAKE_INSTALL_PREFIX = the location where AscEmu binaries are installed
-DCMAKE_BUILD_TYPE = choose from Release or Debug mode
-DBUILD_WITH_WARNINGS = 0 (disabled) or 1 (enabled)
-DBUILD_TOOLS = 0 (disabled) or 1 (enabled)
-DASCEMU_VERSION = choose from Classic, TBC, WotLK, Cata or MoP
-DUSE_PCH = 0 (disabled) or 1 (enabled) - Precompiled headers are enabled by default
</pre>

![cmake_4.png](/Wiki/images/installation.windows/cmake_4.png)

#### Compiling Core

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

After compilation, the directory with ascemu should look like this.

#### Database Setup

**1.** Open HeidiSQL and set account login and password for root account : ascemu (login) ascemu (password).

![HeidiSQL_1.png](/Wiki/images/installation.windows/HeidiSQL_1.png)

**2.** Create the 3 Databases (**ascemu_world**, **ascemu_char**, **ascemu_logon**).

![HeidiSQL_2.png](/Wiki/images/installation.windows/HeidiSQL_2.png)

show with an example **ascemu_world**

![HeidiSQL_3.png](/Wiki/images/installation.windows/HeidiSQL_3.png)

**3.** Download world db [OneDB](https://github.com/AscEmu/OneDB/) and extract the **world_base.sql** into your **sql/world/** dir.

![sql_1.png](/Wiki/images/installation.windows/sql_1.png)

#### Extractors

You can find the extractors in:

```console
C:/Ascemu/tools/
```

Copy all extractors (map_extractor.exe, vmap4_assembler.exe vmap4_extractor.exe, mmaps_generator.exe, ae_tools.bat) to you main WOW-folder (same folder where you can find wow.exe)

![extractor_1.png](/Wiki/images/installation.windows/extractor_1.png)

Run 1 - Maps (output: dbc and maps), 2 - Vmaps (output: vmaps), 3 - Mmaps (output: mmaps)

**Optional**
You can test mmaps by running mmaps_generator . This will take a long time...

Copy all output directories (dbc, maps, vmaps opt. mmaps) to your server folder (C:/Ascemu/) or (C:/Ascemu/**expansion**) 

"expansion" directory stores DBC, Maps, VMaps and MMaps data of a single version.

```console
#   DataDir
#        Set up the data dir for DBC, Maps, VMaps and MMaps.
#        Default: "" (root directory)

DataDir = "expansion">
```

![extractor_2.png](/Wiki/images/installation.windows/extractor_2.png)

1 - root directory
2 - expansion directory

#### Configuration

Look for the *.conf files in the "configs" folder of AscEmu github-trunk. Copy the entire configs folder to your AscEmu Installation Folder in order for the server to read them.

Your "installation directory" should now look somewhat like this. 

```console
C:/Ascemu/configs/world.conf
C:/Ascemu/configs/logon.conf
```

#### Configuring logon.conf

Enter your MySQL information at the the following section. 

```console
<LogonDatabase Hostname = "localhost"
Username = "ascemu"
Password = "ascemu"
Name     = "ascemu_logon"
Port     = "3306">
```

#### Configuring world.conf

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

In db ascemu_logon->realms. (**RemotePassword** must match).

![sql_2.png](/Wiki/images/installation.windows/sql_2.png)

#### Automatic Database Updating

The process is automated, [more information.](https://ascemu.github.io/Wiki/database/auto_update/)
It remains only to **run logon.exe** and **run world.exe**

#### Create an Account

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
