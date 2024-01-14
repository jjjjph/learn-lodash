/*
  escape:转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符
  @params {String} 转义的字符串
*/

const htmlCode = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escape(str) {
  return str.replace(/[&<>"']/g, (chart) => htmlCode[chart]);
}

//示例
let res = escape("< hhh");
console.log(res);
