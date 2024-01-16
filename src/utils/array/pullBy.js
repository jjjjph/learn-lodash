/*
  pullBy:类似pullAll，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较
  @params {Array} 要修改的数组
  @params {...*} 要删除的值
*/

function pullBy(arr, val, key) {
  const length = arr.length;
  let iteratee;
  if (!length) {
    return [];
  }
  if (typeof key === "string") {
    iteratee = (item) => item[key];
  } else {
    iteratee = key;
  }
  const turnArr = val.map((item) => iteratee(item));
  const result= arr.filter((item) => !turnArr.includes(iteratee(item)));
  return result
}

//示例
let res = pullBy(
  [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }],
  [{ x: 1 }, { x: 3 }],
  "x"
);
console.log(res);
