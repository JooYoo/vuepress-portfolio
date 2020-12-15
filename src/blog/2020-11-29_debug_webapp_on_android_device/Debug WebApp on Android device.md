---
title: Debug WebApp on Android device
date: 2020/11/29
keyword: dev
description: a skill mobile web dev must know
type: blog
# sidebar: auto
---

<h1 align="center">Debug WebApp on Android device</h1>
<div align="center">2020.11.29</div>

::: tip Contents
[[toc]]
:::

## 🔗 Related Project

⎋ [DailySpinner](/project/01.DailySpinner.md)

## 🎯 Goal

A WebApp is developed at a local PC. How to debug the WebApp on the phone?

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

- Get the computer IP address: `> ipconfig`
- It seems something like this in Terminal `IPv4 Address. . . . . . : 192.168.x.x`

## Step 2: run the WebApp locally

- Start the WebApp locally via _VS Code Live Server_.
- Go ahead to the address based on _live Server_, e.g. `http://192.168.x.x:5500/`
- start _Chrome DevTool_, input the address `chrome://inspet`

## Step 3: run the WebApp from local to the phone

- Phone: connect to PC
- Phone: start Chrome
- PC: find the _input-box_ `Open tab with url` inside of _DevTool_ page, then input the same IP Address as above `http://192.168.x.x:5500/`, then click _open_
- The WebApp should open on the Phone and an extra browser window should be opened on the PC at the same time.

## Step 4: debugging on the Phone

- PC: under the _input-box_, in the _tab-list_ find the WebApp
- PC: click `inspect`. A new window should be opened, and the same WebApp instance should run both on PC and Phone.
- The debugging tool in Chrome can be used to debug the WebApp instance on the phone.
