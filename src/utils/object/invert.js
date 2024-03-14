/*
  invert:创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
  @param {Object} object 需要倒置的对象
  @return {Object} 返回新的键值倒置后的对象
*/

function invert(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  object = {};
  values.forEach((item, index) => {
    object[item] = keys[index];
  });
  return object;
}

const obj = { a: 1, b: 2, c: 1 };
console.log(invert(obj)); //{ '1': 'c', '2': 'b' }
