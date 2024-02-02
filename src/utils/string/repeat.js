/*
  repeat:重复 N 次给定字符串
  @param {String} str 要重复的字符串
  @param {Number} num 重复的次数
  @returns {string} 返回重复的字符串
*/

function repeatStr(str,num=1){
  if(!num){
    return ''
  }

  return str.repeat(num)
}

//示例
let res=repeatStr('abc')
console.log(res);
