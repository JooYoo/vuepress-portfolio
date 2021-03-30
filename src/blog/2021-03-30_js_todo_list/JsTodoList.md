---
title: JavaScript TodoList
date: 2021/03/30
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript TodoList</h1>
<div align="center">2021.03.30</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/js-todos-4v5h8?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="js todos"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🎯 Goal

create a simple **Todo List** with following features:

1. retrive todos
2. delete todo
3. check todo
4. add todo

## 📚 Knowledge

- JS: get element from DOM
- JS: create / append element to DOM
- JS: string Interpolation
- JS: forEach, push, filter, find
- JS: `<button>` event handling
- JS: `<input>` event handling

## ⛓ Link to

- 🔗 &nbsp; [React TodoList](../2021-03-28_react_todo_list/ReactTodoList.md)
- 🔗 &nbsp; [JavaScript TodoList]()

## 🦶🏻 Steps

### 0. uuid

We use _uuid_ to generate random id for each **todo**, so that it will easier for us to iterate todos.

- 🔗 &nbsp; [React project use UUID](../2021-01-12_react_project_use_uuid/ReactProjectUseUUID.md)

### 1. HTML

```html
<form id="todo-form">
  <input id="todo-form__input" type="text" />
</form>

<div id="todo-list"></div>
```

- `todo-form`: a textbox to input new todo.
- `todo-list`: a container to hold todos
