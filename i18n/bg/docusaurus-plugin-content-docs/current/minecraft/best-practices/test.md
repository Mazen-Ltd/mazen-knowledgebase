---
sidebar_position: 6
hide_title: true
title: Тествай всичко
sidebar_label: Тествай всичко
description: Добри практики и трикове при администрацията на Minecraft сървър - Тествай всичко
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Тествай всичко (6/6)</h1>
</div>

Чудесно е когато тестваме нови промени, които планираме да добавим към сървъра си. Това, което не е чудесно е когато
тези промени причиняват грешки или проблеми. Именно заради това винаги е добре да следваме няколко принципа, за които
ще научиш от тази статия.

## Сървъра има значение
Когато тестваме нещо, което планираме да добавим или премахнем е хубаво да го правим на отделен Minecraft сървър.
Концепцията е както следва.

### Публичен Minecraft сървър (Production Server)
Това е главния ни сървър, в който играят реални, активни играчи. Обикновенно се намира на машина, която е специално
пригодена за хостинг на публични гейм сървъри, вкл. Minecraft сървъри.

### Тестови Minecraft сървър (Test Server)
Това е сървъра, в който трябва да тестваме всичко, което планираме да добавим пък публичния сървър. Обикновенно е сървър
на отделна машина, която най-често е нашия компютър. Имаме лесен достъп до сървъра и можем да променяме настройки бързо
и лесно.