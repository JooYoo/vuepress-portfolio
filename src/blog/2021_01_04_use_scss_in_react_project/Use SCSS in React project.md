---
title: Use SCSS in React project
date: 2021/01/04
keyword: React
description: styling React project
type: blog
---

<h1 align="center">Use SCSS in React project</h1>
<div align="center">2021.01.04</div>

::: tip Contents
[[toc]]
:::

## 🎮 Usage

React project styling by SCSS.

## 🎯 Goal

Use SCSS instead of the default CSS for React project.

## 🦶🏻 Steps

### Step 0. setup React project

- create React App via npx

```bash
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

### Step 1. install Sass via npm

```bash
$ npm i node-sass
```

- If after the installation occurs error. We can try to install specific version.

```bash
$ npm uninstall node-sass
$ npm install node-sass@4.14.1
```

### Step 2. follows the BEM naming rule

- The following example use _css-module_ approach and implement SCSS by BEM naming rule.

```scss
.title {
  color: hotpink;

  &__small {
    color: green;
  }
}
```

- `import`: import Scss module, so that the class will be scoped in this component.
- `_` `-`: all of the spacial chars can be used inside of the quote.

```jsx{8}
import React from 'react';
import slideUpStyle from './SlideUp.module.scss';

function SlideUp() {
  return (
    <div className={slideUpStyle.title}>
      SlideUp works
      <div className={slideUpStyle['title__small']}>small title</div>
    </div>
  );
}

export default SlideUp;
```

- The following syntax can be implemented in multiple classes for a single element.

```jsx{3}
<div
  className={
    slideUpStyle['class--a'] + ' ' + slideUpStyle['class--b']
  }
>
```
