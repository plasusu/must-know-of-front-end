
## 工厂模式
```js
function createDog(name, color) {
    var d = new Object();
    d.name = name;
    d.color = color;
    d.bark = function() {
        console.log('wang...wang...wang...');
    };
    return d;
}
var dog1 = createDog('a', 'grey');
var dog2 = createDog('b', 'black');
```
函数的思想解决**重复创建相似对象的问题**，但是无法确定对象的类型。

比如，现在Dog这个类型下面，要细分中公狗和母狗...  这个时候工厂模式就无能为力了。为了解决这个问题，构造函数模式上场了。

## 构造函数模式
```js
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.bark = function() {
        console.log('wang...wang...wang...')
    }
}
var dog1 = new Dog('a', 'grey');
var dog2 = new Dog('b', 'black');
```
首先，这里需要了解`new`操作符做了哪些事：
- 创建一个实例对象
- 把Dog函数内部的this指向new出来的实例对象
- 正常执行Dog内的每一句函数
- 到最后return这个实例对象

用代码表达就是：
```js
var o = new Object();
o.__proto__ = Dog.prototype;
Dog.call(o);
return o;
```

然后来验证下工厂模式中存在的类型问题，在这里是否得到了解决。
```js
dog1 instanceof Dog; // true
```
dog1已经被认为是Dog类型了。  
ok，工厂模式的问题已经解决了。这个时候新的问题又诞生了。  
构造函数中的方法`bark`对于每个实例而言，都做了一样的事情，但是却要重复定义`bark`函数。重复定义意味着不停地要new出一块内存空间。这是非常没有必要的。  
所以，我们需要减少这块不必要的浪费，随之而来的就是原型模式。

## 原型模式
```js
function Dog() {}
Dog.prototype.name = 'a';
Dog.prototype.color = 'grey';
Dog.prototype.bark = function() {
    console.log('wang...wang...wang...')
};

var dog1 = new Dog();
var dog2 = new Dog();
```
虽然每个实例不需要重新定义一个`bark`方法了，节省了空间。但是，每个实例在创建时都是一样的属性，缺乏了灵活性。  
另外，如果其中一个属性是引用类型（数组、对象
），那么我们在创建实例之后修改任何一个实例的该属性都会影响到另外一个实例。比如：
```js
function Dog() {}
Dog.prototype.name = 'a';
Dog.prototype.num = [1,2,3,4];
Dog.prototype.bark = function() {
    console.log('wang...wang...wang...')
};

var dog1 = new Dog();
var dog2 = new Dog();

dog1.num[2] = 0;
console.log(dog2.num); //[1,2,0,4]
```

## 组合模式
```js
function Dog(name, color) {
    this.name = color;
    this.color = color;
}

Dog.prototype.bark = function() {
    console.log('wang...wang...wang');    
}
```
完美结合构造函数模式和原型模式。

