/*
  escapeRegExp:转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", ", ", 和 "|"
  @params {String} 转义的字符串
*/



function escapeRegExp(str) {
  return str.replace(/[\\^$.*+?()[\]{}|]/g, (chart) =>`\\${chart}`);
}

//示例
let res = escapeRegExp("[lodash](https://lodash.com/)");
console.log(res); //\[lodash\]\(https://lodash\.com/\)
