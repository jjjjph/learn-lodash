/*
  unzip:接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
  @param {Array} arrays 要处理的分组元素的数组
  @returns {Array} 返回重组元素的新数组
*/

function unzip(...args) {
  return args.reduce((acc, subArr) => {
    subArr.forEach((item, index) => {
      acc[index] = acc[index] || [];
      acc[index].push(item);
    });
    return acc;
  }, []);
}

const res = unzip(["fred", "barney"], [30, 40], [true, false]);
console.log(res); //[ [ 'fred', 30, true ], [ 'barney', 40, false ] ]
