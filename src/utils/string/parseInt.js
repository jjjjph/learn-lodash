/*
  parseInt:转换string字符串为指定基数的整数。 如果基数是 undefined 或者 0，则radix基数默认是10，如果string字符串是16进制，则radix基数为 16
  @params {String} 要转换的字符
  @params {Number} 基数
*/

function parseIntStr(str, radix) {
  const num = (!radix) ? 10 : radix;
  return parseInt(str, num);
}

//示例
// let res = parseIntStr("42"); //42
// let res = parseIntStr("1a",16); //26
let res=['6', '08', '10'].map(item=>parseIntStr(item))  //[6,8,10]
console.log(res);
