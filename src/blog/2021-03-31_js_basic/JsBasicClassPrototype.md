---
title: 'JavaScript Basic: Class & Prototype'
date: 2021/04/06
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Basic: Class & Prototype</h1>
<div align="center">2021.04.06</div>

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

### Refactoring the following code

```jsx
// create Switch
let switchName = 'Switch';
let switchCompany = 'Nintendo';
let switchGame = 'Mario';

// create xBox
let xBoxName = 'xBox';
let xBoxCompany = 'Microsoft';
let xBoxGame = 'Halo';

// create ps5
let ps5Name = 'PS5';
let ps5Company = 'Sony';
let ps5Game = 'Spiderman';

function turnOn(name) {
  console.log('Turn on', name);
}

function turnOff(name) {
  console.log('Turn off', name);
}
```

### Q1. refactoring using Class

::: details 🔑

```jsx
class Console {
  constructor(name, company, game) {
    this.name = name;
    this.company = company;
    this.game = game;
  }

  turnOn() {
    console.log('Turn on', this.name);
  }

  turnOff() {
    console.log('Turn off', this.name);
  }
}

const mySwitch = new Console('Switch', 'Nintendo', 'Mario');
const myXbox = new Console('xBox', 'Microsoft', 'Halo');
const myPs5 = new Console('PS5', 'Sony', 'Spiderman');

mySwitch.turnOn();
```

- `constructor`: a function to organize the properties of the class.
- `this`: it means the current object
- `new`: create new instance based on Class

:::

### Q2. How to call both of the functions in one line code?

::: details 🔑

- by **Mehtods chaining**

```jsx
class Console {
  constructor(name, company, game) {
    this.name = name;
    this.company = company;
    this.game = game;
  }

  turnOn() {
    console.log('Turn on', this.name);
    return this;
  }

  turnOff() {
    console.log('Turn off', this.name);
    return this;
  }
}

const mySwitch = new Console('Switch', 'Nintendo', 'Mario');

mySwitch.turnOn().turnOff();
```

- `return this`: after the function excute, return the current instance back. In this case means return _mySwitch_ back
- `mySwitch.turnOn().turnOff();`: method chaining

:::

### Q3. How to inheritance the Class

::: details 🔑

```jsx
class Console {
  constructor(name, company, game) {
    this.name = name;
    this.company = company;
    this.game = game;
  }

  turnOn() {
    console.log('Turn on', this.name);
    return this;
  }

  turnOff() {
    console.log('Turn off', this.name);
    return this;
  }
}

class PortablConsole extends Console {
  playEverywhere() {
    console.log('Play everywhere with ', this.name);
  }
}

const psp = new PortablConsole('psp', 'Sony', 'MonsterHunter');
psp.playEverywhere();
```

- `extends`: the keyword to inheritance from a class
- The properties in parent class can be used directly.

:::

### Q4. How to rewrite the Class by Prototype

::: details 🔑

```jsx
function Console(name, company, game) {
  this.name = name;
  this.company = company;
  this.game = game;
}

Console.prototype.turnOff = function () {
  console.log('Turn on', this.name);
};

Console.prototype.turnOn = function () {
  console.log('Turn off', this.name);
};

const mySwitch = new Console('Switch', 'Nintendo', 'Mario');
mySwitch.turnOff();
```

- `function Console`: it simulates the _constructor_ function
- `prototype`: organize the functions in prototype

:::

### Q5. How to excute Inheritance by Prototype

::: details 🔑

```jsx
function Console(name, company, game) {
  this.name = name;
  this.company = company;
  this.game = game;
}

Console.prototype.turnOff = function () {
  console.log('Turn on', this.name);
};
Console.prototype.turnOn = function () {
  console.log('Turn off', this.name);
};

// inheritance properties
function PortableConsole(...args) {
  Console.apply(this, args);
}
// inheritance functions
PortableConsole.prototype = Object.create(Console.prototype);
// add own function
PortableConsole.prototype.playEverywhere = function () {
  console.log('Play everywhere with', this.name);
};

const psp = new PortableConsole('PSP', 'Sony', 'Mario');
psp.turnOn();
psp.playEverywhere();
```

- `...args`: accept all the arguments from parent constructor
- `apply()`: the parente Prototype apply to child Prototype
  - `this`: as parameter means the parent Prototype
  - `args`: as parameter means accept all the constructor arguments
- `Object.create()`: inheritance functions, the parameter is the parent Prototype

:::

### Q6. Revealing module pattern

How to protect the _secretId_ property, prevent it is visit?

```js
const hero = {
  name: 'SpideMan',
  secretId: 7,
  go: function () {
    return `${this.name} go!`;
  },
};

console.log(hero.secretId, hero.go());
```

::: details 🔑

```js
const hero = (function () {
  const _name = 'SpiderMan';
  const _secretId = 7;

  const go = () => {
    return `${_name} go!`;
  };

  return { _name, go };
})();

console.log(hero._secretId); // => undefined
```

- `const hero = ()()`: immediately invoked function. The function will run when the programm start, no need to call it.
- `return { _name, go };`: only return the properties (include function) which can be visited from outside.

:::
