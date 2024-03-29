/*
  padEnd:如果string字符串长度小于 length 则从右侧填充字符。 如果没法平均分配，则截断超出的长度
  @param {String} str 要填充的字符串
  @param {Number} length 填充的长度
  @param {String} value 填充的字符
  @returns {string} 返回填充后的字符串
*/

//padStart:从字符串的左侧填充

function padEnd(str,length=0,value=" "){
  const strLength=str.length
  const padding=length-strLength
  if(padding<0){
    return str
  }

  const chart=value===undefined?' ':value
  const rightChart=chart.repeat(padding).slice(0, padding);
  const result=str+rightChart
  return result
}

//示例
let res=padEnd('abc', 6, '_-')
console.log(res); //abc_-_
