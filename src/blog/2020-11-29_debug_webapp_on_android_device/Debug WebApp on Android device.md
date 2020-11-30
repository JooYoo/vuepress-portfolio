---
title: Debug WebApp on Android device
date: 2020/11/29
keyword: JavaScript
description: a skill mobile web dev must know
type: blog
# sidebar: auto
---

# Debug WebApp on Android device

2020.11.29

::: tip Contents
[[toc]]
:::

## Define the problem

A WebApp is developed at a local PC. How to debug the WebApp on the phone.

## Related project

[DailySpinner](/project/01.DailySpinner.md)

## Step 0: prepare devices

### PC

- Windows PC
- vs code
- vs code extention: Live Server

### Phone

- Android phone
- USB cable
- active **Developer Mode** on Android phone
- turn on **USB Debugging**

## Step 1: find IP address of the PC

- Get the computer IP address.

```bash
> ipconfig
```

- It seems something like this in Terminal `IPv4 Address. . . . . . : 192.168.x.x`

## Step 2: run the WebApp locally

- Start the WebApp locally via _VS Code Live Server_.
- Go ahead to the address based on _live Server_, e.g. `http://192.168.x.x:5500/`
- start _Chrome DevTool_, input the address `chrome://inspet`
