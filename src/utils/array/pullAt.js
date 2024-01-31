/*
  pullAt:根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组
  @param {Array} 要修改的数组
  @param {...Number} 要移除的索引
  @returns {Array} 返回移除元素组成的新数组
*/

function pullAt(arr, ...args) {
  const length = arr.length;
  if (!length) {
    return;
  }

  const result = args.map((item) => {
    return arr[item];
  }); //取出要移除的元素

  result.forEach((val) => {
    let index = arr.indexOf(val);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(val);
    }
  }); //在原数组中删除

  return result;
}

//示例
let array = [5, 10, 15, 20];
let evens = pullAt(array, 1, 6);

console.log(array, "原数组"); //[ 5, 15 ]
console.log(evens, "函数结果"); //[ 10, undefined ]
