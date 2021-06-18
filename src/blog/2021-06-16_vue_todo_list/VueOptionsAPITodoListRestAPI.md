---
title: 'Vue Options API: TodoList x REST API'
date: 2021/06/17
keyword: Vue
type: blog
---

<h1 align="center">Vue Options API: TodoList x REST API</h1>
<div align="center">2021.06.17</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/vue-options-api-todolist-x-restapi-0dg6l?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="vue options api TodoList x RestAPI"
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
6. http GET request
7. http DELETE request
8. http PATCH request
9. http POST request

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
- axios http requests

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

We already built a functional TodoList works locally. The previous steps please check _this_ article.

### 6. http GET request

- install **axios** by `npm i axios`

```vue
<script>
import axios from "axios";

export default {

  ......
	data: () => ({
    todos: [],
  }),

	beforeMount() {
    this.httpGetTodos();
  },

  methods: {

    // Rest API
    httpGetTodos() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
        .then((res) => {
          this.todos = res.data;
          console.table("GET:", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
....
```

- `axios.get(...)`: GET method takes only one parameter, which is the _EndPoint_. With the _Promise_ syntax we can get the data back.
- `todos`: a empty array is prepared. The data will be fetched from REST API.
- `beforeMount()`: Lifecycle Hook, which will be called in the _MOUNT_ phrase of the component. In this case, we use it to get the data ready

### 7. http DELETE request

```vue
<script>
export default {

  ......

  methods: {

		removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      // HTTP DELETE
      this.httpDeleteTodo(id);
    },

    // Rest API
    httpDeleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log("DELETE:", res);
        });
    },

  },
};
</script>
......
```

- `axios.delete(...)`: takes one parameter with a string interpolation, which is the id of the item that will be deleted. The response contains the HTTP status (e.g. 200 means OK).
- `httpDeleteTodo()`: the function can be insert into `removeTodo()`. After the UI rendering then make the HTTP call.

### 8. http PATCH request

```vue
<script>
export default {

  ......

  methods: {

	 checkTodo(todo) {
      todo.completed = !todo.completed;
      // HTTP PUT
      this.httpPatchTodo(todo);
    },

    // Rest API
    httpPatchTodo(todo) {
      axios
        .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
          completed: todo.completed,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>
....
```

- `axios.patch()`: takes two paremeters
  1. the _EndPoint_ with the item which will be updated
  2. the property of the item which will be updated
- `PATCH`: and `PUT` can both update data. But PATCH can update the specific property.

### 9. http POST request

```vue
<script>
export default {

  ......

  methods: {

		addTodo() {
      // unique Id
      const xId = Math.floor(Math.random() * 1000000);
      // new Todo
      const newTodo = {
        id: xId,
        title: this.inputVal,
        completed: false,
      };
      // add to List
      this.todos.push(newTodo);
      // clean up inputBox
      this.inputVal = "";

      // HTTP POST
      this.httpPostTodo(newTodo);
    },

    // Rest API
    httpPostTodo(newTodo) {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then((res) => {
          console.log("POST:", res.data);
        });
    },
  },
};
</script>
....
```

- `axios.post(...)`: takes two parameters.
  1. EndPoint
  2. the new Object will be added to data resource
- The response of the API call contains the new Object.

:::
