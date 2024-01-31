/*
  remove:移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)
  @param {Array} 要的数组
  @param {Function} 这个函数会在每一次迭代调用
  @returns {Array} 改变后的数组
*/

function remove(arr, predicate) {
  let start = arr.length - 1;
  const result = [];

  if (typeof predicate === "function") {
    for (let i = start; i >= 0; i--) {
      if (predicate(arr[i], i, arr)) {
        result.unshift(array.splice(i, 1)[0]);
      }
    }
  } else if (Object.prototype.toString.call(predicate) === "[object Object]") {
    const keys = Object.keys(predicate);
    for (let i = start; i >= 0; i--) {
      if (keys.every((key) => arr[i][key] === predicate[key])) {
        result.unshift(array.splice(i, 1)[0]);
      }
    }
  } else if (Array.isArray(predicate)) {
    for (let i = start; i >= 0; i--) {
      if (arr[i][predicate[0]] === predicate[1]) {
        result.unshift(array.splice(i, 1)[0]);
      }
    }
  } else if (typeof predicate === "string") {
    for (let i = start; i >= 0; i--) {
      if (arr[i][predicate]) {
        result.unshift(array.splice(i, 1)[0]);
      }
    }
  }

  return result;
}

//示例
let array = [1, 2, 3, 4];
let evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array, "原数组"); //[ 1, 3 ]
console.log(evens, "函数结果"); //[ 2, 4 ]
