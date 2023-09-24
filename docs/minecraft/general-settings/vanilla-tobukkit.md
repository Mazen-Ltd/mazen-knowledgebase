---
sidebar_position: 3
hide_title: true
title: Migrating Worlds to/from Vanilla
sidebar_label: Migrating Worlds to/from Vanilla
description: How to migrate a world to/from Vanilla in Minecraft
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Migrating Worlds to/from Vanilla</h1>
</div>

Unfortunately, worlds generated in Vanilla are not compatible with server software like Spigot, Paper, Purpur, and others based on them, and vice versa. Migrating a world to/from Vanilla is extremely easy and should not take much time, especially if the world is not large.

:::caution Caution

The size of the world determines how fast the migration process will occur.

:::

---

### ``DIM-1`` is the folder for `world_nether`, i.e., the Nether.
### ``DIM1`` is the folder for `world_the_end`, i.e., the End.

---

## Migrating a World: Vanilla to Spigot

1. Open the `/world` folder, which is Vanilla or has been generated on a Vanilla server.
2. Move/Copy everything **EXCEPT** `DIM-1` and `DIM1` to the Spigot `/world` folder.
3. Move/Copy `DIM-1` to the Spigot `/world_nether` folder.
4. Move/Copy `DIM1` to the Spigot `/world_the_end` folder.
5. Done! Your world has been successfully migrated to Spigot!

:::note Note

You can migrate only one of them; there's no need to do it for all. For example, if you want to migrate only the Overworld without the Nether and End.

:::

---

## Migrating a World: Spigot to Vanilla

1. Open the `/world`, `/world_nether`, and `/world_the_end` folders from Spigot.
2. Move/Copy everything from `/world` to the Vanilla world folder, which may also be named `/world` or have another name. **If you are migrating from a Paper server, there is no need to move the `paper-world.yml` file.**
3. Move/Copy `DIM-1` from `/world_nether` to the Vanilla world folder.
4. Move/Copy `DIM1` from `/world_the_end` to the Vanilla world folder.
5. Done! Your world has been successfully migrated to Vanilla, just like a clean world generated by the game itself.

---

## Recommendations

It's best to perform similar operations locally, meaning everything should be on your own computer. An exception can be made in cases where the world or worlds are very large. However, **backups are highly recommended when performing such operations to avoid data loss or mistakes!**

:::caution Caution

Always! Absolutely always! Make backups of your worlds before performing more complex operations on them, whether it's a migration like this or something else that could lead to data loss.

:::