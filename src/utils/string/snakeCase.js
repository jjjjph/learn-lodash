/*
  snakeCase:将字符串转换成snakeCase，即用下划线将单词连接
  @params {String} 要转换的字符串
*/

function snakeCase(str){
  if(!str){
    return ''
  }
  const newstr=str.replace(/[A-Z]/,(chart)=>`_${chart.toLowerCase()}`)
  const words=newstr.split(/[-_\s]+/).filter(item=>{
    if(item){
      return item
    }
  })  //将字符串分割成单词数组



  return words.map(str=>str.toLowerCase()).join("_")


}

//示例
let res=snakeCase('__FOO_BAR__')
console.log(res);
