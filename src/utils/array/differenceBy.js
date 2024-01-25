/*
  differenceBy: 类似difference，区别在于接受一个itera
  @param {Array} array 要检查的数组
  @param {Array} ...args排除的值
  @param {Array|Function|Object|string} args最后一个 iteratee 调用每个元素
  @returns {Array} 返回一个过滤后的数组
*/

function differenceBy(array, ...args) {
  let exclude = args.slice(0, args.length - 1).flat();
  let keyit = args[args.length - 1];
  let iteratee;
  if (typeof keyit === "string") {
    iteratee = (item) => item[keyit];
  } else {
    iteratee = keyit;
  }
  const all = exclude.map((item) => iteratee(item));
    const result = array.filter((item) => !all.includes(iteratee(item)));
    return result;
}

//示例
// let res = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
let res = differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
console.log(res); //[ 3.1, 1.3 ]
