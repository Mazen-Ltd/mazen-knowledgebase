---
sidebar_position: 3
hide_title: true
title: Мигриране на свят от/към Vanilla
sidebar_label: Мигриране на свят от/към Vanilla
description: Как да мигрираме свят от/към Vanilla
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Мигриране на свят от/към Vanilla</h1>
</div>

За съжаление, светове генерирани на Vanilla не са съвместими със софтуери, като Spigot, Paper, Purpur и др., базирани на тях, както и обратното. Миграцията на свят от/към Vanilla е изключително лесна и не би трябвало да отнеме много време, особено ако света не е голям.

:::caution Внимание

Големината на света определя колко бързо ще се случи процесът на миграция.

:::

---

### ``DIM-1`` е папката на world_nether, т.е. на Недъра
### ``DIM1`` е папката на world_the_end, т.е. на Енда

---

## Мигриране на свят: Vanilla > Spigot

1. Отвори папката на ``/world``, която е Vanilla или са били генерирани на Vanilla сървър.
2. Премести/Копирай всичко **БЕЗ** ``DIM-1`` и ``DIM1`` в Spigot папката ``/world``.
3. Премести/Копирай ``DIM-1`` в Spigot папката ``/world_nether``.
4. Премести/Копирай ``DIM1`` в Spigot папката ``/world_the_end``.
5. Готово! Света ти успешно е мигриран към Spigot!

:::note Забележка

Можеш да мигрираш само един от тях, не е нужно да го правиш със всичките. 
Например, ако искаш да мигрираш само света Overworld, без Nether и End.

:::

---

## Мигриране на свят: Spigot > Vanilla

1. Отвори папката(ите) ``/world``; ``/world_nether`` и ``/world_the_end``, които са били на Spigot сървъра.
2. Премести/Копирай всичко от ``/world`` във Vanilla папката на света, която може също да се казва ``/world`` или да има друго наименование. **Ако софтуера, от който се мигрира е Paper, то не е нужно да се мести файлът ``paper-world.yml``.**
3. Премести/Копирай ``DIM-1`` от ``/world_nether`` във Vanilla папката на света.
4. Премести/Копирай ``DIM1`` от ``/world_the_end`` във Vanilla папката на света.
5. Готово! Света ти успешно е мигриран към Vanilla, точно както изглежда един чист свят генериран от самата игра.

---

## Препоръки


Най-добре е подобни операции да се извършват локално, тоест всичко да е на твоя компютър. Изключение може да се направи в случай, че света или световете са много голям/големи. Въпреки това, **препоръчителни са бакъпите при извършване на подобни операции, за да може да няма загуба на данни или объркване при грешка!**

:::caution Внимание

Винаги! Абсолютно винаги! Прави бакъпи на световете си преди да извършваш по-сложни операции на тях, било то подобна миграция или нещо различно, което би могло да доведе до загуба на данни.

:::