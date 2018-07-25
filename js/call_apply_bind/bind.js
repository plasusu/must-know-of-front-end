Function.prototype.myBind = function(context) {
    const fn = this
    const args = [...arguments].slice(1)
    return function F() {
        if (this instanceof F) {
            return new fn(...args, ...arguments)
        }
        return fn.apply(context, [...args, ...arguments])
    }
}

/**
 * demo
 */
const x = 1
const obj = {
    x: 2
}
function foo(a, b) {
    console.log(this.x + a + b)
}
foo.myBind(obj)(1, 1) // 4

const f = foo.myBind(obj)
new f(1, 1) //NaN, 因为this.x = undefined