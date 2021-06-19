---
title: 'Vue Composition API: TodoList x REST API'
date: 2021/06/19
keyword: Vue
type: blog
---

<h1 align="center">Vue Composition API: TodoList x REST API</h1>
<div align="center">2021.06.19</div>

::: tip Contents
[[toc]]
:::

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/vue-composition-api-todolist-x-restapi-9c9bm?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="vue composition api TodoList x RestAPI"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

::: v-pre

## 🎯 Goal

create a simple **Todo List** with following features:

1. retrive todos
2. delete todo
3. check todo
4. add todo
5. use Vue Composition API
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

- -

## 🌲 File Structure

```js
.
└── src/
    ├── components/
    │   └── Todo.vue
    └── App.vue
```

## **🦶🏻 Steps**

We already built functional TodoList works locally. The previous steps please check **_this_** article.

### 6. http GET request

- install **axios** by `npm i axios`

```vue
<script>
import axios from "axios";
import { onBeforeMount, ref } from "vue";

export default {
  ......

  setup() {
    // data
    const todos = ref([]);

    // Lifecycle Hooks
    onBeforeMount(() => {
      httpGetTodos();
    });

    // methdos
    ......

    // REST API
    function httpGetTodos() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
        .then((res) => {
          todos.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return {
			inputVal,
      todos,
      removeTodo,
      checkTodo,
      addTodo,
    };
  },
};
</script>
......
```

- `axios.get(...)`: GET method takes only one parameter, which is the _EndPoint_. With the _Promise_ syntax, we can get the data back.
- `todos`: a empty array is prepared. The data will be fetched from REST API.
- `onBeforeMount()`: Lifecycle Hook, which will be called in the _MOUNT_ phrase of the component. In this case, we use it to get the data ready. For CompositionAPI we have to import it from vue first.
- `return`: we don't need to return the http-functions, since we only use them inside of `setup()`

### 7. http DELETE request

```vue
<script>
export default {
  ......

  setup() {
    ......

		function removeTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id !== id);

      // HTTP DELETE
      httpDeleteTodo(id);
    }

    // REST API
		function httpDeleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log("DELETE:", res);
        });
	   }

    return {
			inputVal,
      todos,
      removeTodo,
      checkTodo,
      addTodo,
    };
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

  setup() {
    ......

	function checkTodo(todo) {
      todo.completed = !todo.completed;

      // HTTP PATCH
      httpPatchTodo(todo);
    }

    // REST API
  	function httpPatchTodo(todo) {
      axios
        .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
          completed: todo.completed,
        })
        .then((res) => {
          console.log("PATCH:", res.data);
        });
    }

    return {
			inputVal,
      todos,
      removeTodo,
      checkTodo,
      addTodo,
    };
  },
};
</script>
......
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

  setup() {

		// data
    const inputVal = ref("");
    const todos = ref([]);

    ......

		function addTodo() {
      // unique Id
      const xId = Math.floor(Math.random() * 1000000);

      // new Todo
      const newTodo = {
        id: xId,
        title: inputVal.value,
        completed: false,
      };

      // add to List
      todos.value.push(newTodo);

      // clean up input box
      inputVal.value = "";

      // HTTP POST
      httpPostTodo(newTodo);
    }

    // REST API
		function httpPostTodo(newTodo) {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then((res) => {
          console.log("POST:", res.data);
        });
    }

    return {
			inputVal,
      todos,
      removeTodo,
      checkTodo,
      addTodo,
    };
  },
};
</script>
......
```

- `axios.post(...)`: takes two parameters.
  1. EndPoint
  2. the new Object will be added to data resource
- The response of the API call contains the new Object.

:::
