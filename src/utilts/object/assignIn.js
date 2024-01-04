/*
  assignIn：跟assign类似，但它会便利并继承来源对象的属性
  @parmas {Object} 目标对象
  @parmas {Object} 来源对象
*/

function assign(object,...agrs){
  object={}
  return agrs.reduce((res,item)=>{
    for(let key in item){
      res[key]=item[key]
    }
    return res
  },object)
}

//示例
function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;
let obj={a:1}
let res=assign(obj, new Foo, new Bar)
console.log(res);
