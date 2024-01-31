/*
  assign：分配来源对象的可枚举属性到目标对象上，来源对象的应用规则是从左到右的，随后的下一个对象会覆盖上一个对象的属性
  @param {Object} object 目标对象
  @param {Object} args 来源对象
  @returns {Obejct} 返回覆盖后的对象
*/

function assign(object, ...args) {
  object = {};
  args.forEach((item) => {
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        object[key] = item[key];
      }
    }
  });

  return object;
}

//obj.hasOwnProperty(key):如果obj具有自己的(非继承的)名为key的属性，则返回true

//示例
function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;
let obj = { f: 0 };
let res = assign(obj, new Foo(), new Bar());
console.log(res); //{ a: 1, c: 3 }
