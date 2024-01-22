/*
  drop:创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  @params {Array} array 要切片的数组
  @params {Number} num=1 要取出的元素个数
  @returns {Array} 返回array剩余切片
*/

function drop(arr, num=1) {
  const length = arr.length;
  if (!length) {
    return [];
  }
  if (num > length) {
    num = length;
  }

  arr.splice(0,num);

}

//示例
let arr=[1, 2, 3]
drop(arr,0);
console.log(arr); //[2,3]
