---
title: Debug localhost on mobile devices
date: 2020/12/22
keyword: debug
description: mobile web dev skill
type: blog
# sidebar: auto
---

<h1 align="center">Debug localhost on mobile devices</h1>
<div align="center">2020.12.22</div>

::: tip Contents
[[toc]]
:::

## 🎮 Usage

If we want to develop a _mobile version_ for a WebApp. It is always a challenge to debug the mobile version of the app. This post will explain when the WebApp is already running at the **localhost** in dev pc, how to debug the WebApp on mobile devices.

## 🎯 Goal

A WebApp is already running at the **localhost** in dev pc, how to debug the WebApp on mobile devices directly.

## 🛠 Dev Process

### Step 0. prepare devices

- PC: Chrome installed
- Mobile Device, Chrome installed
- USB cable

### Step 1. Inspect

1. Make sure the project is running locally. And check the **port number**. e.g. `http://localhost:5500/`
2. Connect phone (mobile device) to PC via USB cable. Start Chrome on the phone as well.
3. PC: input the address `chrome://inspect`. If the setup is correct, we should see the connected phone is listed under **Remote Target**. We also can see the _mobile-chrome_ opening tabs are listed below.

### Step 2. Setup Inspect

1. Click the button **Port forwarding...** . A popup **Port forwarding settings** will appear.
2. Port forwarding settings: add the localhost and port from _Step.1_ into the list. Active the Check-box at bottom **Enable port forwarding.** Then click the button **Done**.
3. Remote Target: enter the address into textbox `localhost:5500`. Then click the button _Open_. The Webapp should now run on Chrome of the mobile device.
