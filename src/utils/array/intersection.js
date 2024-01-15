/*
  intersection:创建唯一值的数组
  @params {...Array} 待检查的数组
*/

function intersection(...args){
 const arr=[...args]
 const length=arr.length
 if(!length){
  return
 }
 return arr[0].filter(item=>{
    return arr.slice(1).every(it=>it.includes(item))
 })
}

//示例
let res=intersection([2, 1], [4, 2], [1, 2])
console.log(res);
