/*
  zipObject:这个方法类似_.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值
  @prama {Array} props 对象的键组成的数组
  @prama {Array} values 对象的值组成的数组
  @returns {Object} 返回组成的对象
*/

function zipObject(props, values) {
  const result = {};
  props.forEach((item, index) => {
    result[item] = values[index];
  });
  return result;
}

const res = zipObject(["a", "b"], [1, 2]);
console.log(res); //{ a: 1, b: 2 }
