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
* [Setup MySQL Environment](#setup-mysql-environment)
* [How to update MySQL](#how-to-update-mysql)

### macOS Guide

Please note: this guide is intended for the installation and configuration of macOS on systems with Intel processors.
{: .success }

### Xcode Setup

Xcode is available from the App Store for free. Run the following command from the terminal to install the required command line tools:

```console
xcode-select --install
```

### Homebrew Setup

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

![Homebrew_1.png](/Wiki/images/installation.mac/homebrew_1.png)

Press **RETURN/ENTER** to continue or any other key to abort.


### Dependencies Setup

```console
brew update
brew install mysql openssl cmake
brew config
```

### Setup MySQL Environment

The installation will take a while. After it's finished, you can start your MySQL server with the following command:

```console
brew services start mysql
```

To secure your MySQL with a root password, run the following:

```console
mysql_secure_installation
```

***MySQL*** can be further configured from Terminal. For instance, it allows you to manage users. To create a new database user from Terminal and grant all privileges on all databases, enter the following command, replace "username" with the user you want to create, and replace "password" with the user's password.

```console
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
```

You may also need to grant specific permissions. For instance, use the following command to explicitly grant the SELECT permission to the user.

```console
GRANT SELECT ON *.* TO 'username'@'localhost'
```

If you want to narrow down user access to a specific database, enter the following command and replace "database" with the name of your database.

```console
GRANT ALL PRIVILEGES ON database.* TO 'username'@'localhost';
```

To enable remote access to MySQL, we suggest creating a user with access from a specific IP address ('username'@'192.172.1.111') or from any host ('username'@'%').

### How to update MySQL

The easiest way to update your MySQL is to run ***brew upgrade mysql*** in Terminal.

Note that in this case, a manual update is far less convenient - it means that you will have to uninstall your current MySQL and then install a new version from scratch.
































































Note: This how-to is incomplete because of these murlocs, they turned everything upside down.
