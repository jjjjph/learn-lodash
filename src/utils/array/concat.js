/*
  concat: 将array与任何数组或值连接起来，返回一个新数组
  @param {Array} array 被连接的数组
  @param {*} ...args 连接的值
  @returns {Array} 返回连接后的新数组
*/

function concat(array,...args){
  const arr=args.reduce((arr,item)=>{
    if(Array.isArray(item)){
      return arr.concat(item)
    }else{
      return arr.concat([item])
    }
  },[])
  const result=[...array,...arr]
  return result
}

//示例
let arr=[1]
let res=concat(arr,'ss',[4,5],[[6]],[[[9]]])
console.log(res); //[ 1, 'ss', 4, 5, [ 6 ], [ [ 9 ] ] ]
