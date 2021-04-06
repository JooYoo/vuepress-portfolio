---
title: 'JavaScript Basic: Closure'
date: 2021/04/01
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: Closure</h1>
<div align="center">2021.04.01</div>

::: tip Contents
[[toc]]
:::

# ⛓ Link to

- 🔗 &nbsp; [Variable](JsBasicVariable.md)
- 🔗 &nbsp; [Closure](JsBasicClosure.md)
- 🔗 &nbsp; [Hoisting](JsBasicHoisting.md)
- 🔗 &nbsp; [Asynchronous](JsBasicAsynchronous.md)
- 🔗 &nbsp; [Arrow Function](JsBasicArrowFunction.md)
- 🔗 &nbsp; [Class & Prototype](JsBasicClassPrototype.md)

# 🙋🏻‍♂️ Q & A

### Q1. What is the output?

```js
let x = 100;

function logx() {
  console.log(x);
}

logx();
```

::: details 🔑

```js
100;
```

- The `x` is defined at a higher scope compare with the scope of function `logx()`. It's why `logx()` can use the `x` directly

:::
