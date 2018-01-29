上周迁移一个业务页面到weex，调试的时候发现，弹窗的蒙层点击会触发蒙层背后元素的点击事件。
![image](http://h0.hucdn.com/open/201805/c7232d5412c60cae_618x790.png)
如上图，透明色蒙层下面有个Banner区域，并且绑定了事件A，当点击蒙层上的红色点时，A事件就被触发了。

通常情况，我们会在一些dialog上加一个蒙层，“挡住”页面上杂七杂八的元素。weex的这种现象明显会被用户认为是Bug。

那么，如果避免点击穿透呢？

目前我的解决方案是，给蒙层绑定一个click事件，事件函数可以是空的。

```html
<template>
    <div>
        <div class="bannne" @click="eventA"></div>
    </div>
    
    <div class="layer" @click="eventB"></div>
</template>

<script>
    export default {
        method: {
            eventA() {
                // go to PageA
            },
            enentB() {}
        } 
    }
</script>
```
这样每次点击蒙层都会触发eventB事件，并且eventA是触发不到的。
