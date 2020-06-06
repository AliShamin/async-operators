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


