/*
  intersection:创建唯一值的数组,可以理解为给定数组的交集
  @param {...Array} ...args 待检查的数组
  @returns {Array} 返回一个包含所有传入数组交集元素的新数组
*/

function intersection(...args){
 const [first,...res]=args
 const length=args.length
 if(!length){
  return
 }
 return first.filter(item=>{
    return res.every(it=>it.includes(item))
 })
}

//示例
let res=intersection([2, 1], [4, 2], [1, 2])
console.log(res); //[2]
