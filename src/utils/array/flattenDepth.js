/*
  flattenDepth: 根据depth来递归减少array的嵌套层级
  @param {Array} arr 需要展开的数组
  @param {Number} depth 最多减少的嵌套层级
  @returns {Array} 返回减少嵌套层级后的新数组
*/

function flattenDepth(arr, depth=1) {
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
