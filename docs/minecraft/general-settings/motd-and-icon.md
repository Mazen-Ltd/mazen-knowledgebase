---
sidebar_position: 2
hide_title: true
title: MOTD & Server Icon
sidebar_label: MOTD & Server Icon
description: How to change the MOTD on your Minecraft server & How to add a Server Icon to your Minecraft server
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>MOTD & Server Icon</h1>
</div>

---

## Message of the Day (MOTD)
"Message of the Day" refers to the two lines displayed to a player when they add a server to their server list in Minecraft. It can be changed in several ways, which we will explore.
<img src={('/img/hypixel.png')} alt="banner" height="70%" width="70%" />

### Changing via the `server.properties` File
The easiest way to change the MOTD is through the `server.properties` file. The option is located on line #12 and appears as follows: `motd=A Minecraft Server`

:::tip My Advice

Use the [Minecraft Server Tools](https://mctools.org/motd-creator) website to create MOTD more easily!

:::

### Changing via Plugins: ServerListPlus or MiniMOTD
Changing the MOTD through a plugin adds more functionality and easier editing.

[Learn how to change MOTD using ServerListPlus]

[Learn how to change MOTD using MiniMOTD]

---

## Server Icon (server-icon)
The server icon is an image displayed to a player when they add a server to their server list in Minecraft. It can be changed by adding a file to the server's main directory.

To set a server icon, you need to upload a file with the following characteristics to the server's main directory: image size 64x64 pixels, format `.png`, and the name `server-icon.png`.