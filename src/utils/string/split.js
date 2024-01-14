/*
  split:根据separator 拆分字符串string。
  @params {string} 要拆分的字符串
  @params {string} 拆分的分隔符
  @params {Number} 限制结果的数量
*/

function splitStr(str,separator,limit){
  return str.split(separator).slice(0,limit)
}

//示例
let res=splitStr('a-b-c', '-', 2)
console.log(res);
