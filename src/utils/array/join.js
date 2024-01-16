/*
    join:将array中的所有元素转换成为由separator分隔的字符串
    @params {Array} 要转换的数组
    @params {String} 分隔元素
*/

function join(arr,sep){
  const length=arr.length
  if(!length){
    return ''
  }

  return arr.reduce((acc,item)=>{
    acc=acc+sep+item
    return acc
  })
}

//示例
let res=join(['a','b','c'],'*')
console.log(res);
