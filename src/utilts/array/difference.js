/*
  difference: 创建一个具有唯一值的数组，每个值不包含在其他给定的数组中，返回一个新数组
  @parmas {Array} 要检查的数组
  @params {}
*/

function difference(array,...args){
  const all=array.concat(...args)
  const result=Array.from(new Set(all))
  return result
}

//示例
let arr=[1,2,3]
let res=difference(arr,1,2,4)
console.log(res);
