/*
  intersectionBy:类似intersection，区别在于他接受一个iteratee
  @param {...Array} ...args 待检查的数组
  @returns {Array} 返回一个包含所有传入数组交集元素的新数组
*/

function intersectionBy(...args) {
  let length = args.length;
  const [firstArr,...res]=args
  let arr=res.flat()
  let keyit = args[length - 1];
  let iteratee;
  if (!length) {
    return;
  }
  if (typeof keyit === "string") {
    iteratee = (item) => item[keyit];
  } else {
    iteratee = keyit;
  }
  const turnArr = arr.map((item) => iteratee(item));
  const result = firstArr.filter((item) => turnArr.includes(iteratee(item)));

  return result;
}

//示例
let res = intersectionBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
console.log(res); //[{x: 1}]
