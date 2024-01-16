/*
  dropRight:创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  @params {Array} 要切片的数组
  @params {Number} 要取出的元素个数
*/

function dropRight(arr, num) {
  const length = arr.length;
  if (!length) {
    return [];
  }
  num = num === undefined ? 1 : num;
  if (num > length) {
    num = length;
  }
  const end = length - num;
  const result = arr.slice(0, end);
  return result;
}

//示例
let res = dropRight([1, 2, 3], 1);
console.log(res);
