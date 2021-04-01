---
title: 'JavaScript Basic: Asynchronous'
date: 2021/03/31
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: Asynchronous</h1>
<div align="center">2021.03.31</div>

::: tip Contents
[[toc]]
:::

# ⛓ Link to

- 🔗 &nbsp; [Closure](JsBasicClosure.md)
- 🔗 &nbsp; [Hoisting](JsBasicHoisting.md)
- 🔗 &nbsp; [Asynchronous](JsBasicAsynchronous.md)

# 🙋🏻‍♂️ Q & A

## concept

### Q1. Why we need Asynchronous programming? Explain by code.

::: details 🔑

```jsx
const todos = [
  {
    text: 'Switch',
  },
  {
    text: 'PS5',
  },
];

// retrive todos
function getTodos() {
  setTimeout(() => {
    let todosEl = '';
    todos.forEach((todo) => {
      todosEl += `<li> ${todo.text}</li>`;
    });
    document.body.innerHTML = todosEl;
  }, 1000);
}
getTodos();

// add todo
function addTodo(todo) {
  setTimeout(() => {
    todos.push(todo);
  }, 2000);
}
addTodo({ text: 'xBox' });
```

- `getTodos()`: renders items from _todos_ in 1s.
- `addTodo()`: add new item to _todos_ in 2s.
- issue: _getTodo_ is faster than _addTodo_, there are only two items that will be rendered. We need a trick, which can make the process wait until _addTodo_ finishing, then _getTodo_

:::

## callback

### Q1. Explain **callback** by code.

::: details 🔑

```jsx
const todos = [
  {
    text: 'Switch',
  },
  {
    text: 'PS5',
  },
];

// retrive todos
function getTodos() {
  setTimeout(() => {
    let todosEl = '';
    todos.forEach((todo) => {
      todosEl += `<li> ${todo.text}</li>`;
    });
    document.body.innerHTML = todosEl;
  }, 1000);
}

// add todo
function addTodo(todo, callback) {
  setTimeout(() => {
    todos.push(todo);
    callback();
  }, 2000);
}
addTodo({ text: 'xBox' }, getTodos);
```

- `callback`: The solution for the issue above is to pass a _callback_ function as a parameter to _addTodo_. Manually set the _addTodo_ happens first, and _getTodos_ second.
- What is callback: A callback function is a function passed into another function as an argument

:::

## promise

### Q1. Explain **promise** by code.

::: details 🔑

```jsx
const todos = [
  {
    text: 'Switch',
  },
  {
    text: 'PS5',
  },
];

// retrive todos
function getTodos() {
  setTimeout(() => {
    let todosEl = '';
    todos.forEach((todo) => {
      todosEl += `<li> ${todo.text}</li>`;
    });
    document.body.innerHTML = todosEl;
  }, 1000);
}

// add todo
function addTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      // simulate error
      const error = false;
      !error ? resolve() : reject('Error: 🙀');
    }, 2000);
  });
}

// resolve the promise
addTodo({ text: 'xBox' })
  .then(getTodos)
  .catch((err) => console.log(err));
```

- create promise
  - `new Promise`: create a new promise, which takes two parameters _resolve_ and _reject_
  - `resolve()`: successful
  - `reject()`: failed, the parameter is error message
- use promise - `then()`: the function will run secondly. - `catch()`: do something when promise failed.

:::

### Q2. How to make several promises at one time?

::: details 🔑

```jsx
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Bye'),
);

Promise.all([promise1, promise2, promise3]).then((val) => {
  console.log(val);
});

// => (3) ["Hello", 10, "Bye"]
```

- `Promise.all`: put promises into an array, resolve them at same time
- `then`: get the result.

:::

### Q3. How to fetch data from API in JS?

::: details 🔑

```jsx
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      renderUsers(data);
    });
}

function renderUsers(users) {
  let usersEl = '';
  users.forEach((user) => {
    usersEl += `<li>${user.name}</li>`;
  });
  document.body.innerHTML = usersEl;
}

getUsers();
```

- `fetch`: follow the promise syntax, fetch from an endpoint, then resolve to json, then get the data and pass to render function add to DOM tree.

:::

## async / await

### Q1. Explain async await by code

::: details 🔑

```jsx
const todos = [
  {
    text: 'Switch',
  },
  {
    text: 'PS5',
  },
];

// retrive todos
function getTodos() {
  setTimeout(() => {
    let todosEl = '';
    todos.forEach((todo) => {
      todosEl += `<li> ${todo.text}</li>`;
    });
    document.body.innerHTML = todosEl;
  }, 1000);
}

// add todo
function addTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);

      const error = false;
      !error ? resolve() : reject('Error: 🙀');
    }, 2000);
  });
}

async function init() {
  await addTodo({ text: 'xBox' });
  getTodos();
}

init();
```

1. ❗️precondition: the await function must be a Promise function
2. `async`: add the keyword before the resolve function
3. `await`: add the keyword before the function which should run first

:::

### Q2. How to fetch data from API by async approach?

::: details 🔑

```jsx
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  renderUsers(data);
}

function renderUsers(users) {
  let usersEl = '';
  users.forEach((user) => {
    usersEl += `<li>${user.name}</li>`;
  });
  document.body.innerHTML = usersEl;
}

getUsers();
```

- fetch API
- `async`: add the keyword before the function which takes _fetch()_
- `await`:
  - before _fetch()_
  - before _json()_

:::
