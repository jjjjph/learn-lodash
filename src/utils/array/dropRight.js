/*
  dropRight:创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  @param {Array} arr 要切片的数组
  @param {Number} num=1 要取出的元素个数
  @returns {Array} 返回array剩余切片
*/

function dropRight(arr, num = 1) {
  const length = arr.length;
  if (!length) {
    return [];
  }
  if (num > length) {
    num = length;
  }
  const end = length - num;
  arr.splice(end, length);
}

//示例
let arr = [1, 2, 3, 4, 5, 6, 7];
dropRight(arr, 2);
console.log(arr); //[ 1, 2, 3, 4, 5 ]
