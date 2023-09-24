---
sidebar_position: 6
hide_title: true
title: Test Everything
sidebar_label: Test Everything
description: Best practices and tricks for Minecraft server administration - Test Everything
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Test Everything (6/6)</h1>
</div>

It's great when we test new changes that we plan to add to our server. What's not great is when these changes cause errors or issues. That's why it's always good to follow a few principles, which you will learn from this article.

## The Server Matters
When we test something we plan to add or remove, it's best to do it on a separate Minecraft server. The concept goes like this.

### Public Minecraft Server (Production Server)
This is our main server where real, active players play. It is usually hosted on a machine specially configured for hosting public game servers, including Minecraft servers.

### Test Minecraft Server (Test Server)
This is the server where we should test everything we plan to add to the public server. It's usually a server on a separate machine, which is often our computer. We have easy access to the server, and we can quickly and easily change settings.