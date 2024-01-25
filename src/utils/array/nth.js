/*
  nth:接受一个整数值并返回该索引对应的值，允许正数和负数
  @param {Array} arr 要查询的数组
  @param {Number} index 要查询的索引
  @returns {*} 返回对应索引的值
*/

function nth(arr, index) {
  const length = arr.length;
  if (!length) {
    return [];
  }
  // if (index < 0) {
  //   return arr[length + index];
  // } else {
  //   return arr[index];
  // }
  return arr.at(index)
}

//示例
let arr = [1, 2, 3, 4, 5];
let res = nth(arr, -3);
console.log(res); //3
