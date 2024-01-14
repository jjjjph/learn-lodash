/*
  repeat:重复 N 次给定字符串
  @params {String} 要重复的字符串
  @params {Number} 重复的次数
*/

function repeatStr(str,num){
  if(!num){
    return ''
  }

  return str.repeat(num)
}

//示例
let res=repeatStr('abc')
console.log(res);
