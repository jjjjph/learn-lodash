/*
  xor:创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
  @param {Array} args 需要检查的数组
  @returns {Array} 返回过滤后的新数组
*/

/*
  对称差异（Symmetric Difference）是集合论中的一个概念，在数学和计算机科学中经常会遇到。它表示两个集合的元素中，只出现在其中一个集合中而不同时出现在两个集合中的元素的集合。
  举个简单的例子，假设有两个集合 A 和 B：
  A = {1, 2, 3, 4}
  B = {3, 4, 5, 6}
  A 和 B 的对称差异为：
  A Δ B = {1, 2, 5, 6}
  可以看到，对称差异中包含了集合 A 和 B 中都没有的元素 1 和 2，以及只属于其中一个集合的元素 5 和 6。
  在计算机科学中，对称差异通常用于处理集合操作，例如在数据处理、数据库操作、编程中等。在编程中，通常需要实现对称差异操作来解决一些特定的问题，比如查找两个数组之间的差异或合并操作。
*/

function xor(arr1, arr2) {
  const combined = arr1.concat(arr2);
  return combined.reduce((acc, current) => {
    if (acc.includes(current)) {
      acc.splice(acc.indexOf(current), 1); // 如果当前元素已经在结果中，则删除
    } else {
      acc.push(current); // 如果当前元素不在结果中，则添加
    }
    return acc;
  }, []);
}

const res = xor([2, 1, 5], [2, 3, 5, 6]);
console.log(res); //[ 1, 3, 6 ]
