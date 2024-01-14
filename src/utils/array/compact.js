/*
  compact:返回原数组中所有非假值元素组成的新数组。
  @params {Array} 需要处理的数组
*/

function compact(array){
  const result=[]
  if(array==null){
    return result
  }
  for(let i=0;i<array.length;i++){
    if(array[i]){
      result.push(array[i])
    }
  }
  return result
}

//示例
let arr=[0,1,'jj',null,'hello',9,7,'',false,undefined]
let res=compact(arr)
console.log(res);
