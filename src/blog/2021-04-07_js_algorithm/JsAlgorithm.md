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

### Q12. Capitalization

Given a phrase, capitalize every word.

```js
const str = 'hello world';

capitalizeWords(str); // => "Hello World"
```

::: details 🔑

```js
const str = 'hello world';

const capitalizeWords = (str) => {
  const words = str.split(' ');
  const capitalWords = [];

  for (const word of words) {
    capitalWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalWords.join(' ');
};

capitalizeWords(str); // => "Hello World"
```

- `words`: splite sentence to words and hold by an array
- `word[0].toUpperCase()`: get the first char of each word and capitalize it
- `word.slice(1)`: slice from 1st char (include 1st char). Only keep the chars from 1st position.
- `+`: combine the capital char and rest chars into an element, push it to new array

:::

### Q13. Caesar Cipher

Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

```js
const str = 'I love JavaScript!';

caesarCipher(str, 100); //=> "E hkra FwrwOynelp!"
caesarCipher(str, -100); //=> "M pszi NezeWgvmtx!"
```

::: details 🔑

```js
const str = 'I love JavaScript!';

const caesarCipher = (str, num) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const input = str.toLowerCase();
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // handle white-space
    if (alphabets.indexOf(char) === -1) {
      output += char;
      continue;
    }

    // calc output-char-index
    let oIndex = alphabets.indexOf(char) + (num % 26);
    if (oIndex > 25) oIndex -= 26;
    if (oIndex < 0) oIndex += 26;

    // build output-chars
    output +=
      str[i] === input[i] ? alphabets[oIndex] : alphabets[oIndex].toUpperCase();
  }

  return output;
};

caesarCipher(str, -100);
```

1. prepare

- `alphabets`: 26 english alphabets hold by an array
- `input`: the original string to lower case
- `output`: empty variable for result

2. skip special symbols

- `if (alphabets.indexOf(char) === -1)`: based on the alphabets, if the index is -1 means the char not exist in the alphabets
- `continue`: then just put the special symbols to the output, continue the loop

3. calculate output-char-index

- `num % 26`: how far the output index should be shift, based on the 26 counts of the alphabets
- `if (oIndex > 25) oIndex -= 26`: If the shift index greater than 25, then reduce 26, so that the index is wrapped around from the beginning
- `if (oIndex < 0) oIndex += 26`: If the shift index less than 0, then plus 26, so that the index can be found in the alphabet

4. build output

- `str[i] === input[i]`: check capitalize

:::

### Q14. Ransom Note

Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

```js
const mag = 'I love JavaScript do you love JavaScript';
const nt1 = 'I love you';
const nt2 = 'I miss you';

ransomNote(nt1, mag); //=> true
ransomNote(nt2, mag); //=> false
```

::: details 🔑

```js
const mag = 'I love JavaScript do you love JavaScript';
const nt1 = 'I love you';
const nt2 = 'I miss you';

const ransomNote = (note, magazine) => {
  const noteArr = note.split(' ');
  const magazineArr = magazine.split(' ');
  const magazineObj = {};
  let isInclude = true;

  // build magazineObj as word:count
  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  // check if note match magazine
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;

      if (magazineObj[word] < 0) isInclude = false;
    } else {
      isInclude = false;
    }
  });

  return isInclude;
};

ransomNote(nt1, mag); // => true
ransomNote(nt2, mag); // => false
```

1. prepare

- `noteArr`: split note and hold the words in array
- `magazineArr`: split magazine and hold the words in array
- `magazineObj`: empty object for later building the dictionary
- `isInclude`: the output result

2. build _magazine Object_

- iterate magazine array
- `if (!magazineObj[word])`: if the word not exist yet, then set the word as key, 0 as value.
- `magazineObj[word]++`: the work already exist, +1 to it's value

3. check if note match magazine

- iterate note array
- `if (magazineObj[word])`: if the magazineObj includes the current word, -1 from the value of the word
- `if (magazineObj[word] < 0)`: if the magazineObj doesn't have enough this word for note, set the result as false

:::

### Q15. Mean, Median, and Mode

