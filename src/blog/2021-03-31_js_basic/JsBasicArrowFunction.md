---
title: 'JavaScript Basic: function'
date: 2021/04/04
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: function</h1>
<div align="center">2021.04.04</div>

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

### Q1. The following code is invalid, how to fix it?

```jsx
const person = {
  firstName: '',
  secondName: '',
  setName: function (inputName) {
    function spliteName(fullName) {
      let nameArray = fullName.split(' ');
      this.firstName = nameArray[0];
      this.secondName = nameArray[1];
    }

    spliteName(inputName);
  },
};

person.setName('Jim Green');
console.log(person.secondName);
```

::: details 🔑

- The code has _this-issue_
- arrow function can fix it

```jsx{5}
const person = {
  firstName: '',
  secondName: '',
  setName: function (inputName) {
    const spliteName = (fullName) => {
      let nameArray = fullName.split(' ');
      this.firstName = nameArray[0];
      this.secondName = nameArray[1];
    };

    spliteName(inputName);
  },
};

person.setName('Jim Green');
console.log(person.secondName);
```

:::

### Q2. How to re-write the following code by Arrow function?

```jsx
function x() {
  console.log(arguments[0]);
}

x(1, 2, 3); //=> 1
```

::: details 🔑

```jsx
const y = (...n) => {
  console.log(n[0]);
};
y(4, 5, 6); // => 4
```

- `arguments`: the keyword is not available for Arrow function
- `...n`: use **SpreadOperator** is the same as the _arguments-keyword_ in this case. It allows passing uncertain amount of parameters.

:::

### Q3. How to determin if the function recieved expected number of arguments

::: details 🔑

```js
const f = function (a, b) {
  if (arguments.length === f.length) {
    console.log('Ok');
  } else {
    console.log('Nok');
  }
};

f('a', 'b');
```

- `arguments.length`: the arguments count when the function is called
- `f.length`: the arguments count when the function is defined.

:::
