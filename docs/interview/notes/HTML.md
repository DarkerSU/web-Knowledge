## DOCTYPE的作用

Doctype声明位于文档中的最前面，处于标签之前。目的是告知浏览器的解析器，用什么文档类型规范来解析这个文档。Doctype声明也是用于区分html和html5的方法之一。

::: tip 二者区别

HTML声明：

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

`	<html xmlns="http://www.w3.org/1999/xhtml">`

HTML5声明：

<!Doctype html>

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

`display:none     隐藏对应的元素，文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。`

`visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。`

## 重绘和回流

重绘：不会影响页面布局的操作。如颜色更改

回流：布局的改变导致需要重建结构，回流必然引起重绘。

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
