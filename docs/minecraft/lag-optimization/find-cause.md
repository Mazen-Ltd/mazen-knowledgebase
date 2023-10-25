---
sidebar_position: 1
hide_title: true
title: Find the Cause of Lag
sidebar_label: Find the Cause of Lag
description: How to find the cause of lag on your Minecraft server
keywords:
  - Fix lag minecraft
  - Fix Server lag minecraft
  - Minecraft server lag
  - Minecraft lag
  - Minecraft server low TPS
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Find the Cause of Lag</h1>
</div>

Are you experiencing lag on your server? Then this article is the right place for you! Here, we will explore the tools you can use to diagnose the cause of lag on your Minecraft server and how to resolve it. Keep reading if you are interested in this topic.

---

## What is Lag?
Before we begin, we need to understand what exactly is lag. Lag is usually a delay on a Minecraft server, resulting in reduced speed and a slowdown in in-game actions. It manifests as delays in block interactions, movement, mob freezing, and other disruptions.

## What Can Cause Lag?
Lag often occurs when a server's performance cannot handle the load of players, plugins, mods, or the game world. It results from the server struggling to keep up with the default tick rate, which is the rate at which various processes within the server are updated.

---

## What is TPS?
TPS stands for Ticks Per Second, indicating how many ticks the server processes within 1 second. The default value is 20 TPS, meaning the server aims to update the game's logic 20 times per second.

In cases where the server's TPS is below 20, it indicates that the server is struggling to maintain the default update rate. For example, if the server is running at 15 TPS, it means that the server's logic and the game are updated 15 times per second, instead of the optimal 20 times. This, in turn, can lead to the issues mentioned in the previous section.

---

## Is It Hardware or Software?
The key question is whether the problem lies in the hardware or software that your server is using.

Let's start with hardware since we mentioned it first in the title of this topic. Undoubtedly, Minecraft versions 1.13 and beyond made managing and administering a Minecraft server relatively more challenging. This is primarily because Minecraft servers are much more resource-intensive than ever before. This increased intensity escalates with each new game version release. In rare cases, hardware can indeed be the problem behind server performance. However, this strongly depends on the type of processors used by the hosting company. Processors released in recent years are more than capable of supporting a Minecraft server without any issues, even on the latest versions.

The next possible cause of lag is the software your Minecraft server is using. These are the add-ons we can install on our server, namely plugins and mods.

It's worth noting that detecting lag caused by plugins is relatively easier compared to lag caused by mods. Therefore, this article will primarily focus on detecting lag caused by plugins. Fortunately, detecting lag caused by a plugin is relatively straightforward because we have a wide range of tools at our disposal.

Plugins often introduce lag because they may not be well-optimized or configured. In terms of optimization, the issue usually stems from the plugin developer, indicating that a particular logic is not written efficiently and could be optimized. It's best to report such issues back to the developer for resolution, which, in turn, improves the plugin for other servers that use it. When it comes to configuration, things are a bit different, as the error here may be caused by the Minecraft server administrator. Usually, some plugins have settings that can significantly impact server performance. Developers often annotate these settings in the plugin's configuration file or in the plugin's documentation.

:::info Information

> MazenHost strives to provide the best quality of the services it offers. For our Minecraft services, we use servers with Ryzen processors and the latest specifications that meet the needs of our clients.
>
> If you want to learn more about the features and specifications of our services, you can visit the articles: **[Technical Details - Minecraft](/docs/services-description/minecraft-service.md)** & **[Technical Details - VPS](/docs/services-description/vps-service.md)**
>
> — MazenHost

:::

---

## Lag Diagnostic Profilers
These are a set of tools that we can use to diagnose where lag may be coming from. They are specifically designed for servers that use software that supports plugins.

Keep in mind that these tools are more commonly known as profilers. When we use them, we run a profiler, which creates a profile with performance information about our server over a certain period. Based on the information collected by the profiler, we can identify the specific cause of lag.

### Timings (v1 & v2)
The first lag diagnostic tool we'll discuss is Timings. They are divided into two versions, where v1 is included in Spigot software, and v2 is included in Paper software and all of its forks.

The differences between the two versions are relative, but what you need to know is that v2 provides many more options for lag diagnostics. That's why we recommend using Paper or one of its forks, as they not only offer better performance but also better lag diagnostic tools.

:::caution Caution

PaperMC has announced that Timings v2 will soon be replaced by the Minecraft lag diagnostic plugin spark. If you want to learn more about this change, you can visit the proposal on GitHub: **[Replace Timings with Spark](https://github.com/PaperMC/Paper/issues/8948)**

:::

### spark
spark is a Minecraft plugin used for lag diagnostics. It offers the same, if not more powerful, lag detection features as Timings v2 but is also easier for beginners to use.