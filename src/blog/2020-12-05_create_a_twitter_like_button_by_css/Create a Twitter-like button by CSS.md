---
title: Create a Twitter-like button by CSS
date: 2020/12/05
keyword: CSS
description: A like-button with particle effect by CSS
type: blog
# sidebar: auto
---

<h1 align="center">Create a Twitter-like button by CSS</h1>
<div align="center">2020.12.05</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/reverent-surf-51t1r?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 4px; overflow:hidden; margin-top: 20px;"
     title="reverent-surf-51t1r"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## ⚡️ Inspiration

This trial is inspired by the like button from Twitter.

## 🎯 Goal

- Re-develop the like button from Twitter. Press on the heart icon, it will increase then decrease the size, at the same time generate the particle effect.
- Same result should also be implemented to customize text.

## 🔗 Related Project

- ⎋ [DailySpinner](/project/01.DailySpinner.md)
- After spin, the selected person will have a particle effect.

## 🧾 Related Theme

- CSS: variable
- CSS: animation
- JS: basic DOM manipulation

## 🌲 File Structure

```javascript
.
├── src/
│   ├── assets/
│   │   ├── FaveBtnName.png
│   │   └── chain-img.png
│   ├── index.js
│   └── styles.css
└── index.html
```
