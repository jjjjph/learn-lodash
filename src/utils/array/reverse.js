/*
  reverse: 反转array,改变原数组
  @param {Array} 要反转的数组
  @returns {Arrayy} 返回反转后的数组
*/

function reverse(arr) {
  const length = arr.length;
  if (!length) {
    return;
  }

  // let left = 0;
  // let right = length - 1;

  // while (left < right) {
  //   const tempt = arr[left];
  //   arr[left] = arr[right];
  //   arr[right] = tempt;
  //   left++;
  //   right--;
  // }

  arr.reverse()
}

//示例
let array = [1, 2, 3, 4];
reverse(array);
console.log(array); //[ 4, 3, 2, 1 ]
