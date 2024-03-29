/*
  flattenDeep:展开成一维数组的数组
  @param {Array} arr 需要展开成一维数组的数组
  @returns {Array} 返回一个新的一维数组
*/

function flattenDeep(arr) {
  return arr.reduce((res, item) => {
    if (Array.isArray(item)) {
      return res.concat(flattenDeep(item));
    } else {
      return res.concat(item);
    }
  }, []);
}

//示例
let res = flattenDeep([1, 2, [3], [4, [5, 6, [7, [8, [9]]]]]]);
console.log(res); //[1, 2, 3, 4, 5, 6, 7, 8, 9];
