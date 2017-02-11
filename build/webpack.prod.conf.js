var baseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var path = require('path');

module.exports = merge(baseConfig, {
    entry: {
        app: path.resolve(__dirname, '../src/heatmap.vue'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
    },
});
