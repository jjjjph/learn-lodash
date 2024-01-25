/*
  flatten: 减少一级array嵌套深度
  @param {Array} arr 需要减少嵌套层级的数组
  @returns {Array} 返回减少嵌套层级后的新数组
*/

function flatten(arr){
  return arr.reduce((res,item)=>{
      return res.concat(item)
  },[])
}

//示例
let res=flatten([1,2,[3],[4,[5,6,[9,0]]]])
console.log(res);  //[ 1, 2, 3, 4, [ 5, 6, [ 9, 0 ] ] ]
