/*
  pull:移除数组array中所有和给定值相等的元素 ,改变原数组
  @params {Array} 要修改的数组
  @params {...*} 要删除的值
*/

//pullAll:类似pull,区别在于第二个参数为数组

function pull(arr, ...args) {
  const length = arr.length;
  if (!length) {
    return [];
  }

  args.forEach((value) => {
    let index = arr.indexOf(value);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(value);
    }
  });
}

//示例
let arr = [1, 2, 3, 1, 2, 3];
pull(arr, 2, 3);
console.log(arr);
