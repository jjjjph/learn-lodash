/*
  head:获取数组 array 的第一个元素
  @params {Array} 要查询的数组
*/

function head(arr){
  if(!arr.length){
    return undefined
  }
  return arr[0]
}

//示例
let res=head([])
console.log(res);
