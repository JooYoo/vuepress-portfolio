---
title: 'JavaScript Basic: Variable'
date: 2021/04/02
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: Variable</h1>
<div align="center">2021.04.02</div>

::: tip Contents
[[toc]]
:::

# ⛓ Link to

- 🔗 &nbsp; [Variable](JsBasicVariable.md)
- 🔗 &nbsp; [Closure](JsBasicClosure.md)
- 🔗 &nbsp; [Hoisting](JsBasicHoisting.md)
- 🔗 &nbsp; [Asynchronous](JsBasicAsynchronous.md)

# 🙋🏻‍♂️ Q & A

### Q1. What's the different between var and let?

::: details 🔑

1. `var` is old. `let` was introduced in ES6(ES2015).
2. `var` has function scope. `let` has block scope.

   ```jsx
   if (true) {
     var x = 'x';
     let y = 'y';
   }

   console.log(x); // => x
   console.log(y); // => undefined
   ```

   - `let` has block scope, it's available inside of the _if-block_.

:::
