---
sidebar_position: 1
hide_title: true
title: Choosing a Version and Software
sidebar_label: Choosing a Version and Software
description: Differences between different versions and server software for Minecraft servers
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Choosing a Version and Software</h1>
</div>

---

## Which Version Is Right for Us?
Depending on the type of server you want to have, you'll need to choose a version for it.

**The following examples show the right version to use in various situations.**

**A) We want to play with the latest additions to the game!**
- We will use the latest version of Minecraft, which is currently 1.20.

**B) We want to play on an older version with the game's old PvP mechanics.**
- We will use an older version of Minecraft, such as 1.8.8 or even 1.7.

**C) We want to play the game with mods.**
- In this case, several versions can be chosen. For example, we will use version 1.12.2 because it has the most available mods. Of course, over time, many of these mods are updated for newer versions of the game, such as 1.18, 1.19, 1.20, and so on.

:::info Information

Not every software supports every version of the game; some of the newer ones only support the latest versions of Minecraft.

:::

---

## Which Software Is Right for Us?
There is a wide range of software available for Minecraft servers. They are mainly divided into 2 categories, but there are exceptions. These categories are **software that supports plugins** and **software that supports mods**. There are also **hybrid software** that support both plugins and mods installation. However, most of them are highly experimental and not recommended for use, especially by larger servers!

## Software that Supports Plugins

### Recommended Software
### [Paper](https://papermc.io/downloads/paper)
Paper is software based on Spigot that significantly improves performance and adds advanced API features. This software fixes bugs, exploits, and inconsistencies, adding more stability and consistency to your Minecraft server. Additionally, the added API methods allow plugin developers to create more powerful, fast, and efficient plugins.

### [Purpur](https://purpurmc.org/)
Purpur is a modification of Paper that includes various optimizations from other server software, one of which is Pufferfish. In addition to combining these optimizations, Purpur adds a multitude of new settings that allow customization of your Minecraft server. By default, all these settings are turned off, but they can be easily enabled and adjusted.

---

### Software Hierarchy

### [Bukkit](https://bukkit.org/)
Bukkit is a modification of Vanilla that adds new API methods, allowing the creation of plugins. Additionally, Bukkit adds more settings to your Minecraft server. However, the software was taken down several years after its creation due to copyright issues with some of its code. CraftBukkit is its continuation, aiming to preserve the API methods provided by Bukkit. **Using these software is not recommended as they are outdated!**

### [Spigot](https://www.spigotmc.org/)
Spigot, on the other hand, is a modification of Bukkit created in 2012, allowing the use of Bukkit plugins. **Again, using this software is not recommended as Paper provides a better foundation for Minecraft servers not only in terms of settings but also in performance.**

### [Pufferfish](https://pufferfish.host/downloads)
Pufferfish is a modification of Paper that adds a plethora of optimizations, especially beneficial for servers on newer Minecraft versions with a high number of players. **Using it is not always optimal, as the optimizations added by Pufferfish are included in Purpur, which also adds other features.**

---

## Software that Supports Mods

### [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)
Undoubtedly, the most popular platform for mods is Forge. The software allows the addition of mods to your server, enabling a vast array of modifications both to the game and the client (i.e., the version of the game on the player's computer).

### [Fabric](https://fabricmc.net/)
A new and innovative mod platform that offers greater efficiency. Because the platform is new, not every mod may be compatible with the software.

---

## Software that Supports Plugins + Mods

### [Sponge](https://spongepowered.org/)
Sponge is an innovative software that allows the use of plugins alongside mods. Additionally, the software adds numerous optimizations to the game, some of which come from Paper. Because it's new and innovative, only a small portion of plugins and mods may work with it.

### [Magma](https://magmafoundation.org/)
Magma is software that uses some of the optimization patches from Paper to improve server stability. It also supports both plugins and mods. However, it's highly experimental and may have compatibility issues between plugins and mods.

---

## Proxy Software
These are software that allow the connection of multiple Minecraft servers into one common network. This enables integration and the ability to move from one server to another via a command without having to remember the individual IP addresses of each server.

### [BungeeCord](https://github.com/SpigotMC/BungeeCord)
BungeeCord, the original software that provides the ability to connect multiple Minecraft servers together in a network.

### [Waterfall](https://papermc.io/software/waterfall)
Waterfall is based on BungeeCord but adds optimizations to the software, making transitioning from server to server in the network faster and more efficient. All plugins available for BungeeCord also work on Waterfall.

### [Velocity](https://papermc.io/software/velocity)
Velocity is the most innovative proxy software for Minecraft servers. It's designed for stability and performance. Additionally, it uses a more powerful API, allowing the development of more functional and advanced plugins for it. This makes most plugins for BungeeCord and Waterfall incompatible with Velocity.

---

## Software We DO NOT Recommend Using

:::danger Danger

These are software that we strongly recommend avoiding and not using whenever possible.

:::

- Software that is not actively maintained and supported!
- Paid software that guarantees **100% optimization, stability, and performance** of the server!