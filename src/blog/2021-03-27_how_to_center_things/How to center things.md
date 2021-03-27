---
title: How to center things
date: 2021/03/27
keyword: CSS
type: blog
---

<h1 align="center">How to center things</h1>
<div align="center">2021.03.27</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/center-element-xhcvb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="center-element"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 📚 Knowledge

- CSS: position
- CSS: Flexbox

## 🎯 Goal

There are three solutions to center element by CSS.

1. flexbox
2. position relative
3. position absolute

In this post I will show all the three solutions. At first, let's get css ready.

## 🦶🏻 Steps

### 0. get CSS ready

```css
* {
  box-sizing: border-box;
}

:root {
  --box-s: 5vmin;
  --box-m: 15vmin;
  --box-l: 25vmin;
}

html,
body {
  margin: 0;
  background-color: black;
  height: 100%;
}
```

- `box-sizing`: limits the size change of BoxModel inside of Border
- `:root`: define the sizes of three boxes for three center-solutions
- `margin` : remove the default margin of DOM
- `height`: the default height of the body is 0. Set it to 100%, so that the element can be centered in vertical

### 1. center by Flexbox

```html
<div class="container">
  <div class="round box--s"></div>
</div>
```

```scss
.container {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  z-index: 2;
}

.box--s {
  height: var(--box-s);
  width: var(--box-s);
  background-color: darkred;
}
```

- precondition:
  1. `<body>` height 100%
  2. `<container>` height 100%
- `.html`: we need a container to center the element
- **Flexbox**: there are three things we need to do for using Flexbox
  1. `display: flex`: start the Flexbox solution
  2. `justify-content: center`: center the element horizontally
  3. `align-items: center`: center the element vertically
- `width, height`: set both to 100%, so that the element can be centered based on the entire viewport
- The rest properties are for stacking the three boxes (solutions).

### 2. center by position-relative

```html
<div class="box--m"></div>
```

```scss
.box--m {
  position: relative;
  margin: auto;
  top: 50%;
  transform: translate(0, -50%);

  z-index: 1;

  height: var(--box-m);
  width: var(--box-m);
  background-color: darkblue;
}
```

- precondition:
  1. `<body>` should have 100% hight;
  2. set itself `position: relative`
- `margin: auto`: center the element horizontally
- `top`: push the element to center, include the size of the box itself
- `tranform`: subtract the distance of the box size
- The rest properties are for stacking the three boxes (solutions).

### 3. center by position-absolute

```html
<div class="box--l"></div>
```

```scss
.box--l {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: var(--box-l);
  width: var(--box-l);
  background-color: darkgray;
}
```

- no preconditions required
- `position: absolute`: lift up the element out of the DocumentFlow
- `top, left`: push the element to center, inculde the size of the box itseft
- `tranform`: substract the box size to center the element
