/*
  split:根据separator 拆分字符串string。
  @param {string} str 要拆分的字符串
  @param {string} separator 拆分的分隔符
  @param {Number} limit 限制结果的数量
  @returns {string} 返回拆分部分的字符串的数组
*/

function splitStr(str,separator,limit){
  return str.split(separator).slice(0,limit)
}

//示例
let res=splitStr('a-b-c', '-', 2)
console.log(res); //[ 'a', 'b' ]
