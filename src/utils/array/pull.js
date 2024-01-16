/*
  pull:移除数组array中所有和给定值相等的元素
  @params {Array} 要修改的数组
  @params {...*} 要删除的值
*/

//pullAll:类似pull,区别在于第二个参数为数组

function pull(arr,...args){
  const length=arr.length
  if(!length){
    return []
  }

  return arr.filter(item=>{
    return !args.includes(item)
  })
}

//示例
let res=pull([1, 2, 3, 1, 2, 3], 2, 3)
console.log(res);
