---
title: 'JavaScript Algorithm'
date: 2021/04/07
keyword: JavaScript
type: blog
---

<h1 align="center">JavaScript Algorithm</h1>
<div align="center">2021.04.07</div>

::: tip Contents
[[toc]]
:::

# 🙋🏻‍♂️ Q & A

### Q1. Add Sub-Arrays

How to write a function to get the following output?

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

### Q2. String Reversal

Given a string of characters as input, write a function that returns it with the characters reversed.

```js
const str = 'hello';
reverseStr(str);

// => "olleh"
```

:::details 🔑

```js
const reverseStr = (inputStr) => {
  return inputStr.split('').reverse().join('');
};

console.log(reverseStr('hello'));
```

- `split`: split the string to chars and hold them in an array
- `reverse`: reverse the items of the array
- `join`: join the items of the array into a string

:::

### Q3. Palindrome

A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

```js
const strA = 'hello';
const strB = 'lol';

checkPalindrome(strA); //=> false
checkPalindrome(strB); //=> true
```

::: details 🔑

```js
const strA = 'hello';
const strB = 'lol';

const checkPalindrome = (str) => {
  const originalStr = str.toLowerCase();
  const reverseStr = originalStr.split('').reverse().join('');

  return originalStr === reverseStr ? true : false;
};

console.log(checkPalindrome(strA)); //=> false
console.log(checkPalindrome(strB)); //=> true
```

:::

### Q4. Nummber Reversal

Given an integer, reverse the order of the digits.

```js
const numA = 1234;
const numB = -1200;

reverseNum(numA); //=> 4321
reverseNum(numB); //=> -21
```

::: details 🔑

```js
const numA = 1234;
const numB = -1200;

const reverseNum = (num) => {
  // reverse as string
  const toStr = num.toString().split('').reverse().join('');
  // convert to nummber
  const toNum = parseInt(toStr) * Math.sign(num);

  return toNum;
};

reverseNum(numA); //=> 4321
reverseNum(numB); //=> -21
```

- `toStr`:
  - convert the input nummber to string
  - reverse the it
- `toNum`:
  - `parseInt()`: convert string to nummber, and ignore the math sign if there are some
  - `Math.sign()`: get the input-number math-sign, either _-1_ or _1_
  - `*`: assign math-sign to the output-number

:::

### Q5. Fizz Buzz

Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

```js
getFizzBuzz(7);

/** =>
 * "Fizz Buzz"
 * 1
 * "Fizz"
 * "Buzz"
 * "Fizz"
 * 5
 * "Fizz Buzz"
 * 7
 */
```

::: details 🔑

```js
const getFizzBuzz = (num) => {
  const res = [];

  for (let index = 0; index <= num; index++) {
    if (index % 2 === 0 && index % 3 === 0) {
      res.push('Fizz Buzz');
    } else if (index % 2 === 0) {
      res.push('Fizz');
    } else if (index % 3 === 0) {
      res.push('Buzz');
    } else {
      res.push(index);
    }
  }

  return res;
};

const res = getFizzBuzz(7);
console.log(res);
```

- `%`: **modulus operator** can be used to check for divisibility.
  - remainders === 0: divisible
  - remainders !== 0: indivisible
- _Fizz Buzz_: current number is divisible by 2 and 3
- _Fizz_: current number is divisible by 2
- _Buzz_: current number is divisible by 3
- `res`: the result will be saved inside of an array
- `for`: iterate from 0 to the input number

:::

### Q6. Max Char

Given a string of characters, return the character that appears the most often.

```js
const str = 'hallo';

getMaxChar(str); // => "l"
```

::: details 🔑

#### Solution 1.

```js
const str = 'hallo';

const getMaxChar = (str) => {
  let maxChar = '';
  let max = 0;

  for (let char of str) {
    if (str.split(char).length > max) {
      maxChar = char;
      max = str.split(char).length - 1;
    }
  }

  return { maxChar, max };
};

getMaxChar(str);
```

- `for...of`: iterate the chars of string
- `splite()`: split the string as group into an array by current char
  - current char is 'h': `(2) ["", "allo"]`
  - current chat is 'l': `(3) ["ha", "", "o"]`

#### Solution 2.

