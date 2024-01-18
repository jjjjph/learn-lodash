/*
  defaultsDeep:类似defaults，除了它会递归分配默认属性
  @params {Object} 目标对象
  @params {Object} 来源对象
*/

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

function defaultsDeep(obj, ...sources) {
  sources.forEach((source) => {
    if (source) {
      for (const key in source) {
        if (isObject(obj[key]) && isObject(source[key])) {
          defaultsDeep(obj[key], source[key]); //递归调用，处理嵌套对象
        } else { //当obj存在source的属性时，将其复制到obj中
          obj[key] = source[key];
        }
      }
    }
  });
  return obj;
}

//示例
let res = defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
console.log(res); //{ a: { b: 1, c: 3 } }
