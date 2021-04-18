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
- 🔗 &nbsp; [Arrow Function](JsBasicArrowFunction.md)
- 🔗 &nbsp; [Class & Prototype](JsBasicClassPrototype.md)

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

### Q2. Does the following code valid, why?

```jsx
const constVar = [1, 2];
constVar.push(3);
console.log(constVar);
```

::: details 🔑

- Valid.
- `constVar`: an Array is assigned to a const variable. There is no new array assign to the variable, so it's no problem.
- The following code is invalid.

  ```jsx
  const constVar = [1, 2];
  constVar = [3, 4];
  ```

:::

### Q3. What's the type of _undefined_ and _null_

::: details 🔑

- `undefined`: undefined
- `null`: object

:::

### Q4. Does the following code valid, why?

```js
const arr = [1, 2];
arr[0] = 6;
```

::: details 🔑

- valid

:::

### Q5. How to create an array with elements inside?

```js
createArray(); // => Array.from() // => (5) ["newArr", "newArr", "newArr", undefined, undefined]
```

::: details 🔑

#### Solution 1

Array.from()

```js
let a1 = Array.from({ length: 5 }, (n, i) => {
  if (i < 3) {
    return (n = 'newArr');
  }
  return n;
});
console.log(a1); // => (5) ["newArr", "newArr", "newArr", undefined, undefined]
```

- `Array.from`: It can create an array, which allow to decide the length of the array.
- `n`: each iteration of the new Array element
- `i`: the index of the iteration

#### Solution 2

new Array()

```js
let a2 = new Array(5).fill('newArr', 0, 3);
console.log(a2); // => (5) ["newArr", "newArr", "newArr", undefined, undefined]
```

- `new Array(5)`: It creates a new empty array with 5 elements inside
- `fill('newArr', 0, 2)`: based on the empty elements. The element self is _newArr_, from index `0` element, `2` elements will be excuted.

:::
