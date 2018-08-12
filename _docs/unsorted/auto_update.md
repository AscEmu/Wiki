---
title: Auto Database
type: unsorted
layout: single_markdown
position: 7
---

# Auto Database Update
Since the first database update files exists there was confusion how to properly use it. So why not simply use the latest version and the server will take for updates?

## Update setup
First of all, enable the option WITH_EXPERIMENTAL_FILESYSTEM during the cmake setup and compile the server.

### Windows
After you have compiled AE build only the INSTALL project, and everything you need for auto db updates will be copied.

### *nix systems
Copy the entire sql folder from the fork from github to the dir where you AE running.

## Create base databases
You are tired of setting up the databases? No problem, AE will take care of it for you. If you have not applied the base databases AE will set it up for you. Just set the correct MySQL connection configuration and if there are no tables present AE will apply all base files and will update all pending update files for you.

NOTE: You will download and extract the world_base.sql into your sql/world/ dir. The latest full db can be downloaded here: [world db](https://github.com/AscEmu/OneDB)