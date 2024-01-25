/*
  head:获取数组 array 的第一个元素
  @param {Array} arr 要查询的数组
  @returns {*} 返回数组的第一个元素
*/

function head(arr){
  if(!arr.length){
    return undefined
  }
  return arr[0]
}

//示例
let res=head(['a','b','c'])
console.log(res); //a