Given an array of numbers, calculate the mean, median, and mode.

```js
const arr = [5, 1, 3, 2, 4, 4, 5];

mean(); // => 3.45
median(); // => 4
mode(); // => [4, 5]
```

::: details 🔑

```js
const arr = [5, 1, 3, 2, 4, 4, 5];

class Calc {
  constructor(arr) {
    this.arr = arr;
  }

  mean() {
    const reducer = (acc, curr) => acc + curr;
    const res = this.arr.reduce(reducer) / this.arr.length;

    return res.toFixed(2);
  }

  median() {
    const sort = this.arr.sort();
    const isEven = sort.length % 2 === 0 ? true : false;
    let res = null;

    if (isEven) {
      const xB = sort.length / 2;
      const xA = xB - 1;
      const mean = (sort[xA] + sort[xB]) / 2;

      res = mean.toFixed(2);
    } else {
      const xRes = (arr.length - 1) / 2;
      res = sort[xRes];
    }

    return res;
  }

  mode() {
    // build a table num:count
    const numObj = {};

    this.arr.forEach((ele) => {
      numObj[ele] = numObj[ele] + 1 || 1;
    });

    // find the modes
    let resArr = [];
    let maxCount = 0;

    for (const key in numObj) {
      if (numObj[key] > maxCount) {
        resArr = [key];
        maxCount = numObj[key];
      } else if (numObj[key] === maxCount) {
        resArr.push(key);
      }
    }

    return resArr;
  }
}

const meanRes = new Calc(arr).mean(); // => 3.45
const medianRes = new Calc(arr).median(); // => 4
const modeRes = new Calc(arr).mode(); // => [4, 5]
```

#### mean

1. get the average number

- `reduce`: add all the elements together, divide the length of the array

2. keep two decimal

- `toFixed(2)`: keep two decimal

#### median

- `sort`: sort the numbers ascending
- `isEven`: check the numbers length is even or odd
  - even length: find the two numbers in the middle, calculate the mean of them
  - odd length: find the one number in the middle

#### mode

1. build a object

- `numObj`: iterate each element in the original array, build an object(table), key is the number self, value is how often the number appear

2. find the modes

- `for...in`: iterate _numObj_ to get the key for each element, which is the number self.
- `if (numObj[key] > maxCount)`: if the current number's appear count greater than _maxCount_, then the current number-appear-count is _maxCount_, and overwrite the _resArr_ by current key (the number self).
- `else if (numObj[key] === maxCount)`: if there is another key which has the same number-appear-count like the _maxCount_, then push it to the result.

:::

### Q16. Two Sum

Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

```js
const arr = [1, 2, 2, 3, 4];
const sum = 4;

twoSum(arr, sum); // => [[2, 2],[3, 1]]
```

::: details 🔑

#### Solution 1

```js
const arr = [1, 2, 2, 3, 4];
const sum = 4;

const twoSum = (arr, sum) => {
  const prevNums = [];
  const res = [];

  for (const currNum of arr) {
    const needNum = sum - currNum;

    if (prevNums.indexOf(needNum) !== -1) {
      res.push([currNum, needNum]);
    } else {
      prevNums.push(currNum);
    }
  }

  return res;
};

twoSum(arr, sum); // => [[2, 2],[3, 1]]
```

- `for...of`: iterate the input-array to each _currNum_ in every iteration
- `needNum`: calculate the number we need to meet the sum
- `if (prevNums.indexOf(needNum) !== -1)`: check if there is already a number exist in the number-lib `prevNums`
  - number exist: we can combine _currNum_ and _needNum_ as result
  - number not exist: push the currNum to the number-lib `prevNums`

#### Solution 2

```js
const arr = [1, 2, 2, 3, 4];
const sum = 4;

const twoSum = (arr, sum) => {
  let resArr = [];

  // find the sum pair
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (x === y) continue;

      if (arr[x] + arr[y] === sum) {
        resArr.push([arr[x], arr[y]]);
      }
    }
  }

  // remove the repeat
  for (let x = 0; x < resArr.length; x++) {
    for (let y = 0; y < resArr.length; y++) {
      if (x === y) continue;

      if (resArr[x].sort().toString() === resArr[y].sort().toString()) {
        resArr = resArr.filter((arr) => arr !== resArr[y]);
      }
    }
  }

  return resArr;
};

twoSum(arr, sum); // => [[2, 2],[3, 1]]
```

