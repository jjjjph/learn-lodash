/*
  findKey:这个方法类似find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身
  @params {Object} 需要检索的对象
  @params {*} 每次迭代时调用的函数
*/

function findKey(obj, predicate) {
  const result = obj;

  if (typeof predicate === "function") {
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
    for (const key in result){
      if(result[key][predicate]){
        return key
      }
    }
  }

  return result;
}

//示例
let obj = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
let res = findKey(obj, { 'age': 1, 'active': true });

console.log(res);
