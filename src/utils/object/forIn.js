/*
  forIn:使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历
  @param {Object} obj 要遍历的对象
  @param {Function} predicate 每次迭代是调用的函数
  @returns {Object} 返回obj
*/
//forInRight:这个方法类似forIn。 除了它是反方向开始遍历object的

function forIn(obj,predicate){
  for(const key in obj){
    predicate(obj[key],key,obj)
  }
}


//示例
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;
let res=forIn(new Foo,function(value, key) {
  console.log(key); //a b c
});
