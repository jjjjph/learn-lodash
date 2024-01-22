/*
  difference: 创建一个具有唯一值的数组，每个值不包含在其他给定的数组中，返回一个新数组
  @parmas {Array} array 要检查的数组
  @params {Array} ...args 排除的值
  @returns {Array} 返回一个过滤值后的新数组
*/

function difference(array,...args){
  const result=array.filter(item=>!args.includes(item))
  return result
}

//示例
let arr=[1,2,3]
let res=difference(arr,1,2,4)
console.log(res); //[3]
