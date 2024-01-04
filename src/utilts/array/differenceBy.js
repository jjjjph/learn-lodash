/*
  difference: 创建一个具有唯一值的数组，每个值不包含在其他给定的数组中，返回一个新数组
  @parmas {Array} 要检查的数组
  @parmas {Array} 排除的值
  @parmas {Array|Function|Object|string} iteratee 调用每个元素
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
console.log(res);
