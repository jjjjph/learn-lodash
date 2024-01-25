/*
  indexOf:返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
  @param {Array} arr 需要检索的数组
  @param {*} value 需要查找的值
  @param {Number} index 开始查找的位置
  @returns {Number} 返回值value在数组中的索引位置，没有找到就返回-1
*/

//lastIndexOf:从右往左开始找

function indexOf(arr, value, index = 0) {
  const length = arr.length;
  const start = index >= 0 ? index : Math.max(length + index, 0);
  for (let i = start; i < length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

//示例
// let res = indexOf([1, 2, 3], 4);
let res = lastIndexOf([1, 2, 3], 1, 5); //0
console.log(res); //-1

function lastIndexOf(arr, val, index) {
  const length = arr.length;
  let end;
  if (!index || index >= length) {
    end = length - 1;
  } else {
    end = index;
  }
  for (let i = end; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
