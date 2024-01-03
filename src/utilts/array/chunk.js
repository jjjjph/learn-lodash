/*
  chunk:把数组拆分成指定长度的区块，并将这些区块组成一个新的数组，如果不能等分，则剩余的元素组成一个区块
  @parmas {Array} array 需要拆分的数组
  @parmas {Number} size 需要拆分的长度
*/

function chunk(array,size){
  let length=array.length
  //首先判断数组是否为空数组,如果为空数组则直接返回[]
  if(!length){
    return []
  }
  const result=[]
  for(let i=0;i<length;i+=size){
    const chunk=array.slice(i,i+size)
    result.push(chunk)
  }
  return result
}
//array.slice(开始索引，结束索引)左闭右开，截取数组，返回新的数组，不改变原数组

//示例
let arr=[1,2,3,4,5,6,7,8]
let res=chunk(arr,3)
console.log(res); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