1. find the sum pairs

- nested loop to compare each numbers of the input array
- `if (x === y) continue;`: skip the current number compare with itself

2. remove the repeat pairs

- nested loop to compare each numbers of the result array
- `if (resArr[x].sort().toString() === resArr[y].sort().toString())`: sort each element in the resArray, convert to string to compare if the pairs are the same
- `filter`: only keep the unique pairs

:::

### Q17. Max Profit

Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.

```js
const pricesA = [2, 1, 5, 3, 4];
const pricesB = [2, 10, 5, 1, 3];

maxProfit(pricesA); // => [1, 5]
maxProfit(pricesB); // => [2, 10]
```

::: details 🔑

```js
const pricesA = [2, 1, 5, 3, 4];
const pricesB = [2, 10, 5, 1, 3];

const maxProfit = (prices) => {
  let res = [];

  let minBuyPrice = null;
  let maxSellPrice = null;

  const sortPrices = prices.slice().sort((a, b) => a - b);

  for (let i = 0; i < sortPrices.length; i++) {
    minBuyPrice = sortPrices[i];
    maxSellPrice = sortPrices[prices.length - 1];

    if (prices.indexOf(minBuyPrice) < prices.indexOf(maxSellPrice)) {
      res = [minBuyPrice, maxSellPrice];
      break;
    }
  }

  return res;
};

maxProfit(pricesA); // => [1, 5]
maxProfit(pricesB); // => [2, 10]
```

- `sortPrices`: sort the original array ascending
  - `slice()`: we need this so that the original array not lost its sequence
  - `sort((a, b) => a - b)`: sort ascending
- `for`: iterate the _sortPrices_. After sort, the first element should be the smallest one, the last element is the biggest one.
- `if (prices.indexOf(minBuyPrice) < prices.indexOf(maxSellPrice))`: check if the _minBuyPrice_ is earlier than the _maxSellPrice_ by comparing the index of the original price
  - yes: found the result, break the loop
  - no: continue the loop, the 2nd smallest number will try to be the _minBugPrice_

:::

### Q18. Sieve of Eratosthenes

For a given number, find all the prime numbers from zero to that number.

```js
const num1 = 10;
const num2 = 19;

getPrimes(num1); // => [2, 3, 5, 7]
getPrimes(num2); // => [2, 3, 5, 7, 11, 13, 17, 19]
```

::: details 🔑

```js
const inputNum = 10;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimes = (num) => {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

getPrimes(inputNum); // => [2, 3, 5, 7]
```

1. check if it is prime-number

- The numbers less then 2 are not prime-number
- `for (let i = 2; i < num; i++)`: iterate the numbers from 2 to before itself
  - `if (num % i === 0)`: the number can be any of the iteration divided evenly, then the number is not prime-number

2. get all prime-numbers

- iterate the number from 2 to itself, if there is prime-number, then push to result-array

:::

### Q19. Fibonacci

Implement a function that returns the fibonacci number at a given index.

```js
const index1 = 6;
const index2 = 10;

getFibonacciNum(index1); // => 8
getFibonacciNum(index2); // => 55
```

::: details 🔑

#### Solution 1. regular

```js
const index = 10;

const getFibonacciNum = (index) => {
  const fibonaccis = [0];

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 0; i < index; i++) {
    fibonaccis.push(c);

    c = a + b;
    a = b;
    b = c;
  }

  return fibonaccis[index];
};

getFibonacciNum(index); //=> 55
```

- Fibonacci array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...]. 1st element plus 2nd element is 3rd element
- `fibonaccis`: the default contains 0
- `a, b, c`: the default of them are the 1st element to 3rd element in FibonacciArray
- each iterate update the positions for a, b, c

