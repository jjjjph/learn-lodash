/*
  kebabCase: 转换字符串string为kebab case.kebab case是字符串格式的一种，也称为短线连接命名法、短横线命名法、中横线命名法等，它是一种用短横线连接各个单词组成的命名格式。
  @param {string} str 要改写的字符串
  @returns {string} 返回转换后的字符串
*/

function kebabCase(str) {
  if (!str) {
    return "";
  }
  const reg = /[-_]+/;
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

  const camelCaseString = words.map((str) => str.toLowerCase()).join("-");

  return camelCaseString;
}

// \s空白字符
//toLowerCase()小写

//示例
// let res = kebabCase("--Gdjs-Jhds-tgg");//gdjs-jhds-tgg
let res = kebabCase("fooBff"); //foo-bff
console.log(res);
