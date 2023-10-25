---
sidebar_position: 1
hide_title: true
title: Minecraft Dedicated Hosting
sidebar_label: Technical Delivery Details - Minecraft
description: Details about how our Minecraft hosting services are provided
keywords:
  - Premium Minecraft hosting
  - Minecraft hosting
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Minecraft Service Description</h1>
</div>

## Technical Delivery Details - Minecraft

### Overview 
> Order your Minecraft server from here: [Minecraft Hosting](https://mazenhost.com/hosting)

### Docker Containers
We utilize Docker containers to deploy our Minecraft services. This ensures isolation, security, and ease of management for each Minecraft server.

### Control Panel
Users are provided with a modified version of the Pterodactyl [control panel](https://panel.mazenhost.com). 
This enhanced panel is feature-rich, offering the following:

- **WebFTP & SFTP Access**: Although the integrated WebFTP has a 100MB file size limitation, users can always rely on SFTP for transferring larger files. Connection details for SFTP are readily available within the control panel. 

- **One-Click Installers**: Easily set up modpacks and different Minecraft versions with a single click.

- **Subdomain Manager**: Manage subdomains seamlessly without leaving the control panel.

- **Server Splitter**: For our 16GB and 32GB plans, users can split their servers up to 10 times.

- **Server Importer**: Transition from another hosting service or just moving files from another SFTP? Use our server importer to move your data with minimal effort.

- **Manual Backups**: Every plan comes with the capability to store up to 3 manual backups, ensuring data safety.

### Memory Allocation & SWAP
We have allocated additional SWAP memory for overhead, so the JVM (Simply put "The Java process running the server")
will operate freely and thus avoiding OOM / out of memory / Errors. Here's a breakdown of our memory allocation per plan:
:::info
- **32GB Plan**: 4GB SWAP
- **16GB Plan**: 3GB SWAP
- **10GB Plan**: 3GB SWAP
- **6GB RAM Plan**: 2GB SWAP
- **4GB RAM Plan**: 2GB SWAP
- **2GB RAM Plan**: 1GB SWAP
:::

### Backups and Redundancy
Our servers' disks are in RAID 1 or RAID 10, meaning that if a disk fails, no data will be lost as the data is copied in real-time to more than 1 disk.
We provide automatic backups for each service, which run once a day. They are stored on a separate server and kept for up to 2 days. Additionally, each plan comes with the ability to store up to 3 manual backups that you can control.

### CPU Allocation
:::note
Each server has access to a X amount of the CPU cores. Each core represent 100% CPU usage. So if you see 200% CPU usage, that means that the server is using 2 cores at 100% each. 
:::

<img src={('/img/cpu.png')} alt="banner" height="30%" width="30%" />

### Resource Distribution

We utilize different types of processors. Like
- Ryzen 7 5800X, Ryzen 9 5900X
- Xeon 2388G, Xeon 2386G

They all have the same Single-Core performance, thus, no matter what processor you get, you will get the same performance.
When an order is being fulfilled, automatic process triggers service creation on a node that has enough dedicated resources for the plan you choose.