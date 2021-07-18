(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{370:function(v,_,t){"use strict";t.r(_);var s=t(42),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"hello-我是darkersu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-我是darkersu"}},[v._v("#")]),v._v(" Hello! 我是DarkerSu")]),v._v(" "),t("p",[v._v("每一个IT工程师都有着自己的Flag，我的Flag是将技术做到极致。")]),v._v(" "),t("h2",{attrs:{id:"如何做-前端工程化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何做-前端工程化"}},[v._v("#")]),v._v(' 如何做"前端工程化"？')]),v._v(" "),t("p",[v._v("前端工程化就是为了让前端开发能够“自成体系”，个人认为主要应该从"),t("strong",[v._v("模块化")]),v._v("、"),t("strong",[v._v("组件化")]),v._v("、"),t("strong",[v._v("规范化")]),v._v("、"),t("strong",[v._v("自动化")]),v._v("四个方面思考。")]),v._v(" "),t("h3",{attrs:{id:"模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[v._v("#")]),v._v(" 模块化")]),v._v(" "),t("blockquote",[t("p",[v._v("简单来说，模块化就是将一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载。")])]),v._v(" "),t("h4",{attrs:{id:"js的模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js的模块化"}},[v._v("#")]),v._v(" JS的模块化")]),v._v(" "),t("p",[v._v("在ES6之前，JavaScript没有模块系统，这对开发大型复杂的前端工程造成了巨大的障碍。对此社区制定了一些模块加载方案，如CommonJS、AMD和CMD等。")]),v._v(" "),t("p",[v._v("现在ES6已经在语言层面上规定了模块系统，完全可以取代现有的CommonJS和AMD规范，而且使用起来相当简洁，并且有静态加载的特性。")]),v._v(" "),t("ol",[t("li",[v._v("用Webpack + Babel将所有模块打包成一个文件同步加载，也可以搭乘多个chunk异步加载；")]),v._v(" "),t("li",[v._v("用System+Babel主要是分模块异步加载；")]),v._v(" "),t("li",[v._v("用浏览器的"),t("code",[v._v('<script type="module">')]),v._v("加载。")])]),v._v(" "),t("h4",{attrs:{id:"css的模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css的模块化"}},[v._v("#")]),v._v(" css的模块化")]),v._v(" "),t("p",[v._v("虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的一个重要问题：选择器的全局污染问题。")]),v._v(" "),t("p",[v._v("按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，导入一个CSS模块后，已存在的样式有被覆盖的风险。虽然重写样式是CSS的一个优势，但这并不利于多人协作。")]),v._v(" "),t("p",[v._v("为了避免全局选择器的冲突，需要制定CSS命名风格：")]),v._v(" "),t("ul",[t("li",[v._v("BEM风格")]),v._v(" "),t("li",[v._v("Bootstrap风格")]),v._v(" "),t("li",[v._v("...")])]),v._v(" "),t("p",[v._v("但是这毕竟是弱约束。")]),v._v(" "),t("p",[v._v("从工具层面，社区又创造出Shadow DOM、CSS in JS和CSS Modules三种解决方案。")]),v._v(" "),t("ul",[t("li",[v._v("Shadow DOM是WebComponents的标准。它能解决全局污染问题，但目前很多浏览器不兼容，对我们来说还很久远；")]),v._v(" "),t("li",[v._v("CSS in JS是彻底抛弃CSS，使用JS或JSON来写样式。这种方法很激进，不能利用现有的CSS技术，而且处理伪类等问题比较困难；")]),v._v(" "),t("li",[v._v("CSS Modules仍然使用CSS，只是让JS来管理依赖。它能够最大化地结合CSS生态和JS模块化能力，目前来看是最好的解决方案。Vue的scoped style也算是一种。")])]),v._v(" "),t("h4",{attrs:{id:"资源的模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源的模块化"}},[v._v("#")]),v._v(" 资源的模块化")]),v._v(" "),t("p",[v._v("Webpack的强大之处不仅仅在于它统一了JS的各种模块系统，更重要的是它的万能模块加载理念，即所有的资源都可以且也应该模块化。")]),v._v(" "),t("p",[v._v("资源模块化后，优点是：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("依赖关系单一化")]),v._v("。所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；")]),v._v(" "),t("li",[t("strong",[v._v("资源处理集成化")]),v._v("。现在可以用loader对各种资源做各种事情，比如复杂的vue-loader等等；")]),v._v(" "),t("li",[t("strong",[v._v("项目结构清晰化")]),v._v("。使用Webpack后，你的项目结构总可以表示成这样的函数： dest = webpack(src, config)。")])]),v._v(" "),t("h3",{attrs:{id:"组件化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[v._v("#")]),v._v(" 组件化")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("组件化≠模块化")]),v._v("。模块化只是在文件层面上，对代码或资源的拆分；而组件化是在设计层面上，对UI（用户界面）的拆分。")])]),v._v(" "),t("p",[v._v("页面上所有的东西都是组件。页面是个大型组件，可以拆成若干个中型组件，然后中型组件还可以再拆，拆成若干个小型组件，小型组件也可以再拆，直到拆成DOM元素为止。DOM元素可以看成是浏览器自身的组件，作为组件的基本单元。")]),v._v(" "),t("p",[v._v("传统前端框架/类库的思想是先组织DOM，然后把某些可复用的逻辑封装成组件来操作DOM，是DOM优先；而组件化框架/类库的思想是先来构思组件，然后用DOM这种基本单元结合相应逻辑来实现组件，是组件优先。这是两者本质的区别。")]),v._v(" "),t("p",[v._v("其次，组件化实际上是一种按照模板(HTML)+样式(CSS)+逻辑(JS)三位一体的形式"),t("strong",[v._v("对面向对象的进一步抽象。")])]),v._v(" "),t("p",[v._v("所以我们除了封装组件本身，还要合理处理组件之间的关系，比如 "),t("strong",[v._v("（逻辑）继承")]),v._v("、"),t("strong",[v._v("（样式）扩展")]),v._v("、"),t("strong",[v._v("（模板）嵌套")]),v._v("和"),t("strong",[v._v("包含")]),v._v("等，这些关系都可以归为"),t("strong",[v._v("依赖")]),v._v("。")]),v._v(" "),t("p",[v._v("目前市面上的组件化框架很多，主要的有Vue、React、Angular。")]),v._v(" "),t("h3",{attrs:{id:"规范化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规范化"}},[v._v("#")]),v._v(" 规范化")]),v._v(" "),t("p",[v._v("规范化其实是工程化中很重要的一个部分，项目初期规范制定的好坏会直接影响到后期的开发质量。")]),v._v(" "),t("p",[v._v("比如：")]),v._v(" "),t("p",[t("strong",[v._v("（1）目录结构的制定")])]),v._v(" "),t("p",[v._v("​    目录结构的合理设定，能为项目带来很多优点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("有助于提高项目的逻辑结构合理性；")])]),v._v(" "),t("li",[t("p",[v._v("对应扩展和合作；")])]),v._v(" "),t("li",[t("p",[v._v("方便资源的统一定位管理。")])])]),v._v(" "),t("p",[t("strong",[v._v("（2）编码规范")])]),v._v(" "),t("p",[v._v("制定一套良好的编码规范可以增强团队开发协作、提高代码质量。\n推荐参考"),t("strong",[v._v("aotu")]),v._v("打造的"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fguide.aotu.io%2Fdocs%2Findex.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端代码规范"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("p",[v._v("编码规范包括")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTML规范。")]),v._v(" "),t("p",[v._v("基于 W3C、苹果开发者 等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面HTML代码更具语义性。")])]),v._v(" "),t("li",[t("p",[v._v("CSS规范。")]),v._v(" "),t("p",[v._v("统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。")])]),v._v(" "),t("li",[t("p",[v._v("JS规范。")]),v._v(" "),t("p",[v._v("统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。")])]),v._v(" "),t("li",[t("p",[v._v("图片规范。")]),v._v(" "),t("p",[v._v("了解各种图片格式特性，根据特性制定图片规范，包括但不限于图片的质量约定、图片引入方式、图片合并处理等，旨在从图片层面优化页面性能。")])]),v._v(" "),t("li",[t("p",[v._v("命名规范。")]),v._v(" "),t("p",[v._v("从 目录、图片、HTML/CSS文件、ClassName 的命名等层面约定规范团队的命名习惯，增强团队代码的可读性。")])])]),v._v(" "),t("p",[t("strong",[v._v("（3）前后端接口规范")])]),v._v(" "),t("p",[v._v("“基于 Ajax 带来的 SPA 时代”，这种模式下，前后端的分工非常清晰，前后端的关键协作点是 Ajax 接口，引发一个重要问题：前后端的对接界面双方却关注甚少，没有任何接口约定规范情况下各自撸起袖子就是干，导致我们在产品项目开发过程中，前后端的接口联调对接工作量占比在30%-50%左右，甚至会更高。往往前后端接口联调对接及系统间的联调对接都是整个产品项目研发的软肋。")]),v._v(" "),t("p",[v._v("接口规范主要初衷就是规范约定先行，尽量避免沟通联调产生的不必要的问题，让大家身心愉快地专注于各自擅长的领域。")]),v._v(" "),t("p",[v._v("那么，对于这一SPA阶段，前后端分离有几个重要的关注挑战：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("职责分离")]),v._v(" "),t("ol",[t("li",[v._v("前后端仅仅通过异步接口(AJAX/JSONP)来编程；")]),v._v(" "),t("li",[v._v("前后端都各自有自己的开发流程，构建工具，测试集合；")]),v._v(" "),t("li",[v._v("关注点分离，前后端变得相对独立并松耦合。")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("后端")]),v._v(" "),t("th",[v._v("前端")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("提供数据")]),v._v(" "),t("td",[v._v("接收数据，返回数据")])]),v._v(" "),t("tr",[t("td",[v._v("处理业务逻辑")]),v._v(" "),t("td",[v._v("处理渲染逻辑")])])])])]),v._v(" "),t("li",[t("p",[v._v("规范原则")]),v._v(" "),t("ol",[t("li",[v._v("接口返回数据即显示，前端仅做渲染逻辑处理；")]),v._v(" "),t("li",[v._v("渲染逻辑禁止跨多个接口调用；")]),v._v(" "),t("li",[v._v("前端关注交互、渲染逻辑，尽量避免业务逻辑处理的出现；")]),v._v(" "),t("li",[v._v("请求响应传输数据格式：JSON，JSON数据尽量简单轻量，避免多级JSON的出现；")])])]),v._v(" "),t("li",[t("p",[v._v("响应格式")]),v._v(" "),t("ol",[t("li",[v._v("响应基本格式及处理状态值的规范。\n"),t("ul",[t("li",[v._v("基本响应格式")]),v._v(" "),t("li",[v._v("列表响应格式")])])]),v._v(" "),t("li",[v._v("特殊内容\n"),t("ul",[t("li",[v._v("下拉框、复选框、单选框统一由后端逻辑判定选中返回给前端展示；")]),v._v(" "),t("li",[v._v("关于Boolean类型，JSON数据传输中一律使用1/0来标示，1为是/True，0为否/False")]),v._v(" "),t("li",[v._v("关于日期类型，JSON数据传输中一律使用字符串，具体日期格式因业务而定；")])])])])])]),v._v(" "),t("p",[t("strong",[v._v("（4）文档规范")])]),v._v(" "),t("p",[t("strong",[v._v("（5）组件管理")])]),v._v(" "),t("p",[t("strong",[v._v("（6）git分支管理")])]),v._v(" "),t("p",[t("strong",[v._v("（7）commit描述规范")])]),v._v(" "),t("p",[t("strong",[v._v("（8）视觉图标规范")])]),v._v(" "),t("p",[v._v("...")]),v._v(" "),t("h3",{attrs:{id:"自动化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化"}},[v._v("#")]),v._v(" 自动化")]),v._v(" "),t("p",[v._v("前端工程化的很多脏活累活都应该交给自动化工具来完成。")]),v._v(" "),t("ul",[t("li",[v._v("图标合并")]),v._v(" "),t("li",[v._v("持续集成")]),v._v(" "),t("li",[v._v("自动化构建")]),v._v(" "),t("li",[v._v("自动化部署")]),v._v(" "),t("li",[v._v("自动化测试")])]),v._v(" "),t("h2",{attrs:{id:"ide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[v._v("#")]),v._v(" IDE")]),v._v(" "),t("blockquote",[t("p",[v._v("IDE (Integrated Development Environment，"),t("strong",[v._v("集成开发环境")]),v._v("）是含代码编辑、关键词高亮、智能感应、智能纠错、格式美化、版本管理等功能于一身的“"),t("strong",[v._v("高级代码编辑器")]),v._v("”")])]),v._v(" "),t("p",[t("strong",[v._v("每个IT工程师都要有自己趁手的IDE，它是我们的武器")])]),v._v(" "),t("p",[t("strong",[v._v("VSCode 是我日常使用编辑器")]),v._v(" 微软出品的轻量级（相对于 Visual Studio 来说）编辑器")]),v._v(" "),t("ul",[t("li",[v._v("如果你要走大牛、大咖、逼格的路线，就用 Webstorm")]),v._v(" "),t("li",[v._v("如果你走普通、屌丝、低调路线，就用 Sublime")]),v._v(" "),t("li",[v._v("如果你走小清新、个性路线，就用 VSCode 或者 Atom")]),v._v(" "),t("li",[v._v("如果你面试，最好有一个用的熟悉，其他都会一点")])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[t("strong",[v._v("最后注意")]),v._v("：千万不要说你使用 Dreamweaver 或者 notepad++ 写前端代码，会被人鄙视的。")]),v._v(" "),t("p",[v._v("如果你不做 .NET 也不要用 Visual Studio ，不做 Java 也不要用 Eclipse。")]),v._v(" "),t("p",[v._v("Dreamweaver是曾经网页制作的王牌IDE，推崇“"),t("strong",[v._v("所见即所得")]),v._v("”，用拖拽控件的方式进行网页开发。")]),v._v(" "),t("p",[v._v("但是近几年，"),t("strong",[v._v("前端开发技术、形式已经发生了根本性的变化")]),v._v(", Dreamweaver现在不是前端开发工程师的主流选择了。")])]),v._v(" "),t("h2",{attrs:{id:"visual-studio-code简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code简介"}},[v._v("#")]),v._v(" Visual Studio Code简介")]),v._v(" "),t("blockquote",[t("p",[v._v("Visual Studio Code简称VS Code，来自微软公司")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/12/29/VTeFb5C2WL8MuQd.png",alt:"image-20201229212321868"}})]),v._v(" "),t("p",[t("strong",[v._v("优点:内置功能非常丰富、插件全且安装简单、轻量、有MAC版本")])]),v._v(" "),t("h3",{attrs:{id:"vscode颜色主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode颜色主题"}},[v._v("#")]),v._v(" VSCode颜色主题")]),v._v(" "),t("ul",[t("li",[v._v("vs code提供了不同风格的颜色主题")]),v._v(" "),t("li",[v._v("在文件→首选项→颜色主题中，将主题改为Light+ (default light)")])]),v._v(" "),t("h3",{attrs:{id:"ctrl-鼠标滚轮缩放字号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ctrl-鼠标滚轮缩放字号"}},[v._v("#")]),v._v(" ctrl +鼠标滚轮缩放字号")]),v._v(" "),t("ul",[t("li",[v._v("如果能用"),t("strong",[v._v("ctrl＋鼠标滚轮缩放字号")]),v._v("，会非常方便")]),v._v(" "),t("li",[v._v("我们需要进行相关的配置，打开配置中心，搜索“滚动”即可")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/12/29/PqO53JoLysVt8um.png",alt:"image-20201229212710815"}})]),v._v(" "),t("h3",{attrs:{id:"vscode常用插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode常用插件"}},[v._v("#")]),v._v(" vscode常用插件")]),v._v(" "),t("p",[t("strong",[v._v("chinese")]),v._v(" 汉化插件")]),v._v(" "),t("p",[t("strong",[v._v("open in browser")]),v._v(" 右键打开浏览器")]),v._v(" "),t("p",[t("strong",[v._v("Live Server")]),v._v(" 开启自动刷新功能")]),v._v(" "),t("p",[t("strong",[v._v("Prettier")]),v._v(" 代码格式化 让代码的展示更加美观")]),v._v(" "),t("p",[t("strong",[v._v("vscode-icons")]),v._v(" 根据文件的后缀名来显示不同的图标")]),v._v(" "),t("p",[t("strong",[v._v("Bracket Pair Colorizer 2")]),v._v(" 以不同颜色显示成对的括号，并用连线标注括号范围。简称"),t("strong",[v._v("彩虹括号")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("CSS Peak")]),v._v(" 在HTML通过对应标签的名字快速跳转到对应的CSS")]),v._v(" "),t("p",[t("strong",[v._v("Image preview")]),v._v(" 图片预览")]),v._v(" "),t("h3",{attrs:{id:"快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[v._v("#")]),v._v(" 快捷键")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/12/29/pSZRQHgixhzTNVE.png",alt:"image-20201229212742850"}})]),v._v(" "),t("p",[t("strong",[v._v("ctrl+c")]),v._v(" 复制")]),v._v(" "),t("p",[t("strong",[v._v("ctrl+V")]),v._v(" 粘贴")]),v._v(" "),t("p",[t("strong",[v._v("ctrl+s")]),v._v(" 保存")]),v._v(" "),t("p",[t("strong",[v._v("ctrl+x")]),v._v("剪切 也可以用于删除整行")]),v._v(" "),t("p",[t("strong",[v._v("ctrl+z")]),v._v(" 返回上一步")]),v._v(" "),t("p",[t("strong",[v._v("ctrl+y")]),v._v(" 撤销返回上一步")]),v._v(" "),t("p",[t("strong",[v._v("ctrl + f")]),v._v(" 查询/替换内容")]),v._v(" "),t("p",[t("strong",[v._v("Sublime快捷键扩展")])]),v._v(" "),t("ul",[t("li",[v._v("Sublime是另外一个非常著名的编辑器，Sublime中的快捷键非常的经典，"),t("strong",[v._v("而VS Code可以集成Sublime的快捷键")])]),v._v(" "),t("li",[v._v("需要安装插件，在插件中心搜索Sublime，安装插件即可")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/12/29/tDM72wrqhW6oklO.png",alt:"image-20201229212909821"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/12/29/cpWkAjHwRidFybJ.png",alt:"image-20201229212930396"}})]),v._v(" "),t("h4",{attrs:{id:"跳转操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳转操作"}},[v._v("#")]),v._v(" 跳转操作")]),v._v(" "),t("p",[t("strong",[v._v("Cmd +Pagedown/Pageup")]),v._v(" 在已经打开的多个文件之间进行 非常实用")]),v._v(" "),t("p",[t("strong",[v._v("Ctrl + Tab")]),v._v(" 在已经打开的多个文件之间进行")]),v._v(" "),t("h4",{attrs:{id:"移动光标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动光标"}},[v._v("#")]),v._v(" 移动光标")]),v._v(" "),t("p",[t("strong",[v._v("方向键")]),v._v(" 在单个字符之间移动光标 地球人都知道")]),v._v(" "),t("p",[t("strong",[v._v("Alt＋鼠标点击任意位")]),v._v(" 在任意位置，同时出现光标")]),v._v(" "),t("p",[t("strong",[v._v("Ctrl + D")]),v._v(" 将全文中相同的词逐一加入选择")]),v._v(" "),t("h4",{attrs:{id:"工作区快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作区快捷键"}},[v._v("#")]),v._v(" 工作区快捷键")]),v._v(" "),t("p",[t("strong",[v._v("Cmd +B")]),v._v(" 显示/隐藏侧边栏 很实用")]),v._v(" "),t("p",[t("strong",[v._v("Ctrl + \\")]),v._v(" 创建多个编辑器")]),v._v(" "),t("p",[t("strong",[v._v("Cmd + Shift+N")]),v._v(" 重新开一个软件的窗口")]),v._v(" "),t("p",[t("strong",[v._v("Ctrl + W")]),v._v(" 关闭当前文件")]),v._v(" "),t("h4",{attrs:{id:"其他快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他快捷键"}},[v._v("#")]),v._v(" 其他快捷键")]),v._v(" "),t("p",[t("strong",[v._v("shift + alt + f")]),v._v(" 代码格式化快捷键")]),v._v(" "),t("p",[t("strong",[v._v("shift + alt + ↓")]),v._v(" 向下复制一份 ： 选中要复制的内容")]),v._v(" "),t("h4",{attrs:{id:"鼠标操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鼠标操作"}},[v._v("#")]),v._v(" 鼠标操作")]),v._v(" "),t("p",[v._v("在当前行的位置，鼠标三击，可以选中当前行。")]),v._v(" "),t("p",[v._v("用鼠标单击文件的"),t("strong",[v._v("行号")]),v._v("，可以选中当前行。")]),v._v(" "),t("h2",{attrs:{id:"markdown文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown文件"}},[v._v("#")]),v._v(" markdown文件")]),v._v(" "),t("p",[v._v("下载并安装 Typora 进行编写查看 .md 文件")])])}),[],!1,null,null,null);_.default=r.exports}}]);