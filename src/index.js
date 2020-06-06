const getMapData = (list, mapper) => Promise.resolve(list.map(mapper))
const getFilterData = (list, filter) => Promise.resolve(list.filter(filter))
const getReducedData = (list, reducer) => Promise.resolve(list.reduce(reducer))


const asyncMap = (list, mapper) => {
    return getMapData(list, mapper);
}

const asyncFilter = (list, filter, cb) => {
    return getFilterData(list, filter)
}

const asyncReduce = (list, reducer, cb) => {
    return getReducedData(list, reducer)
}

module.exports = {
    asyncMap,
    asyncFilter,
    asyncReduce
}
