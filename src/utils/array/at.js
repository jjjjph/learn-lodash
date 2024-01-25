/*
  at:接受一个整数值并返回该索引对应的值，允许正数和负数
  @param {Array} arr 要查询的数组
  @param {Number} index 要查询的索引
  @returns {*} 返回对应索引的值
*/

function at(arr, index) {
  const length = arr.length;
  if (!length) {
    return [];
  }
  if (index < 0) {
    return arr[length + index];
  } else {
    return arr[index];
  }
}

//示例
let arr = [1, 2, 3, 4, 5];
let res = at(arr, -3);
console.log(res); //3
