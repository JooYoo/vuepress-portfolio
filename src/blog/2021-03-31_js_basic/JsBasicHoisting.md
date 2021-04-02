---
title: 'JavaScript Basic: Asynchronous'
date: 2021/04/01
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: Hoisting</h1>
<div align="center">2021.04.01</div>

::: tip Contents
[[toc]]
:::

# ⛓ Link to

- 🔗 &nbsp; [Variable](JsBasicVariable.md)
- 🔗 &nbsp; [Closure](JsBasicClosure.md)
- 🔗 &nbsp; [Hoisting](JsBasicHoisting.md)
- 🔗 &nbsp; [Asynchronous](JsBasicAsynchronous.md)

# 🙋🏻‍♂️ Q & A

### Q1. Explain Js Hoisting by code

::: details 🔑

```jsx
foo();
function foo() {
  console.log('Hi, there.');
}
```

- Even if the function is called before it's defined, it still works. That's called Js Hoisting.

:::

### Q2. Does the following code valid?

```js
foo();
const foo = function () {
  console.log('Hi, there.');
};
```

::: details 🔑

- invalid
- When the function assigned to a variable, the hoisting will be disabled.

:::

### Q3. Does the following code valid?

```js
foo();
const foo = () => {
  console.log('Hi, there.');
};
```

::: details 🔑

- invalid
- When the function assign to a variable, JS hoisting will be disabled, include arraow function.

:::
