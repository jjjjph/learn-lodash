/*
  flatten: 减少一级array嵌套深度
  @params {Array} 需要减少嵌套层级的数组
*/

function flatten(arr){
  return arr.reduce((res,item)=>{
    if(Array.isArray(item)){
      return res.concat(item)
    }else{
      return res.concat(item)
    }
  },[])
}

//示例
let res=flatten([1,2,[3],[4,[5,6,[9,0]]]])
console.log(res);
