/*
  union:创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
  @param {Array} arrays 要检查的数组
  @return {Array} 返回一个联合的数组
*/

function union(...args) {
  const newarr = [];
  args.forEach((arr) => {
    arr.forEach((item) => {
      if (!newarr.includes(item)) {
        newarr.push(item);
      }
    });
  });

  return newarr;
}

const res = union([2], [1, 2], [2, 5, 4, 1]);
console.log(res); //[ 2, 1, 5, 4 ]
