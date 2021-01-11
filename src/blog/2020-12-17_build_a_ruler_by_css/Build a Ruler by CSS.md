---
title: Build a Ruler by CSS
date: 2020/12/17
keyword: CSS
description: how to create Ruler Hatch Marks by CSS
type: blog
---

<h1 align="center">Build a Ruler by CSS</h1>
<div align="center">2020.12.17</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/shy-breeze-b47g2?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="shy-breeze-b47g2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🎯 Goal

Create a Ruler with scales and text. The scales should include long-scales and short-scales .

## 🧾 Related Theme

- CSS: background
- CSS: linear-gradient

## 🌲 File Structure

```
.
├── src
│   ├── index.js
│   └── styles.css
└── index.html
```

## 🦶🏻 Steps

### Step 1. HTML

- We can structure the HTML as following.

```html
. └── main-container ├── ruler └── date-container ├── date date-begin └── date
date-end
```

```html
<div class="main-container">
  <div class="ruler"></div>
  <div class="date-container">
    <div class="date date-begin">
      Nov.10 <br />
      2020
    </div>
    <div class="date date-end">
      Dec.23 <br />
      2020
    </div>
  </div>
</div>
```

### Step 2. CSS: css starting schema

- Center child element by flexbox.
- Setup the default font, background: The font-size can be scaled by unit `vmin` based on the _short-side_ of the viewport (window).
- Define the height of Ruler by CSS-variable.

```css
* {
  box-sizing: border-box;
}

:root {
  --ruler-height: 90%;
}

html,
body {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  height: 100%;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.2vmin;

  background-color: rgba(55, 57, 61, 1);
}
```

### Step 3. CSS: main-container

- `: relative`: Create **Containing-Block** to restrict the position of child-elements which has `position: absolute`
- The body of the ruler.

```scss
.main-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90%;

  background-color: rgba(0, 0, 0, 0.2);
}
```

### Step 4. CSS: scales

- We can think of these scales as inside of a box. And the box is inside of the _ruler-body_. The following class will set up the size of the box.

```scss
.scales {
  position: relative;
  width: 15vmin;
  height: var(--scales-height);
}
```

- Take advantage of the property `background` without repeat, we can draw the **long-scales** repeatedly.
  - `linear-gradient`: the color of the scales
  - `background-size`: the spacing between each scales

```scss
.scales::before {
  content: '';

  position: absolute;
  left: 0;
  right: 7vmin;
  top: 0;
  bottom: 0;

  background: linear-gradient(to top, #5c5a5a 1px, transparent 2px);
  background-size: 1% 10%;
}
```

- We do the same as above, to draw the **short-scales** by repeatedly _background_. And turning the spacing between each scales by _background-size_ .

```scss
.scales::after {
  content: '';

  position: absolute;
  left: 0;
  right: 9vmin;
  top: 0;
  bottom: 0;

  background: linear-gradient(to top, #5c5a5a 1px, transparent 1px);
  background-size: 10% 2%;
}
```

### Step 5. CSS: text

- The text can be anything. In this case we are using dates.
  - positioning: This element is restricted inside of the **Containing-Block** `<.main-container>` , so that it won't overflow outside of the ruler.
  - size: we can calculate it by the _scales-height_

```scss
.date-container {
  position: absolute;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(var(--scales-height) - 2%);
}
```

- Set the text color.

```scss
.date {
  color: rgba(255, 255, 255, 0.2);
}
```
