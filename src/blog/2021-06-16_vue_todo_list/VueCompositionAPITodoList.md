---
title: 'Vue Composition API: TodoList'
date: 2021/06/17
keyword: Vue
type: blog
---

<h1 align="center">Vue Composition API: TodoList</h1>
<div align="center">2021.06.17</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/vue-compositionapi-todolist-nf7ld?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="Vue CompositionAPI TodoList"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🎯 Goal

create a simple **Todo List** with following features:

1. retrive todos
2. delete todo
3. check todo
4. add todo
5. use Vue 3 Composition API

## 📚 Knowledge

- Vue `data` by CompositionAPI
- Vue `methods` by CompositionAPI
- `v-for`
- Vue binding
- `v-model`
- Event Handler
- Modifier
- Vue `emit`
- Vue `props`

## ⛓ Link to

- 🔗 &nbsp; [Vue Options API: TodoList](VueOptionsAPITodoList.md)
- 🔗 &nbsp; [Vue Options API: TodoList x REST API](VueOptionsAPITodoListRestAPI.md)
- 🔗 &nbsp; [Vue Composition API: TodoList](VueCompositionAPITodoList.md)

## 🌲 File Structure

```js
.
└── src/
    ├── components/
    │   └── Todo.vue
    └── App.vue
```

## **🦶🏻 Steps**

::: v-pre

### 0. init todos

We create an array todos as the initial data, so that we have data to retrive and display.

```vue
......

<script>

import { ref } from "vue";
export default {

  ......

  setup() {
    //data
    const todos = ref([
      {
        id: 0,
        txt: "Switch",
        isDone: false,
      },
      {
        id: 1,
        txt: "xBox",
        isDone: true,
      },
      {
        id: 2,
        txt: "PS5",
        isDone: false,
      },
    ]);
    const inputVal = ref("");

    return {
      todos,
      inputVal,
    };
  },
};
</script>

......
```

- `setup()`: the entry point when we use composition API
- `ref()`: data definition of composition API. _todos_ is the data source of the list. _inputVal_ is the data source of the input box.

### 1. retrive todos

```vue
<template>
  <div v-for="todo in todos" :key="todo.id" class="todo-item">
    <input type="checkbox" :checked="todo.isDone" />
    {{ todo.txt }}
    <button>x</button>
  </div>
</template>
<script>

import { ref } from "vue";
export default {

  ......

  setup() {
    //data
    const todos = ref([
      {
        id: 0,
        txt: "Switch",
        isDone: false,
      },
      {
        id: 1,
        txt: "xBox",
        isDone: true,
      },
      {
        id: 2,
        txt: "PS5",
        isDone: false,
      },
    ]);
    const inputVal = ref("");

    return {
      todos,
      inputVal,
    };
  },
};
</script>

......
```

- `v-for`: Vue buildIn directive to iterate a list of items. `:key` must be unique.
- `{{ todo.txt }}`: text binding to render the value of an item
- `:checked=" ... "`: property binding to render boolean as checkbox result

### 2. remove todo

```vue
<template>
  <div v-for="todo in todos" :key="todo.id" class="todo-item">
    <input type="checkbox" :checked="todo.isDone" />
    {{ todo.txt }}
    <button @click="removeTodo(todo.id)">x</button>
  </div>
</template>
<script>

import { ref } from "vue";
export default {

  ......

  setup() {
    //data
    const todos = ref([
      {
        id: 0,
        txt: "Switch",
        isDone: false,
      },
      {
        id: 1,
        txt: "xBox",
        isDone: true,
      },
      {
        id: 2,
        txt: "PS5",
        isDone: false,
      },
    ]);
    const inputVal = ref("");

		// methdos
    function removeTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    }

    return {
      todos,
      inputVal,
    };
  },
};
</script>

......
```

- `@click`: click EventListen to call the function _removeTodo_
- methods CompositionAPI: write the function inside of the `setup()` function

### 3. check todo

