---
title: JavaScript TodoList with Rest API
date: 2021/04/03
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript TodoList with Rest API</h1>
<div align="center">2021.04.03</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/js-todolist-with-api-4mlli?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="js todolist with API"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🎯 Goal

create a simple **Todo List** with following features, and update the data to **JsonPlaceHolder API**

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
- JS: fetch api
- JS: get data using fetch API
- JS: DELETE request using fetch API
- JS: PUT request using fetch API
- JS: POST request using fetch API

## ⛓ Link to

- 🔗 &nbsp; [React TodoList](../2021-03-28_react_todo_list/ReactTodoList.md)
- 🔗 &nbsp; [JavaScript TodoList](JsTodoList.md)
- 🔗 &nbsp; [JavaScript TodoList with Rest API](JsTodoListApi.md)

## 🦶🏻 Steps

### 0. uuid

- It's neccesarry for adding new Todo

### 1. HTML

```html
<form id="todo-form">
  <input id="todo-form__input" type="text" />
</form>

<div id="todo-list"></div>
```

- `todo-form`: a textbox to input new todo.
- `todo-list`: a container to hold todos

### 2. get elements

```jsx
const fomrEl = document.getElementById('todo-form');
const inputEl = document.getElementById('todo-input');
const listEl = document.getElementById('todo-list');
```

### 3. render todo element

```jsx
const renderTodo = (todo) => {
  const todoEl = document.createElement('div');

  todoEl.innerHTML = `
    <input type="checkbox" ${
      todo.completed ? 'checked' : ''
    } onchange="checkTodo(${todo.id})"/>
    ${todo.title}
    <button onclick="removeTodo(${todo.id})">x</button>
  `;

  listEl.appendChild(todoEl);
};
```

- `todoEl`: the container of each todo
- `checked`: the attribute will only available when the current todo is done.
- `listEl`: after create the elements for a todo, attach inside of todoListElement.
- explain next steps: `checkTodo()`, `removeTodo()`

### 4. retrieve todos

```jsx
const retriveTodos = (data) => {
  listEl.innerHTML = '';
  data.forEach(renderTodo);
};
```

- `forEach`: iterate todos and pass each todo into `renderTodo()` for DOM rendering
- `""`: when the function is called each time, clean up the old elements in `todoListEl`, so that the new elements can be rendered.

```jsx
// local data
let todos = "";

/**
 * API handling
 */
const getTodosApi = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      todos = data;
      retriveTodos(todos);
    });
};

......

getTodosApi();
```

- `todos`: the local data-resource for UI update
- `fetch`:
  - get data from endpoint by promise
  - pass the data to local-data-resource
  - pass local-data-resource to _retriveTodos()_ for items iteration

### 5. delete todo

```jsx
const deleteTodoApi = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  }).then((res) => console.log(res));
};
```

- pass the delete item id into the function
- `DELETE`: remove record

```jsx
window.removeTodo = (id) => {
  // ui
  todos = todos.filter((todo) => todo.id !== id);
  retriveTodos(todos);

  // api
  deleteTodoApi(id);
};
```

- ❗️ `window`: It's actually a normal function. It's a bug in *CodeSandbox*, otherwise, the function undefined error appears.
- `filter`: get the todos which not match the selected todo
- `renderTodos`: remove the previous todos, render the new todos

### 6. update todo

```jsx
const updateTodoApi = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      userId: 1,
      id: id,
      title: todos.find((todo) => todo.id === id).title,
      completed: !todos.find((todo) => todo.id === id).completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log('update:', data));
};
```

- `PUT`: edit a record
- `body`: overwrite the infos of the edit-todo. In this case the _completed_ will be modified.
- `header`: clarify the header info

```jsx
window.checkTodo = (id) => {
  // local data
  todos.find((todo) => todo.id === id).isDone = !todos.find(
    (todo) => todo.id === id,
  ).isDone;

  // API
  updateTodoApi(id);
};
```

- The UI works as default.
- `find`: find out the todo which has the same id as the selected todo, toggle the property *isDone*.

### 7. add todo

```jsx
const addTodoApi = (newTodo) => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      id: newTodo.id,
      title: newTodo.title,
      completed: newTodo.completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log('post:', data));
};
```

- `POST`: add a new record
- `body`: the infos of the new todo
- `header`: clarify the header info

```jsx
const addTodo = (e) => {
  // prevent refresh
  e.preventDefault();

  // invalidation
  if (!inputEl.value.trim()) return;

  // new todo
  const newTodo = {
    userId: 1,
    id: uuid(),
    title: inputEl.value,
    completed: false,
  };

  // data
  todos.push(newTodo);

  // ui
  renderTodo(newTodo);

  // API
  addTodoApi(newTodo);

  // clean up input
  inputEl.value = '';
};
```

- `preventDefault`: prevent the form refresh after press Enter key
- `trim`: check if unser input is empty
- `push`: 1st update the data
- `renderTodo`: 2nd render only the newTodo
- `submit`: attach this function to `todoFlomEl`
