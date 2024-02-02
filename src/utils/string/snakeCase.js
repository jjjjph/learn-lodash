/*
  snakeCase:将字符串转换成snakeCase，即用下划线将单词连接
  @param {String} str 要转换的字符串
  @return {string} 返回转换后的字符串
*/

function snakeCase(str) {
  if (!str) {
    return "";
  }
  const reg = /[-_]+/;
  let newstr;
  if (reg.test(str)) {
    newstr = str.replace(/[A-Z]/, (chart) => `_${chart.toLowerCase()}`);
  } else {
    newstr = str.replace(/[A-Z]/g, (chart) => `_${chart.toLowerCase()}`);
  }
  const words = newstr.split(/[-_\s]+/).filter((item) => {
    if (item) {
      return item;
    }
  }); //将字符串分割成单词数组

  return words.map((str) => str.toLowerCase()).join("_");
}

//示例
let res = snakeCase("dshHggdJtgHjj");
console.log(res); //dsh_hggd_jtg_hjj
