const path = require('path') // 这是一个node内置的路径模块
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development', // 设置开发环境模式
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 监听哪个目录文件下内容
        historyApiFallback: true, //不跳转
        inline: true, //开启热更新
        port: 8002, // 端口号 默认是8080
        disableHostCheck: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})