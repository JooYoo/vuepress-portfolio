---
title: 'JavaScript Basic: SetTime'
date: 2021/04/15
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: SetTime</h1>
<div align="center">2021.04.15</div>

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
- 🔗 &nbsp; [SetTime](JsBasicSetTime.md)

# 🙋🏻‍♂️ Q & A

### Q1. What is the order of the output?

```js
console.log('a');

setTimeout(() => {
  console.log('b');
}, 1);

setTimeout(() => {
  console.log('c');
}, 10);

setTimeout(() => {
  console.log('d');
}, 0);

console.log('e');
```

::: details 🔑

```js
// =>
// a
// e
// b
// d
// c
```

- `console.log()`: they will first run from top to bottom. Bacaus they don't have setTimeout, it means they are not delay.
- `setTimeout({},1)` and `setTimeout({},0)`: they are both will delay because of the _setTimeout()_. But the delays are shorter than the _console.log()_ excute process. While the _console.log()_ excute, both of the short _setTimeout()_ are ready to excute. And the time between 0 to 1 have difference by _setTimeout()_

:::
