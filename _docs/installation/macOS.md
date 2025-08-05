---
title: macOS Guide
type: installguide
category: 3
layout: single_markdown
---

### Requirements

* [Xcode Setup](#xcode-setup)
* [Homebrew Setup](#homebrew-setup)
* [Dependencies Setup](#dependencies-setup)
* [MySQL Environment Setup](#mysql-environment-setup)
* [How to update MySQL](#how-to-update-mysql)
* [Getting the Files](#getting-the-files)
* [Compiling](#compiling)

### macOS Guide

Please note: this guide is intended for the installation and configuration of macOS on systems with Intel processors.
{: .success }

### Xcode Setup

[Xcode](https://developer.apple.com/xcode/) is available from the App Store for free. Run the following command from the terminal to install the required command line tools:

```console
xcode-select --install
```

### Homebrew Setup

[Homebrew](https://brew.sh/) — The Package Manager for macOS.

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Dependencies Setup

```console
brew update
brew install mysql openssl cmake
brew config
```

### MySQL Environment Setup

1.The installation will take a while. After it's finished, you can start your MySQL server with the following command:

```console
brew services start mysql
```

2.The next step is to run the following command to secure the MySQL server. Securing the server is hugely important as it will help prevent unauthorized access.

```console
mysql_secure_installation
```

This command will trigger a series of prompts that you will need to read carefully. Most of the prompts are straightforward, such as allowing password verification, setting a root password, disallowing remote root access, removing the anonymous user, and more.

3.To access your MySQL server, enter the following command in the terminal. You will need to ensure that the server is running.

```console
mysql -u root -p
```

You will need to enter your password after entering the command above. It is the same password that you set in step 2.

You can issue MySQL commands once you are in the MySQL prompt (***mysql>***). If you want to return to ***bash*** simply enter ***exit*** or ***\q***.

### How to update MySQL

The easiest way to update your MySQL is to run ***brew upgrade mysql*** in Terminal.

Note that in this case, a manual update is far less convenient - it means that you will have to uninstall your current MySQL and then install a new version from scratch.

### Getting the Files

Next, we need to download the AscEmu source files to compile them. Let’s make sure we are in the home directory:

```console
cd ~
```

We will create an ***Server***, and ***AscEmu*** directory so that we can keep all of our files straight.

```console
sudo mkdir Development
```

```console
sudo mkdir Development/Server
```

As you may have guessed, the AscEmu directory will contain AscEmu source files, and the Server directory will contain the actual compiled files (like the libraries and binaries) to run the Server.<br />
The next step is to download the source files, so we will change to our Development/AscEmu directory and use git to get the files.

```console
cd ~/Development
```
With the --branch required_branch, you can select a branch (master / develop).
{: .info }

```console
git clone https://github.com/AscEmu/AscEmu.git --branch master
```

### Compiling

Once we have the source files we can start compiling AscEmu. The first step is to create a configuration file that will be used to pass the variables to the make file so that AscEmu will compile properly.

```console
mkdir ~/Development/AscEmu_build
```

```console
cd ~/Development/AscEmu_build
```

gcc

```console
cmake -DCMAKE_INSTALL_PREFIX=~/Development/Server -DCMAKE_BUILD_TYPE=Release -DBUILD_WITH_WARNINGS=0 -DBUILD_TOOLS=0 -DASCEMU_VERSION=WotLK ~/Development/AscEmu
```

clang

```console
cmake -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_INSTALL_PREFIX=~/Development/Server -DCMAKE_BUILD_TYPE=Release -DBUILD_WITH_WARNINGS=0 -DBUILD_TOOLS=0 -DASCEMU_VERSION=WotLK ~/Development/AscEmu
```

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

If you have a multicore machine, then you can substitute that final command with this one, where x is equal to the number of cores + 1. For example, with 2 cores x would be 3.
If you want to use all your cores just use a large number like 32.
{: .info }

```console
make -j x && make install
```



































Note: This how-to is incomplete because of these murlocs, they turned everything upside down.
