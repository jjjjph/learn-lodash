/*
  last:获取数组 array 的第一个元素
  @params {Array} 要查询的数组
*/

function last(arr){
  const length=arr.length
  if(!length){
    return undefined
  }
  return arr[length-1]
}

//示例
let res=last(['w','d','s'])
console.log(res); //s
