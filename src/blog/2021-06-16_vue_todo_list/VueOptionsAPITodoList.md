---
title: 'Vue Options API: TodoList'
date: 2021/06/16
keyword: Vue
type: blog
---

<h1 align="center">Vue Options API: TodoList</h1>
<div align="center">2021.06.16</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/vue-optionsapi-todolist-en37d?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="Vue OptionsAPI TodoList"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🎯 Goal

create a simple **Todo List** with following features:

1. retrive todos
2. delete todo
3. check todo
4. add todo
5. use Vue Options API

## 📚 Knowledge

- Vue `data`
- Vue `methods`
- `v-for`
- Vue binding
- `v-model`
- Event Handler
- Modifier
- Vue `emit`
- Vue `props`

## ⛓ Link to

- -

## 🌲 File Structure

```vue
. └── src/ ├── components/ │ └── Todo.vue └── App.vue
```

## **🦶🏻 Steps**

### 0. init todos

We create an array todos as the initial data, so that we have data to retrive and display.

```vue
<script>
export default {

  ......

  data: () => ({
    inputVal: "",
    todos: [
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
    ],
  }),

	......

};
</script>
```

### 1. retrive todos

::: v-pre

```vue
<template>
  <div v-for="todo in todos" :key="todo.id">
    <input type="checkbox" :checked="todo.isDone" />
    {{ todo.txt }}
    <button>x</button>
  </div>
</template>

<script>
export default {

  ......

  data: () => ({
    inputVal: "",
    todos: [
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
    ],
  }),

  ......

};
</script>
```

- `v-for`: Vue buildIn directive to iterate a list of items. `:key` must be unique.
- `{{ todo.txt }}`: text binding to render the value of an item
- `:checked=" ... "`: property binding to render boolean as checkbox result

### 2. remove todo

```vue
<template>
  <div v-for="todo in todos" :key="todo.id">
    <input type="checkbox" :checked="todo.isDone" />
    {{ todo.txt }}
    <button @click="removeTodo(todo.id)">x</button>
  </div>
</template>

<script>
export default {

  ......

  data: () => ({
    inputVal: "",
    todos: [
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
    ],
  }),

	methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
	  },
	}

  ......

};
</script>
```

- `@click`: click EventListen to call the function _removeTodo_

### 3. check todo

```vue
<template>
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
export default {

  ......

  data: () => ({
    inputVal: "",
    todos: [
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
    ],
  }),

	methods: {

		......

		checkTodo(id) {
      this.todos.find((todo) => todo.id === id).isDone
				= !this.todos.find((todo) => todo.id === id).isDone;

      console.table(this.todos);
    },

		......
	}

  ......

};
</script>
```

- `checkTodo()`: find the item by id, switch the current _checked-state_ to opposites
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
export default {

  ......

  data: () => ({
    inputVal: "",
    todos: [
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
    ],
  }),

	methods: {

		......

		addTodo() {
      const newTodo = {
        id: this.xId,
        txt: this.inputVal,
        isDone: false,
      };

      this.todos.push(newTodo);

      // cleanup inputbox
      this.inputVal = "";

      // check data source
      console.table(this.todos);
    },

		......
	}

	computed: {
    xId() {
      return Math.floor(Math.random() * 100000);
    },
  },

  ......

};
</script>
```

- `@submit.prevent`: submit EventListener + Modifier. Prevent the refresh after submit
- `xId()`: get a random number as unique Id
- `v-model`: two way binding. To get the textbox input value

### 5. Todo component

```vue
<template>
  <input
    type="checkbox"
    :checked="todo.isDone"
    @change="$emit('emit-check-todo', todo.id)"
  />
  {{ todo.txt }}
  <button @click="$emit('emit-remove-todo', todo.id)">x</button>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  emits: ['emit-remove-todo', 'emit-check-todo'],
};
</script>

<style></style>
```

- a child component, represent each Item
- `props`: data from parent component. In the case is each _todo_ object
- `emits`: data send to parent component.
  1. `emits: [ "emit-remove-todo" ]`: sign up the emit label in the _emits array_
  2. `@click="$emit('emit-remove-todo', todo.id)"`:
     - `$emit()`: emit method to send data to parent component
     - `'emit-remove-todo'`: the label of this emit
     - `todo.id`: the data will be sent to parent component

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
