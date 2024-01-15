/*
  fromPairs:返回一个由键值对构成的对象
  @params {Array} 键值对
*/

function fromPairs(arr) {
  if (!arr.length) {
    return [];
  }
  const result = {};
  arr.forEach(([key,value]) => {
    return (result[key] = value);
  });
  return result;
  // return Object.fromEntries(arr)

}

//示例
let res = fromPairs([
  ["fred", 30],
  ["barney", 40],
]);
console.log(res); //{ fred: 30, barney: 40 }
