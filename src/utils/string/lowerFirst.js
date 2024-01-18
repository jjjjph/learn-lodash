/*
  lowerFirst: 转换字符串string的首字母为小写
  @params {string} 要改写的字符串
*/

function lowerFirst(str){
  return str[0].toLowerCase()+str.slice(1)
}

//示例
let res=lowerFirst('FFFFBar')
console.log(res); //fFFFBar
