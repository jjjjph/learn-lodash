/*
  uniq:创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
  @param {Array} arr 要检查的数组
  @returns 返回去重后的数组
*/

function uniq(arr) {
  const result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

const res = uniq([2, 1, 2, 1, 3]);
console.log(res); //[ 2, 1, 3 ]
