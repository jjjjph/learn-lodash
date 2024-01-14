/*
  startCase: 转换字符串string为startCase.即首字母大写，用空格隔开
  @params {string} 要改写的字符串
*/

function kebabCase(str) {
  if (!str) {
    return "";
  }
  const reg=/[-_]+/
  let newstr;
  if (reg.test(str)) {
    newstr = str.replace(/[A-Z]/, (chart) => `-${chart.toLowerCase()}`);
  } else {
    newstr = str.replace(/[A-Z]/g, (chart) => `-${chart.toLowerCase()}`);
  }
  const words = newstr.split(/[-_\s]+/).filter((item) => {
    if (item) {
      return item;
    }
  }); //将字符串分割成单词数组

  const camelCaseString = words
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");

  return camelCaseString;
}

// \s空白字符
//toLowerCase()小写

//示例
let res = kebabCase("gsddGhhJjg");
console.log(res);