```js
const str = 'hallo';

const getMaxChar = (str) => {
  const chars = {};
  let maxChar = '';
  let max = 0;

  // build char:count object
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  // find the maxChar
  for (let char in chars) {
    if (chars[char] > max) {
      maxChar = char;
      max = chars[char];
    }
  }

  return { maxChar, max };
};

getMaxChar(str);
```

- `chars[char] = chars[char] + 1 || 1`: build key:value pair
  - key: char
  - value: count of the char
- `for...in`: iterate key-value-pair of an object

:::

### Q7. Anagrams

Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

```js
const str1 = 'abcd';
const str2 = 'bcad';
const str3 = 'bccd';

isAnagrams(str1, str2); //=> true
isAnagrams(str1, str3); //=> false
```

::: details 🔑

```js
const str1 = 'abcd';
const str2 = 'bcad';
const str3 = 'bccd';

const isAnagrams = (str1, str2) => {
  const sort1 = str1.split('').sort().join('');
  const sort2 = str2.split('').sort().join('');

  return sort1 === sort2;
};

isAnagrams(str1, str2);
isAnagrams(str1, str3);
```

- There are two requirements:
  1. The two strings have same count of chars
  2. The two strings contain the same chars
- `sort()`: split the string to chars, then sort them by alphabet, in the end compare them.

:::

### Q8. Vowels

Given a string of words or phrases, count the number of vowels.

```js
const str = 'Hello world';

countVowels(str); // => 3
```

::: details 🔑

```js
const str = 'Hello world';

const countVowels = (str) => {
  const vowels = 'aeiou';
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

countVowels(str); // => 3
```

- `vowels`: all the vowels letters
- `for...of`: iterate the string to chars
- `includes`: check if the _vowels_ includes the current _char_ , then set the counter

:::

### Q9. Array Chunking

Given an array and a size, split the array items into a list of arrays of the given size.

```js
const arr = [1, 2, 3, 4, 5];
const elemCount = 2; // each subArray has two elements if enough

chunkArr(arr, elemCount); //=> [[1,2],[3,4],[5]]
```

::: details 🔑

```js
const arr = [1, 2, 3, 4, 5];
const elemCount = 2;

const chunkArr = (arr, elemCount) => {
  const mainArr = [];

  for (const elem of arr) {
    let lastSubArr = mainArr[mainArr.length - 1];

    if (!lastSubArr || lastSubArr.length === elemCount) {
      mainArr.push([elem]);
    } else {
      lastSubArr.push(elem);
    }
  }

  return mainArr;
};

chunkArr(arr, elemCount); //=> [[1,2],[3,4],[5]]
```

- `for...of`: iterate the given array
- `latSubArr`: get the _subArray_ by calculating _mainArray_ length
- create a new _subArray_
  - `!lastSubArr`: if the lastSubArr not exist yet
  - `lastSubArr.length === elemCount`: if the lastSubArr already hit the required elementCount
- add element to this array
  - `lastSubArr.push(elem)`: add current element into current subArray

:::

### Q10. Reverse Array

Given an array of items, reverse the order.

```js
const arr = [1, 2, 3, 4];

reverseArr(arr); // => [5,4,3,2,1]
```

::: details 🔑

```js
const arr = [1, 2, 3, 4];

const reverseArr = (arr) => {
  const revArr = [];

  for (let i = arr.length; i > 0; i--) {
    revArr.push(arr[i - 1]);
  }

  return revArr;
};

reverseArr(arr); // => [5,4,3,2,1]
```

- It can also be solved by `reverse()` simply
- `for`: take advantage of the the array.length, iterate the array-element from the last one to the first one

:::

### Q11. Reverse Words

Given a phrase, reverse the order of the characters of each word.

```js
const str = 'I love JavaScript!';

reverseWords(str); //=> "I evol !tpircSavaJ"
```

::: details 🔑

```js
const str = 'I love JavaScript!';

const reverseWords = (str) => {
  const words = str.split(' ');
  const reversedWords = [];

  for (const word of words) {
    const reversedWord = word.split('').reverse().join('');
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
};

reverseWords(str); //=> "I evol !tpircSavaJ"
```

- `words`: splite the sentence to words, and hold by array
- `for`: iterate each words of the sentence.
- `reversedWord`: splite word to chars, reverse it, join back to word, push to a new array `reversedWords`
- `reversedWords.join(' ')`: join the words back, and seperate by empty-space

:::
