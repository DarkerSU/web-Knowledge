> webpack是一个模块打包器（bundler）

## 五大属性

::: tip

**entry**：编译起始文件

**output**：编译结果文件输出

**loaders**：文件资源的转换

**plugins**：提供额外功能的插件

**mode**：编译模式， 生产模式production、开发者模式development


:::

## loader和plugin的区别

#### 1、功能作用

::: tip **loader**

​	由于webpack 本身只能打包commonjs规范的js文件，所以，针对css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。

​	loader虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域，完成压缩，打包，语言翻译。

​	loader是运行在NodeJS中。

仅仅是为了打包

:::

::: tip **plugin**

​	plugin完成的是loader不能完成的功能。

​	plugin也是为了扩展webpack的功能，但是 plugin 是作用于webpack本身上的。而且plugin不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。

:::

#### 2、运行时机

::: tip 

​	loader运行在打包文件之前（loader为在模块加载时的预处理文件）

​	plugins在整个编译周期都起作用。

:::

