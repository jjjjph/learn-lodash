/*
  findLastKey:这个方法类似findKey。 不过它是反方向开始遍历的
  @parmas {Object} 需要检索的对象
  @parmas {*} 每次迭代时调用的函数
*/

function findLastKey(obj, predicate) {
  const reverseKey = Object.keys(obj).reverse();
  const result = {};
  reverseKey.forEach((item) => {
    return (result[item] = obj[item]);
  });
  if (typeof predicate === "function") {
    console.log(result);
    for (const key in result) {
      if (predicate(result[key], key, result)) {
        return key;
      }
    }
  } else if (Object.prototype.toString.call(predicate) === "[object Object]") {
    const keys = Object.keys(predicate);
    for (const key in result) {
      if (keys.every((item) => result[key][item] === predicate[item])) {
        return key;
      }
    }
  } else if (Array.isArray(predicate)) {
    for (const key in result) {
      if (result[key][predicate[0]] === predicate[1]) {
        return key;
      }
    }
  } else if (typeof predicate === "string") {
    for (const key in result) {
      if (result[key][predicate]) {
        return key;
      }
    }
  }
}

//示例
let obj = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
let res = findLastKey(obj, { 'age': 1, 'active': true }); //pebbles
// let res=findLastKey(obj, function(o) { return o.age < 40; }) //pebbles
// let res=findLastKey(obj, ['active', false]) //fred
// let res=findLastKey(obj, 'active') //pebbles

console.log(res);
