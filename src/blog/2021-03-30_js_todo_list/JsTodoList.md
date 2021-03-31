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

```js
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

console.log(uuid());
```

- The function can also generate uuid.

### 1. HTML

```html
<form id="todo-form">
  <input id="todo-form__input" type="text" />
</form>

<div id="todo-list"></div>
```

- `todo-form`: a textbox to input new todo.
- `todo-list`: a container to hold todos

### 2. initial todos

```js
let initTodos = [
  {
    id: uuid(),
    text: 'Switch',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'xBox',
    isDone: false,
  },
  {
    id: uuid(),
    text: 'PS5',
    isDone: true,
  },
];

let todos = initTodos;
```

- `todos`: assign _initTodos_ to _todos_ , so that the original data won't be broken.

### 3. get elements

```js
const todoListEl = document.getElementById('todo-list');
const todoFormEl = document.getElementById('todo-form');
const todoFormInputEl = document.getElementById('todo-form__input');
```

### 4. render Todo element

```js
const renderTodo = (todo) => {
  const todoEl = document.createElement('div');
  todoEl.innerHTML = `
      <input type="checkbox" 
      ${todo.isDone ? 'checked' : ''} onchange="checkTodo('${todo.id}')"/>
      ${todo.text}
      <button onclick="removeTodo('${todo.id}')">x</button>
    `;

  todoListEl.appendChild(todoEl);
};
```

- `todoEl`: the container of each todo
- `checked`: the attribute will only available when the current todo is done.
- `todoListEl`: after create the elements for a todo, attach inside of todoListElement.
- explain next steps: `checkTodo()`, `removeTodo()`

### 5. retrive todos

```js
const renderTodos = () => {
  todoListEl.innerHTML = '';
  todos.forEach(renderTodo);
};

renderTodos();
```

- `forEach`: iterate todos and pass each todo into `renderTodo()` for DOM rendering
- `""`: when the function is called each time, clean up the old elements in `todoListEl`, so that the new elements can be rendered.

### 6. add todo

```js
const addTodo = (e) => {
  // valid input
  e.preventDefault();
  if (!todoFormInputEl.value.trim()) return;

  // create a new todo
  const newTodo = {
    id: uuid(),
    text: todoFormInputEl.value,
    isDone: false,
  };

  // update data
  todos.push(newTodo);
  // update ui
  renderTodo(newTodo);
  // clean up input
  todoFormInputEl.value = '';
};

todoFormEl.addEventListener('submit', addTodo);
```

- `preventDefault`: prevent the form refresh after press Enter key
- `trim`: check if unser input is empty
- `push`: 1st update the data
- `renderTodo`: 2nd render only the newTodo
- `submit`: attach this function to `todoFlomEl`

### 7. remove todo

```js
window.removeTodo = (id) => {
  // data
  todos = todos.filter((todo) => todo.id !== id);
  // ui
  renderTodos();
};
```

- ❗️ `window`: It's actully a normal function. It's a bug in _CodeSandbox_, other wise function undefined error appear.
- `filter`: get the todos which not match the selected todo
- `renderTodos`: remove the previous todos, render the new todos

### 8. edit todo

```js
window.checkTodo = (id) => {
  // data
  todos.find((todo) => todo.id === id).isDone = !todos.find(
    (todo) => todo.id === id,
  ).isDone;
  console.log(todos);
};
```

- The UI works as default.
- `find`: find out the todo which has the same id as the selected todo, toggle the property _isDone_.
