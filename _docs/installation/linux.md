---
title: Linux Guide
type: installguide
category: 2
layout: single_markdown
---

### Requirements

* [Initial Setup](#initial-setup)
* [MySQL Setup](#mysql-setup)
* [Setup MySQL or MariaDB environment](#setup-mysql-or-mariadb-environment)
* [Security and Accounts](#security-and-accounts)
* [Getting the Files](#getting-the-files)
* [Compiling](#compiling)
* [DBC and Map files](#dbc-and-map-files)
* [Logon Database](#logon-database)
* [World Database](#world-database)
* [Configuration Files](#configuration-files)
* [Prepare the Binaries](#prepare-the-binaries)
* [Using Screen](#using-screen)
* [Sample restart script](#sample-restart-script)
* [Create an Account](#create-an-account)
* [Keeping AscEmu updated](#keeping-ascemu-updated)

### Linux Guide

Please note: this guide has been written with the objective of setting up a Linux server running a generic kernel/OS, like Ubuntu/Debian.
{: .success }
This guide file has been written with strict use of the console in mind so it suites both Linux desktop and server users. Linux was made to run command line, so there isn’t an easier, quicker way to do things than the way we are about to do them.
{: .info }

### Initial Setup

First, having presumably installed a fresh copy of Linux, we need to update our server so that we can compile AscEmu. This will require several different packages.<br />
For the following commands, log in as the Linux root administrator.

```console
sudo apt-get update && sudo apt-get dist-upgrade
sudo apt-get install g++ git-core git cmake build-essential zlib1g-dev libssl-dev libpcre3-dev libbz2-dev unzip screen
```

Alternatively if you wish to use Clang instead of gcc compiler.

```console
sudo apt-get install clang
```

AscEmu supports Clang 16 and higher. By default Debian 12.8 installs Clang 14 so on Debian you must install clang-16 or higher package.
{: .info }

### MySQL Setup

You have two options here.

#### 1. Installing MySQL Server

MySQL server packages are not available in default APT repositories in Debian so there are couple things to do first.
On other distros skip Debian only commands.

**Debian only**
Download the latest MySQL repository package. Check for the latest version at [MySQL APT page.](https://dev.mysql.com/downloads/repo/apt/)
```console
wget https://dev.mysql.com/get/mysql-apt-config_0.8.33-1_all.deb -O /tmp/mysql-apt-config.deb
```

**Debian only**
Install the release package and update APT.
```console
sudo DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/mysql-apt-config.deb
sudo apt-get update
```

First we need to install MySQL into Linux as well as make sure that we have the correct libraries to properly operate it.

```console
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

#### 2. Installing MariaDB Server

First we need to install MariaDB into Linux as well as make sure that we have the correct libraries to properly operate it.

```console
sudo apt-get install mariadb-server mariadb-client libmariadb-dev
```

### Setup MySQL or MariaDB environment

It's best to not run AscEmu with your MySQL / MariaDB root account so let's create a new MySQL user which will only have access to your AscEmu MySQL databases.

First, login to MySQL terminal with your MySQL / MariaDB root account.<br />
By default MySQL 8.0 and later / MariaDB 10.4 and later use auth_socket which is a passwordless authentication method for root account.

```console
sudo mysql
```

Next you will create the MySQL user. Please change the respective usernames and passwords to your own unique variants!

```console
CREATE USER 'your_username'@'%' IDENTIFIED BY 'your_password'
WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
```

Let's create the databases. Again replace *your_username* with the username you used in the previous step.

```console
CREATE DATABASE `ascemu_world`;
GRANT ALL PRIVILEGES ON ascemu_world.* TO 'your_username'@'%';
CREATE DATABASE `ascemu_char`;
GRANT ALL PRIVILEGES ON ascemu_char.* TO 'your_username'@'%';
CREATE DATABASE `ascemu_logon`;
GRANT ALL PRIVILEGES ON ascemu_logon.* TO 'your_username'@'%';
FLUSH PRIVILEGES;
```

Check create the databases.

```console
SHOW DATABASES;
```

You can issue MySQL commands once you are in the MySQL prompt (**mysql>**). If you want to return to **bash** simply enter **exit** or **\q**.

Optionally if you wish to have remote access to your new MySQL / MariaDB server, open up the MySQL configuration file with your favourite text editor.

MySQL Server:
```console
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

MariaDB Server:
```console
sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
```

And change the bind-address to 0.0.0.0<br />
If there is no bind-address in the file, your MySQL / MariaDB server should already accept remote connections.

```console
bind-address = 0.0.0.0
```

Then save and exit the file and restart the MySQL / MariaDB service.

MySQL Server:
```console
sudo /etc/init.d/mysql restart
```

MariaDB Server:
```console
sudo /etc/init.d/mariadb restart
```

That's it! Setting up MySQL / MariaDB and databases is pretty straight forward.

### Security and Accounts

Once that is complete, we have the right environment in Linux to compile the server.  Before we can compile though we need to address some very serious security issues.  Whatever distro you are using, whether your server is private or public. 
{: .info }
Please do NOT run your AscEmu server using your root account.
{: .error }

Having said that, lets move on to create a basic account in Linux from which you will run AscEmu. You can name this account anything you would like, but for the sake of standardization, we will name ours ascemu.  While still in your root account type:

```console
sudo useradd -m -s /bin/bash ascemu
```

Next you will create a password for the account with the following command.

```console
sudo passwd ascemu
```

Once you have created the ascemu user, you will have a new directory in **/home/ascemu/**. This will be the working root directory for your installation and eventually, for running the server.

In the commands below, ~ is used as a shorthand for the current user's home directory, which we assume to be /home/ascemu. If for whatever reason you cannot use ~, simply replace it with /home/ascemu.
{: .info }

### Getting the Files

First, switch to the AscEmu account, or whichever account you have just created.

```console
sudo su - ascemu
```

Next, we need to download the AscEmu source files to compile them.  Let's make sure we are in the home directory:

```console
cd ~
```

I am a fan of organization, so let's make some directories and organize this mess.  We will create an **installer**, **server**, and **ascemu_code** directory so that we can keep all of our files straight.  The installer directory may seem like a waste for now, but it will come into play later when we install the database.

```console
mkdir ~/installer
```

```console
mkdir ~/server
```

As you may have guessed, the installer directory will contain AscEmu source files, and the server directory will contain the actual compiled files (like the libraries and binaries) to run the server.<br />
The next step is to download the source files, so we will change to our installer/ascemu_code directory and use git to get the files.

```console
mkdir ~/installer/ascemu_code
cd ~/installer/ascemu_code
```
With the -b required_branch, you can select a branch (master / develop).
{: .info }

```console
git clone -b master https://github.com/AscEmu/AscEmu.git ~/installer/ascemu_code
```

### Compiling

Once we have the source files we can start compiling AscEmu. The first step is to create a configuration file that will be used to pass the variables to the make file so that AscEmu will compile properly.

```console
mkdir ~/installer/build
```

```console
cd ~/installer/build
```

```console
cmake -DCMAKE_INSTALL_PREFIX=~/server -DCMAKE_BUILD_TYPE=Release -DBUILD_WITH_WARNINGS=0 -DBUILD_TOOLS=0 -DASCEMU_VERSION=WotLK ../ascemu_code
```

If you chose to use Clang compiler you'll need to add two additional variables to cmake command.<br />
Also, if you had to install i.e. clang-16 instead of default clang package, replace clang with clang-16 and clang++ with clang++-16 in the command.

```console
cmake -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_INSTALL_PREFIX=~/server -DCMAKE_BUILD_TYPE=Release -DBUILD_WITH_WARNINGS=0 -DBUILD_TOOLS=0 -DASCEMU_VERSION=WotLK ../ascemu_code
```

Here is a quick view of the variables you can include with cmake command:

<pre>
-DCMAKE_INSTALL_PREFIX = the location where AscEmu binaries are installed
-DCMAKE_BUILD_TYPE = choose from Release or Debug mode
-DBUILD_WITH_WARNINGS = 0 (disabled) or 1 (enabled)
-DBUILD_TOOLS = 0 (disabled) or 1 (enabled)
-DASCEMU_VERSION = choose from Classic, TBC, WotLK, Cata or MoP
-DAE_USE_PCH = 0 (disabled) or 1 (enabled) - Precompiled headers are enabled by default
</pre>

Then we now simply invoke make and make install to install to the prefix directory.

```console
make && make install
```

If you have a multicore machine, then you can substitute that final command with this one, where x is equal to the number of cores + 1. For example, with 2 cores x would be 3.<br />
If you want to use all your cores just use a large number like 32.
{: .info }

```console
make -j x && make install
```

This will not effect your server, this will only tell "make" to compile using all of your available CPU power.
{: .info }

If this last step is successful then you are ready to configure your server and get on your way.

### DBC and Map Files

Next you will transfer the **DBC** and **Maps** files over to your server.

Use Wine if you must but preferably a Windows machine to extract the DBC and map files.
{: .info }

```console
mkdir ~/server/dbc
```

```console
mkdir ~/server/maps
```

Place the **DBC** and map files in their respective directories above.<br />
Extracting **Vmaps** and **MMaps** files is not required but is **highly** recommended.

### Logon Database

Next you must apply base logon database manually because there is one column you must change before running your server.

Login to MySQL. Replace *your_username* with the username you used in "Setup MySQL / MariaDB environment" section.

```console
mysql -u your_username -p
```

Select logon database and execute SQL file.

```console
use ascemu_logon;
source ~/server/sql/logon/logon_base.sql
```

Now you must set a password for logonserver. This is an unique password that prevents unauthorized worldservers to register with your logonserver.<br />
Memorize the password because you'll need it later.

```console
UPDATE realms SET password="your_password" WHERE id=1;
quit
```

### World Database

AscEmu supports only OneDB world database which is maintained by AscEmu team. OneDB, as the name suggests, has all versions (Classic - Mop) packed into a single database. ![github.svg](/Wiki/images/mark-github.svg) [Link to Github](https://github.com/AscEmu/OneDB/).
{: .info }

First, switch back to your installer folder and use git to clone the OneDB repository.

```console
cd ~/installer
git clone https://github.com/AscEmu/OneDB.git onedb
```

Let's copy the world database to server directory and unzip it.

```console
cp onedb/world_base.zip ~/server/sql/world/
cd ~/server/sql/world
unzip world_base.zip
```

World database is now ready to be applied.<br />
All future world database updates are added to AscEmu base repository so you don't need to update your OneDB repository.

### Configuration Files

All that is left to do is to create the /configs/ directory and move the configuration files there.

```console
cd ~/server
mkdir configs
mv ~/installer/ascemu_code/configs/*.conf ~/server/configs
```

Now your configuration files are in the ~/server/configs folder ready to be edited, and used by the AscEmu server.

Use an editor of your choice. Make sure to read all config files at least once, so you know what configuration is where and you don't end up with an administrator account with default password you didn't know about ;)

```console
cd ~/server/configs
nano logon.conf
nano world.conf
```

#### Configuring logon.conf

Enter your MySQL information you created in MySQL Setup at the the following section.

```console
<LogonDatabase Hostname = "localhost"
Username = "ascemu"
Password = "ascemu"
Name     = "ascemu_logon"
Port     = "3306">
```

#### Configuring world.conf

Enter your MySQL information you created in MySQL Setup at the the following section.

```console
<WorldDatabase Hostname = "localhost"
Username = "ascemu"
Password = "ascemu"
Name     = "ascemu_world"
Port     = "3306">

<CharacterDatabase Hostname = "localhost"
Username = "ascemu"
Password = "ascemu"
Name     = "ascemu_char"
Port     = "3306">
```

Make sure RemotePassword matches the password in realms table in logon database that you set in "Logon Database" section.

```console
<LogonServer Address        = "127.0.0.1"
             Port           = "8093"
             Name           = "Default Logon"
             RealmCount     = "1"
             DisablePings   = "0"
             RemotePassword = "change_me_logon">
```

### Prepare the Binaries

The very last step is to make the AscEmu binaries executable.

```console
cd ~/server
chmod a+x logon
chmod a+x world
```

That's it! You should now have a fully functioning copy of AscEmu.<br />
When you first time run the binaries your databases are automatically populated and updated to latest version. This process is fully automated. You can read about it [more here.](https://ascemu.github.io/Wiki/database/auto_update/)

Applying especially world database or some large updates can take some time.
{: .info }

### Using Screen

You may also wish to preserve the AscEmu processes once you've logged out of SSH. This can be done using Screen.

The syntax is relatively simple.

```console
screen ./logon
```

This will run the 'logon' program in a new session. To leave this screen and keep it running, press "CTRL + A and then D" to detach.

Next you can start worldserver.

```console
screen ./world
```

To return to the screen session later on use

```console
screen --list
```

then type

```console
screen -r ScreenIDHere
```

You may replace ./world with sh AE_Restarter.sh for example, to run a restart program or even use screen on startup to launch the server.

To do this, you can either use a restart script, cronjob, or if you are working with a desktop Linux environment you can simply use the built in startup application manager(Both Gnome and KDE have these).

If you wish to set up a cronjob, google around - far more documentation is provided for both cron AND Screen then the AscEmu team can provide on these programs.

### Sample restart script

```console
#! /bin/bash
while :
do
./world
sleep 150
wait $!
echo Realm went down, restarting!
done
```

Increase 150 to 250 or 300 to prevent bash from spamming the executable or the script may cause undesired effects if the server refuses to start or has an error.
{: .info }

Save the above script as AE_Restarter.sh and call it using

```console
screen ./AE_Restarter.sh
```

You are now ready to move on to create an account.

### Create an Account

**1.** Go to your **world** console and create an account.

```console
createaccount <accountname> <password>
```

example: createaccount admin adminpassword

**2.** Change permission(gmlevel) in your **world** console:

```console
setaccpermission <accountname> <permission>
```

example: setaccpermission admin az

**For further information about access levels, have a look to this page [GM Access Levels](/Wiki/docs/commands/access_levels/ "GM Access Levels")**

### Keeping AscEmu updated

Keeping your AscEmu up-to-date is pretty straightforward. You only need to pull new changes from AscEmu repository, compile and start the server.

Again, replace X in make command with a high number if you have a multicore machine.
```console
cd ~/installer/ascemu_code
git pull
cd ~/installer/build
make -j X && make install
cd ~/server
```

Now you are again ready to start server. Automatic database updater will apply new SQL updates automatically.
