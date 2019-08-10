const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production', // 设置生产环境模式
    devtool: 'source-map'
})