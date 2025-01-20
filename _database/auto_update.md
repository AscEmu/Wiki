---
title: Automatic Database Updating
type: database
layout: single_markdown
position: 1
---

# Automatic Database Updating
Since the first database update files exists there was confusion how to properly use it. So why not simply use the latest version and the server will take for updates?

## Update setup
We made sure that everything was done automatically.

### Windows
After you have compiled AE build only the INSTALL project, and everything you need for auto db updates will be copied.

### *nix systems
After you have compiled AE with 'make' command build the INSTALL project with 'make install' command, and everything you need for auto db updates will be copied.

## Create base databases
You are tired of setting up the databases? No problem, AE will take care of it for you. If you have not applied the base databases AE will set it up for you. 
Just set the correct MySQL connection configuration and if there are no tables present AE will apply all base files and will update all pending update files for you.

NOTE: You will download and extract the world_base.sql into your sql/world/ dir. The latest full db can be downloaded here: [world db](https://github.com/AscEmu/OneDB)
