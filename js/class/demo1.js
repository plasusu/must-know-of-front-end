// old
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

// new
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

typeof Point  // "function"
Point === Point.prototype.constructor   // true

const p = new Point()
p.toString === Point.prototype.toString   // true

Object.keys(Point.prototype)   // []
Object.getOwnPropertyNames(Point.prototype)   // ["constructor", "toString"]
Object.keys(p)  // ["x", "y"]
Object.getOwnPropertyNames(p)   // ["x", "y"]


// constructor 函数会自动添加
class Point {}

class Point {
    constructor() {}   // 自动添加
}

// 可改变return值
class Point {
    constructor() {
        return Object.create(null)
    }
}
new Point() instanceof Point  // false

// 直接执行构造函数
function Point() {

}
new Point()
Point()

class Point {
    constructor() {}
}

Point()  // 报错


// 静态方法
class Test {
    static a () {
        this.b()
    }

    constructor(x) {
        this.x = x
    }

    b() {
        return 'asd'
    } 
}

/**
 与ES5区别
 1.prototype下的方法，在ES5是可枚举的(除了constructor)，在ES6都是不可枚举的；
 2.ES6不可以直接执行类(构造函数)，ES5可以
*/