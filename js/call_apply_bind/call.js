/**
 * 实现call函数
 */
Function.prototype.myCall = function(context) {
    context = context || window
    // this指向当前函数，把当前函数挂载在新的上下文中
    context.fn = this
    // 获取当前函数的参数
    const args = [...arguments].slice(1)
    // 获取函数执行结果
    const result = context.fn(...args)
    // 删除临时挂载的属性
    delete context.fn
    // 返回执行结果
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
foo.myCall(obj, 1, 1) // 4