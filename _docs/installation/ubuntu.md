---
title: Linux Guide
type: installguide
category: 2
layout: single_markdown
---

### Linux Guide

Please note: this guide has been written with the objective of setting up a Linux server running a generic kernel/OS, like Ubuntu/Debian.
{: .success }
This guide file has been written with strict use of the console in mind. Linux was made to run command line, so there isn’t an easier, quicker way to do things than the way we are about to do them.
{: .info }

### Initial Setup

First, having presumably installed a fresh copy of Linux, we need to update our server so that we can compile AscEmu. This will require several different packages. 
For the following commands, log in as the Linux root administrator.

```console
sudo apt-get install g++ git-core git cmake build-essential zlib1g-dev libssl-dev libpcre3-dev libbz2-dev
```

### MySQL Setup

First we need to install MySQL into Linux as well as make sure that we have the correct libraries to properly operate it.

<pre>
Only for Debian.

echo -e "deb http://repo.mysql.com/apt/debian/ stretch mysql-5.7\ndeb-src http://repo.mysql.com/apt/debian/ stretch mysql-5.7" > /etc/apt/sources.list.d/mysql.list
wget -O /tmp/RPM-GPG-KEY-mysql https://repo.mysql.com/RPM-GPG-KEY-mysql
apt-key add /tmp/RPM-GPG-KEY-mysql
apt update
</pre>

```console
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

In order to make your MySQL server available to other computers aside from your host (this is generally a good idea). Open up the mysql configuration with your favourite text editor.

```console
sudo vi /etc/mysql/my.cnf
```

And comment out the following line (by adding the #):

```console
#bind-address = 127.0.0.1
```

Then save, exit, and restart the mysql service.

```console
sudo /etc/init.d/mysql restart
```

Next we have to setup the root account for MySQL so that the server isn't compromised.  This step is absolutely imperative.  Please choose a secure password.

```console
 mysqladmin -u root password new-password-here
 mysqladmin -h root@hostname -u root password the-pass-you-just-chose
