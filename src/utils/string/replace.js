/*
  replace:替换string字符串中匹配的pattern为给定的replacement
  @params {String} 要替换的字符串
  @params {String} 要匹配的内容
  @params {String} 替换的内容
*/

function replaceStr(str,pattern,replacement){
  return str.replace(pattern,replacement)
}

//示例
let res=replaceStr('Hi Fred', 'Fred', 'Barney')
console.log(res); //'Hi Barney'
