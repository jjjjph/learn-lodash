/*
  fill:使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
  @params {Array} 要填充改变的数组
  @params {*} 要填充的值
  @params {Number} 开始的位置
  @params {Number} 结束的位置
*/

function fill(arr, value, start, end) {
  const length = arr.length;
  const begin = start === undefined ? 0 : start;
  const done = end === undefined ? length : end;
  for (let i = begin; i < done; i++) {
    arr[i] = value;
  }

  return arr;
}

//示例
let arr = [1, 2, 3];
let res = fill([4, 6, 8, 10], '*', 1, 3)
console.log(res);
