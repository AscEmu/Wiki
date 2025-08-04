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
* [](#)

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

























































































Note: This how-to is incomplete because of these murlocs, they turned everything upside down.