```

Substitute _hostname_ for the hostname you chose when installing Linux. That's it! Setting up MySQL is pretty straight forward.

### Security and Accounts

Once that is complete, we have the right environment in Linux to compile the server.  Before we can compile though we need to address some very serious security issues.  Whatever distro you are using, whether your server is private or public. 
{: .info }
Please do NOT run your AscEmu server using your root account.
{: .error }

Having said that, lets move on to create a basic account in Linux from which you will run AscEmu. You can name this account anything you would like, but for the sake of standardization, we will name ours ascemu.  While still in your root account type:

```console
sudo useradd -m -s /bin/bash ascemu
```

After you type in this command you will need to specify what password you will use for the account.

```console
sudo passwd ascemu
```

Once you have added the ascemu user, you will have a new directory in **/home/ascemu/**. This will be the working root directory for your installation and eventually, for running the server.

In the commands below, ~ is used as a shorthand for the current user's home directory, which we assume to be /home/ascemu. If for whatever reason you cannot use ~, simply replace it with /home/ascemu.
{: .info }

### Getting the Files

First, switch to the AscEmu account, or whichever account you have just created.

```console
sudo su - ascemu
```

Next, we need to download the ascemu files to compile them.  Lets make sure we are in the home directory:

```console
cd ~
```

I am a fan of organization, so lets make some directories and organize this mess.  We will create an installer, server, and ascemu directory so that we can keep all of our files straight.  The installer directory may seem like a waste for now, but it will come into play later when we install the database.

```console
mkdir ~/installer
```

```console
mkdir ~/installer/ascemu
```

```console
mkdir ~/server
```

As you may have guessed, the installer directory will contain the ascemu files, and the server directory will contain the actual compiled files (like the libraries and binaries) to run the server.  The next step is to download the files, so we will change to our installer/ascemu directory and use svn to get the files.

```console
cd ~/installer/ascemu
```
With the -b required_branch, you can select a branch.
{: .info }

```console
git clone -b master git://github.com/AscEmu/AscEmu.git code
```

Update the code to the current version.

```console
cd ~/installer/ascemu/code
git pull origin master
```

### Compiling

Once we have the files we can start compiling AscEmu. The first step is to create the configuration file that will be used to pass the variables to the make file so that AscEmu will compile properly.

```console
mkdir ~/installer/ascemu/build
```

```console
cd ~/installer/ascemu/build
```

```console
cmake -DCMAKE_INSTALL_PREFIX=~/server -DCMAKE_BUILD_TYPE=Release -DBUILD_WITH_WARNINGS=0 -DBUILD_TOOLS=0 -DWITH_EXPERIMENTAL_FILESYSTEM=1 -DASCEMU_VERSION=WotLK ../code
```

Then we now simply invoke make and make install to install to the prefix directory.

```console
make && make install
```

If you have a multicore machine, then you can substitute that final command with this one, where x is equal to the number of cores + 1.  For example, with 2 cores x would be 3.
If you want to use all your cores just use a large number like 15.
{: .info }

```console
make -j x && make install
```

This will not effect your server, this will only tell "make" to compile using all of your available CPU power.
{: .info }

If this last step is successful then you are ready to configure your server and get on your way.

### DBC and map files

Next you will transfer the DBC and map files over to your server.

DBC Extraction is now on its OWN page. Please come back to THIS page when you are done extracting DBCs!
{: .info }

Use Wine if you must but preferably a windows machine to extract the DBCs, maps.

```console
mkdir ~/server/dbc
```

```console
mkdir ~/server/maps
```

Place the DBC and map files in their respective directories above.

### Config Files

All that is left to do is create the /etc/ directory and move the configuration files into it, and make the AscEmu binaries executable.

```console
cd ~/server
 mkdir etc
 mv ~/installer/ascemu/code/configs/*.conf ~/server/etc
 cd ~/server
 chmod a+x logonserver
 chmod a+x world
```

Now your configuration files are in the .../etc folder ready to be edited, and used by the AscEmu server and your AscEmu binaries are executable.

### MySQL Setup

The first step in setting up the database will be setting up a mysql user and databases to interact with AscEmu.  Please change the respective usernames and passwords to your own unique variants!  Note, when it asks for your password, please enter your root mysql password.

```console
mysql -u root -p
 CREATE USER 'username'@'%' IDENTIFIED BY 'password';
 GRANT USAGE ON \* . \* TO 'username'@'%' IDENTIFIED BY 'password' 
 WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;
 CREATE DATABASE `ascemu_world` ;
 GRANT ALL PRIVILEGES ON `ascemu_world` . \* TO 'username'@'%';
 CREATE DATABASE `ascemu_char` ;
 GRANT ALL PRIVILEGES ON `ascemu_char` . \* TO 'username'@'%';
 CREATE DATABASE `ascemu_logon` ;
 GRANT ALL PRIVILEGES ON `ascemu_logon` . \* TO 'username'@'%';
EXIT;
```

After we have setup the database, its time to start downloading the files.

### Get the world database

For ascemu_world apply all .sql files in folder 'fullDB' from: [Link to Github](https://github.com/AscEmu/OneDB/).
{: .info }

```console
CREATE DATABASE ascemu_logon;
 USE ascemu_logon;
 SOURCE logon_base.sql;
 CREATE DATABASE ascemu_char;
 USE ascemu_char;
 SOURCE character_base.sql;
EXIT;
```

Now we need to apply any updates that we're missing. The best way to do this is to run the server files and look at the error messages. So in our case, we run

```console
cd ~/server
./logon
```

If no errors appear, your database is up to date. Next, close the logon server with Ctrl+C and run world

```console
./world
```

At the time of writing, the following error is output:

```console
Database: Last world database update doesnt match the required one which is 20180418-00_playercreateinfo_introid.
Database: You need to apply the world update queries that are newer than 20180418-01_playercreateinfo_faction. Exiting.
```

In this case, the last applied update is 20180418-01_playercreateinfo_faction. This means that we need to apply anything newer than that. For this, cd back to the sql directory:

For world_updates apply all .sql files in folder 'updates' from: [Link to Github](https://github.com/AscEmu/OneDB/).
{: .info }

Which produces an output similar to

```console
20180331-00_build_creature_properties.sql      20180403-00_build_totemdisplayids.sql
20180331-01_world_db_version.sql               20180403-01_staticspawns.sql
20180331-02_build_player_xp_for_level.sql      20180403-02_spell_custom_override.sql
20180401-00_build_creature_properties.sql      20180404-00_build_creature_spawns.sql
20180401-01_build_gameobject_properties.sql    20180405-00_build_gameobject_spawns.sql
20180401-02_build_item_properties.sql          20180416-00_playercreateinfo.sql
20180401-03_build_quest_properties.sql         20180417-00_playercreateinfo_misc.sql
20180401-04_build_map_info.sql                 20180418-00_playercreateinfo_introid.sql
20180402-00_build_playercreateinfo.sql         20180418-01_playercreateinfo_faction.sql
```
For world_updates apply all .sql files in folder 'updates' from: [Link to Github](https://github.com/AscEmu/OneDB/).
{: .info }

Drop back into MySQL and run the following queries:

```console
USE ascemu_world;
 SOURCE 20180331-00_build_creature_properties.sql;
 SOURCE 20180331-01_world_db_version.sql;
 SOURCE 20180331-02_build_player_xp_for_level.sql;
 SOURCE 20180401-00_build_creature_properties.sql;
 SOURCE 20180401-01_build_gameobject_properties.sql;
 SOURCE 20180401-02_build_item_properties.sql;
 SOURCE 20180401-03_build_quest_properties.sql;
 SOURCE 20180401-04_build_map_info.sql;
 SOURCE 20180402-00_build_playercreateinfo.sql;
 SOURCE 20180403-00_build_totemdisplayids.sql;
 SOURCE 20180403-01_staticspawns.sql;
 SOURCE 20180403-02_spell_custom_override.sql;
 SOURCE 20180404-00_build_creature_spawns.sql;
 SOURCE 20180405-00_build_gameobject_spawns.sql;
 SOURCE 20180416-00_playercreateinfo.sql;
 SOURCE 20180417-00_playercreateinfo_misc.sql;
 SOURCE 20180418-00_playercreateinfo_introid.sql;
 SOURCE 20180418-01_playercreateinfo_faction.sql;
EXIT;
```

Now cd back to the server directory and try running the server again, and it should launch without any sql errors
This concludes the compile section of the Wiki. You should now have a fully functioning copy of AscEmu. Refer to the sections below for information on how to startup and perform basic administrative functions.

### Configuration Files

Use an editor of your choice, in this example it'll be **nano**. Make sure to read all files at least once, so you know what configuration is where and you don't end up with an administrator account with default password you didn't know about ;)

```console
cd ~/server/etc
  nano logon.conf
  nano world.conf
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

### Using Screen

You may also wish to preserve the AscEmu processes once you've logged out of SSH. To do this, you'll need to install Screen if it isn't installed already.

The syntax is relatively simple.

```console
screen ./world
```

This will run the 'world' program in a new session. To leave this screen and keep it running, press "CTRL + A and then D" to detach.

To return to the screen later on use

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
