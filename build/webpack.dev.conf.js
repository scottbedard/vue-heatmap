var baseConfig = require('./webpack.base.conf');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');

module.exports = merge(baseConfig, {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: 'src/index.html',
        }),
        new FriendlyErrorsPlugin(),
    ],
});
