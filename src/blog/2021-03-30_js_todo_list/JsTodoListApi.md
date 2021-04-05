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
- 🔗 &nbsp; [React TodoList with Rest API](../2021-03-28_react_todo_list/ReactTodoListApi.md)
- 🔗 &nbsp; [JavaScript TodoList](JsTodoList.md)
- 🔗 &nbsp; [JavaScript TodoList with Rest API](JsTodoListApi.md)

## 🦶🏻 Steps

### 0. id

```js
const xId = () => {
  return Math.floor(Math.random() * 1000000);
};
```

- The function will return a random number as the ID of each todo when needed

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
const retriveTodos = (items) => {
  listEl.innerHTML = '';
  items.forEach(renderTodo);
};
```

- `forEach`: iterate todos and pass each todo into `renderTodo()` for DOM rendering
- `""`: when the function is called each time, clean up the old elements in `todoListEl`, so that the new elements can be rendered.

```jsx
/**
 * init data
 */
const initTodos = [
  {
    id: xId(),
    title: "Switch",
    completed: false
  },
  {
    id: xId(),
    title: "xBox",
    completed: false
  },
  {
    id: xId(),
    title: "PS5",
    completed: true
  }
];

let todos = initTodos;

/**
 * API handling
 */
const getApiTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      todos = data;
      retriveTodos(todos);
    });
};

......

getApiTodos();
```

- `todos`: the local data-resource for UI update. If we get data from API the static todos will be overwritten
- `fetch`:
  - get data from endpoint by promise
  - pass the data to local-data-resource
  - pass local-data-resource to _retriveTodos()_ for items iteration

### 5. delete todo

```jsx
const deleteApiTodo = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  }).then((res) => console.log('DELETE: ', res));
};
```

- pass the delete item id into the function
- `DELETE`: remove record

```jsx
window.removeTodo = (id) => {
  const nextTodos = todos.filter((todo) => todo.id !== id);
  retriveTodos(nextTodos);

  // API
  deleteApiTodo(id);
  // update local data
  todos = nextTodos;
};
```

- ❗️ `window`: It's actually a normal function. It's a bug in *CodeSandbox*, otherwise, the function undefined error appears.
- `filter`: get the todos which not match the selected todo
- `renderTodos`: remove the previous todos, render the new todos
- after modifier the todos, the local data needs to be updated

### 6. update todo

```jsx
const updateApiTodo = (todo) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      userId: 1,
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log('PUT: ', data));
};
```

- `PUT`: edit a record
- `body`: overwrite the infos of the edit-todo. In this case the _completed_ will be modified.
- `header`: clarify the header info

```jsx
window.checkTodo = (id) => {
  const nextTodos = todos.map((todo) => {
    if (todo.id === id) {
      // API
      updateApiTodo(todo);
      // UI
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  // UI
  retriveTodos(nextTodos);

  // update local data
  todos = nextTodos;
};
```

- The UI works as default.
- `map`: map todos to create _nextTodos_ when find the match todo,
  - update the API data
  - update the current todo
- update the local todos as well

### 7. add todo

```jsx
const postApiTodo = (newTodo) => {
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
    .then((data) => console.log('POST: ', data));
};
```

- `POST`: add a new record
- `body`: the infos of the new todo
- `header`: clarify the header info

```jsx
const addTodo = (e) => {
  // prevent refresh
  e.preventDefault();

  // validation
  if (!inputEl.value.trim()) return;

  // new Todo
  const newTodo = {
    id: xId(),
    title: inputEl.value,
    completed: false,
  };

  // API
  postApiTodo(newTodo);

  // data
  todos.push(newTodo);

  // ui
  renderTodo(newTodo);

  // clean up input
  inputEl.value = '';
};

formEl.addEventListener('submit', addTodo);
```

- `preventDefault`: prevent the form refresh after press Enter key
- `trim`: check if unser input is empty
- `push`: 1st update the data
- `renderTodo`: 2nd render only the newTodo
- `submit`: attach this function to `todoFlomEl`
