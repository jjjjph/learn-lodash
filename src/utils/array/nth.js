/*
  nth:获取数组的第n个元素，如果n为负数，则从右往左找
  @params {Array} 要查询的数组
  @params {Number} 要返回元素的索引值
*/

function nth(arr,n){
  const length=arr.length
  if(n<0){
    return arr[length+n]
  }else{
    return arr[n]
  }
}

//示例
let array=['a', 'b', 'c', 'd']
let res=nth(array, -3)
console.log(res); //b
