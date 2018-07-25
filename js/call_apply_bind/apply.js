Function.prototype.myApply = function(context) {
    context = context || window
    context.fn = this

    let result

    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }

    delete context.fn

    return result
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
foo.myApply(obj, [1, 1]) // 4