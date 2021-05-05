---
title: 'Publish React Component Library to npm'
date: 2021/05/04
keyword: React
type: blog
---

<h1 align="center">Publish React Component Library to npm</h1>
<div align="center">2021.05.04</div>

::: tip Contents
[[toc]]
:::

## 💡 Idea

When I develop my own projects, some of the UI-Components are the same. I don't want to create those components from zero everytime. That's why I need my own UI-Component Library, so that I can develop the Components once and use them directly.

## 🎯 Goal

Create a simple UI-Component Library by React, publish to `npmjs.con`.

## 🦶🏻 Steps

### Step 1. create project

1. create a new React project

```bash
$ npx create-react-app my-ui-lib
$ cd my-ui-lib
$ npm run start
```

2. install scss

```bash
$ npm i node-sass
```

### Step 2. create UI-Components

```bash
.
├── node_modules
├── src
│   ├── components
│   │   ├── 00_ButtonEclipse
│   │   │   ├── ButtonEclipse.jsx
│   │   │   └── ButtonEclipese.module.scss
│   │   ├── 01_YuButton
│   │   └── 02_YuCard
│   └── ...
├── package.json
└── ...
```

We can now create some UI-Components. We will use **css-module** to deal with the styling, so that the style will be scoped in each component.

1. ButtonEclipse

```jsx
import React from 'react';
import style from './ButtonEclipse.module.scss';

const ButtonEclipse = ({ text = '+' }) => {
  return (
    <>
      <button className={style.button}>{text}</button>
    </>
  );
};

export default ButtonEclipse;
```

```scss
.button {
  height: 50px;
  width: 50px;
  margin: 20px;
  border-radius: 50%;
  font-size: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  &:active {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: unset;
  }
}
```

2. YuButon

```jsx
import React from 'react';
import style from './YuButton.module.scss';

const YuButton = ({ text = 'click me' }) => {
  return (
    <>
      <button className={style.button}>
        {text}
        <span className={style['button__icon']}>▼</span>
      </button>
    </>
  );
};

export default YuButton;
```

```scss
.button {
  margin: 15px;
  border-radius: 10px;
  padding: 12px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);

  &__icon {
    margin-left: 10px;
    font-size: 18px;
    filter: drop-shadow(1px 1.5px 1.5px);
  }

  &:active {
    border: 2px solid rgba(0, 0, 0, 0.2);
    box-shadow: unset;
  }
}
```

3. YuCard

```jsx
import React from 'react';
import style from './YuCard.module.scss';

const YuCard = ({ text = 'Card' }) => {
  return (
    <div className={style['card-container']}>
      <h3 className={style['card-header']}>{text}</h3>
    </div>
  );
};

export default YuCard;
```

```scss
.card-container {
  margin: 10px;
  border-radius: 10px;
  height: 300px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card-header {
    padding: 15px;
  }
}
```

### Step 3. bundle the library

1. create `components/index.js`

```js
/* eslint-disable import/no-anonymous-default-export */
import ButtonEclipse from './00_ButtonEclipse/ButtonEclipse.jsx';
import YuButton from './01_YuButton/YuButton.jsx';
import YuCard from './02_YuCard/YuCard.jsx';

const components = () => {
  return {
    YuButton: YuButton,
    ButtonEclipse: ButtonEclipse,
    YuCard: YuCard,
  };
};

export default components();
```

2. install the bundler dependency

- init the library

```bash
$ npm init -y
```

- install the dependencies and check `package.json`

```bash

$ npm i rollup --save-dev

$ npm i @babel/cli @babel/core @babel/preset-env @babel/preset-react @rollup/plugin-babel rollup-plugin-postcss autoprefixer --save-dev

```

3. configuration

- create `components/rollup.config.js`

```js
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/transform-runtime'],
      babelHelpers: 'runtime',
    }),
    postcss({
      plugins: [autoprefixer()],
      module: true,
    }),
  ],
  external: ['react', /@babel\/runtime/],
};
```

- create `components/.babelrc`

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

- edit the `package.json`

```json
...
"scripts": {
    "build": "rollup -c"
}
...

```

### Step 4. build the package

- building the project

```bash
$ cd components
$ npm run build

```

- the final `package.json` seems like

```json
{
  "name": "yu-lib-try-1",
  "version": "1.0.8",
  "description": "",
  "main": "dist/index.cjs.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rollup -c"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.14.0",
    "@babel/plugin-transform-runtime": "^7.13.15",
    "@babel/preset-env": "^7.14.0",
    "@babel/preset-react": "^7.13.13",
    "@rollup/plugin-babel": "^5.3.0",
    "autoprefixer": "^10.2.5",
    "rollup": "^2.46.0",
    "rollup-plugin-postcss": "^4.0.0",
    "rollup-plugin-sourcemaps": "^0.6.3",
    "rollup-plugin-styles": "^3.14.1"
  },
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "dependencies": {
    "@babel/runtime": "^7.14.0",
    "@modular-css/rollup": "^26.0.0"
  }
}
```

### Step 5. publish the library

1. add `components/.npmignore`, so that we will not publish our source code to npm, we only want to publish the compliled code.

```bash

YuButton
YuCard
.babelrc
rollup.config.js
## node modules folder
node_modules
## incase you have a git repositiory initiated
.git
.gitignore
CVS
.svn
.hg
.lock-wscript
.wafpickle-N
.DS_Store
npm-debug.log
.npmrc

config.gypi
package-lock.json
```

2. add `components/.gitignore`, to ignore _node_modules_

```bash
/node_modules
```

3. publish to npm

- login to \_npmjs.com

```bash
$ npm login
```

- check if name is available

```bash
$ npm search [package name]
```

- publish

```bash
$ npm publish
```

- if need: update to new version

```bash
$ npm update
```

- if need: unpublish the exist package

```bash
$ npm unpublish <package-name> -f
```

- if need: Unpublishing a single version of a package

```bash
$ npm unpublish <package-name>@<version>
```
