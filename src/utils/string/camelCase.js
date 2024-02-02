/*
  camelCase: 将字符串改为驼峰写法
  @param {string} str 要改写的字符串
  @returns {string} 返回驼峰写法的字符串
*/

function camelCase(str) {
  if (!str) {
    return "";
  }

  // const words=str.split(/[-_\s]+/).filter(item=>{
  //   if(item){
  //     return item
  //   }
  // })  //将字符串分割成单词数组

  const newstr = str.replace(/[A-Z]/g, (chart) => `-${chart.toLowerCase()}`);
  const words = newstr.split(/[-_\s]+/).filter((item) => {
    if (item) {
      return item;
    }
  });

  const camelCaseString =
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
      .join("");

  return camelCaseString;
}

// \s空白字符
//toLowerCase()小写
//toUpperCase()大写
//charAt(index)返回字符串中第index个字符

//示例
// let res = camelCase("__hello-wordWgghTgghhjGng"); //helloWordWgghTgghhjGng
// let res=camelCase('__hello-wordWFssHHH') //helloWordWFssHHH
let res=camelCase('hellowordWFFF') //hellowordWFFF
console.log(res); //helloWord
