/*
  slice: 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置
  @params {Array} 要裁剪的数组
  @params {Number} 开始的位置
  @params {Number} 结束的位置
*/


function slice(arr, start, end) {
  const length = arr.length;
  const startIdx = start===undefined ? 0 : start;
  const endIdx = end===undefined ? length : end;
  const result=[]
  for(let i=startIdx;i<endIdx;i++){
    result.push(arr[i])

  }
return result

}

//示例
let array = [1, 2, 3, 4];
let res=slice(array,1,3);
console.log(res); //[ 2, 3 ]
