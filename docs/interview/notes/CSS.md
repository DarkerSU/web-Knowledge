## 盒子模型？

IE 盒子模型：内容(content,content 部分包括border 和 padding )、边界(margin) ；

W3C 盒子模型：内容(content)、填充(padding)、边界(margin)、 边框(border)

## 水平垂直居中

定位（absolute + transform，absolute +负margin）、table、line-height、flex、grid

## 清楚浮动的几种方式

1. 浮动的产生
   float: left/right（设置后产生浮动）
   初衷：浮动原先的设计初衷是为了实现文字环绕效果
   结果：父元素高度塌陷，理解起来就是元素浮动飘起来了，失去高度，下面的元素会顶上来，就造成了原有的元素背景不见了，margin/padding也不能正常显示
2. 解决浮动的方法
   （1）clear: both，在元素最后下加一个元素设置clear：both属性，缺点是会增加多余无用的html元素

```html
<div class="container"> 
  <div class="left">left浮动</div> 
  <div class="right">right浮动</div>
  <div  style="clear:both;"></div>
</div>
```

（2）使用after伪元素
.box 父元素
.box::after {
content: ' ';
display: block;
clear: both;
}
（3）给父元素设置明确的高度，缺点是并不是所有元素的高度都是固定
（4）给父级元素设置overflow:hidden, 缺点：不能和position配合使用

## box-sizing详解

（1）content-box
宽高是元素本身的宽高 不包含border+padding

（2）border-box
元素的宽高已经包含了border+padding

（3）inherit
从父元素继承box-sizing属性

## CSS样式覆盖规则

```js
!important > 内联样式 > id选择 > （class选择 = 伪类选择） > (标签选择 = 伪元素选择)
```

## 高度坍塌

问题：相邻两个盒子垂直方向上的margin会发生重叠，只会取比较大的margin

:::tip 解决方法

（1）设置padding代替margin

（2）设置float

（3）设置overflow

（4）设置position：absolute 绝对定位

（5）设置display： inline-block

:::

## base64的原理及优缺点

1. 优点可以加密，减少了HTTTP请求
2. 缺点是需要消耗CPU进行编解码

## 流体布局、圣杯布局、双飞翼布局

#### 1、流式布局：

页面划分份数时候使用百分比，页面上各种元素的宽也都使用百分比，同时搭配 max-width、min-width使用。这种布局用于早期移动端，屏幕尺寸差异不大

缺点：页面元素宽度是百分比，但是页面的字体等元素大小是固定的px，导致屏幕如果过大的话，虽然元素被拉伸边长了，但是字体没有变大，导致页面显示非常不协调。

#### 2、圣杯布局

两侧宽度固定，中间宽度自适应的“三栏布局”

#### 3、双飞翼布局

两侧宽度固定，中间宽度自适应的“三栏布局”

## scss 中mixin函数的使用场景？

Mixin有点像C语言的宏（macro），是可以重用的代码块。 使用@include命令，调用这个mixin。

可以指定参数和缺省值，使用的时候，根据需要加入参数，例如：用来生成浏览器前缀

```
　　@mixin rounded($vert, $horz, $radius: 10px) {
　　　　border-#{$vert}-#{$horz}-radius: $radius;
　　　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
　　}
使用的时候，可以像下面这样调用：
　　#navbar li { @include rounded(top, left); }
　　#footer { @include rounded(top, left, 5px); }
```

## 清除浮动的方式?(3种)

伪类、创建父级、父级设置高度
## 宽高为100px的div行内块如何水平垂直居中？（至少两种）

定位、弹性布局、table+margin
##
