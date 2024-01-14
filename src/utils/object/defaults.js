/*
  defaults:分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉
  @params {Object} 目标对象
  @params {Object} 来源对象
*/

function defaults(obj, ...sources) {
  sources.forEach((source) => {
    if (source) {
      for (const key in source) {
        if (!(key in obj)) {
          obj[key] = source[key];
        }
      }
    }
  });

  return obj;
}

//示例
let res = defaults({ a: 1 }, { b: 2 }, { a: 3 },null, { d: 2 });
console.log(res);
