---
sidebar_position: 4
hide_title: true
title: How to Set Up a Whitelist
sidebar_label: How to Set Up a Whitelist
description: How to set up a Whitelist on your Minecraft server
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>How to Set Up a Whitelist</h1>
</div>

The Whitelist is a useful feature that Minecraft provides to restrict access to a server.

---

## Whitelist Commands
- ``/whitelist on`` - enables the whitelist
- ``/whitelist off`` - disables the whitelist
- ``/whitelist add [player name]`` - adds a player to the whitelist
- ``/whitelist remove [player name]`` - removes a player from the whitelist
- ``/whitelist list`` - shows the names of players added to the whitelist
- ``/whitelist reload`` - if the whitelist file has been manually changed, this command reloads the list to reflect the changes

---

## Whitelist File
The whitelist file, i.e., ``whitelist.json``, contains the names of players added to the list. It is in JSON format, making it challenging to edit without knowledge of the format's specifics.
The [Minecraft Server Tools](https://mctools.org/whitelist-creator) website has an option to generate text to be placed in the whitelist file.

### [Video Tutorial on How to Add a Whitelist to Your Server](https://www.youtube.com/watch?v=P5vmTt7YyvI)
In our video, we cover the topic of adding a whitelist to a Minecraft server.

:::danger Caution

We do not support piracy! Servers with the ``online-mode=false`` option do not work correctly with Whitelist features!

:::