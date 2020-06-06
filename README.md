[![Bintray](https://img.shields.io/badge/npm-cool-green)](https://www.npmjs.com/package/@pthread/async-operators)

# async-operators

Async is Cool !!

## Install

```
$ npm install @pthread/async-operators
```

## Usage

```js
let { asyncMap, asyncFilter, asyncReduce } = require("async-operators")

//asyncMap(list, mapper, callback)
asyncMap([1, 2, 3, 4, 5, 6], i => i * 2, ar => console.log(ar))
console.log("i executed first")

//asyncReduce(list, reducer, callback)
asyncReduce([1, 2, 3, 4, 5, 6], (a, c) => a + c, d => console.log(d))
console.log("i executed first")

//asyncFilter(list, filter, callback)
asyncFilter([1, 2, 3, 4, 5, 6], i => i>2, d => console.log(d))
console.log("i executed first")

```


