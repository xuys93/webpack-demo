// webpack快速上手demo


const path = require('path') // 这是一个node内置的路径模块

module.exports = {
    entry: './src/main', // 入口文件
    output: {
        filename: 'bundle.js', // 打包后的输出文件名
        path: path.resolve(__dirname, 'public') // 打包后的输入路径 __dirname  是node中的全局变量，它指向当前执行脚本所在目录。
    }
}