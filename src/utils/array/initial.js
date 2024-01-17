/*
  initial:去除数组的最后的一个元素
  @params {Array} 要查询的数组
*/

function initial(arr){
  const length=arr.length
  if(!length){
    return
  }

  // return arr.slice(0,length-1)
  const result=arr.splice(0,length-1)
  return result
}

//示例
let res=initial([1, 2, 3])
console.log(res); //[ 1, 2 ]
