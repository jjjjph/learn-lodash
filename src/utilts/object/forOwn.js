/*
  forOwn:使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历
*/
//forOwnRight:这个方法类似forOwn。 除了它是反方向开始遍历object的

function forOwn(obj,predicate){
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      predicate(obj[key],key,obj)
    }
  }
}


//示例
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;
let res=forOwn(new Foo,function(value, key) {
  console.log(key);
});
