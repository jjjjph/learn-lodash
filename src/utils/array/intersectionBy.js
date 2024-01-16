/*
  intersectionBy:类似intersection，区别在于他接受一个iteratee
  @params {...Array} 待检查的数组
*/

function intersectionBy(...args) {
  let length = args.length;
  let firstArr = args[0];
  let arr = args.slice(1, length - 1).flat();
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
