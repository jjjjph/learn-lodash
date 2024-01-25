/*
  compact:返回原数组中所有非假值元素组成的新数组。
  @param {Array} array 需要处理的数组
  @return {Array} 返回过滤掉假值的新数组
*/

function compact(array) {
  const result = [];
  if (array == null) {
    return result;
  }

  return array.filter((item) => {
    if (item) {
      return item;
    }
  });

  // for(let i=0;i<array.length;i++){
  //   if(array[i]){
  //     result.push(array[i])
  //   }
  // }
  // return result
}

//示例
let arr = [0, 1, "jj", null, "hello", 9, 7, "", false, undefined];
let res = compact(arr);
console.log(res); //[ 1, 'jj', 'hello', 9, 7 ]
