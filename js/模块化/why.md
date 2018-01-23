## why

### 避免命名冲突
在写业务代码的时候，我一般会提取一个utils.js的文件，里面写了很多业务中要用到的工具函数，比如打点sendLog、时间戳格式化formatTime...

然后引入到html
```
<script src="./utils.js"></script>
<script src="./index.js"></script>
```
这个时候同组的B同学接到一个需求，正好也要修改这个业务的代码，而他正好也写了一个formatTime函数在index.js里面。

很快问题就出现了。

在前端工程不断复杂化、多人协作协作过程中，很难避免命名上的冲突。

虽然之后出现了命名空间式的写法（`a.b.c.x()`），但前面一大串...着实让人不爽，也不方便记忆。

### 解决复杂的文件依赖关系
还是还原到之前的场景
```
<script src="./utils.js"></script>
<script src="./index.js"></script>
```
假如我又写了一个“回到顶部”的UI组件`toTop.js`，而这个组件的部分函数是依赖于`utils.js`中的某些工具函数。

B同事在使用`toTop.js`的时候，没有在`toTop.js`之前引入`utils.js`。这个时候问题又出现了。


