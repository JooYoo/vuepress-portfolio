---
title: 'JavaScript Data Structure: Array'
date: 2021/04/07
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Data Structure: Array</h1>
<div align="center">2021.04.07</div>

::: tip Contents
[[toc]]
:::

# ⛓ Link to

- 🔗 &nbsp; [Array](JsDataStructrue.md)

# 🙋🏻‍♂️ Q & A

### Q1. How to write a function to get the following output?

```js
const arr = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

// => output: 9
```

::: details 🔑

```js
let res = null;
const reducer = (acc, curr) => acc + curr;

arr.forEach((subArr) => {
  res += subArr.reduce(reducer);
});
console.log(res);
```

- `forEach`: Iterate all the _sub-arraies_ under the _main-array_
- `reduce`: get each _sub-array_ add them together
  - `reducer`: defined how to handle the items of each _sub-array_

:::
