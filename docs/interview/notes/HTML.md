## DOCTYPE的作用

Doctype声明位于文档中的最前面，处于标签之前。目的是告知浏览器的解析器，用什么文档类型规范来解析这个文档。Doctype声明也是用于区分html和html5的方法之一。

::: tip 二者区别

HTML声明：

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

`	<html xmlns="http://www.w3.org/1999/xhtml">`

HTML5声明：

`<!Doctype html>`


:::

## H5、CSS3新特性；（至少5个）

H5:

1. 简化的文档类型声明和字符集；
2. 语义化的新标签header、stction 、footer；
3. canvas、svg、audio、video;

Css3:

1. 过渡  transition 属性有花费时间，效果曲线(默认ease)，延迟时间(默认0)复制代码
2. 动画  animation动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）复制代码
3. 变形  transform:适用于2D或3D转换的元素
   rotate(30deg);  translate(30px,30px);  scale(.8);    skew(10deg,10deg);    rotateX(180deg);   rotateY(180deg);    rotate3d(10,10,10,90deg);
4. flex布局
5. 阴影 box-shadow水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）;
6. 图片边框 border-image:

## 如何在不容分辨率的情况下加载不同的图片？

**img srcset 属性**

img 元素的 srcset 属性用于浏览器根据宽、高和像素密度来加载相应的图片资源。

属性格式：图片地址 宽度描述w 像素密度描述x，多个资源之间用逗号分隔。

```html
<img src="images/gun.png" alt="img元素srcset属性浅析"
         srcset="images/bg_star.jpg 1200w, images/share.jpg 800w, images/gun.png 320w"
         sizes="(max-width: 320px) 300w, 1200w"/>
```

**css image-set()**

css属性image-set()支持根据用户分辨率适配图像。

```css
body {
    background-image: -webkit-image-set( url(../images/pic-1.jpg) 1x, url(../images/pic-2.jpg) 2x, url(../images/pic-3.jpg) 600dpi);
    background-image:         image-set( url(../images/pic-1.jpg) 1x, url(../images/pic-2.jpg) 2x, url(../images/pic-3.jpg) 600dpi);
}
```

## meta标签

1. meta是html文档头部的一个标签，这个标签对用户不可见，是给搜索引擎看的。
2. meta标签属性用法分成两大类
3. <meta charset="UTF-8"> 使用的编码格式，大部分是utf-8

<img src="https://z3.ax1x.com/2021/07/13/WA4Dx0.png" alt="WA4Dx0.png" border="0" />


## iframe的优缺点？

::: tip 优点：

解决加载缓慢的第三方内容如图标和广告等的加载问题

Security sandbox

并行加载脚本

:::

::: warning 缺点：

iframe会阻塞主页面的Onload事件；

即时内容为空，加载也需要时间

没有语意

:::

## display和visibility的区别？

display:none 

隐藏对应的元素，文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

visibility:hidden

隐藏对应的元素，但是在文档布局中仍保留原来的空间。`

## 重绘和重排(回流)

重绘不一定需要重排，重排必然会导致重绘

重排：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。

::: tip 引起重排

- 添加、删除可见的dom
- 元素的位置改变
- 元素的尺寸改变（外边距、内边距、边框厚度、宽高等几何属性）
- 页面渲染初始化
- 浏览器窗口尺寸改变

:::

重绘：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

## flex布局

wrap-reverse 为反向

```
display:flex;
flex:1;//均分排列

1. justify-content 横轴的对齐方式 ：flex-start(默认左对其)| flex-end | center（水平居中） | space-between | space-around | space-evenly;
2. align-items 纵轴排列方式 ：flex-start （头部贴上）| flex-end | center（垂直居中） | baseline | stretch(默认充满)
3. flex-direction 控制项目排列方向与顺序 ：row 横向排列；column 纵向排列
4. flex-wrap 控制项目是否换行 ：nowrap 不换行；wrap ；

```

## script标签中async和defer的区别

**async和defer的相同点**：

::: tip 相同点

都是为了异步加载js，如果不加这两个属性，把script放在body结尾的话，js会等html先解析，才会解析js脚本，但是加了这两个属性，解析html的同时也会解析js脚本。虽然async和defer都是对js脚本异步加载，但是他俩还是有些许不同。

:::

::: tip 不同点

主要的区别是执行的时机不同，

defer会等整个页面都解析完毕之后再运行，延迟到浏览器遇到</html>标签再执行。

async如果解析完了就会执行，不能保证脚本的执行顺序，要看这个js的解析速度了，所以如果和别的脚本有依赖性或者需要操作dom最好不要用async。async一般用于百度统计、谷歌统计那些关联性不强的脚本。

:::

## 移动端适配方案

### 1、viewport适配

原理：通过设置 `initial-scale` , 将所有设备布局视口的宽度调整为设计图的宽度.

```javascript
//获取meta节点
var metaNode = document.querySelector('meta[name=viewport]');