#### Solution 2. recursive function

```js
const index = 10;

const fib = (i) => {
  if (i === 0) {
    return 0;
  } else if (i < 3) {
    return 1;
  } else {
    return fib(i - 1) + fib(i - 2);
  }
};

fib(index); // => 55
```

- `if (i === 0)`: if the index is 0, the fibNum is 0
- `else if (i < 3)`: if the index is less than 3, the fibNum is 1
- `fib(i - 1) + fib(i - 2)`: recursive function, the result of the last one plus the result of the one before last one.

:::

### Q20. Staircase

For a given number of steps, print out a “staircase” using hashes and spaces.

```js
const layers = 3;

buildStair(layers);

// =>
//   #
//  ##
// ###
```

::: details 🔑

```js
const layers = 3;

// N = 3
// ss#\n i=0
// s##\n i=1
// ###\n i=2

const buildStair = (layers) => {
  let res = '';

  for (let i = 0; i < layers; i++) {
    let row = '';

    // space
    for (let j = 0; j < layers - i - 1; j++) {
      row += ' ';
    }

    // #
    for (let k = 0; k < i + 1; k++) {
      row += '#';
    }

    // newline
    row += '\n';

    // res
    res += row;
  }

  return res;
};

buildStair(layers);

/**
 *   #
 *  ##
 * ###
 */
```

1. the actully output seems like following:

```js
// N = 3
// ss#\n i=0
// s##\n i=1
// ###\n i=2
```

- _N_: in this case 3 layers as the input parameter
- _i_: the index of iteration
- _s_: space. It can be write as " " in program.
  - In each layer, the count of the _s_ is: **N-i-1**
- #: In each layer, the count of the # is: **i+1**

2. code

- `for (let i = 0; i < layers; i++)`: iterate each layer
  - `for (let j = 0; j < layers - i - 1; j++)`: in the current layer, create _space_ based on the formular **N-i-1**
  - `for (let k = 0; k < i + 1; k++)`: in the current layer, create # based on the formula **i+1**
  - `\n`: end of each layer add newline sign
  - `res`: add each layer to the result

:::

### Q21. Pyramid

For a given number of levels, print out a “pyramid” using hashes and spaces.

```js
const layers = 4;
buildStair(layers); // =>

//   #
//  ###
// #####
```

::: details 🔑

```js
const layers = 4;

const buildStair = (layers) => {
  let res = '';

  for (let i = 0; i < layers; i++) {
    let row = '';

    // space-left
    for (let x = 0; x < layers - i - 1; x++) {
      row += ' ';
    }

    // #
    for (let y = 0; y < i * 2 + 1; y++) {
      row += '#';
    }

    // space-right
    for (let z = 0; z < layers - i - 1; z++) {
      row += ' ';
    }

    // newline
    row += '\n';

    // res
    res += row;
  }

  return res;
};

buildStair(layers);
```

1. The actul output seems like the following:

```js
// N = 3
// ss#ss\n i=0
// s###s\n i=1
// #####\n i=2
```

- `N`: how many layer are there
- `i`: the index of each iteration for every layer
- `s`: the spaces for each row
- `#`: the pyramid self. The count of each row can be calculated by `# = i*2+1`
- `one side space`: each row has two part of spaces, each part can be calulated by `s-one-side = N-i-1`

2. Code

- Iterate layers
  - for each row: iterate left part of space by `s-one-side = N-i-1`
  - for each row: iterate pyramid briks by `# = i*2+1`
  - for each row: iterate right part of space by `s-one-side = N-i-1`
- `\n`: Add new line in the end of each row
- Add current row to result

:::

### Q22. Random Hex Color

How to get a random hex color?

```js
getHexColor(); //=> #8c2354
```

::: details 🔑

```js
function getHexColor() {
  return `#${Math.random().toString(16).substring(2, 8)}`;
}

getHexColor(); //=> #8c2354
```

- `Math.random()`: get a random number between 0 to 1
- `toString(16)`: convert the current number to string based on 16
- `substring(2, 8)`: get the part of the string, start from index 2, end to index 8

:::
