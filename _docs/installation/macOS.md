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

[Homebrew](https://brew.sh/) — The Missing Package Manager for macOS.

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Dependencies Setup

```console
brew update
brew install mysql openssl cmake
brew config
```

### Setup MySQL Environment

1.The installation will take a while. After it's finished, you can start your MySQL server with the following command:

```console
brew services start mysql
```

2.The next step is to run the following command to secure the MYSQL server. Securing the server is hugely important as it will help prevent unauthorized access.

```console
mysql_secure_installation
```

This command will trigger a series of prompts that you will need to read carefully. Most of the prompts are straightforward, such as allowing password verification, setting a root password, disallowing remote root access, removing the anonymous user, and more.

3.To access your MYSQL server, enter the following command in the terminal. You will need to ensure that the server is running.

```console
mysql -u root -p
```

You will need to enter your password after entering the command above. It is the same password that you set in step 2.

You can issue MYSQL commands once you are in the MYSQL prompt (***mysql>***). If you want to return to ***bash*** simply enter ***exit*** or ***\q***.

### How to update MySQL

The easiest way to update your MySQL is to run ***brew upgrade mysql*** in Terminal.

Note that in this case, a manual update is far less convenient - it means that you will have to uninstall your current MySQL and then install a new version from scratch.
































































Note: This how-to is incomplete because of these murlocs, they turned everything upside down.
