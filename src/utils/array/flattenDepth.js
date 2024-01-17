/*
  flattenDepth: 根据depth来递归减少array的嵌套层级
  @params {Array} 需要展开的数组
  @params {Number} 最多减少的嵌套层级
*/

function flattenDepth(arr, depth) {
  const dep = depth === undefined ? 1 : depth;
  return arr.reduce((res, item) => {
    if (Array.isArray(item) && depth > 1) {
      return res.concat(flattenDepth(item, depth - 1));
    } else {
      return res.concat(item);
    }
  }, []);
}

//示例
let res = flattenDepth([1, [2, [3, [4]], 5]], 2);
console.log(res); //[ 1, 2, 3, [ 4 ], 5 ]
