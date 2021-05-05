---
title: 'Add custom attribute to React component'
date: 2021/05/05
keyword: React
type: blog
---

<h1 align="center">Add custom attribute to React component</h1>
<div align="center">2021.05.05</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/eg-add-custom-attribute-to-react-component-8fgmu?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="eg: Add custom attribute to React component"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 💡 Idea

If we could change the style of a **ui-component** by only add an **attribute** in the DOM. It would be very practical.

## 🎯 Goal

- create a simple UI-Component `<TestButton/>`
- make the button round by adding attribute `<TestButton round />`

## 🦶🏻 Steps

### Step 1. scss

- `components/TestButton.module.scss`
- We use scss in this example. And prepare the following variant for the button
  - button--normal: default
  - button--round: make the button round
  - button--red-border: make the button border to red

```scss
.button {
  height: 2rem;
  width: 2rem;

  &--normal {
    border-radius: 10px;
  }

  &--round {
    border-radius: 50%;
  }

  &--red-border {
    border: 2px solid red;
  }
}
```

### Step 2. jsx

- `component/TestButton.jsx`

```jsx
import React from 'react';
import style from './TestButton.module.scss';

const TestButton = (props) => {
  const isRound = props.round ? 'button--round' : 'button--normal';
  const isRedBorder = props.redBorder ? 'button--red-border' : '';

  return (
    <>
      <button
        className={`${style['button']} ${style[isRound]} ${style[isRedBorder]}`}
      >
        +
      </button>
    </>
  );
};

export default TestButton;
```

- `props.round`: check if there is an attribute `round` inside of the component-DOM. When it exists return _true_, otherwise return _undefined_. We can take advantage of the condition to switch between different style variant.
- `style[isRound]`: pass the corresponding style to the button.

### Step 3. App.js

```js
<TestButton round redBorder />
```

- pass the attribute to the component directly
