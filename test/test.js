
let { asyncMap, asyncReduce, asyncFilter } = require("../src/index");

var assert = require('assert');
describe('Array', function () {
    describe('Map', function () {
        it('should execute map function asynchronously', async function () {
            var list = [1, 2, 3];
            var mapper = e => e * 2;
            var o = await asyncMap(list, mapper)
            assert.equal(JSON.stringify(o), JSON.stringify([2, 4, 6]));
        });
    });
    describe('Reduce', function () {
        it('should execute reduce function asynchronously', async function () {
            var list = [1, 2, 3];
            var reducer = (a, c) => a + c;
            var o = await asyncReduce(list, reducer)
            assert.equal(o, 6);
        });
    });
    describe('Filter', function () {
        it('should execute filter function asynchronously', async function () {
            var list = [1, 2, 3];
            var filter = e => e > 2;
            var o = await asyncFilter(list, filter)
            assert.equal(JSON.stringify(o), JSON.stringify([3]));
        });
    });
});

