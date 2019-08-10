const path = require('path') // 这是一个node内置的路径模块
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main', // 入口文件
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js', // 打包后的输出文件名
        path: path.resolve(__dirname, 'dist') // 打包后的输入路径 __dirname  是node中的全局变量，它指向当前执行脚本所在目录。
    },
    module: {
        rules: [
            {
                test: /(\.css|\.less)$/,
                use: [
                    { 
                        loader: 'style-loader' 
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    { 
                        loader: 'less-loader',
                    },
                    { 
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 监听哪个目录文件下内容
        historyApiFallback: true, //不跳转
        inline: true, //开启热更新
        port: 8002, // 端口号 默认是8080
        disableHostCheck: true,
        hot: true,
    },
    plugins: [
        new webpack.BannerPlugin('This is xuys learn webpack plugin note.'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './layout/index.template.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}