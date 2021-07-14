## webpack配置

### webpack.config.js配置

```JavaScript
const { resolve } = require('path');
module.exports = {
    entry: {
        main: './src/js/index.js',
        index2: './src/js/module1.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist/js')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    { loader: 'style-loader' }, //用于在html文档中创建一个style标签，将样式引入
                    { loader: 'css-loader' },  //将less编译的css转换成commonjs的一个模块
                    { loader: 'less-loader' } //less编译成css，但不生产单独的css文件，在内存中
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce:'pre', //提前加载使用
                use:['eslint-loader'],
            }
        ]
    },
}
```

### package.json辅助配置

#### eslint检查规则配置

```json
 "eslintConfig":{
    "parserOptions":{
      "ecmaVersion":6, //支持es6
      "sourceType":"module"  //使用es6模块化
    },
    //设置环境
    "env":{
      "brower":true, //支持浏览器环境：能够使用window上的全局变量
      "node":true,  //支持服务器环境：能够使用node上global的全局变量
    },
    //声明使用的全局变量，这样即使没有定义也不会报错
    "globals":{
      "$":"readonly" //$ 只读变量
    },
    // eslint检查的规则 0-忽略 1-警告 2-错误
    "rules":{
      "no-console":0, //不检查console
      "eqeqeq":2, //用==而不用===就报错
       "no-alert":2 //不使用alert
    },
    "extends":"eslint:recomended" //使用eslint推荐的默认规则
   }
```

