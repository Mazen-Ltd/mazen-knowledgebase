---
sidebar_position: 4
hide_title: true
title: Solve Problems Quickly
sidebar_label: Solve Problems Quickly
description: Best practices and tricks for Minecraft server administration - Solve Problems Quickly
---

<img src={('/img/banner.png')} alt="banner" height="100%" width="100%" />

<div class="text--center">
<h1>Solve Problems Quickly (4/6)</h1>
</div>

Quite often, in the administration and management of a Minecraft server, we encounter problems. Well, it's a fact that they are
inevitable. That's why we need to know how to make quick decisions and solve our problems effectively.

As unpleasant as it may sound, sooner or later, we will face a problem that we will need to find a solution for in a short period of time.

> Being a quick-problem solver is a skill that takes a lot of practice and dealing with lots of problems.

## How do we find a solution to a problem?
> Before we even ask someone for help, its a MUST that we have to do our own research. We have to try to find a solution to the problem ourselves. If we can't find a solution, then we can ask for help.
- If we skip this step, we will not learn anything and we will not be able to solve the problem ourselves in the future.
- Its not even about the problem, but the skill of SOLVING problems, doing research and trying solutions. 
- Yes, research is boring, but it brings you one step further to being a better server owner.

### Here is a helpful matrix: 

| Problem                 | Tips and tricks. Guide to solution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Console Errors**      | As obvious as it sounds, you have to read them. When you are not a developer it may seem a <br/>little bit difficult at first glance, but usually good developers leave descriptive messages into the errors.<br/> *Basically we log and show errors, so we can find what went wrong!*<br/> Quick guide: <br/> - Find the cause. Is it a plugin error? (Usually you will find the package/the name of the plugin <br/>somewhere in the error) or is it something from the server itself? <br/> - If its from the plugin -> Read the error more carefully, it might be a misconfiguration, test different stuff <br/>(try removing the plugin to test the error disappears), if it does not work out, ask the plugin's Developer <br/>or someone for help. <br/> - If you think the error is server/platform related, things could get more complicated, here its even more<br/> important to get all the info from the error, and again test it yourself, research and if it does not work<br/> ask for help. |
| **Server not starting** | Read the console log and think about what it says, track where the server stops / at what line the <br/>shutdown process begins/. Read the errors if there are any and try to understand them!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ** Lag **               | Only one reason! Bad setup. Yes, bad setup means that the overall server setup has not been calculated, predicted & configured <br/>everything right. This includes:  Not enough resources (RAM/CPU) for the specific server topic, <br/>depending on the server activity & setup, there are different requirements. Or just some bad plugin/world<br/> or settings configured wrongly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **There is no magic**   | Something was working perfectly and out of nowhere it just brakes? How is that even possible? <br/>Well, it is, and its not magic. <br/>And it happens quite often even to the best problem solvers, sysadmins, developers & etc. Its just software. <br/>Most of the times, something lead to the problem, and <br/>we have to find what it is. It could be a plugin update, a server update, a configuration change, a new plugin,<br/> a new world, a new feature, a new anything. We have to find what it is and try to revert it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Bot attacks**         | This would require a quite comprehensive answer and a lot of background knowledge.<br/> It may be the best to consult with Mazen's team so we can help you out, quickly. <br/>- TLDR; Bot attacks are fake players that try to overload your server by doing many connections <br/>per second. For protection you will have to use combined solutions like plugins/proxy setup and firewalls/ddos protection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
                                   