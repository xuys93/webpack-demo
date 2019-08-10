const path = require('path') // 这是一个node内置的路径模块

module.exports = {
    entry: './src/main', // 入口文件
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js', // 打包后的输出文件名
        path: path.resolve(__dirname, 'public') // 打包后的输入路径 __dirname  是node中的全局变量，它指向当前执行脚本所在目录。
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: 'style-loader' 
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // 监听哪个目录文件下内容
        historyApiFallback: true, //不跳转
        inline: true, //开启热更新
        port: 8090 // 端口号 默认是8080
    }
}