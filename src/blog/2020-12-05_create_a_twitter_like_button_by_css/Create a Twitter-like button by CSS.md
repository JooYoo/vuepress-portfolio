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

<iframe src="https://codesandbox.io/embed/reverent-surf-51t1r?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
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

## 🛠 Dev Process

### CSS Twitter like-button <Badge text="goal 1" type="warning"/>

#### Step 0. prepare Assets

Use a design tool like Sketch to draw the heart-clicked process. In my trail I got this image online, it's a `.png` file with a transparent background, and 29 frames in total. We call it _heart-clicked.png_ in this article.

![heart-clicked](./heart-clicked.png)

#### Step 1. HTML

We need only one `<div>` which with `class="heart"` for CSS styling and `id="heart"` for JS.

```html
<div id="heart" class="heart"></div>
```

#### Step 2. CSS

1. create variables by css-variable

   - `:root`: define those variables globally
   - `--xx-x-x`: the standard syntax for defining css variable

   ```css
   :root {
     --chain-img-hear: url(../src/assets/chain-img.png);
     --chain-img-size: 100px;
     --chain-img-frame: 28;
   }
   ```

2. center the element

   - `flex`: center element by flex-box
   - `height`: a part of the center strategy

   ```css
   html,
   body {
     display: flex;
     justify-content: center;
     align-items: center;

     height: 100vh;
   }
   ```

3. set the size of the component

   - `var(xxx)`: the standard syntax for implement css veriable
   - The size is **100px x 100px**, because each frame of the _heart-clicked.png_ is **100px x 100px**.

   ```css
   .heart {
     width: var(--chain-img-size);
     height: var(--chain-img-size);
   }
   ```

4. prepare the animation of the element

   - `transition`: define the transition animation. In this trail the animation effect will be implemented by _css-transition_ , _css-animation_ will also achieve the same result.
     - transition-property: `background-position-x`. Which property will be animated
     - transition-duration: `1s`
     - transition-timing-function: `steps`. 28 steps in total. Because the _heart-click.png_ has 29 frames, and the first frame should be already shown.
   - `background-position-x`: when this class is added to DOM-element, the _heart-click.png_ will be pulled to left, in 28 steps, and stop at the last frame of this 'long-image'.

   ```css
   .heart-click {
     transition: background-position-x 1s steps(var(--chain-img-frame));
     background-position-x: calc(
       var(--chain-img-size) * var(--chain-img-frame) * -1
     );
   }
   ```

#### Step3. JavaScript

1. get the heart-element

   ```javascript
   let heartEl = document.getElementById('heart');
   ```

2. active and deactivate the like effect

   - `setFaveBtnClick()`: toggle the animation-css-class via a boolean by add and remove the css-class
   - `element.classList.add(...)`: add the css-class to the element
   - `element.classList.remove(...)`: remove the css-class from the element

   ```javascript
   let heartEl = document.getElementById('heart');
   let isFaveHeart = false;

   heartEl.addEventListener('click', () => {
     isFaveHeart = setFaveBtnClick(heartEl, 'heart-click', isFaveHeart);
   });

   function setFaveBtnClick(faveBtnEl, faveBtnClassName, isLike) {
     !isLike
       ? faveBtnEl.classList.add(faveBtnClassName)
       : faveBtnEl.classList.remove(faveBtnClassName);

     isLike = !isLike;

     return isLike;
   }
   ```

So far we have achieved the first goal, redevelop Tweeter-like-button.

The key point of this widget to develop is, that prepares a long image with 29 frames, all of the elements ( the _heart_ and the _particle effect_ ) are "pre-paint" in this image.

Then take advantage of the CSS transition-timing-function `steps` to "drag" the image to left, so that each frame will display one by one.

I also tried to make the _twitter-like-effect_ to text, instead of the heart.

### twitter-like-effect text <Badge text="goal 2" type="warning"/>

#### Step 0. prepare Assets

Use a design tool like Sketch to draw only the particles with 29 frames in total.

![twitter-like-particle](./twitter-like-particle.png)

#### Step 1. HTML

- Same like the last example. We need only one `<div>`

```html
<div id="name" class="name">ZhuYu</div>
```

#### Step 2. CSS

1. We use _flex-box_ to display the two widgets in a row. And both of the widgets have the same _width_ and _height_

   ```css
   :root {
     --chain-img-hear: url(../src/assets/chain-img.png);
     --chain-img-name: url(../src/assets/FaveBtnName.png);
     --chain-img-size: 100px;
     --chain-img-frame: 28;
   }

   * {
     box-sizing: border-box;
   }

   html,
   body {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100%;

     font-size: 18px;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
       sans-serif;
   }

   .heart,
   .name {
     width: var(--chain-img-size);
     height: var(--chain-img-size);
     margin: 10px;
   }
   ```

2. Set element style

   - `text-center`: Center the text, to make sure it's in the middle of the _particle-asset._
   - `line-height`: Set the element the same size as the _particel-asset_, so that there is not particle will be cutoff.
   - `user-select`: Make sure the element is not selectable. Otherwise the text will be selected when mouse click on it.
   - `background`: set the _particle-asset_ as background.
   - `DEV`: If add the border, it will be easier to see the position of the text-element.

   ```css
   .name {
     text-align: center;
     line-height: var(--chain-img-size);

     cursor: pointer;
     user-select: none;

     /* DEV: helpEl */
     /* border: 1px blue solid; */

     color: rgba(0, 0, 0, 0.5);
     background: var(--chain-img-name) no-repeat;
   }
   ```

3. Setup animation

   - `animation`: Here we have to use _css-animation_, not like the last example, all of the animation-states content in the asset. In this case, we have three states for the text-element, because of the `font-size`.
   - `step`: Use the same **timing-function** like the last example.
   - `forward`: The animation will stop at the last frame. So that we can toggle it.
   - animation-states: when the element is clicked
     1. `background-position-x` should stay at the first frame; `font-size` should be invisible
     2. `font-size` should be bigger than its normal state, so that it has a bit bounce effect.
     3. `background-position-x` should play to the last frame; `font-size` should back to normal; change the element `color` to black, so that Distinguish the clicked state from the unclicked state.

   ```css
   name-click {
     animation: faveAnim 0.5s steps(var(--chain-img-frame)) forwards;
   }

   @keyframes faveAnim {
     0% {
       background-position-x: 0;
       font-size: 0;
     }
     50% {
       font-size: 20px;
     }
     100% {
       background-position-x: calc(
         var(--chain-img-size) * var(--chain-img-frame) * -1
       );
       font-size: 18px;
       color: black;
     }
   }
   ```

   #### Step 3. JavaScript

   The same approach like the last example.

   1. get the _name-element_
   2. define the _toggle-boolean_
   3. create the click-event: each click call the _setFaveBtnClick()_
   4. add or remove the _animation-class_ by the _setFaveBtnClick()_

   ```jsx
   let heartEl = document.getElementById('heart');
   let nameEl = document.getElementById('name');
   let isFaveHeart = false;
   let isFaveName = false;

   heartEl.addEventListener('click', () => {
     isFaveHeart = setFaveBtnClick(heartEl, 'heart-click', isFaveHeart);
   });

   nameEl.addEventListener('click', () => {
     isFaveName = setFaveBtnClick(nameEl, 'name-click', isFaveName);
   });

   function setFaveBtnClick(faveBtnEl, faveBtnClassName, isLike) {
     !isLike
       ? faveBtnEl.classList.add(faveBtnClassName)
       : faveBtnEl.classList.remove(faveBtnClassName);

     isLike = !isLike;

     return isLike;
   }
   ```
