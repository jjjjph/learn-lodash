/*
    findIndex: 该方法类似find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
    @param {Object} arr 需要检索的对象
    @param {*} predicate 每次迭代时调用的函数
    @param {Number} fromIndex 开始检索的位置
    @returns {Number} 返回找到元素的索引值，否则返回-1
*/
//findLastIndex:类似findIndex，区别是它是从右到左的迭代集合array中的元素
// const start=fromIndex===undefined?length-1:fromIndex
//for(let i=start;i>=0;i--)

function findIndex(arr, predicate, fromIndex) {
  const start = fromIndex === undefined ? 0 : fromIndex;
  const length = arr.length;
  // const start=fromIndex===undefined?length-1:fromIndex

  if (typeof predicate === "function") {
    for (let i = start; i < length; i++) {
      // for(let i=start;i>=0;i--){
      if (predicate(arr[i], i, arr)) {
        return i;
      }
    }
  } else if (Array.isArray(predicate)) {
    for (let i = start; i < length; i++) {
      if (arr[i][predicate[0]] === predicate[1]) {
        return i;
      }
    }
  } else if (typeof predicate === "string") {
    for (let i = start; i < length; i++) {
      if (arr[i][predicate]) {
        return i;
      }
    }
  } else if (typeof predicate === "object") {
    const keys = Object.keys(predicate);
    for (let i = start; i < length; i++) {
      if (keys.every((key) => arr[i][key] === predicate[key])) {
        return i;
      }
    }
  }
}

//示例
let arr = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "barney", active: false },
];
// let res = findIndex(arr, function (o) {
//   return o.user=='barney';
// }); //0
// let res = findIndex(arr,{ 'user': 'fred', 'active': false }) //1
// let res = findIndex(arr,['active', false]) //1
let res = findIndex(arr, "active"); //0

console.log(res);
