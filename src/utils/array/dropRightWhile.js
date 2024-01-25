/*
  dropRightWhile:创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)
  @param {Array} arr 要查询的数组
  @param {Function} predicate 这个函数会在每一次迭代调用
  @returns {Array} 返回array剩余切片
*/

/*
  dropWhile :创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
  let start=0
  result.shift()
  start++
*/

function dropRightWhile(arr, predicate) {
  const result = arr;
  let start = result.length - 1; //数组从右开始遍历
  // let start = 0; //dropWhile 数组从左开始遍历

  if (typeof predicate === "function") {
    while (start >= 0 && predicate(result[start], start, result)) {
      result.pop();
      start--;
    }
  } else if (Array.isArray(predicate)) {
    while (start >= 0 && result[start][predicate[0]] === predicate[1]) {
      result.pop();
      start--;
    }
  } else if (typeof predicate === "string") {
    while (start >= 0 && result[start][predicate]) {
      result.pop();
      start--;
    }
  } else if (typeof predicate === "object") {
    const keys = Object.keys(predicate);
    while (
      start >= 0 &&
      keys.every((key) => result[start][key] === predicate[key])
    ) {
      result.pop();
      start--;
    }
  }

  return result;
}

//示例
let arr = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
// let res = dropRightWhile(arr, function (o) {
//   return !o.active;
// });   //[ { user: 'barney', active: true } ]
// let res = dropRightWhile(arr, { user: "pebbles", active: false }); //[ { user: 'barney', active: true }, { user: 'fred', active: false } ]
// let res = dropRightWhile(arr, ['active', false]); //[ { user: 'barney', active: true } ]
let res = dropRightWhile(arr, "active");
//[
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]

console.log(res);
