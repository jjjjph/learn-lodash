/*
  replace:替换string字符串中匹配的pattern为给定的replacement
  @params {String} 要替换的字符串
  @params {String} 要匹配的内容
  @params {String} 替换的内容
*/

function replaceStr(str, pattern, replacement) {
  const length = str.length;
  const patternLength = pattern.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    if (str.slice(i, i + patternLength) === pattern) {
      result += replacement;
      i += patternLength - 1;
    } else {
      result += str[i];
    }
  }

  return result;
}

//示例
let res = replaceStr("Hello, world! Hello, world!", "world", "universe");
console.log(res); //'Hi Barney'
