/*
  indexOf:返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
  @params {Array} 需要检索的数组
  @params {*} 需要查找的值
  @params {Number} 开始查找的位置
*/

function indexOf(arr, value, index = 0) {
  const length = arr.length;
  const start = index >= 0 ? index : Math.max(length + index, 0);
  for (let i = start; i < length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1
}

//示例
let res = indexOf([1, 2, 3], 4);
console.log(res);  //-1
