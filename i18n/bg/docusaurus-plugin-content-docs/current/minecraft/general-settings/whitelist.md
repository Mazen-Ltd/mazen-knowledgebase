---
sidebar_position: 4
hide_title: true
title: Как да сложим Whitelist
sidebar_label: Как да сложим Whitelist
description: Как да сложим Whitelist на нашия Minecraft сървър
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Как да сложим Whitelist</h1>
</div>

Белият Списък е полезна функция, която Minecraft предоставя за ограничаване на достъпа до сървър.

---

## Whitelist Команди
- ``/whitelist on`` - включва белият списък
- ``/whitelist off`` - изключва белият списък
- ``/whitelist add [името на играч]`` - добавя играч към белият списък
- ``/whitelist remove [името на играч]`` - премахва играч от белият списък
- ``/whitelist list`` - показва имената на играчи, които са добавени към белият списък
- ``/whitelist reload`` - ако файлът на белият списък е променен ръчно, то командата презарежда списъка, за да отчете промените

---

## Whitelist Файл
Файлът на белият списък, т.е. ``whitelist.json`` съдържа имената на играчите добавени към списъка. Той е в формат ``.json``, което прави редактирането му трудно без познаване на особеностите на формата.
Сайтът [Minecraft Server Tools](https://mctools.org/whitelist-creator) има опцията да генерира текст, който да бъде поставен в файла на белият списък.

### [Видео наръчник на тема Как да добавим Whitelist (бял списък) в нашият сървър](https://www.youtube.com/watch?v=P5vmTt7YyvI)
Във видеото направено от нас, покриваме темата относно добавянето на Whitelist в Minecraft сървър.

:::danger Опасност

Не подкрепяме пиратството! Сървъри с опцията ``online-mode=false`` не работят правилно с функциите на Whitelist!

:::