[![Bintray](https://img.shields.io/badge/npm-cool-green)](https://www.npmjs.com/package/@pthread/async-operators)
[![Bintray](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FAliShamin%2Fjs-async-operators)](https://twitter.com/ali_sshamin)

# async-operators

Async is Cool !!

## Install

```
$ npm install @pthread/async-operators
```

## Usage

```js
let { asyncMap, asyncFilter, asyncReduce } = require("async-operators")

//asyncMap(list, mapper)
asyncMap([1, 2, 3, 4, 5, 6], i => i * 2).then(o=>{console.log(o)});
console.log("i executed first");

//asyncReduce(list, reducer)
asyncReduce([1, 2, 3, 4, 5, 6], (a, c) => a + c).then(o=>{console.log(o)});
console.log("i executed first");

//asyncFilter(list, filter)
asyncFilter([1, 2, 3, 4, 5, 6], i => i>2).then(o=>{console.log(o)});
console.log("i executed first");

```


