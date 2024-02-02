/*
  pad:如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度
  @param {String} str 要填充的字符串
  @param {Number} length 填充的长度
  @param {String} value 填充的字符
  @returns {string} 返回填充后的字符串
*/

function pad(str,length=0,value=' '){
  const strLength=str.length
  const padding=length-strLength
  if(padding<0){
    return str
  }

  const leftLength=Math.floor(padding/2)
  const rightLength=padding-leftLength
  const chart=value===undefined?' ':value
  const leftChart=chart.repeat(leftLength).slice(0, leftLength)
  const rightChart=chart.repeat(rightLength).slice(0, rightLength);
  const result=leftChart+str+rightChart
  return result
}

//示例
let res=pad('abc', 8,'_-')
console.log(res); //_-abc_-_
