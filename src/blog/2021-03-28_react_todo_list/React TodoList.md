---
title: React TodoList
date: 2021/03/28
keyword: React
type: blog
---

<h1 align="center">React TodoList</h1>
<div align="center">2021.03.28</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/react-todos-ouuxq?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="react todos"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 📚 Knowledge

- React: useState
- React: event handling
- JS: map, filter
- JS: spread operator

## 🎯 Goal

create a simple **Todo List** with following features:

1. retrive todos
2. delete todos
3. check todos
4. add todos

## 🌲 File Structure

```
.
└── src/
    ├── components/
    │   └── TodoList.jsx
    ├── App.js
    ├── index.js
    └── styles.css
```

## 🦶🏻 Steps

### 0. uuid

We use _uuid_ to generate random id for each **todo**, so that it will easier for use to iterate todos.

```bash
$ npm i uuid
```

```javascript
import { v4 as uuid } from 'uuid';
```

- 🔗 &nbsp; [React project use UUID](../2021-01-12_react_project_use_uuid/ReactProjectUseUUID.md)

### 1. initial todos

We create an array todos as the initial data, so that we have data to retrive and display.

```jsx
const initTodos = [
  {
    id: uuid(),
    text: 'Switch',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'PS4',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'xBox',
    isDone: true,
  },
];
```

- `uuid()`: that's how we get the generated id from _uuid_.
