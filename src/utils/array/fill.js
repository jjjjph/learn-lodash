/*
  fill:使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）,会改变原数组
  @param {Array} arr 要填充改变的数组
  @param {*} value 要填充的值
  @param {Number} start 开始的位置
  @param {Number} end 结束的位置
  @returns {Array} 返回被改变后的原数组
*/

function fill(arr, value, start=0, end=arr.legth) {
  // const length = arr.length;
  // const begin = start === undefined ? 0 : start;
  // const done = end === undefined ? length : end;
  // for (let i = begin; i < done; i++) {
  //   arr[i] = value;
  // }

  // return arr;
  return arr.fill(value,start,end)
}

//示例
let arr = [4, 6, 8, 10];
fill(arr, '*')
console.log(arr); //[ 4, '*', '*', 10 ]