//定义设计稿宽度为375
var designWidth = 375;

//计算当前屏幕的宽度与设计稿比例
var scale = document.documentElement.clientWidth/designWidth;

//通过设置meta元素中content的initial-scale值达到移动端适配
meta.content="initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no";
```

### 2、借助media实现rem适配

**rem**：CSS的长度单位， 根元素字体大小的倍数，只有根元素字体大小有关； html 中的根元素即 html 元素。

大部分浏览器的默认字体大小都是16px，所以1rem = 16px；

**rem适配原理**:

- 长度单位都是用 rem 设置
- 当屏幕尺寸改变时，只需要修改 html 元素的 `font-size` 即可实现等比适配
- 我们在制作页面的时候，只考虑跟设计稿相同的屏幕尺寸即可，其他尺寸屏幕自动适配

```css
//对屏幕大小划分了html不同的font-size
@media screen and (min-width: 320px) {html{font-size:50px;}}
@media screen and (min-width: 360px) {html{font-size:56.25px;}}
@media screen and (min-width: 375px) {html{font-size:58.59375px;}}
@media screen and (min-width: 400px) {html{font-size:62.5px;}}
@media screen and (min-width: 414px) {html{font-size:64.6875px;}}
@media screen and (min-width: 440px) {html{font-size:68.75px;}}
@media screen and (min-width: 480px) {html{font-size:75px;}}
@media screen and (min-width: 520px) {html{font-size:81.25px;}}
@media screen and (min-width: 560px) {html{font-size:87.5px;}}
@media screen and (min-width: 600px) {html{font-size:93.75px;}}
@media screen and (min-width: 640px) {html{font-size:100px;}}
@media screen and (min-width: 680px) {html{font-size:106.25px;}}
@media screen and (min-width: 720px) {html{font-size:112.5px;}}
@media screen and (min-width: 760px) {html{font-size:118.75px;}}
@media screen and (min-width: 800px) {html{font-size:125px;}}
@media screen and (min-width: 960px) {html{font-size:150px;}}
```

### 3、JS配合修改配合rem适配

```js
var designWidth = 375; // 设计稿宽度
var remPx = 100;   // 在屏幕宽度375px，的时候，设置根元素字体大小 100px
var scale = window.innerWidth / designWidth； 
//计算当前屏幕的宽度与设计稿比例
// 根据屏幕宽度 动态计算根元素的 字体大小
document.documentElement.style.fontSize = scale*remPx + 'px';

```

计算当前屏幕的宽度与设计稿比后用比例scale乘上100，是因为rem都是基于font-size值设置的，100便于计算，值可以为任意数，比如10，但是Chrome中最小为12，所以这里选择用100；

- 比如某个元素，设计稿设计宽度为 640px， 我们需要在css中设置 `width: 6.4rem`
- 比如某个元素，设计稿设计字体大小是 16px， 我们需要在css中设置 `font-size:0.16rem`

### 4、JS动态修改配合CSS预处理器（less）

```js
// 计算屏幕宽度
var screen = document.documentElement.clientWidth;
// 计算字体大小，取屏幕宽度的16分之一
var size = screen / 16;
// 设置根元素字体大小
document.documentElement.style.fontSize = size + 'px';

```

js获取当前屏幕的宽度，将屏幕宽度的16分之一设置给html的font-size

```less
// 此时设计稿的宽度为375，定义一个less变量等于16分之一的设计稿宽度
@rem: 375/16rem;

```

如果此时设计稿中的16可以为任意值，你设置多少，js中屏幕宽度就除于多少再赋值给html的font-size。

若设计稿中的某元素设置宽高为200px

```less
.box{
	width：200px;
    height:200px;
}
// 此时可以替换为：
.box{
	width：200/@rem;
    height:200/@rem;
}
```

此方法不需要进行单位数值的计算，只需要定义一个less变量，再查找替换将单位px换成 /@rem 即可。

### 5、JS动态修改配合rem适配

这种方法跟第四种雷同，但不需要再在less中定义变量，只需要进行js获取配合查找替换px即可。

```js
// 计算屏幕宽度
var screen = document.documentElement.clientWidth;
// 设置根元素字体大小
document.documentElement.style.fontSize = screen + 'px';
```

```css
.box{
	width：200px;
    height:200px;
}
.box{
	width：200/375rem;
    height:200/375rem;
}
```

这种方法是js动态获取屏幕宽度，直接将html的font-size设置为屏幕的宽度，再在less中进行换算。

若此时js获取的屏幕宽度为750px，html的font-size值设置为750px后，此时计算box的width为400px

```js
200/375rem = 200/375*750 px = 400px
```

