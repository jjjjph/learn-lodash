/*
  create:创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。
  @param {Object} prototype 要继承的对象
  @param {Object} properties 待分配的属性
*/

function create(prototype, properties) {
  const result = Object.create(prototype);
  if (properties) {
    return result;
  } else {
    return Object.assign(result, properties);
  }
}

//示例
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
  this.z = 2;
}

Circle.prototype = create(Shape.prototype, {
  constructor: Circle,
});

var circle = new Circle();
console.log(circle, "circle");
console.log(circle instanceof Circle); //true
console.log(circle instanceof Array); //false


