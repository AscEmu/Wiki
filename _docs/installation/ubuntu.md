---
title: Ubuntu Guide
type: installguide
layout: single_markdown
position: 2
---

# Ubuntu Guide
### Basic Linux Setup

Please note: this guide has been written with the objective of setting up a Linux server running a generic kernel/OS, like Ubuntu. This help file has been written with strict use of the console in mind.  Linux was made to run command line, so there isn't an easier, quicker way to do things than the way we are about to do them. Please note, as I write this guide for Ubuntu that Aptitude is the default package manager, other operating systems may have a different package manager.

The only part of an ubuntu desktop system GUI we can use is the subversion downloader(Speaking about RabbitVCS which you should have found on a page before this), everything else must be done via the command line or script.

Of course Ubuntu is not the only Linux distribution available.
For example if you have CentOS you should follow our CentOS guide: [Compiling:CentOS](http://www.ascemu.org/wiki/index.php?title=Compiling:CentOS&action=edit&redlink=1 "Compiling:CentOS (page does not exist)")

#### Initial Setup

First, having presumably installed a fresh copy of Linux, we need to update our server so that we can compile AscEmu. This will require several different packages. For the following commands, log in as the Linux root administrator.

```console
sudo apt-get install g++ git-core git cmake build-essential zlib1g-dev libssl-dev libpcre3-dev
```

Install bzip2

```console
cd ..
wget bzip.org/1.0.3/bzip2-1.0.3.tar.gz
tar zxvf bzip2-1.0.3.tar.gz
cd bzip2-1.0.3
make install
```

#### MySQL Setup

First we need to install MySQL into Linux as well as make sure that we have the correct libraries to properly operate it.

```console
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

In order to make your MySQL server available to other computers aside from your host (this is generally a good idea). Open up the mysql configuration with your favourite text editor.

```console
sudo vi /etc/mysql/my.cnf
```

And comment out the following line (by adding the #):

```console
\#bind-address = 127.0.0.1
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

Substitute _hostname_ for the hostname you chose when installing linux. That's it! Setting up MySQL is pretty straight forward.

#### Security and Accounts

Once that is complete, we have the right environment in Linux to compile the server.  Before we can compile though we need to address some very serious security issues.  Whatever distro you are using, whether your server is private or public, please do NOT run your AscEmu server using your root account--you might as well just castrate yourself.

Having said that, lets move on to create a basic account in linux from which you will run AscEmu. You can name this account anything you would like, but for the sake of standardization, we will name ours ascemu.  While still in your root account type:

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

### Server Compilation

#### Getting the Files

First, switch to the ascemu account, or whichever account you have just created.

```console
sudo su - ascemu
```

Next, we need to download the ascemu files to compile them.  Lets make sure we are in the home directory:

```console
cd ~
```

I am a fan of organization, so lets make some directories and organize this mess.  We will create an installer, server, and arcmenu directory so that we can keep all of our files straight.  The installer directory may seem like a waste for now, but it will come into play later when we install the database.

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

```console
git clone git://github.com/AscEmu/AscEmu.git code
```

Switch to the code directory and update our gitmodules

```console
cd ~/installer/ascemu/code
```

```console
sed -i 's/git@github.com:/https:\/\/github.com\//' .gitmodules
```

```console
git submodule update --init --recursive
```

#### Compiling

##### Start Compiling

Once we have the files we can start compiling AscEmu. The first step is to create the configuration file that will be used to pass the variables to the make file so that AscEmu will compile properly.

```console
mkdir ~/installer/ascemu/build
```

```console
cd ~/installer/ascemu/build
```

```console
cmake -DCMAKE_INSTALL_PREFIX=~/server ../code
```

This will configure AscEmu to be built using the default configuration, which is fine for most people, however if you'd like to customize it more take a look at [CMake](http://www.ascemu.org/wiki/index.php?title=CMake&action=edit&redlink=1 "CMake (page does not exist)")
{: .info }

Then we now simply invoke make and make install to install to the prefix directory

```console
make && make install
```

Also, if you have a multicore machine, then you can substitute that final command with this one, where x is equal to the number of processors + 1.  For example, with 2 processors x would be 3.

If you want to use all your processors just use a large number like 15.

```console
make -j x && make install
```

<big> _**This will not effect your server, this will only tell "make" to compile using all of your available CPU power**_</big>

If this last step is successful then you are ready to configure your server and get on your way.

### Wrap-up

#### DBC and map files

Next you will transfer the DBC and map files over to your server.

DBC Extraction is now on its OWN page. Please come back to THIS page when you are done extracting DBCs!
{: .info }

To extract DBCs, follow the guide on the page below.

[Compiling:_DBC_Extraction](http://www.ascemu.org/wiki/index.php?title=Compiling:_DBC_Extraction&action=edit&redlink=1 "Compiling: DBC Extraction (page does not exist)")

Use Wine if you must but preferably a windows machine to extract the DBCs, maps.

```console
mkdir ~/server/dbc
```

```console
mkdir ~/server/maps
```

Place the DBC and map files in their respective directories above.

#### Config Files

All that is left to do is create the /etc/ directory and move the configuration files into it, and make the AscEmu binaries executable.

```console
cd ~/server
 $ mkdir etc
 $ mv ~/installer/ascemu/code/configs/*.conf ~/server/etc
 $ cd ~/server
 $ chmod a+x logonserver
 $ chmod a+x world
```

Now your configuration files are in the .../etc folder ready to be edited, and used by the AscEmu server and your AscEmu binaries are executable.

#### MySQL Setup

The first step in setting up the database will be setting up a mysql user and databases to interact with AscEmu.  Please change the respective usernames and passwords to your own unique variants!  Note, when it asks for your password, please enter your root mysql password.

```console
 $ mysql -u root -p
 CREATE USER 'username'@'%' IDENTIFIED BY 'password';
 GRANT USAGE ON \* . \* TO 'username'@'%' IDENTIFIED BY 'password' 
 WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;
 CREATE DATABASE `ascemu-world` ;
 GRANT ALL PRIVILEGES ON `ascemu-world` . \* TO 'username'@'%';
 CREATE DATABASE `ascemu-acct` ;
 GRANT ALL PRIVILEGES ON `ascemu-acct` . \* TO 'username'@'%';
 exit
```

After we have setup the database, its time to start downloading the files.

#### Get a world database

The following section is a work in progress and is incomplete
{: .info }

You must first download a copy of the database: [Link to Download](http://www.board.ascemu.org/filebase/index.php/File/3-AscEmu-full-world-3-3-5/).

Once you have done that, open a terminal, switch to the directory the zip file is in and extract it.

Log in to your MySQL server by running the command

```console
mysql -u your_mysql_username -p
```

Once you have done that, create the world database, switch to it and execute the SQL dump file by running the following commands (note that it is important to include the semicolon at the end of the queries)

```console
CREATE DATABASE ascemu_world;
USE ascemu_world;
SOURCE 2015-03-14_ascemu_world.SQL;
```

It should only take a few seconds to finish executing on a modern machine. Now, we want to switch to the server source folder so that we can apply the character and logon databases. For this, run the following commands:

```console
cd ~/installer/ascemu/code/sql
mysql -u your_mysql_username -p
```

```console
CREATE DATABASE ascemu_logon;
USE  ascemu_logon;
SOURCE logon_structure.SQL;
CREATE DATABASE ascemu_characters;
USE ascemu_characters;
SOURCE character_structure.SQL;
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
'Database: Last world database update doesnt match the required one which is 2015-03-31_01_misc_gossip_texts.

Database: You need to apply the world update queries that are newer than 2015-01-21_01_npc_script_text. Exiting.


Database: You can find the world update queries in the sql/world_updates sub-directory of your AscEmu source directory.'
```

In this case, the last applied update is _2015-01-21_01_npc_script_text_. This means that we need to apply anything newer than that. For this, cd back to the sql directory:

```console
cd ~/installer/ascemu/code/sql/world_updates
ls
```

Which produces an output similar to

```console
2015-03-14_01_gossip_menu_option.sql   2015-03-25_01_event_seasons_spawns.sql
2015-03-15_01_gossip_menu_option.sql   2015-03-25_02_creature_spawns.sql
2015-03-15_02_npc_script_text.sql      2015-03-25_03_misc_quest.sql
2015-03-19_01_creature_names.sql       2015-03-26_01_gameobject_spawns.sql
2015-03-21_01_quest_misc.sql           2015-03-26_02_npc_monstersay.sql
2015-03-22_01_quest_misc.sql           2015-03-26_03_npc_gameobject_alterac.sql
2015-03-22_02_creature_waypoints.sql   2015-03-29_01_areatriggers.sql
2015-03-22_03_spell_area.sql           2015-03-31_01_misc_gossip_texts.sql
2015-03-24_01_player_xp_for_level.sql  2015-03-31_02_gameobject_spawns.sql
```

Drop back into MySQL and run the following queries:

```console
USE ascemu_world;
SOURCE 2015-03-14_01_gossip_menu_option.SQL;
SOURCE 2015-03-15_01_gossip_menu_option.SQL;
SOURCE 2015-03-15_02_npc_script_text.SQL;
SOURCE 2015-03-19_01_creature_names.SQL;
SOURCE 2015-03-21_01_quest_misc.SQL;
SOURCE 2015-03-22_01_quest_misc.SQL;
SOURCE 2015-03-22_02_creature_waypoints.SQL;
SOURCE 2015-03-22_03_spell_area.SQL;
SOURCE 2015-03-24_01_player_xp_for_level.SQL;
SOURCE 2015-03-25_01_event_seasons_spawns.SQL;
SOURCE 2015-03-25_02_creature_spawns.SQL;
SOURCE 2015-03-25_03_misc_quest.SQL;
SOURCE 2015-03-26_01_gameobject_spawns.SQL;
SOURCE 2015-03-26_02_npc_monstersay.SQL;
SOURCE 2015-03-26_03_npc_gameobject_alterac.SQL;
SOURCE 2015-03-29_01_areatriggers.SQL;
SOURCE 2015-03-31_01_misc_gossip_texts.SQL;
SOURCE 2015-03-31_02_gameobject_spawns.SQL;
EXIT;
```

Now cd back to the server directory and try running the server again, and it should launch without any sql errors
This concludes the compile section of the Wiki. You should now have a fully functioning copy of AscEmu. Refer to the sections below for information on how to startup and perform basic administrative functions.

# Configuration Files

Use an editor of your choice, in this example it'll be **nano**. Make sure to read all files at least once, so you know what configuration is where and you don't end up with an administrator account with default password you didn't know about ;)

```console
cd ~/server/etc
  nano logon.conf
  nano world.conf
```

The configuration is documented in [Server Configuration](http://www.ascemu.org/wiki/index.php?title=Server_Configuration&action=edit&redlink=1 "Server Configuration (page does not exist)"), but the configuration files are richly documented, too. You should be fine :)

# Starting the Server

### Using Screen

~ This article has been consolidated here [Screen](http://www.ascemu.org/wiki/index.php?title=Screen&action=edit&redlink=1 "Screen (page does not exist)")

Please return to this page for the next step in the process after reading about Screen and how to use it to launch AscEmu.

## **Done**

You're now ready to move on to [Server configuration](http://www.ascemu.org/wiki/index.php?title=Server_configuration&action=edit&redlink=1 "Server configuration (page does not exist)")

# Create an Account

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


**For further information about access levels, have a look to this page [GM_Access_Levels](/Wiki/docs/commands/access_levels/ "GM Access Levels")**