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
2. delete todo
3. check todo
4. add todo

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

### 2. retrive todos

```jsx
const [todos, setTodos] = useState(initTodos);

return (
  <div>
    {todos.map((todo) => (
      <div key={todo.id}>{todo.text}</div>
    ))}
  </div>
);
```

- `useState()`: create a state for todos
- `map`: that's how we iterate objects to UI in React
- `map((x)=>(...))`: returning object literals from arrow function
- `key`: to prevent the warning from React, it's required

### 3. check todo

```jsx
const isDoneHandler = (id) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isDone: !todo.isDone };
    }
    return todo;
  });
  setTodos(newTodos);
};

return (
  <div>
    {todos.map((todo) => (
      <div key={todo.id}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => isDoneHandler(todo.id)}
        />
        {todo.text}
      </div>
    ))}
  </div>
);
```

- `input`: checkbox for each todo to present property **isDone**.
- `checked`: it can be bind with _isDone_ directly.
- `isDoneHandler()`: pass the current _todo-id_ to the function; iterate todos and find the match todo update the _isDone_ property, update the state.

### 4. remove todo

```jsx
const removeTodoHandler = (id) => {
  const newTodos = todos.filter((x) => x.id !== id);
  setTodos(newTodos);
};

return (
  <div>
    {todos.map((todo) => (
      <div key={todo.id}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => isDoneHandler(todo.id)}
        />
        {todo.text}
        <button onClick={() => removeTodoHandler(todo.id)}>x</button>
      </div>
    ))}
  </div>
);
```

- `removeTodoHandler()`: pass the current _todo-id_ to function; get todos which not match the id to _newTodos_ by `filter`, update the state.

### 5. add todo

```jsx
const [inputVal, setInputVal] = useState('');

const addTodoHandler = (e) => {
  setInputVal(e.target.value);
};
const submitTodoHandler = (e) => {
  e.preventDefault();
  // prevent invalide input
  if (!inputVal.trim()) return;
  // add to todos
  const newTodo = {
    id: uuid(),
    text: inputVal,
    isDone: false,
  };
  setTodos([...todos, newTodo]);
  // clear input
  setInputVal('');
};

return (
  <div>
    <form onSubmit={submitTodoHandler}>
      <input type="text" value={inputVal} onChange={(e) => addTodoHandler(e)} />
    </form>
    {todos.map((todo) => (
      <div key={todo.id}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => isDoneHandler(todo.id)}
        />
        {todo.text}
        <button onClick={() => removeTodoHandler(todo.id)}>x</button>
      </div>
    ))}
  </div>
);
```

- `input`:
  - `value`: bind with its own state
  - `addTodoHandler()`: get the input-value, update input-state
- `form`:
  - The `input` is inside of the form, so that we can press _Enter_ to submit the form.
  - `submitTodoHandler()`: prevent the page refresh when submit; check the validation of the input; create newTodo and update todos-state; clean up the input textbox after submit.
