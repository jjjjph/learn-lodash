/*
    join:将array中的所有元素转换成为由separator分隔的字符串
    @param {Array} arr 要转换的数组
    @param {String} sep 分隔元素
    @returns {String} 返回连接字符串
*/

function join(arr,sep){
  const length=arr.length
  if(!length){
    return ''
  }

  // return arr.reduce((acc,item)=>{
  //   acc=acc+sep+item
  //   return acc
  // })
  return arr.join(sep)
}

//示例
let res=join(['a','b','c'],'*')
console.log(res);  //a*b*c
