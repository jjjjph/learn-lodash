/*
  zip:创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
  @prama {Array} 要检查的数组
  @returns {Array} 返回分组元素的新数组
*/

function zip(...args) {
  return args[0].map((_, index) => {
    return args.map((arr) => (index < arr.length ? arr[index] : undefined));
  });
}

console.log(zip(["fred", "barney"], [30, 40], [true, false])); //[ [ 'fred', 30, true ], [ 'barney', 40, false ] ]
