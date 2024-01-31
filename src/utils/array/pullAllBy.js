/*
  pullAllBy:类似pullAll，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较.改变原数组
  @param {Array} arr 要修改的数组
  @param {Array} 要移除的数组
  @param {*} iteratee 迭代器调用每个元素
  @returns {Array} 改变后的数组
*/

function pullAllBy(arr, val, iteratee) {
  const length = arr.length;
  let predicate;
  if (!length) {
    return [];
  }
  if (typeof iteratee === "string") {
    predicate = (item) => item[iteratee];
  } else {
    predicate = iteratee;
  }
  for (let i = length-1; i >-0; i--) {
    const newItem = predicate(arr[i]);
    if (val.some((item) => predicate(item) === newItem)) {

      arr.splice(i, 1);
    }
  }
}

//示例
let arr = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], "x");
console.log(arr); //[ { x: 1 }, { x: 2 } ]
