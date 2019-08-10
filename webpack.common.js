const path = require('path') // 这是一个node内置的路径模块
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/main', // 入口文件
    output: {
        filename: 'bundle-[hash].js', // 打包后的输出文件名
        path: path.resolve(__dirname, 'dist') // 打包后的输入路径 __dirname  是node中的全局变量，它指向当前执行脚本所在目录。
    },
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        maxEntrypointSize: 5000000, 
        maxAssetSize: 3000000
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
    plugins: [
        new webpack.BannerPlugin('This is xuys learn webpack plugin note.'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './layout/index.template.html')
        }),
        new CleanWebpackPlugin(),
    ]
}