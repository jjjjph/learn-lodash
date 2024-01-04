/*
  at: 创建一个数组，值来自object的paths路径相对应的值
  @parmas {Abject} 要迭代的对象
  @parmas {String|String[]} 要获取对象的元素路径，单独制定或者制定在数组中
*/

function getValue(obj,path){
  const key =`${path}`.match(/\w|\$/g)
  if(key){
    return key.reduce((res,path)=>{
      console.log(res[path],'ddd');
      return res && res[path]
    },obj)
  }
}

//正则表达式\w:匹配任何单词字符（字母、数字、下划线） \$：匹配$字符
//match函数中返回匹配到的所有结果，以数字的形式返回

function at(object,...args){
  return args.reduce((acc,path)=>{
    if(Array.isArray(path)){
      return [...acc,...path.map(key=>getValue(object,key))]
    }else{
      return [...acc,getValue(object,path)]
    }
  },[])
}

//示例
let object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
let res=at(object,['a[0].b.c', 'a[1]'])
console.log(res);
