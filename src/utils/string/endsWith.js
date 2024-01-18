/*
  endsWith: 检查字符串string是否以给定的target字符串结尾，返回true/false
  @params {String} 被检查的字符串
  @params {String} 要检索的字符串
  @params {Number} 检索的位置
*/

function endsWith(str, target, position = "") {
  if (!str) {
    return "";
  }
  const length = str.length;
  if (position < 0) {
    position = 0;
  } else if(position>length || !position){
    position = length;
  }
  const start=position-target.length
  const end=position
  return start>=0 && str.slice(start,end)===target
}

let res=endsWith('abc', 'b',2)
console.log(res); //true