```vue
<template>
  <div v-for="todo in todos" :key="todo.id">
    <input type="checkbox" :checked="todo.isDone" @change="checkTodo(todo)" />
    {{ todo.txt }}
    <button @click="removeTodo(todo.id)">x</button>
  </div>
</template>
<script>

import { ref } from "vue";
export default {

  ......

  setup() {
    //data
    const todos = ref([
      {
        id: 0,
        txt: "Switch",
        isDone: false,
      },
      {
        id: 1,
        txt: "xBox",
        isDone: true,
      },
      {
        id: 2,
        txt: "PS5",
        isDone: false,
      },
    ]);
    const inputVal = ref("");

		// methdos
		function checkTodo(todo) {
      todo.isDone = !todo.isDone;

      console.table(todos.value);
    }

    return {
      todos,
      inputVal,
    };
  },
};
</script>

......
```

- `checkTodo()`: find the item, switch the current _checked-state_ to opposites
- `@change="..."`: EventListener for check-box

### 4. add todo

```vue
<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="inputVal" />
  </form>

  <div v-for="todo in todos" :key="todo.id">
    <input
      type="checkbox"
      :checked="todo.isDone"
      @change="checkTodo(todo.id)"
    />
    {{ todo.txt }}
    <button @click="removeTodo(todo.id)">x</button>
  </div>
</template>
<script>

import { ref } from "vue";
export default {

  ......

  setup() {
    //data
    const todos = ref([
      {
        id: 0,
        txt: "Switch",
        isDone: false,
      },
      {
        id: 1,
        txt: "xBox",
        isDone: true,
      },
      {
        id: 2,
        txt: "PS5",
        isDone: false,
      },
    ]);
    const inputVal = ref("");

		// methdos
		function addTodo() {
      // get unique Id
      const xId = Math.floor(Math.random() * 1000000);

      // build up new Todo
      const newTodo = {
        id: xId,
        txt: inputVal.value,
        isDone: false,
      };

      // add to list
      todos.value.push(newTodo);

      // clear input box
      inputVal.value = "";
    }

    return {
      todos,
      inputVal,
    };
  },
};
</script>

......
```

- `@submit.prevent`: submit EventListener + Modifier. Prevent the refresh after submit
- `xId()`: get a random number as unique Id
- `v-model`: two way binding. To get the textbox input value

### 5. Todo component

```vue
<template>
  <input type="checkbox" :checked="todo.isDone" @change="checkTodo(todo)" />
  {{ todo.txt }}
  <button @click="removeTodo(todo.id)">x</button>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  emits: ['emit-remove-todo', 'emit-check-todo'],
  setup(props, context) {
    // emit
    function removeTodo(id) {
      context.emit('emit-remove-todo', id);
    }
    function checkTodo(todo) {
      context.emit('emit-check-todo', todo);
    }

    return {
      removeTodo,
      checkTodo,
    };
  },
};
</script>
```

- a child component, represent each Item
- `props`: data from parent component. In the case is each _todo_ object
- `emits`: data send to parent component.
  1. `emits: [ "emit-remove-todo" ]`: sign up the emit label in the _emits array_
  2. `@click="removeTodo(todo.id)"`: call the emit function
  3. `function removeTodo(id)`
     - `context.emit`: is the 2nd parameter of `setup()` function. The `emit` can send data to the parent component
     - `'emit-remove-todo'`: the label of this emit
     - `tid`: the data will be sent to parent component

```vue
<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="inputVal" />
  </form>
  <div v-for="todo in todos" :key="todo.id" class="todo-item">
    <Todo
      :todo="todo"
      @emit-remove-todo="removeTodo"
      @emit-check-todo="checkTodo"
    />
  </div>
</template>
```

- the parent component
- `:todo="todo"`: prop. The todo-object will be sent to child component
- `@emit-remove-todo="removeTodo"`: recieve the data from child component
  - `@emit-remove-todo`: listen to the custom emit event from child component.
  - `removeTodo`: when the emit is called, then call the function

:::
