/*
  functions:创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性
  @params {Object} 要检查的对象
*/

function functions(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
      result.push(key);
    }
  }
  return result;
}

//示例
function Foo() {
  this.a = function () {
    console.log("a");
  };
  this.b = 8;
}

Foo.prototype.c = function () {
  console.log("j");
};
let res = functions(new Foo());
console.log(res);
