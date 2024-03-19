/*
  merge:该方法类似_.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性
  @param {Object} object 目标对象
  @param {...Object} source 来源对象
  @return {Object} 返回改变后的目标对象
*/

function merge(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        // 如果属性是一个对象，则递归调用 merge 方法
        target[key] = merge(target[key] || {}, source[key]);
      } else if (Array.isArray(source[key])) {
        // 如果属性是一个数组，则合并数组中的对象
        if (!Array.isArray(target[key])) {
          target[key] = [];
        }
        for (let i = 0; i < source[key].length; i++) {
          if (typeof source[key][i] === "object" && source[key][i] !== null) {
            target[key][i] = merge(target[key][i] || {}, source[key][i]);
          } else {
            target[key][i] = source[key][i];
          }
        }
      } else {
        // 否则直接赋值
        target[key] = source[key];
      }
    }
  }
  return target;
}

const object = {
  a: [{ b: 2 }, { d: 4 }, { s: 1 }],
};

const other = {
  a: [{ c: 3 }, { e: 5 }],
};

const obj3 = {
  b: 'vyg',
};

console.log(merge(object, other, obj3)); //{ a: [ { b: 2, c: 3 }, { d: 4, e: 5 }, { s: 1 } ], b: 'vyg' }
