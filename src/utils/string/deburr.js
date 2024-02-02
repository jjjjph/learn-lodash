/*
  deburr: 转换字符串string中拉丁语-1补充字母 和拉丁语扩展字母-A 为基本的拉丁字母，并且去除组合变音标记
  @param {string} str要改写的字符串
  @returns {string} 返回处理后的字符串
*/

function deburr(str) {
  //拉丁语-1补充字母:[\u0080-\u00FF]
  //拉丁语扩展字母-A:[\u0100-\u017F]
  const reg = /[\u0080-\u00FF\u0100-\u017F]/g;

  // 使用 String.prototype.normalize 去除组合变音标记
  const cancleUmlaut = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");



  console.log(cancleUmlaut("déjà vu"),'kkk');
  let result = str.replace(reg, cancleUmlaut);
  return result;
}

//"\u0300-\u036F" # 结合用读音符号
//.normalize("NFD")方法用于查找作为参数传递给函数的字符串的 Unicode 规范化形式.NFD:Normalization form 规范分解
//replace(old, new) 将字符串中的old字符串全部替换为new

//示例
let res = deburr("déjà vu");
console.log(res); //deja vu
